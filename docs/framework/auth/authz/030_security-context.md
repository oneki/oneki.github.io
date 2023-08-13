---
id: security-context
title: "Security context"
sidebar_label: "Security context"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

The security context represents the profile of the logged in user.<br/>It's usually retrieved from the backend during the authentication (via `useLoginService`) or by calling an API like `/whoami` (via `useSecurityContext`)


**Oneki.js** doesn't expect a specific format for the security context. You can put in what you want. The content of the security context is usually made of profile attributes like email, name, firstname, roles, ... 

##### Example of a security context
```javascript
{
  sub: "de1ff3d2-0710-4f7a-9dd1-4aadb7d94b57",
  email: "john.doe@example.com",
  given_name: "John",
  family_name: "Doe",
  picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  roles: ['admin', 'user']
}
```

## useSecurityContext

The security context is stored in the global state of Redux with the key `auth.securityContext` and accessible everywhere with the `useSecurityContext` hook

```javascript
const [securityContext, loading] = useSecurityContext<T>(selector, defaultValue);

// Examples:
// const [securityContext, loading] = useSecurityContext();
// const [email, loading] = useSecurityContext("email");
// const [picture, loading] = useSecurityContext("picture", "default_avatar.jpg");
```

<br/>

# Example

<Details summary={<summary>Displaying the security context</summary>}>
  <ExampleMultipleSnippet 
    values={[
      { label: 'Login', path: 'auth/SecurePage.tsx' },
    ]}
    preview={{
      path: 'auth'
    }}
  />
</Details>

### Parameters
#### Inputs
Mandatory parameters are marked with a \*

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **selector** | string | If the selector is:<ul><li>**not present**: the whole `security context` is returned</li><li>**a string**: the string is a key in the `security context`. the result is this specific entry of the `security context`</li></ul> |
| **defaultValue** | any | In case the **selector** is a string, return this value if the key doesn't exist in the `security context` |

#### Outputs

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **securityContext** | any | Return the whole `security context` or a specific entry based on the value of **selector**
| **loading**\* | boolean | loading is true if the application is currently fetching the security context from the backend


# Advanced

Here is the logic to retrieve the `security context`:

```plantuml
@startuml
!includeurl https://brunofranki.github.io/static/asciidoc-plantuml-skin.iuml
start
:useSecurityContext;
if (securityContext in global state?) then (yes)
  :return securityContext;
  stop;
else (no)
  :set loading true;
  if (userinfoEndpoint = function?) then (yes)
    :call userinfoEndpoint(); 
      note left
        delegate the fetching of
        the security context to a
        function provided in settings.js

        This function can be async
      end note
    -[dashed]->
  else (no)
    if (userinfoEndpoint = URL?) then (yes)
      :fetch security context;
      note left
        call the URL indicated in
        settings.js to fetch the
        security context
      end note      
      -[dashed]->
    else (no)
      if (token in global state?) then (yes)
        :set loading false;
        :extract security context
        from token;
        :return security context;
        stop
      else (no)
        :load token from
        persistent storage;
        if (token?) then (yes)
          :set loading false;
          :extract security context
          from token;
          note left
            The claims in the JWT token
            become the security context
          end note            
          :return security context;  
          stop     
        else (no)
          :fetch security context;
          -[dashed]->
        endif
      endif    
    endif
  endif
  :set loading false;
  if (error?) then (yes)
    :return undefined;
    stop
  else (no)
    :set security context
    in global state;
    :return security context;
    stop
  endif  
endif
@enduml
```


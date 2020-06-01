---
id: security-context
title: "Security context"
sidebar_label: "Security context"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';

The security context represents the profile of the logged-in user.<br/>It's generally fetched from the backend during the authentication (via **useLoginService**) or by calling an API like /whoami (via **useSecurityContext**)


**Oneki.js** doesn't expect a specific format for the security context. You can put in what you want. The content of the security context is generally profile attributes like email, name, firstname, roles, ... 

##### Example
```javascript
{
  id: "de1ff3d2-0710-4f7a-9dd1-4aadb7d94b57",
  email: "john.doe@example.com",
  given_name: "John",
  family_name: "Doe",
  picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  roles: ['ADMIN']
}
```

## useSecurityContext

The security context is stored in the global Redux state with the key **auth.securityContext** and accessible anywhere with the hook ***useSecurityContext***

```javascript
const [securityContext, loading] = useSecurityContext(selector, defaultValue);
```

### Parameters
#### Inputs
*Mandatory parameters are in bold*

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| selector | String \|<br/>(securityContext) => any | If the selector is:<ul><li>**null**: the whole `security context` is returned</li><li>**a string**: the string is a key in the `security context`. the result is this specific entry of the `security context`</li><li>**a function**: the function receive the whole `security context` and can return anything</li></ul> |
| defaultValue | any | In case the **selector** is a string, return this value if the key doesn't exist in the `security context` |

#### Outputs

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| securityContext | any | Return the whole `security context` or a specific entry based on the value of **selector**
| loading | boolean | loading is true if the application is currently fetching the security context from the backend

##### Snippets

```javascript
const [securityContext, loading] = useSecurityContext();
const [email, loading] = useSecurityContext("email");
const [picture, loading] = useSecurityContext("picture", "default_avatar.jpg");
const [name, loading] = useSecurityContext(securityContext => `${securityContext.given_name} ${securityContext.family_name}`);
```

## Example

This example displays the logged-in user's email in the navbar

<NextSandbox 
  name="auth/form" 
  height="700" 
  modules={['/src/component/header/LoggedUser.js']} 
/>

## Advanced

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


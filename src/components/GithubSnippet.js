import React from "react";
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import ReferenceCodeBlock from "@theme/ReferenceCodeBlock";


export const GettingStartedSnippet = ({
  path,
  craPath,
  nextPath,
  branch = "master"
}) => {
  return (
    <Tabs>
      <TabItem value="cra">
        <ReferenceCodeBlock language="tsx">
          {`https://github.com/oneki/onekijs/blob/${branch}/getting-started/cra/${craPath ? craPath : path}\n`}
        </ReferenceCodeBlock>
      </TabItem>
      <TabItem value="next">
        <ReferenceCodeBlock language="tsx">
        {`https://github.com/oneki/onekijs/blob/${branch}/getting-started/next/${nextPath ? nextPath : path}\n`}
        </ReferenceCodeBlock>        
      </TabItem>
    </Tabs>
  )
}

export const TabSnippet = ({
  path,
  craPath,
  nextPath,
  branch = "master"
}) => {
  return (
    <Tabs>
      <TabItem value="cra">
        <ReferenceCodeBlock language="tsx">
          {`https://github.com/oneki/onekijs/blob/${branch}/${craPath ? craPath : path}\n`}
        </ReferenceCodeBlock>
      </TabItem>
      <TabItem value="next">
        <ReferenceCodeBlock language="tsx">
          {`https://github.com/oneki/onekijs/blob/${branch}/${nextPath ? nextPath : path}\n`}
        </ReferenceCodeBlock>        
      </TabItem>

    </Tabs>
  )
}

export const Snippet = ({
  path,
  branch = "master"
}) => {
  return (
    <ReferenceCodeBlock language="tsx">
          {`https://github.com/oneki/onekijs/blob/${branch}/${path}\n`}
    </ReferenceCodeBlock>
  )
}

export const ExampleSnippet = ({
  path,
  branch = "master"
}) => {
  return (
    <ReferenceCodeBlock language="tsx">
          {`https://github.com/oneki/onekijs/blob/${branch}/examples/cra-examples/src/${path}\n`}
    </ReferenceCodeBlock>
  )
}




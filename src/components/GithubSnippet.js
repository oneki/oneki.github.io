import React from "react";
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import ReferenceCodeBlock from "@theme/ReferenceCodeBlock";
import ThemeTabs from "@theme/Tabs";

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
  let url = path;
  if (!path.startsWith('http')) {
    url = `https://github.com/oneki/onekijs/blob/${branch}/examples/cra-examples/src/${path}`;
  }
  return (
    <ReferenceCodeBlock language="tsx">
          {`${url}\n`}
    </ReferenceCodeBlock>
  )
}

export const ExamplePreview = ({
  path,
  height = 500,
}) => {
  let url = path;
  if (!path.startsWith('http')) {
    url = `https://examples.oneki.net/${path}`;
  }
  return (
      <iframe
        src={url}
        style={{
          width: "100%",
          height: `${height}px`,
          border: '10px solid #EEE',
          bordeRadius: "4px",
          overflow: "hidden",
        }}
        title="Example preview"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"
      />

  );
};

export const ExampleMultipleSnippet = ({
  values,
  branch = "master",
  preview
}) => {
  const tabValues = values.map(snippet => {
    return {
      label: snippet.label,
      value: snippet.label,
    }
  })
  if (preview) {
    tabValues.push({
      label: "👁 Preview",
      value: "__preview__"
    })
  }
  const tabs = values.map(snippet => (
    <TabItem value={snippet.label}>
      <ExampleSnippet path={snippet.path} branch={branch}></ExampleSnippet>
    </TabItem>
  ));
  if (preview) {
    tabs.push((<TabItem value="__preview__">
      <ExamplePreview path={preview.path} height={preview.height} />
    </TabItem>)
    );
  }

  console.log(tabValues);
  return (
    <ThemeTabs
      groupId="example-types"
      defaultValue={values[0].label}
      values={tabValues}
    >
      {tabs}


    </ThemeTabs>
  )
}
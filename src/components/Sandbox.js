import React from "react";
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';

// const Sandbox = ({
//   name,
//   height = 500,
//   modules,
//   branch = "master",
//   type = "examples",
//   view = "editor",
// }) => {
//   let url = `https://codesandbox.io/embed/github/oneki/onekijs/tree/${branch}/${type}/${name}?codemirror=1&fontsize=14&theme=dark&view=${view}`;
//   if (modules) {
//     url += "&module=";
//     modules.forEach((module, idx) => {
//       if (idx > 0) url += ",";
//       url += module;
//     });
//   }
//   const title = "onekijs-" + name.split("/").join("-");

//   return (
//     <iframe
//       src={url}
//       style={{
//         width: "100%",
//         height: `${height}px`,
//         border: 0,
//         bordeRadius: "4px",
//         overflow: "hidden",
//       }}
//       title={title}
//       allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
//       sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
//     />
//   );
// };

const Sandbox = ({
  name,
  height = 500,
  modules,
  branch = "master",
  type = "examples",
  view = "editor",
}) => {
  const step = name.split('-')[0];
  const iframeUrl = `https://oneki-gs-vite-${step}.surge.sh/`;
  let url = `https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/${branch}/${type}/${name}?codemirror=1&fontsize=14&theme=dark&view=${view}`;
  if (modules) {
    url += "&module=";
    modules.forEach((module, idx) => {
      if (idx > 0) url += ",";
      url += module;
    });
  }
  const title = "onekijs-" + name.split("/").join("-");

  const githubUrl = `https://github.com/oneki/onekijs/tree/${branch}/${type}/${name}`;

  let divLinkStyle = {
    textAlign: "center",
  }
  
  return (
    <>
      
      <iframe
        src={iframeUrl}
        style={{
          width: "100%",
          height: `${height}px`,
          border: '10px solid #EEE',
          bordeRadius: "4px",
          overflow: "hidden",
        }}
        title={title}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <div style={divLinkStyle}><a href={url} target="_blank">Open in CodeSandbox</a> | <a href={githubUrl} target="_blank">View code on GitHub</a></div>
    </>
  );
};

export const SandboxExampleButton = ({ name }) => {
  return (
    <div style={{ textAlign: "right" }}>
      <a
        href={`https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/${name}`}
        target="_blank"
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: "32px",
          padding: "0px 12px",
          fontSize: "13px",
          fontWeight: 500,
          color: "rgb(255, 255, 255)",
          backgroundColor: "#2196f3",
          borderRadius: "4px",
          textDecoration: "none",
          cursor: "pointer",
          marginBottom: "2px",
        }}
      >
        Open in Codesandbox
      </a>
    </div>
  );
};

export const GettingStartedSandbox = ({  
    name,
    modules,
    craName,
    craModules,
    nextName,
    nextModules,
    height = 600,
    branch = "master"
  }) => {
  return (
    <Tabs>
      <TabItem value="cra">
        <Sandbox
          name={craName ? craName : name}
          type="getting-started/cra"
          view="preview"
          branch={branch}
          height={height}
          modules={craModules ? craModules : modules}
        />
      </TabItem>
      <TabItem value="next">
        <Sandbox
          name={nextName ? nextName : name}
          type="getting-started/next"
          view="preview"
          branch={branch}
          height={height}
          modules={nextModules ? nextModules : modules}
        />
      </TabItem>
    </Tabs>
  );
};

export default Sandbox;

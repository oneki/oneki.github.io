import React from "react";

const Sandbox = ({
  name,
  height = 500,
  modules,
  branch = "master",
  type = "examples",
  view = "editor",
}) => {
  let url = `https://codesandbox.io/embed/github/oneki/onekijs/tree/${branch}/${type}/${name}?codemirror=1&fontsize=14&theme=dark&view=${view}`;
  if (modules) {
    url += "&module=";
    modules.forEach((module, idx) => {
      if (idx > 0) url += ",";
      url += module;
    });
  }
  const title = "onekijs-" + name.split("/").join("-");

  return (
    <iframe
      src={url}
      style={{
        width: "100%",
        height: `${height}px`,
        border: 0,
        bordeRadius: "4px",
        overflow: "hidden",
      }}
      title={title}
      allow="geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  );
};

export const SandboxExampleButton = ({ name }) => {
  return (
    <div style={{ textAlign: 'right' }}>
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

export default Sandbox;

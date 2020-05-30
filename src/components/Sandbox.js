import React from 'react';

const Sandbox = ({type, name, height=500, modules}) => {
  let url = `https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/${type}/${name}?codemirror=1&fontsize=14&theme=dark&view=editor`;
  if (modules) {
    url += "&module=";
     modules.forEach((module, idx) => {
      if (idx > 0) url += ",";
      url += module
    })
  }
  const title = "onekijs-" + name.split('/').join('-');
  
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

export default Sandbox;
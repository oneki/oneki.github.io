import React from 'react';
import { SandboxExampleButton } from "./Sandbox"
import Details from "@theme/Details"
import ReferenceCodeBlock from "@theme/ReferenceCodeBlock";

// export const Details = ({ title, children }) => {
//   return (
// <details>
//   <summary>{title}</summary>
//   <div>{children}</div>
// </details>
//   )
// }

const GenericDetails = ({ title, path, file, children }) => {
  return ( 
    <Details summary={<summary>{title}</summary>}>
      <div>
        {children}

        <SandboxExampleButton name={path} />
       
        <ReferenceCodeBlock language="tsx">
        {`https://github.com/oneki/onekijs/blob/master/${path}/${file}\n`}
        </ReferenceCodeBlock>
      </div>
    </Details>
  )
}

export const ExampleDetails = ({ title, folder, file, children }) => {
  return <GenericDetails title={title} path={`examples/${folder}`} file={file} children={children} />
}

export const GettingStartedDetails = ({ title, folder, file, children }) => {
  return <GenericDetails title={title} path={`getting-started/${folder}`} file={file} children={children} />
}


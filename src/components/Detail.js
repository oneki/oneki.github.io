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

export const ExampleDetails = ({ title, folder, file, children }) => {
  return ( 
    <Details summary={<summary>{title}</summary>}>
      <div>
        {children}

        <SandboxExampleButton name={folder} />
       
        <ReferenceCodeBlock language="tsx">
        {`https://github.com/oneki/onekijs/blob/master/examples/${folder}/${file}\n`}
        </ReferenceCodeBlock>
      </div>
    </Details>
  )
}
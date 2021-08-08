import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default ({ children }) => {
  console.log("children", children);
  return (
    <Tabs
      groupId="application-types"
      defaultValue="cra"
      values={[
        { label: "Create React App", value: "cra" },
        { label: "Nextjs App", value: "next" },
      ]}
    >
      {children}
    </Tabs>
  );
};

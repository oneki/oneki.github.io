import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default ({ children }) => {
  console.log("children", children);
  return (
    <Tabs
      defaultValue="next"
      values={[
        { label: "Nextjs App", value: "next" },
        { label: "Create React App", value: "cra" },
      ]}
    >
      {children}
    </Tabs>
  );
};

import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default ({ children }) => {
  return (
    <Tabs
      groupId="application-types"
      defaultValue="cra"
      values={[
        { label: "Vite App", value: "cra" },
        { label: "Nextjs App", value: "next" },
      ]}
    >
      {children}
    </Tabs>
  );
};

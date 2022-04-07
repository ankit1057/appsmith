import { BranchListItem } from "./BranchListItem";
import React from "react";

export function RemoteBranchListItem({ branch, className, onClick }: any) {
  return (
    <BranchListItem
      active={false}
      branch={branch}
      className={className}
      hovered={false}
      isDefault={false}
      key={branch}
      onClick={onClick}
      shouldScrollIntoView={false}
    />
  );
}

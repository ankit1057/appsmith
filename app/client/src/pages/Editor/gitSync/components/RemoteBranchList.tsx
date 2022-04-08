import SegmentHeader from "components/ads/ListSegmentHeader";
import { RemoteBranchListItem } from "./RemoteBranchListItem";
import React from "react";

/**
 * RemoteBranchList: returns a list of remote branches
 * @param remoteBranches {string[]} array of remote branch names
 * @param switchBranch {(branch: string) => void} dispatches ReduxActionTypes.SWITCH_GIT_BRANCH_INIT
 */
export function RemoteBranchList(
  remoteBranches: string[],
  switchBranch: (branch: string) => void,
) {
  return (
    <div data-testid="t--git-remote-branch-list-container">
      {remoteBranches?.length > 0 && (
        <SegmentHeader hideStyledHr title={"Remote branches"} />
      )}
      {remoteBranches.map((branch: string) => (
        <RemoteBranchListItem
          branch={branch}
          className="t--branch-item"
          key={branch}
          onClick={() => switchBranch(branch)}
        />
      ))}
    </div>
  );
}

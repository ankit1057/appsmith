export const getIsStartingWithRemoteBranches = (
  local: string,
  remote: string,
) => {
  const remotePrefix = "origin/";

  return (
    local &&
    !local.startsWith(remotePrefix) &&
    remote &&
    remote.startsWith(remotePrefix)
  );
};

const GIT_REMOTE_URL_PATTERN = /^((git|ssh)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:\/\-~]+)(\.git)$/im;

const gitRemoteUrlRegExp = new RegExp(GIT_REMOTE_URL_PATTERN);

export const isValidGitRemoteUrl = (url: string) =>
  gitRemoteUrlRegExp.test(url);

export const isRemoteBranch = (name: string) => name.startsWith("origin/");
export const isLocalBranch = (name: string) => !isRemoteBranch(name);

const vscode = require('vscode');

function checkGitStatus(statusBarItem) {
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const api = gitExtension?.getAPI(1);

    if (api) {
        const repo = api.repositories[0]; // Assuming single repository
        const ahead = repo.state.HEAD?.ahead || 0;
        const behind = repo.state.HEAD?.behind || 0;

        statusBarItem.text = `Git: Ahead ${ahead}, Behind ${behind}`;
    }
}

module.exports = {
    checkGitStatus
};

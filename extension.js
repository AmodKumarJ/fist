const vscode = require('vscode');
const { checkGitStatus } = require('./gitIntegration'); // Import the Git integration logic
const { fetchGitHubContributions } = require('./contributionFetcher'); // Import contribution fetching logic

function activate(context) {
    console.log('Congratulations, your extension "Amod" is now active!');

    // Register the command to show contribution stats
    let disposable = vscode.commands.registerCommand('git.contribution', function () {
        const currentDate = new Date().toLocaleDateString();
        vscode.window.showInformationMessage(`Today's date is: ${currentDate}`);

        // Fetch GitHub contributions (if token and username are provided)
        const username = 'your-github-username';  // Replace with actual username
        const token = 'your-personal-access-token'; // Replace with actual token
        fetchGitHubContributions(username, token);
    });

    context.subscriptions.push(disposable);

    // Set up status bar to monitor Git status
    let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = `Git: Monitoring...`;
    statusBarItem.show();
    
    vscode.workspace.onDidChangeTextDocument(() => {
        checkGitStatus(statusBarItem);
    });

    checkGitStatus(statusBarItem);
}

function deactivate() {
    console.log('Extension is deactivated');
}

module.exports = {
    activate,
    deactivate
};

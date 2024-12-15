const vscode = require('vscode');

// Function to create the Webview panel with the contribution stats
function showWebviewPanel() {
    const panel = vscode.window.createWebviewPanel(
        'contributionStats', // Internal identifier for the panel
        'Contribution Stats', // Title of the Webview
        vscode.ViewColumn.One, // Column to display the Webview
        {
            enableScripts: true // Allow JS execution in the Webview
        }
    );

    // Set Webview content
    panel.webview.html = getWebviewContent();
}

// Function to generate HTML content for the Webview
function getWebviewContent() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contribution Stats</title>
        </head>
        <body>
            <h1>Contribution Stats</h1>
            <p>Recent Commits: 5</p>
            <p>Unpushed Commits: 2</p>
        </body>
        </html>
    `;
}

module.exports = {
    showWebviewPanel
};

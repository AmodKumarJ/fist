const axios = require('axios');
const vscode = require('vscode');
// Fetch GitHub contributions via REST API
async function fetchGitHubContributions(username, token) {
    const url = `https://api.github.com/users/${username}/events`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Process and display the data in a suitable format
        const events = response.data;
        const pushEvents = events.filter(event => event.type === 'PushEvent');
        const commitCount = pushEvents.length;

        vscode.window.showInformationMessage(`You have ${commitCount} recent commits.`);
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to fetch GitHub contributions: ${error.message}`);
    }
}

module.exports = {
    fetchGitHubContributions
};

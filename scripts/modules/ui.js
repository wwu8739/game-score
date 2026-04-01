export function renderStatus(message) {
  const statusEl = document.querySelector('#status');
  statusEl.textContent = message;
}

export function renderLeaderboard(scores) {
  const leaderboardEl = document.querySelector('#leaderboard');

  if (!scores || scores.length === 0) {
    leaderboardEl.innerHTML = '<p>No scores yet.</p>';
    return;
  }

  const items = scores
    .map((entry, index) => `<li>${index + 1}. ${entry.playerName} - ${entry.score}</li>`)
    .join('');

  leaderboardEl.innerHTML = `<ol>${items}</ol>`;
}

export function renderDebugLog(message) {
  const debugEl = document.querySelector('#debug-log');
  debugEl.textContent = message;
}

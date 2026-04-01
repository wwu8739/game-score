const leaderboard = [];

export function addToLeaderboard(playerName, score) {
  leaderboard.push({ playerName, score });
  leaderboard.sort((a, b) => b.score - a.score);
}

export function getLeaderboard() {
  return leaderboard;
}

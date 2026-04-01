import { addToLeaderboard } from './leaderboard.js';

export function recordHighScore(playerName, score) {
  addToLeaderboard(playerName, score);
}

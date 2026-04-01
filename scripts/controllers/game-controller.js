import { initializeSession, savePlayer, resetSession, getSessionData } from '../modules/game-session.js';
import { recordHighScore } from '../modules/score-manager.js';
import { getLeaderboard } from '../modules/leaderboard.js';
import { renderStatus, renderLeaderboard, renderDebugLog } from '../modules/ui.js';
import { logAction } from '../modules/utils.js';

const PLAYER_NAME = 'Wansheng Wu';
const HIGH_SCORE = 999;

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  renderDebugLog('DOMContentLoaded fired');

  initializeSession();
  renderStatus('Session initialized. Ready.');
  logAction('Session initialized');

  const savePlayerBtn = document.querySelector('#save-player-btn');
  const recordScoreBtn = document.querySelector('#record-score-btn');
  const resetGameBtn = document.querySelector('#reset-game-btn');
  const viewLeaderboardBtn = document.querySelector('#view-leaderboard-btn');

  savePlayerBtn.addEventListener('click', () => {
    console.log('Save Player clicked');
    savePlayer(PLAYER_NAME);
    renderStatus(`Player saved as ${PLAYER_NAME}.`);
    renderDebugLog(`Saved player: ${PLAYER_NAME}`);
    logAction(`Saved player ${PLAYER_NAME}`);
  });

  recordScoreBtn.addEventListener('click', () => {
    console.log('Record High Score clicked');
    recordHighScore(PLAYER_NAME, HIGH_SCORE);
    renderStatus(`High score recorded for ${PLAYER_NAME}: ${HIGH_SCORE}`);
    renderDebugLog(`Recorded score ${HIGH_SCORE} for ${PLAYER_NAME}`);
    logAction(`Recorded high score for ${PLAYER_NAME}`);
  });

  resetGameBtn.addEventListener('click', () => {
    console.log('Reset Game clicked');
    resetSession();
    renderStatus('Game session reset.');
    renderLeaderboard([]);
    renderDebugLog('Session reset and leaderboard cleared from screen');
    logAction('Game reset');
  });

  viewLeaderboardBtn.addEventListener('click', () => {
    console.log('View Leaderboard clicked');
    const scores = getLeaderboard();
    renderLeaderboard(scores);
    renderStatus('Leaderboard displayed.');
    renderDebugLog(`Leaderboard loaded with ${scores.length} entries`);
    logAction('Viewed leaderboard');
  });

  const sessionData = getSessionData();
  renderDebugLog(`Initial session data: ${JSON.stringify(sessionData, null, 2)}`);
});

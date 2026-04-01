let session = {
  playerName: '',
  initialized: false
};

export function initializeSession() {
  session.initialized = true;
}

export function savePlayer(name) {
  session.playerName = name;
}

export function resetSession() {
  session = {
    playerName: '',
    initialized: false
  };
}

export function getSessionData() {
  return session;
}

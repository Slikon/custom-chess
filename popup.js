// Popup script to handle the on/off toggle
(function() {
  'use strict';

  const enableToggle = document.getElementById('enableToggle');
  const statusText = document.getElementById('statusText');

  // Load the current state when popup opens
  chrome.storage.sync.get(['customPiecesEnabled'], function(result) {
    // Default to enabled (true) if not set
    const isEnabled = result.customPiecesEnabled !== undefined ? result.customPiecesEnabled : true;
    enableToggle.checked = isEnabled;
    updateStatusText(isEnabled);
  });

  // Listen for toggle changes
  enableToggle.addEventListener('change', function() {
    const isEnabled = enableToggle.checked;
    
    // Save the state
    chrome.storage.sync.set({ customPiecesEnabled: isEnabled }, function() {
      updateStatusText(isEnabled);
      
      // Send message to all Chess.com tabs to update
      chrome.tabs.query({ url: '*://*.chess.com/*' }, function(tabs) {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, {
            action: 'toggleCustomPieces',
            enabled: isEnabled
          }).catch(err => {
            // Ignore errors for tabs that aren't ready
            console.log('Could not send message to tab:', err);
          });
        });
      });
    });
  });

  // Update the status text
  function updateStatusText(isEnabled) {
    statusText.textContent = isEnabled ? 'ON' : 'OFF';
    statusText.className = 'status-text ' + (isEnabled ? 'status-on' : 'status-off');
  }
})();


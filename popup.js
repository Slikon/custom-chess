// Popup script to handle the on/off toggle and collection selection
(function() {
  'use strict';

  const enableToggle = document.getElementById('enableToggle');
  const statusText = document.getElementById('statusText');
  const collectionSelect = document.getElementById('collectionSelect');

  // Populate collection options
  function populateCollections() {
    collectionSelect.innerHTML = '';
    COLLECTIONS.forEach(collection => {
      const option = document.createElement('option');
      option.value = collection.id;
      option.textContent = collection.name;
      collectionSelect.appendChild(option);
    });
  }

  // Load the current state when popup opens
  chrome.storage.sync.get(['customPiecesEnabled', 'selectedCollection'], function(result) {
    // Default to enabled (true) if not set
    const isEnabled = result.customPiecesEnabled !== undefined ? result.customPiecesEnabled : true;
    const selectedCollection = result.selectedCollection || DEFAULT_COLLECTION;
    
    enableToggle.checked = isEnabled;
    updateStatusText(isEnabled);
    
    // Populate and set collection
    populateCollections();
    collectionSelect.value = selectedCollection;
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

  // Listen for collection changes
  collectionSelect.addEventListener('change', function() {
    const selectedCollection = collectionSelect.value;
    
    // Save the selected collection
    chrome.storage.sync.set({ selectedCollection: selectedCollection }, function() {
      console.log('Collection changed to:', selectedCollection);
      
      // Send message to all Chess.com tabs to update collection
      chrome.tabs.query({ url: '*://*.chess.com/*' }, function(tabs) {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, {
            action: 'changeCollection',
            collection: selectedCollection
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


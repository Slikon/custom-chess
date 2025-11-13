// Content script to customize Chess.com pieces
(function() {
  'use strict';

  // Function to inject custom CSS for black pawns
  function injectCustomPiecesStyles() {
    // Get the URL of the custom pawn image from the extension
    const customBlackPawnUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/black/bp.png`);
    const customWhitePawnUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/white/wp.png`);
    
    // Create a style element
    const style = document.createElement('style');
    style.id = 'chess-piece-customizer';
    
    // Define CSS to override black pawn styling
    style.textContent = `
      .piece.bp {
        background-image: url('${customBlackPawnUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.wp {
        background-image: url('${customWhitePawnUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
    `;
    
    // Inject the style into the page
    document.head.appendChild(style);
    
    console.log('Chess Piece Customizer: Pieces styles injected');
  }

  // Wait for DOM to be ready and inject the styles
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCustomPiecesStyles);
  } else {
    // DOM is already ready
    injectCustomPiecesStyles();
  }
})();


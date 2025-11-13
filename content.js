// Content script to customize Chess.com pieces
(function() {
  'use strict';

  // Function to inject custom CSS for black pawns
  function injectCustomPieceStyle() {
    // Get the URL of the custom pawn image from the extension
    const customPawnUrl = chrome.runtime.getURL('bp.png');
    
    // Create a style element
    const style = document.createElement('style');
    style.id = 'chess-piece-customizer';
    
    // Define CSS to override black pawn styling
    style.textContent = `
      .piece.bp {
        background-image: url('${customPawnUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
    `;
    
    // Inject the style into the page
    document.head.appendChild(style);
    
    console.log('Chess Piece Customizer: Black pawn styling injected');
  }

  // Wait for DOM to be ready and inject the styles
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCustomPieceStyle);
  } else {
    // DOM is already ready
    injectCustomPieceStyle();
  }
})();


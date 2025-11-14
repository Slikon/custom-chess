// Content script to customize Chess.com pieces
(function() {
  'use strict';

  // Function to inject custom CSS for black pawns
  function injectCustomPiecesStyles() {
    // Get the URL of the custom pawn image from the extension
    const customBlackPawnUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/black/bp.png`);
    const customWhitePawnUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/white/wp.png`);
    const customWhiteRookUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/white/wr.png`);
    const customWhiteKnightUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/white/wn.png`);
    const customWhiteBishopUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/white/wb.png`);
    const customWhiteQueenUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/white/wq.png`);
    const customWhiteKingUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/white/wk.png`);
    const customBlackRookUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/black/br.png`);
    const customBlackKnightUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/black/bn.png`);
    const customBlackBishopUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/black/bb.png`);
    const customBlackQueenUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/black/bq.png`);
    const customBlackKingUrl = chrome.runtime.getURL(`collections/${SELECTED_COLLECTION}/black/bk.png`);
    
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
      .piece.br {
        background-image: url('${customBlackRookUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.bn {
        background-image: url('${customBlackKnightUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.bb {
        background-image: url('${customBlackBishopUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.bq {
        background-image: url('${customBlackQueenUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.bk {
        background-image: url('${customBlackKingUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.wn {
        background-image: url('${customWhiteKnightUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.wb {
        background-image: url('${customWhiteBishopUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.wq {
        background-image: url('${customWhiteQueenUrl}') !important;
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      .piece.wk {
        background-image: url('${customWhiteKingUrl}') !important;
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
      .piece.wr {
        background-image: url('${customWhiteRookUrl}') !important;
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


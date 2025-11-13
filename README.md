# Chess Piece Customizer - Chrome Extension

A Chrome extension that allows you to customize chess pieces on Chess.com. This proof-of-concept replaces black pawns with a custom image.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top right)
3. Click **Load unpacked**
4. Select the `custom-chess` folder
5. The extension should now be loaded and active

## Testing

1. Navigate to [Chess.com](https://www.chess.com)
2. Start a game (Play vs Computer or any other game mode)
3. Observe that black pawns now display your custom image from `bp.png`

## How It Works

The extension uses a content script (`content.js`) that:
- Runs on all Chess.com pages
- Injects custom CSS to override the default black pawn styling
- Replaces the background-image of elements with class `.piece.bp` with the custom `bp.png` image

### Technical Details

- **Manifest Version**: 3
- **Target Site**: Chess.com (all subdomains)
- **Content Script**: Runs at `document_end` to ensure DOM is ready
- **Web Accessible Resources**: Makes `bp.png` available to the content script

### File Structure

```
custom-chess/
├── manifest.json       # Extension configuration
├── content.js          # Content script that injects custom CSS
├── bp.png             # Custom black pawn image
└── icons/             # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Extending the Extension

To customize other pieces:

1. Add more PNG images to the root directory (e.g., `wp.png` for white pawn, `br.png` for black rook)
2. Update `content.js` to include CSS overrides for additional piece classes:
   - `wp` - White Pawn
   - `bp` - Black Pawn
   - `wr` - White Rook
   - `br` - Black Rook
   - `wn` - White Knight
   - `bn` - Black Knight
   - `wb` - White Bishop
   - `bb` - Black Bishop
   - `wq` - White Queen
   - `bq` - Black Queen
   - `wk` - White King
   - `bk` - Black King

3. Add the new images to `web_accessible_resources` in `manifest.json`

## Browser Compatibility

This extension is designed for Google Chrome using Manifest V3. It should also work in other Chromium-based browsers (Edge, Brave, Opera) with minimal or no modifications.


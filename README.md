# Chess Piece Customizer - Chrome Extension

A Chrome extension that allows you to customize all chess pieces on Chess.com with themed collections. Features multiple piece sets and an easy on/off toggle.

## 🚀 Quick Start

### Installation

1. **Download or clone this repository** to your local machine
2. Open your Chrome browser and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right corner)
4. Click **Load unpacked**
5. Select the `custom-chess` folder
6. The extension icon should now appear in your browser toolbar

### Using the Extension

1. **Navigate to [Chess.com](https://www.chess.com)** and start any game
2. **Click the extension icon** in your browser toolbar to open the control panel
3. **Toggle the switch** to enable or disable custom pieces
4. **Refresh the page** if pieces don't change immediately

The extension will remember your preference and automatically apply your custom pieces when enabled.

## ✨ Features

- **Complete piece customization** - All 12 chess pieces (white and black) can be customized
- **Themed collections** - Organized piece sets (currently includes Warcraft III theme)
- **Easy toggle control** - Enable or disable custom pieces with one click via popup
- **Persistent settings** - Your preferences are saved across browsing sessions
- **Real-time updates** - Changes apply immediately to all open Chess.com tabs

## 📁 Project Structure

```
custom-chess/
├── manifest.json           # Extension configuration and permissions
├── config.js               # Collection settings (which theme is active)
├── content.js              # Main script that injects custom CSS for pieces
├── popup.html              # Extension popup interface
├── popup.js                # Popup functionality and toggle logic
├── popup.css               # Popup styling
├── collections/            # Themed piece collections
│   ├── warcraft3/          # Warcraft III themed pieces
│   │   ├── black/          # Black pieces (bp, br, bn, bb, bq, bk)
│   │   │   ├── bp.png
│   │   │   ├── br.png
│   │   │   ├── bn.png
│   │   │   ├── bb.png
│   │   │   ├── bq.png
│   │   │   └── bk.png
│   │   └── white/          # White pieces (wp, wr, wn, wb, wq, wk)
│   │       ├── wp.png
│   │       ├── wr.png
│   │       ├── wn.png
│   │       ├── wb.png
│   │       ├── wq.png
│   │       └── wk.png
└── icons/                  # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## 🎨 Creating Your Own Collection

Want to add your own custom chess pieces? Here's how:

### 1. Create Your Collection Folder

Create a new folder inside `collections/` with your theme name:
```
collections/
└── your-theme-name/
    ├── black/
    └── white/
```

### 2. Add Your Piece Images

Create PNG images for all 12 pieces with these exact filenames:

**Black pieces** (in `black/` folder):
- `bp.png` - Black Pawn
- `br.png` - Black Rook
- `bn.png` - Black Knight
- `bb.png` - Black Bishop
- `bq.png` - Black Queen
- `bk.png` - Black King

**White pieces** (in `white/` folder):
- `wp.png` - White Pawn
- `wr.png` - White Rook
- `wn.png` - White Knight
- `wb.png` - White Bishop
- `wq.png` - White Queen
- `wk.png` - White King

**Image Requirements:**
- Format: PNG (supports transparency)
- Recommended size: 256x256 pixels or larger
- Square aspect ratio works best
- Transparent background recommended

### 3. Update Configuration

Edit `config.js` to add your new collection:

```javascript
const COLLECTIONS = [
    'warcraft3',
    'your-theme-name',  // Add your collection name here
];

const SELECTED_COLLECTION = COLLECTIONS[1];  // Change index to select your theme
```

### 4. Reload the Extension

1. Go to `chrome://extensions/`
2. Click the **Reload** button under the Chess Piece Customizer extension
3. Visit Chess.com and toggle the extension to see your custom pieces!

## 🔧 Technical Details

### How It Works

The extension operates by:
1. Running a content script on all Chess.com pages
2. Injecting custom CSS that overrides the default piece images
3. Using `!important` rules to ensure custom styles take precedence
4. Responding to toggle messages from the popup to enable/disable customization

### Chess.com Piece Classes

Chess.com uses the following CSS classes for pieces:
- `wp` - White Pawn
- `wr` - White Rook  
- `wn` - White Knight
- `wb` - White Bishop
- `wq` - White Queen
- `wk` - White King
- `bp` - Black Pawn
- `br` - Black Rook
- `bn` - Black Knight
- `bb` - Black Bishop
- `bq` - Black Queen
- `bk` - Black King

The extension targets elements with class `.piece.[piece-code]` and overrides their `background-image` property.

### Permissions

- **storage**: Saves your enable/disable preference
- **host_permissions**: Allows the extension to run on Chess.com domains
- **web_accessible_resources**: Makes collection images accessible to the content script

## 🌐 Browser Compatibility

This extension uses **Manifest V3** and is designed for:
- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge (Chromium-based)
- ✅ Brave Browser
- ✅ Opera (Chromium-based)
- ✅ Other Chromium-based browsers

## 📝 Notes

- Custom pieces only appear on Chess.com when the extension is enabled
- The extension must remain installed and enabled for custom pieces to work
- If pieces don't update immediately, try refreshing the Chess.com page
- Multiple collections are supported, but only one can be active at a time (configured in `config.js`)

## 🤝 Contributing

Feel free to create your own themed collections and share them! The modular collection system makes it easy to add new piece sets without modifying core extension code.

## 📄 License

This project is open source and available for personal and educational use.


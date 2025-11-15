# This doc is a short guide on how to create your own custom chess pieces

## Generating a piece
**Important:** Each piece is a .png file with **transparent** background

### Piece file creation
1. I've used image generation model from Google to generate a raw image of the piece: [link](https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image) 
2. To make the background transparent (remove it) I've used [remove.bg](https://remove.bg)
3. To crop and resize the image I've used [Online Image Editor](https://www.online-image-editor.com/)


## Creating a New Collection

### Step 1: Create the collection directory structure

1. Navigate to the `collections/` folder in the project root
2. Create a new folder with your collection name (use lowercase and hyphens, e.g., `my-collection`)
3. Inside your collection folder, create two subdirectories:
   - `black/` - for black pieces
   - `white/` - for white pieces

**Example structure:**
```
collections/
  └── my-collection/
      ├── black/
      └── white/
```

### Step 2: Add piece images

You need to create **12 PNG files total** (6 for each color) with transparent backgrounds:

**Black pieces (in `black/` folder):**
- `bp.png` - Black Pawn
- `br.png` - Black Rook
- `bn.png` - Black Knight
- `bb.png` - Black Bishop
- `bq.png` - Black Queen
- `bk.png` - Black King

**White pieces (in `white/` folder):**
- `wp.png` - White Pawn
- `wr.png` - White Rook
- `wn.png` - White Knight
- `wb.png` - White Bishop
- `wq.png` - White Queen
- `wk.png` - White King

**Important notes:**
- All files MUST be PNG format with transparent backgrounds
- File names are case-sensitive and must match exactly
- Make sure the pieces are centered in the image

### Step 3: Update the config file

Open `config.js` in the project root and add your collection to the COLLECTIONS array:

```javascript
const COLLECTIONS = [
    { id: 'warcraft', name: 'Warcraft' },
    { id: 'my-collection', name: 'My Custom Collection' },  // Add your collection here
];
```

- `id` - Must match your folder name exactly (lowercase, with hyphens)
- `name` - Display name that will appear in the extension popup (can be any text)

**Optional:** To make your collection the default, update the DEFAULT_COLLECTION:

```javascript
const DEFAULT_COLLECTION = 'my-collection';  // Your collection id
```

### Step 4: Test your collection

1. Load/reload the extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project folder (or click reload if already loaded)
2. Visit [Chess.com](https://www.chess.com)
3. Click the extension icon in the toolbar
4. Select your collection from the dropdown
5. Start or view a chess game to see your custom pieces!

### Tips for creating great collections

- **Consistent style**: Make sure all pieces have a similar art style and level of detail
- **Clear silhouettes**: Each piece should be easily recognizable even at small sizes
- **High contrast**: Ensure pieces stand out against both light and dark squares
- **Test visibility**: Check how your pieces look on different board themes on Chess.com
- **Image quality**: Use high-resolution source images to avoid pixelation
- **Background removal**: Double-check that all backgrounds are fully transparent (no white halos)

### Troubleshooting

**Pieces not showing up?**
- Check that all 12 PNG files are named correctly
- Verify the collection folder name matches the `id` in `config.js`
- Make sure the extension is reloaded in Chrome
- Try refreshing the Chess.com page

**Pieces look blurry?**
- Use higher resolution source images
- Ensure images are PNG format (not JPG)

**Background not transparent?**
- Re-process images with [remove.bg](https://remove.bg)
- Check in an image editor that the background is truly transparent
- Save as PNG (not JPG which doesn't support transparency)

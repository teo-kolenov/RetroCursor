# Cursor Widget for Figma

A Figma plugin that allows users to insert cursor images on canvas with customizable size and type.

## Features

- Insert cursor images onto the Figma canvas
- Choose cursor images from a compact 4-column icon grid
- Select from 6 size options:
  - 24 px
  - 32 px
  - 48 px
  - 64 px (default)
  - 128 px
  - 256 px
- Clean, minimal UI that appears when plugin is run

## Installation

1. Clone or download this repository
2. Open Figma Desktop App
3. Go to Plugins > Development > Import plugin from manifest...
4. Select the `manifest.json` file from this directory
5. The plugin will be available in your plugins list

## Usage

1. Run the "Cursor Widget" plugin from the plugins menu
2. Select the cursor size
3. Click a cursor image in the grid to add it to your canvas
4. The cursor will be placed at the center of your viewport
5. To add a different cursor, click another image in the grid

## Development

This plugin is built with TypeScript and uses the Figma Plugin API.

### Build

```bash
npm install
npm run build
```

### Watch Mode

```bash
npm run watch
```

## File Structure

- `code.ts` - Main plugin logic
- `ui.html` - Plugin interface
- `manifest.json` - Plugin configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## Technical Details

- Uses cursor images embedded as base64 data
- Creates rectangle nodes with image fills
- Handles selection changes to update UI

## Release Process

- Use the release checklist: [RELEASE_CHECKLIST.md](./RELEASE_CHECKLIST.md)

# Cursor Widget for Figma

A Figma plugin that allows users to insert cursor images on canvas with customizable size and type.

## Features

- Insert cursor images onto the Figma canvas
- Choose from 3 cursor types:
  - MacOS 9 - pointer
  - MacOS 9 - hand  
  - MacOS 9 - busy
- Select from 5 size options:
  - 16 px
  - 24 px (default)
  - 32 px
  - 48 px
  - 64 px
- Update existing cursor images when selected
- Clean, minimal UI that appears when plugin is run

## Installation

1. Clone or download this repository
2. Open Figma Desktop App
3. Go to Plugins > Development > Import plugin from manifest...
4. Select the `manifest.json` file from this directory
5. The plugin will be available in your plugins list

## Usage

1. Run the "Cursor Widget" plugin from the plugins menu
2. Select cursor type from the dropdown
3. Select size from the dropdown  
4. Click to add the cursor to your canvas
5. The cursor will be placed at the center of your viewport
6. To modify an existing cursor, select it and the plugin UI will show current settings

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

- Uses SVG cursor images embedded as base64 data
- Creates rectangle nodes with image fills
- Handles selection changes to update UI
- Supports real-time parameter updates

## Release Process

- Use the release checklist: [RELEASE_CHECKLIST.md](./RELEASE_CHECKLIST.md)

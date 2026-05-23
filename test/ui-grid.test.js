const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.join(__dirname, '..');
const uiHtml = fs.readFileSync(path.join(root, 'ui.html'), 'utf8');
const codeTs = fs.readFileSync(path.join(root, 'code.ts'), 'utf8');

test('cursor type picker is a 4-cell-wide icon grid that creates cursors on click', () => {
  assert.match(uiHtml, /id="cursorGrid"/);
  assert.doesNotMatch(uiHtml, /id="cursorType"/);
  assert.doesNotMatch(uiHtml, />Cursor Images</);
  assert.doesNotMatch(uiHtml, /cursorGridLabel/);
  assert.match(uiHtml, /--grid-cell-size:\s*64px/);
  assert.match(uiHtml, /--grid-column-count:\s*4/);
  assert.match(uiHtml, /grid-template-columns:\s*repeat\(var\(--grid-column-count\),\s*var\(--grid-cell-size\)\)/);
  assert.match(uiHtml, /max-height:\s*calc\(var\(--grid-cell-size\)\s*\*\s*8\)/);
  assert.match(uiHtml, /overflow-y:\s*auto/);
  assert.match(uiHtml, /width:\s*40px/);
  assert.match(uiHtml, /height:\s*40px/);
  assert.match(uiHtml, /object-fit:\s*contain/);
  assert.doesNotMatch(uiHtml, /is-compact-preview/);
  assert.doesNotMatch(uiHtml, /index < 4/);
  assert.match(uiHtml, /type:\s*'create-cursor'/);
  assert.doesNotMatch(uiHtml, /id="updateCursor"/);
  assert.doesNotMatch(uiHtml, /Update Selected/);
  assert.doesNotMatch(uiHtml, /type:\s*'update-selected'/);

  assert.match(codeTs, /const gridColumnCount = 4/);
  assert.match(codeTs, /const uiChromeHeight = 52/);
  assert.match(codeTs, /Math\.ceil\(Object\.keys\(cursorSVGs\)\.length \/ gridColumnCount\)/);
  assert.match(codeTs, /figma\.showUI\(__html__,\s*\{\s*width:\s*uiWidth,\s*height:\s*uiHeight\s*\}\)/);
  assert.match(codeTs, /type:\s*'cursor-options'/);
});

test('64 px is the default cursor size', () => {
  assert.match(uiHtml, /<option value="64 px" selected>64 px<\/option>/);
  assert.match(codeTs, /const defaultCursorSize = "64 px"/);
});

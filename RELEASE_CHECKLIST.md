# Release Checklist

Use this checklist before every Figma Community publish.

## 1. Preflight

- [ ] Confirm plugin opens from `manifest.json` in Figma Desktop.
- [ ] Verify `manifest.json` points to the correct files:
  - [ ] `"main": "code.js"`
  - [ ] `"ui": "ui.html"`
- [ ] Install deps if needed: `npm install`
- [ ] Build latest plugin code: `npm run build`
- [ ] Ensure no TypeScript compile errors.

## 2. Functional QA (in Figma)

- [ ] Plugin launches without console errors.
- [ ] Add cursor flow works:
  - [ ] Cursor type dropdown works for all options.
  - [ ] Size dropdown works for all options.
  - [ ] Cursor inserts at viewport center.
- [ ] Update selected flow works:
  - [ ] Select one cursor rectangle and update type.
  - [ ] Update size and confirm node resizes correctly.
  - [ ] Node name matches expected format: `<type> (<size> px)`.
- [ ] Selection sync works:
  - [ ] Select an existing cursor and UI reflects current type/size.
- [ ] Close action cleanly exits plugin.

## 3. Regression QA

- [ ] Existing cursors from previous versions still update correctly.
- [ ] Plugin handles non-cursor rectangle selection without crashing.
- [ ] Plugin handles empty selection without crashing.

## 4. Listing Assets and Metadata

- [ ] Plugin name is correct and consistent.
- [ ] Short and long descriptions are up to date.
- [ ] Icon and cover image are prepared and current.
- [ ] Categories/tags are accurate.
- [ ] Changelog notes are prepared (what changed, fixes, known limits).

## 5. Publish

- [ ] In Figma: `Plugins` -> `Development` -> `Manage plugins`.
- [ ] Open plugin menu (`...`) -> `Publish new version` (or first publish).
- [ ] Paste/update listing metadata and changelog.
- [ ] Submit for review and publish.

## 6. Post-Publish

- [ ] Install from Community listing and smoke test once.
- [ ] Verify version notes display correctly.
- [ ] Tag repo release in Git (optional).
- [ ] Record publish date and version in project notes.

/// <reference types="@figma/plugin-typings" />

// Cursor Widget Plugin - Main code file
// This plugin allows users to insert cursor images on canvas with customizable size and type

const cursorSVGs: Record<string, string> = {
  "MacOS 9 - pointer": "iVBORw0KGgoAAAANSUhEUgAAACwAAABACAYAAABhspUgAAAAzklEQVRoge3Zyw6DIBRFUWj6/79Mp+3R8Ige4dK9Z8aADFauMeZSSkn1cuP+o71WOkxPHNjdW/fP+ZfsifGppiHhLr5hbTXTkHC3n2FttmlIuNvfsPa0aUi4+z/Dmts0JNxhWLvbNCTcYbjVVdOQcIfh0UZNQ8IdhrX2L5T2Ft8XkHC3v2E1qXO0I77pli7cgQ//mk/e7Yc1cl1dr3XsVw0S7uLP4avG3EHCXfw5fINZ61yGhLuQc3ipOdsKEu5CzmH3M0YfwByeWqwDp5Q+NylFhR7a21kAAAAASUVORK5CYII=",

  "MacOS 9 - hand": "iVBORw0KGgoAAAANSUhEUgAAADwAAABACAYAAABGHBTIAAABA0lEQVRoge2aUQ7CIBAFwXgNjfc/ldGD4K/dNsVtt4CvM39GK93kTVg25OTkcbtPnnm+X8X8g/1sca8ZyaXn4j2gYHUifJo4W8q6wjnPlmzqNJFWh4LVoWB1KFgdClbndAVfB3iH2vm5hqsXJ9LqnM/hH2ZUh+I9P9vf55xdMzQirQ4zrQ1z5V0zrQCHXd8TaXVO6fDeufKE2vOtweEB3qEpnIdr1Pa50SHS6tBLe/dl94LBvbG3byDS6rAPW6/tzGi0XtkLkVYHh/+d2j0wIq0ODi8gtS8TaXU4D2+gq9Pe+9dEWh0cDiDUae+MC4cNFKzO4Q4HsHqnZAEc/oaCpUkpfQBcC0+GZGwPugAAAABJRU5ErkJggg==",

  "MacOS 9 - busy": "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhklEQVR4Xu2a4RKDIAyD9f0f2t3uNk/FEWpb0fnt58AqaZJWcBzif1NwyDE43ipcRnAACM5YRpLmR8wI/vcMCF3gNNXDjaPMkZxQY+SRiwEgUuMw4AYSCKX8lj2KAYptOx5hknXLZABQWfCMwwDhAQrcDAmkUj7aA7bxrIDseQAAKNpFjns9AAZsEEAC5btDtdTjATt6xgQjTU7FuoIJnprx7D7AWhXeHgAAiqaZ49ESgAHGvgAJ4AGYIFWgaxnMrDA/Yq/a/+4mCADnIwADlpgXEujQmZ3NgToDAMC5Ta3S2XDaq0J4x2EAHrBAABPcvgxhgg80wWKbbvlHNCM6VAHfuQAABEsCBujP3ryNTrEvWgsoj8aQABKI3TDCA27gAal9wQkMaPn0b15jy+SVBrymCAD5EmhJKgz4ImBC63NRtSwoiSRI4MgaTAyomqL1gwcAiPcAGOB5eXCh9+PGsa3jMGQ8o8sDFOAAoBAyjsMAI2Cm6anomp6k02QA6AT8ZW77eAa8AJt0zEEhpQYlAAAAAElFTkSuQmCC",

  "MacOS 9 - loading": "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABbklEQVR4AeyYwQ6DMAxDyf7/n1k4QVkFdDS2D0btoQL6jONosM9yf6x5SeXM7XnjiQE8dQCyDQCYLI1wAqTLAxDnBABMlkY4AdLlAYhzAgAmSyOcAOnyAMQ5AQCTpRBnMb0ENN/+67oulTMFNbxcQ0fPAKgANswGsCvA5m8JaHrw3O/VAju8Rk81fzOgmiG9vw2QLg9AHDwBEbFE7BPwjJcIuAGXaggnbQDBdClkeQIi9n6PiJ/vigdulL4XlBvw4AGpl9gAqv0A+B1iOAERbU9HXK877/p3mqDnhw2AqgPAbADAZGnEcALOPX23nvD0kXscZy7njWED5qE1drIBGnXgqXACeN5rkJ0AjTrwVGwJOP7GRh7Q/+w6vEZPtTWbAdUM6f1tgHR5/hA3eksvAU0Pnnt09joFN7xcQ0fPAKgANswGsCvA5jsB7Aqw+U4AuwJsvhPArgCb7wSwK8DmOwHsCrD5TgC7Am/5b+//AgAA//+TT640AAAABklEQVQDAGzwyGlFG9S/AAAAAElFTkSuQmCC",

  "Windows 98 - pointer": "iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAAU0lEQVR4nLWSQQoAIAgE9/+f3ugQmOmqhxa85EygCADEIJwI3OkKPOkItKkE+ijhgZUQwpmQwpEgYS8owNe959aApqkHdI8lnG5odAJ/D6z9uwUXEMMV+aXXsxgAAAAASUVORK5CYII=",

  "Windows 98 - hand": "iVBORw0KGgoAAAANSUhEUgAAABEAAAAWCAYAAAAmaHdCAAAAWklEQVR4nN3T3QoAEAyG4d3/TU+JYmY+myRvOdOTXyI9LsMd1yLQ54gL6xAvOEUUMIbIM5MyjLTQsMxVJiInIHVbOoFQe1hhZDftqu8j1oN7B4Eg5COeQcCRS0SiwFxLP2mLAAAAAElFTkSuQmCC",

  "Windows 98 - loading": "iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAiklEQVR4nLXU2w6AIAwD0P7/T8/4oAnQrR2EJcaXcSw3ASBwqaKJh/kg3mrg8Y1htcANvJe4i4vEvMnA92ADX3ptWOA/RlANuzhDJdxJbm+EwPcTZ+czuyTlGpsXhvbPY5YvunBxMsamLJHatPk9NFVTZaj1r3DWkaUVG55WCTuJd/DjugbDndpcDzC/gZsXikaJAAAAAElFTkSuQmCC",

  "Amiga Workbench 1.0 - Normal": "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAWUlEQVR4nGNgYGD4TyImGtDW4P9nVhGFSbGAtgbfVVLCi4eOweQYOLAGD50wxiVOigU0MxjFAiwaqONyWhhMlI9oYcGoy4mzgBoG0txgCOAQ/A/GVAc4DAYAuQTQxLwY6/IAAAAASUVORK5CYII=",

  "Amiga Workbench 1.0 - Busy": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4nNWXyRHCMAxFZYZK3EJoJRQJrUAJriW5xAe+USQvGcnv5mwz/41kKyHFSEREMSVS8X1vP+tlDboX/3PreXkEd/WTmByvZxO4FjA3ENga4BLXIpgwN1DWwKjkShwaAMLjeXp/+7zOPyB0hX8DmDAbEZMjjAlHBoTqb04uYG6g3AnBRHcXcBy1YG6gugs4Wk2ZG7jsNNR2jbmB4aeher/w2wU42ynBLsD1hF2QGT0h+T0NOXCSaTUy7URUoDUyy59RvYHOxIi5gR0O+V6mHVfaxQAAAABJRU5ErkJggg==",

  "Amiga Workbench 1.0 - Link": "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAARUlEQVR4nGNgYGD4jwNTDGhr8P8zq1AwNSygrcF3lZRQMDUsoJnBoy4fdfkgsmDU5cPd5VSvIGhhMARwCP4HY6oDHAYDAEyvU+y25TJ+AAAAAElFTkSuQmCC",

  "Amiga Workbench 1.0 - Working": "iVBORw0KGgoAAAANSUhEUgAAABYAAAAfCAYAAADjuz3zAAAAyElEQVR4nMXVWw6EMAgF0H76O1tw+a5ltjBrwWji2AeXcoumJiRGzQErxSQiCYV2yHeTI9SbxYMEfKE5DpN44BrUgoY9aAg+TvPo4mzFCG1wC2ZRN8wuRYFHPh5K9i+aCZRA7fEIjNBkVWK9vnspRuBeL58P/tbVDA/cbL4orA6hHjwChuFQxSjBtXmGK7bgoaVA10E/vwOreDZwyl10/5pcCSg4v96tvJ6M5qAvRyiVYD7MJpgDM/3fdMcU2LU0y0fOQH38NLwD1K55VLaNEykAAAAASUVORK5CYII=",

  "Amiga Workbench 2.0 - Normal": "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAZElEQVR4nM3Uuw3AIAyE4RuN0TMKm1wUqmDJMo+YS3GU/1eAQC2FbfVqI4kvhrQwgOekBXahvPBL6IFNSBhehPLD00AA/Thsdj48DMxenizsfQH6sAe4cPTc5OEI0IVHZ4G08A2dYQzo25kIVwAAAABJRU5ErkJggg==",

  "Amiga Workbench 2.0 - Busy": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAyUlEQVR4nO2X0Q2DMAxEzxWDZJSO0lEYhVHoJjCJ+xNTEcnFIUEx0PsEY3HPhxWImWHRPL8ZAEJ4/qxjZjI1jHrkFB8hshIgIlPhdQksD0QS0zQC+GYi17noPASsGRBZifglkDqWmW9J2xMaEX8E0pTv1qsHAIRx3Scl4YdAbecY+tXlNBtCojmBrlonxfmWmhMgAGWzz3SeZqE5gd0ZECelX815CRTvi6jmBOpvQkVuN+H/BY47D0Rpsxf5I7DcuO2ZUC286n/BB4sHdpkP3sc4AAAAAElFTkSuQmCC",

  "Amiga Workbench 2.0 - Link": "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAW0lEQVR4nO3QsQkAIAxE0RvN0R3FTU5MpYGgoCEpLC7lfxC0UihrVUYSLwa3MIBxqYFbyC88CStwCQWGDSg+/Br4YTt8DKQLa0BvB8SFj1+lgHzhHZA3bAFu4Q5UJyaYxRtXqQAAAABJRU5ErkJggg==",

  "Amiga Workbench 2.0 - Working": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABS0lEQVR4nNWW3ZHDIAyEVzfpAzoJpaQUl5JO4usEV6J7CDAYED8mGZ93xg+xQVo+FAExM2ZERNk7KWZpLJg5PCVZuzKA9JHG7uK1YgPAj/jFSWvTGtIlyUjTAAAC3quLf88YGTXAwI5EdRt6TXgjt1biaOVBzow3MUVEIsDWrsXk3pQ1Jow9mpyZiwZYShz0WIDnEhs8bKKnBorJS1LqPm2gvvpC8lkK/QQeS3PIdw18SRQ3Bteri9vg+0Co/mQrtDZ05Fz5KIFt+x2eUyIAVIoxI+GVEFHq3tWgJAKktfnYQVSTRCBWcWMzAqk6iezOAqGIdhOJaO4GkwY/eiPyRpokvAQi/6sPDE0cJZBIvV4XJxACtEi4vZf+BacTqF3JpqTXFQBg3Sm6PRcGchLXJ8DMBOS1kL0XSFyfQEstEqcTmO4DwwmTWjmdwB91YcbR0pn5/AAAAABJRU5ErkJggg=="
};

function decodeBase64ToBytes(base64: string): Uint8Array {
  if (typeof figma !== 'undefined' && typeof figma.base64Decode === 'function') {
    return figma.base64Decode(base64);
  }

  if (typeof atob === 'function') {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  const sanitized = base64.replace(/[^A-Za-z0-9+/=]/g, '');
  const output = [] as number[];

  let i = 0;
  while (i < sanitized.length) {
    const enc1 = base64Chars.indexOf(sanitized.charAt(i++));
    const enc2 = base64Chars.indexOf(sanitized.charAt(i++));
    const enc3 = base64Chars.indexOf(sanitized.charAt(i++));
    const enc4 = base64Chars.indexOf(sanitized.charAt(i++));

    const chr1 = (enc1 << 2) | (enc2 >> 4);
    const chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    const chr3 = ((enc3 & 3) << 6) | enc4;

    output.push(chr1);
    if (enc3 !== 64 && enc3 !== -1) {
      output.push(chr2);
    }
    if (enc4 !== 64 && enc4 !== -1) {
      output.push(chr3);
    }
  }

  return Uint8Array.from(output);
}

type CursorImage = ReturnType<typeof figma.createImage>;
type CursorAsset = {
  image: CursorImage;
  width: number;
  height: number;
};

const imageCache = new Map<string, CursorAsset>();

function getPngDimensions(bytes: Uint8Array): { width: number; height: number } {
  if (bytes.length < 24) {
    throw new Error('Cursor asset is too small to be a valid PNG.');
  }

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return {
    width: view.getUint32(16),
    height: view.getUint32(20)
  };
}

function getCursorAsset(cursorType: string): CursorAsset {
  const existing = imageCache.get(cursorType);
  if (existing) {
    return existing;
  }

  const base64 = cursorSVGs[cursorType];
  if (!base64) {
    throw new Error(`Unknown cursor type: ${cursorType}`);
  }

  const bytes = decodeBase64ToBytes(base64);
  const image = figma.createImage(bytes);
  const dimensions = getPngDimensions(bytes);
  const asset = { image, ...dimensions };
  imageCache.set(cursorType, asset);
  return asset;
}

function getSizeValue(sizeString: string): number {
  const size = parseInt(sizeString.split(" ")[0], 10);
  if (!Number.isFinite(size) || size <= 0) {
    throw new Error(`Invalid cursor size: ${sizeString}`);
  }

  return size;
}

function getScaledDimensions(cursorType: string, cursorSize: string): { width: number; height: number } {
  const size = getSizeValue(cursorSize);
  const { width, height } = getCursorAsset(cursorType);
  const scale = size / height;

  return {
    width: Math.max(1, Math.round(width * scale)),
    height: size
  };
}

function applyCursorFill(node: RectangleNode, cursorType: string, cursorSize: string): void {
  const { image } = getCursorAsset(cursorType);
  const { width, height } = getScaledDimensions(cursorType, cursorSize);

  node.resize(width, height);
  node.name = `${cursorType} (${cursorSize})`;
  node.fills = [{
    type: 'IMAGE',
    imageHash: image.hash,
    scaleMode: 'FIT'
  }];
}

function centerNodeInViewport(node: SceneNode): void {
  const viewport = figma.viewport.center;
  node.x = viewport.x - node.width / 2;
  node.y = viewport.y - node.height / 2;
}

function createCursorImage(cursorType: string, cursorSize: string): RectangleNode {
  const node = figma.createRectangle();
  applyCursorFill(node, cursorType, cursorSize);
  return node;
}

// Show the UI
figma.showUI(__html__, { width: 240, height: 192 });

// Handle messages from UI
figma.ui.onmessage = (msg: any) => {
  if (msg.type === 'create-cursor') {
    const { cursorType, cursorSize } = msg;
    
    const cursorNode = createCursorImage(cursorType, cursorSize);
    
    // Position at center of viewport
    centerNodeInViewport(cursorNode);
    
    figma.currentPage.appendChild(cursorNode);
    figma.currentPage.selection = [cursorNode];
    figma.notify('Cursor added to canvas');
  }
  
  if (msg.type === 'update-selected') {
    const { cursorType, cursorSize } = msg;
    const selection = figma.currentPage.selection;
    
    if (selection.length === 1 && selection[0].type === 'RECTANGLE') {
      const node = selection[0] as unknown as RectangleNode;
      applyCursorFill(node, cursorType, cursorSize);
      
      figma.notify('Cursor updated');
    }
  }
  
  if (msg.type === 'close') {
    figma.closePlugin();
  }
};

// Handle selection changes to update UI
figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 1 && selection[0].type === 'RECTANGLE') {
    const node = selection[0] as unknown as RectangleNode;
    
    // Try to extract cursor info from node name
    const name = node.name;
    let cursorType = "MacOS 9 - pointer";
    let cursorSize = "24 px";
    
    Object.keys(cursorSVGs).forEach(type => {
      if (name.includes(type)) {
        cursorType = type;
      }
    });
    
    const sizeMatch = name.match(/\((\d+) px\)/);
    if (sizeMatch) {
      cursorSize = `${sizeMatch[1]} px`;
    }
    
    // Send current values to UI
    figma.ui.postMessage({
      type: 'update-ui',
      cursorType,
      cursorSize
    });
  }
});

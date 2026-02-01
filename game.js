// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const gameBtn1 = { x: 400, y: 420, w: 260, h: 80 };
const gameBtn2 = { x: 400, y: 540, w: 260, h: 80 };

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(30);

  // ---- Title and instructions text ----
  fill(255); // black text
  textSize(34);
  textAlign(CENTER, CENTER);
  text("Game", width / 2, 160);

  textSize(18);
  text("You see a mysterious lever.\nDo you pull it?", width / 2, 240);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when picked
  // This gives visual feedback to the player
  // --- Button 1 (YES) ---
  if (isHover(gameBtn1)) {
    fill(180, 220, 255); // hover colour
  } else {
    fill(120, 180, 255); // normal colour
  }
  rect(gameBtn1.x, gameBtn1.y, gameBtn1.w, gameBtn1.h, 14);

  // --- Button 2 (NO) ---
  if (isHover(gameBtn2)) {
    fill(255, 200, 200); // hover colour
  } else {
    fill(255, 150, 150); // normal colour
  }
  rect(gameBtn2.x, gameBtn2.y, gameBtn2.w, gameBtn2.h, 14);

  // Draw the button text
  fill(0);
  textSize(22);
  text("YES (1)", gameBtn1.x, gameBtn1.y);
  text("NO (2)", gameBtn2.x, gameBtn2.y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn1)) {
    endingText = "You pull the lever.\nA hidden door opens.";
    currentScreen = "win";
  }

  if (isHover(gameBtn2)) {
    endingText = "You leave the lever alone.\nNothing happens.";
    currentScreen = "lose";
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (key === "1") {
    endingText = "You pull the lever.\nA hidden door opens.";
    currentScreen = "win";
  }

  if (key === "2") {
    endingText = "You leave the lever alone.\nNothing happens.";
    currentScreen = "lose";
  }
}

// ------------------------------
// Game logic: win or lose

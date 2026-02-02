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
const gameBtn = {
  x: 400,
  y: 560,
  w: 320,
  h: 90,
  label: "OPEN THE DRAWER",
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(14, 16, 25);

  // spotlight glow
  noStroke();
  fill(120, 160, 255, 18);
  ellipse(width / 2, 280, 650, 560);

  // ---- Title and instructions text ----
  fill(240); // black text
  textSize(48);
  textAlign(CENTER, CENTER);
  text("THE STUDY ROOM", width / 2, 150);

  fill(200);
  textSize(18);
  text(
    "A desk sits alone.\nOne drawer is slightly open.\nDo you open it?",
    width / 2,
    245,
  );

  // Desk visual
  drawDesk(width / 2, 360);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn);

  // Hint
  fill(180);
  textSize(16);
  text("Click the button or press ENTER", width / 2, 720);

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
function drawGameButton(btn) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover(btn);

  noStroke();

  // Change button colour when picked
  // This gives visual feedback to the player
  // --- Button 1 (YES) ---
  if (hover) fill(180, 220, 255, 240);
  else fill(120, 180, 255, 190);

  rect(btn.x, btn.y, btn.w, btn.h, 16);

  fill(10, 14, 22);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(btn.label, btn.x, btn.y);
}

// ------------------------------
// Desk visual for this screen
// ------------------------------
function drawDesk(cx, cy) {
  rectMode(CENTER);
  noStroke();

  // desk top
  fill(60, 70, 95);
  rect(cx, cy + 50, 360, 26, 10);

  // drawer
  fill(45, 55, 80);
  rect(cx, cy + 20, 220, 50, 10);

  // drawer handle glow
  fill(255, 220, 140, 220);
  rect(cx, cy + 20, 60, 10, 6);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn)) openDrawer();
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === ENTER) openDrawer();
}

function openDrawer() {
  // Simple branching outcome
  if (random() < 0.5) {
    endingText = "Inside is your missing note sheet.\nYou breathe again.";
    currentScreen = "win";
  } else {
    endingText = "The drawer sticks—LOUD.\nFootsteps stop outside the door.";
    currentScreen = "lose";
  }
}
// ------------------------------
// Game logic: win or lose

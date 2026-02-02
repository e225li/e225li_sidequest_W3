// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawWin() {
  // background to communicate success
  background(10, 20, 18);

  noStroke();
  fill(120, 255, 190, 20);
  ellipse(width / 2, 280, 650, 560);

  fill(230);
  textAlign(CENTER, CENTER);

  // Main success message
  fill(200);
  textSize(52);
  text("YOU MADE IT", width / 2, 220);

  fill(200);
  textSize(18);
  text(endingText, width / 2, 330);

  // Instruction text
  fill(180);
  textSize(16);
  text("Click or press R to return to Start.", width / 2, 680);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}

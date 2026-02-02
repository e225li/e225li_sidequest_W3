// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function drawLose() {
  // Red-tinted background to communicate failure
  background(25, 10, 12);

  fill(0);
  textAlign(CENTER, CENTER);

  noStroke();
  fill(255, 120, 140, 18);
  ellipse(width / 2, 280, 650, 560);

  // Main message
  fill(230);
  textAlign(CENTER, CENTER);
  textSize(52);
  text("TOO LOUD", width / 2, 220);

  fill(200);
  textSize(18);
  text(endingText, width / 2, 330);

  // Instruction text
  fill(180);
  textSize(16);
  text("Click or press R to return to Start.", width / 2, 680);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}

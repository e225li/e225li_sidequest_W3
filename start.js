// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------

// Button data
const startBtn = {
  x: 400,
  y: 550,
  w: 260,
  h: 80,
  label: "ENTER THE ROOM",
};

const instrBtn = {
  x: 400,
  y: 650,
  w: 260,
  h: 80,
  label: "INSTRUCTIONS",
};

// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawStart() {
  // Background colour for the start screen
  background(20, 22, 30); // soft teal background

  // Soft “spotlight” glow
  noStroke();
  fill(80, 120, 255, 35);
  ellipse(width / 2, 260, 520, 460);

  // ---- Title text ----
  fill(240);
  textSize(44);
  textAlign(CENTER, CENTER);
  text("THE STUDY ROOM", width / 2, 140);

  // Subtitle
  fill(200);
  textSize(18);
  text("One choice. Two outcomes.", width / 2, 205);

  // Desk icon (simple shapes)
  drawDeskIcon(width / 2, 305);

  // Draw buttons
  drawStartButton(startBtn, "primary");
  drawStartButton(instrBtn, "secondary");

  // Cursor feedback
  cursor(isHover(startBtn) || isHover(instrBtn) ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for start screen
// ------------------------------------------------------------
function startMousePressed() {
  if (isHover(startBtn)) currentScreen = "game";
  else if (isHover(instrBtn)) currentScreen = "instr";
}

// ------------------------------------------------------------
// Keyboard input for start screen
// ------------------------------------------------------------
function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "game";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Helper: drawStartButton()
// Simple hover feedback using conditionals
// ------------------------------------------------------------
function drawStartButton(btn, type) {
  rectMode(CENTER);

  const hover = isHover(btn);

  noStroke();
  if (type === "primary") {
    if (hover) fill(180, 220, 255, 240);
    else fill(120, 180, 255, 190);
  } else {
    if (hover) fill(255, 245, 220, 220);
    else fill(255, 245, 220, 160);
  }

  rect(btn.x, btn.y, btn.w, btn.h, 16);

  fill(15, 20, 30);
  textSize(type === "primary" ? 22 : 20);
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x, btn.y);
}

function drawDeskIcon(cx, cy) {
  rectMode(CENTER);
  noStroke();

  // Desk surface
  fill(60, 70, 95);
  rect(cx, cy + 40, 300, 22, 10);

  // Desk legs
  fill(45, 55, 80);
  rect(cx - 120, cy + 75, 18, 70, 8);
  rect(cx + 120, cy + 75, 18, 70, 8);

  // Book
  fill(200, 210, 235);
  rect(cx - 40, cy + 10, 70, 40, 6);

  // Lamp stem
  fill(120, 130, 160);
  rect(cx + 60, cy - 5, 10, 70, 6);

  // Lamp head glow
  fill(255, 220, 140);
  ellipse(cx + 60, cy - 45, 30, 30);

  // Small label
  fill(190);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("STAY QUIET", cx, cy + 120);
}

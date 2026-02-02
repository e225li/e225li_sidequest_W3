// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawInstr() → what the instructions screen looks like
// 2) input handlers → how the player returns to the start screen
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for instructions screen
// ------------------------------

const backBtn = {
  x: 0,
  y: 0,
  w: 260,
  h: 80,
  label: "BACK",
};

// drawInstr() is called from main.js
// only when currentScreen === "instr"
function drawInstr() {
  // Light neutral background
  background(14, 16, 25);

  // glow
  noStroke();
  fill(120, 160, 255, 20);
  ellipse(width / 2, 260, 620, 520);

  // ---- Screen title ----
  fill(240);
  textAlign(CENTER, TOP);
  textSize(44);
  text("INSTRUCTIONS", width / 2, 90);

  // ---- Instruction text ----
  fill(200);
  textSize(18);
  text(
    "You are in the Study Room.\n" +
      "You will make one decision.\n\n" +
      "Controls:\n" +
      "- Click the button\n" +
      "- or press ENTER\n\n" +
      "Your choice sends you to WIN or LOSE.",
    width / 2,
    180,
  );

  // ---- Position back button ----
  backBtn.x = width / 2;
  backBtn.y = height * 0.82;

  // Draw the back button
  drawInstrButton(backBtn);

  // Change cursor when hovering over the button
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function instrMousePressed() {
  if (isHover(backBtn)) currentScreen = "start";
}

function instrKeyPressed() {
  if (key === "b" || key === "B") currentScreen = "start";
  if (keyCode === ESCAPE) currentScreen = "start";
}

function drawInstrButton(btn) {
  rectMode(CENTER);
  const hover = isHover(btn);

  noStroke();
  if (hover) fill(255, 245, 220, 220);
  else fill(255, 245, 220, 160);

  rect(btn.x, btn.y, btn.w, btn.h, 16);

  fill(10, 14, 22);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(btn.label, btn.x, btn.y);
}

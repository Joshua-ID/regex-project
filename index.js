const textInput = document.getElementById("text");
const regexInput = document.getElementById("regex");
const result = document.getElementById("result");

const checkboxes = {
  g: document.getElementById("flag-g"),
  i: document.getElementById("flag-i"),
  m: document.getElementById("flag-m"),
};

function updateOutput() {
  const text = textInput.value;
  const pattern = regexInput.value;
  let flags = "";
  if (checkboxes.g.checked) flags += "g";
  if (checkboxes.i.checked) flags += "i";
  if (checkboxes.m.checked) flags += "m";

  try {
    const regex = new RegExp(pattern, flags);
    const highlighted = text.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
    result.innerHTML = highlighted || "No matches found.";
  } catch (e) {
    result.textContent = "Invalid regex: " + e.message;
  }
}

[textInput, regexInput, checkboxes.g, checkboxes.i, checkboxes.m].forEach(
  (el) => el.addEventListener("input", updateOutput)
);

updateOutput();

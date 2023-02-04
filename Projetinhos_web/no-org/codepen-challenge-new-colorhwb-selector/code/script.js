const hwbPanel = document.querySelector('.hwb-panel');
const hwbPanelInner = document.querySelector('.hwb-panel-inner');
const wheelSelector = document.querySelector('.wheel-selector');
const hueInput = document.querySelector('.hue input');
const hueSelector = document.querySelector('.hue-selector');
const whitenessInput = document.querySelector(".whiteness-input");
const whitenessValue = document.querySelector(".whiteness-value");
const blacknessInput = document.querySelector(".blackness-input");
const blacknessValue = document.querySelector(".blackness-value");
const opacityInput = document.querySelector(".opacity-input");
const opacityValue = document.querySelector(".opacity-value");
const resultVersion1El = document.querySelector(".result-code div:nth-child(1)");
const resultVersion2El = document.querySelector(".result-code div:nth-child(2)");
const resultVersion3El = document.querySelector(".result-code div:nth-child(3)");
const resultVersion4El = document.querySelector(".result-code div:nth-child(4)");
let isDragging = false;

const radToDeg = 180 / Math.PI;

const getDegrees = (Y, X) => {
  let angle = Math.atan2(X - 150, 150 - Y) * radToDeg;
  return angle < 0 ? Math.round(angle + 360) : angle > 270 ? Math.round(angle - 270) : Math.round(angle);
};

const applyHue = degValue => {
  wheelSelector.style.transform = `translate(-120px) rotate(${degValue === 360 ? 0 : degValue}deg)`;
  hueInput.value = degValue;
  applyResult();
};

hueInput.addEventListener("input", e => {
  let onlyNum = e.target.value.replace(/\D/g, '');
  let num = onlyNum >= 360 ? 360 : onlyNum;
  applyHue(+num);
});

const hueInputToZero = value => {
  if (value === 360) {
    hueInput.value = 0;
  };
};

const applyResult = () => {
  const hueValue = hueInput.value === '360' ? 0 : hueInput.value;
  const degInTurn = +(hueValue / 360).toFixed(3);
  const degInRad = +(hueValue * Math.PI / 180).toFixed(3);
  const degInGrad = +(hueValue * 400 / 360).toFixed(3);
  const opacityInPerc = Math.trunc(opacityInput.value * 100);
  const resultVersion1 = `<span>hwb</span>(${hueValue}<span>deg</span> ${whitenessInput.value}<span class="code-perc">%</span> ${blacknessInput.value}<span class="code-perc">%</span>${` / ${opacityInPerc}<span class="code-perc">%</span>`})`;
  const resultVersion2 = `<span>hwb</span>(${degInTurn}<span>turn</span> ${whitenessInput.value}<span class="code-perc">%</span> ${blacknessInput.value}<span class="code-perc">%</span>${opacityInput.value < 1 ? ` / ${opacityInPerc}<span class="code-perc">%</span>` : ''})`;
  const resultVersion3 = `<span>hwb</span>(${degInRad}<span>rad</span> ${whitenessInput.value}<span class="code-perc">%</span> ${blacknessInput.value}<span class="code-perc">%</span>${` / ${opacityInput.value}`})`;
  const resultVersion4 = `<span>hwb</span>(${degInGrad}<span>grad</span> ${whitenessInput.value}<span class="code-perc">%</span> ${blacknessInput.value}<span class="code-perc">%</span>${opacityInput.value < 1 ? ` / ${opacityInput.value}` : ''})`;
  resultVersion1El.innerHTML = resultVersion1;
  resultVersion2El.innerHTML = resultVersion2;
  resultVersion3El.innerHTML = resultVersion3;
  resultVersion4El.innerHTML = resultVersion4;
  const resultColor = `hwb(${hueValue}deg ${whitenessInput.value}% ${blacknessInput.value}%${` / ${opacityInPerc}%`})`;
  hwbPanel.style.backgroundColor = resultColor;
  hwbPanelInner.style.boxShadow = `0 0 0px 3px ${resultColor} inset, 0 0 6px 3px`;
};

hueInput.addEventListener("blur", e => {
  hueInputToZero(+e.target.value);
});

hueSelector.addEventListener("click", e => {
  const degrees = getDegrees(e.layerY, e.layerX);
  applyHue(degrees);
});

hueSelector.addEventListener("mousedown", e => {
  isDragging = true;
});

hueSelector.addEventListener("mousemove", e => {
  if (isDragging) {
    const degrees = getDegrees(e.layerY, e.layerX);
    applyHue(degrees);
  }
});

hueSelector.addEventListener("mouseup", () => {
  isDragging = false;
  hueInputToZero(+hueInput.value);
});

whitenessInput.addEventListener("input", function () {
  whitenessValue.innerText = this.value;
  applyResult();
});

blacknessInput.addEventListener("input", function () {
  blacknessValue.innerText = this.value;
  applyResult();
});

opacityInput.addEventListener("input", function () {
  opacityValue.innerText = (+this.value).toFixed(2);
  applyResult();
});

whitenessValue.innerText = whitenessInput.value;
blacknessValue.innerText = blacknessInput.value;
opacityValue.innerText = opacityInput.value;
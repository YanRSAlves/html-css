var r = document.querySelector(":root");

//Hue
var hueSlider = document.getElementById("hueSlider");
var hueOutput = document.getElementById("hueOutput");
hueOutput.innerHTML = "H: " + hueSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
hueSlider.oninput = function () {
	hueOutput.innerHTML = "H: " + this.value;
	r.style.setProperty("--hueVal", this.value);
};

//Whiteness
var whitenessSlider = document.getElementById("whitenessSlider");
var whitenessOutput = document.getElementById("whitenessOutput");
whitenessOutput.innerHTML = "W: " + whitenessSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
whitenessSlider.oninput = function () {
	whitenessOutput.innerHTML = "W: " + this.value;
	r.style.setProperty("--whitenessVal", this.value + "%");
};

//Blackness
var blacknessSlider = document.getElementById("blacknessSlider");
var blacknessOutput = document.getElementById("blacknessOutput");
blacknessOutput.innerHTML = "B: " + blacknessSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
blacknessSlider.oninput = function () {
	blacknessOutput.innerHTML = "B: " + this.value;
	r.style.setProperty("--blacknessVal", this.value + "%");
};

//Alpha
var alphaSlider = document.getElementById("alphaSlider");
var alphaOutput = document.getElementById("alphaOutput");
alphaOutput.innerHTML = "A: " + alphaSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
alphaSlider.oninput = function () {
	alphaOutput.innerHTML = "A: " + this.value;
	r.style.setProperty("--alphaVal", this.value + "%");
};
"use strict";
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const tabs = selectAll(".tab");
const shine = select(".tab-shine");
const headerContainer = select(".tab-header");
const setActive = (el) => {
    const tabCenter = (el.offsetLeft + el.offsetWidth / 2) / headerContainer.offsetWidth;
    shine.style.left = `${tabCenter * 100}%`;
    headerContainer.style.setProperty("--shine-start", `${(tabCenter - 0.5) * 100}%`);
    headerContainer.style.setProperty("--shine-mid", `${tabCenter * 100}%`);
    headerContainer.style.setProperty("--shine-end", `${(tabCenter + 0.5) * 100}%`);
    const currentActive = select(".active");
    currentActive.classList.remove("active");
    el.classList.add("active");
};
tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        setActive(e.target);
    });
});
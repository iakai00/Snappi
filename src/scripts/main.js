"use strict";

// Get userID from local storage
const userId = sessionStorage.getItem("userId");

// Get userID from local storage
const userToken = sessionStorage.getItem("token");

// Hide HTML element
const hideContent = (element) => {
  element.style.display = "none";
};

// Display HTML element
const showContent = (element) => {
  element.style.display = "block";
};

// Slide-toggle logic
const slideToggle = (target) => {
  if (window.getComputedStyle(target).display === "none") {
    target.style.display = "block";
  } else {
    target.style.display = "none";
  }
};



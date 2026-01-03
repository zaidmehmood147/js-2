// 1. Reading and Writing to Form Fields
// In Chapter 49, you learn to read what a user has typed into a text field. In Chapter 50, you learn how to programmatically fill those fields.

// To read a value:

// JavaScript

// // Reads the text from a field with id "email"
// var userEmail = document.getElementById("email").value; [cite: 132, 137]
// To set a value:

// JavaScript

// // Fills the field with id "city" with the text "Chicago"
// document.getElementById("city").value = "Chicago"; [cite: 144]
// 2. Reading and Changing Paragraph/Element Text
// Chapter 51 introduces the innerHTML property, which allows you to change the actual content of a paragraph or div.

// To change text or HTML:

// JavaScript

// var newText = "<strong>Updated content!</strong>";
// document.getElementById("myParagraph").innerHTML = newText; [cite: 147, 148]
// To read current text:

// JavaScript

// var currentContent = document.getElementById("content").innerHTML; [cite: 152]
// 3. Manipulating CSS Classes and Styles
// Chapters 52 and 55 show you how to change the appearance of elements by swapping their CSS classes or modifying styles directly.

// To change a CSS Class (Swap):

// JavaScript

// // Replaces all current classes with "hidden"
// document.getElementById("ugly").className = "hidden"; [cite: 159]
// To add a new CSS Class (Append):

// JavaScript

// // Adds the "big" class without removing existing ones
// document.getElementById("p1").className += " big"; [cite: 160]
// To change a specific style property:

// JavaScript

// // Changes font size directly
// document.getElementById("p1").style.fontSize = "2em"; [cite: 175]
// 4. Swapping Image Sources
// Chapter 53 teaches you how to change an image by updating its src attribute.

// To swap an image:

// JavaScript

// document.getElementById("before").src = "after-pic.jpg"; [cite: 163, 166]
// Practice Tip for Monday
// Since you are preparing for DOM projects, practice using variables to hold your elements first (the "verbose approach" from Chapter 54). This makes your code cleaner:

// JavaScript

// var targetParagraph = document.getElementById("p1"); [cite: 168]
// targetParagraph.innerHTML = "New Text";
// targetParagraph.style.color = "blue";
/** 
 * NOTE:
 * This section demonstrates another example of event handling by counting clicks on a circular element.
 * The count increases each time the circle is clicked and can be reset using a button.
 */

/** EXERCISE: Click Counter Circle */
const circle = document.getElementById("circle");
const clickCount = document.getElementById("clickCount");
const resetCount = document.getElementById("resetCount");

let count = 0;

circle.addEventListener("click", function() {
    count++;
    clickCount.textContent = count;
});

resetCount.addEventListener("click", function() {
    count = 0;
    clickCount.textContent = count;
});

window.addEventListener("mousemove", function(event) {
  // get elements
  const leftEye = document.querySelector(".eye-left");
  const rightEye = document.querySelector(".eye-right");
  const containerDims = document.querySelector(".eye-container").getBoundingClientRect();
  const eyeDims = leftEye.getBoundingClientRect();

  // get distance between mouse location and center of eyes
  let xOffset = containerDims.left + (containerDims.width / 2)  + window.scrollX;
  let yOffset = containerDims.top + (eyeDims.width / 2) + window.scrollY;
  let xDistance = event.pageX - xOffset;
  let yDistance = event.pageY - yOffset;

  // calculate angle for eye rotation
  let radian = Math.atan2(xDistance, yDistance);
  let degrees = radian * (180 / Math.PI) * -1 + 180;

  // rotate eyes
  leftEye.style.transform = "rotate(" + degrees + "deg)";
  rightEye.style.transform = "rotate(" + degrees + "deg)";

});

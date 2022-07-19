window.addEventListener("mousemove", function(event) {
  // get elements
  const leftEyes = document.querySelectorAll(".eye-left");
  const rightEyes = document.querySelectorAll(".eye-right");
  const containerDims = document.querySelectorAll(".eye-container");
  
  //for each ghost, move eyes
  for(let i=0; i<leftEyes.length; i++){
    const containerDim = containerDims[i].getBoundingClientRect();
    const eyeDim = leftEyes[i].getBoundingClientRect();

    // get distance between mouse location and center of eyes
    let xOffset = containerDim.left + (containerDim.width / 2)  + window.scrollX;
    let yOffset = containerDim.top + (eyeDim.width / 2) + window.scrollY;
    let xDistance = event.pageX - xOffset;
    let yDistance = event.pageY - yOffset;

    // calculate angle for eye rotation
    let radian = Math.atan2(xDistance, yDistance);
    let degrees = radian * (180 / Math.PI) * -1 + 180;

    // rotate eyes
    leftEyes[i].style.transform = "rotate(" + degrees + "deg)";
    rightEyes[i].style.transform = "rotate(" + degrees + "deg)";
  }
});

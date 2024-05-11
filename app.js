let slides = document.querySelectorAll(".slide");
let nextbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".prev");
let dotWrapper = document.querySelector(".dotted-wrapper");
let dot = document.querySelectorAll(".dot");
let createdElems = [];
// let current = 0;
// function moveForward() {
//   for (let i = 0; i < slides.length; i++) {
//     // current =i;

//     slides[i].style.transform = `translateX(-${i * 100}%)`;
//   }
// }
// setInterval(moveForward, 2000);

// set each slide position
slides.forEach((slide, i) => {
  // slide.style.transform = `translateX(${i * 100}%)`;
});

let current = 0; // monitors the current slide on view

function moveForward() {
  //  Fowards the slides
  current = current + 1;
  if (current === slides.length) {
    // check if slide does not go out of range
    current = 0;
  }
  slides.forEach((slide) => {
    //set each slides position base on the current
    slide.style.transform = `translateX(-${current * 100}%)`;
  });

  // createdElems.forEach((elems, i) => {   //sets the created elements color
  //     if (current === i) {
  //         elems.style.backgroundColor = "white"
  //     }
  //     else {
  //         elems.style.backgroundColor = "rgba(0, 0, 0, 0.513)"    // set any element that is not the current element color back to the default color
  //     }

  // })
}

function movebackwards() {
  // move the slide backwards
  current = current - 1;
  if (current === 0) {
    current = 0;
  }
  console.log("clicked");
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${current * 100}%)`;
  });

  // createdElems.forEach((elems, i) => {   //sets the created elements color
  //     if (current === i) {
  //         elems.style.backgroundColor = "white"
  //     }
  //     else {
  //         elems.style.backgroundColor = "rgba(0, 0, 0, 0.513)"    // set any element that is not the current element color back to the default color
  //     }

  // })
}

function mapDot() {
  slides.forEach(createDot);
}
mapDot();

function createDot() {
  let dot = document.createElement("div");
  dot.setAttribute("class", "dot");
  dotWrapper.appendChild(dot);
  createdElems.push(dot);
  console.log(dotWrapper);
}

createdElems[0].style.backgroundColor = "white";

function watchForward() {
  moveForward();

  createdElems.forEach((elems, i) => {
    if (current === i) {
      elems.style.backgroundColor = "white";
    } else {
      elems.style.backgroundColor = "rgba(0, 0, 0, 0.513)";
    }
  });
}
function watchBackward() {
  movebackwards();

  createdElems.forEach((elems, i) => {
    if (current === i) {
      elems.style.backgroundColor = "white";
    } else {
      elems.style.backgroundColor = "rgba(0, 0, 0, 0.513)";
    }
  });
}

nextbtn.addEventListener("click", watchForward);
prevbtn.addEventListener("click", watchBackward);

setInterval(watchForward, 4000);

// // function mapArray() { // create dot based on slides
// //     slides.forEach(createDot)
// // }
// // mapArray()

// // function createDot() {  // begin the dot creation stage
// //     let element = document.createElement("div")
// //     element.setAttribute("class", "dot")
// //     dotWrapper.appendChild(element)//append the child under the parent element
// //     createdElems.push(element)    // store each element that was created
// // }

// // function watch() {   //watch for changes in nextbtn and setInterval
// //     moveForward()

// //     createdElems.forEach((elems, i) => {   //sets the created elements color
// //         if (current === i) {
// //             elems.style.backgroundColor = "white"
// //         }
// //         else {
// //             elems.style.backgroundColor = "rgba(0, 0, 0, 0.513)"    // set any element that is not the current element color back to the default color
// //         }

// //     })
// // }

// // function watchPrev() { //watch for changes in prevbtn
// //     movebackwards()

// //     createdElems.forEach((elems, i) => {
// //         if (current === i) {
// //             elems.style.backgroundColor = "white"
// //         }
// //         else {
// //             elems.style.backgroundColor = "rgba(0, 0, 0, 0.513)"
// //         }

// //     })
// // }

// // createdElems[0].style.backgroundColor = "white"

// // // asynchronous operation
// // setInterval(watch, 4000)

// // // asynchronous operation
// // prevbtn.addEventListener("click", watchPrev)
// // // asynchronous operation
// // nextbtn.addEventListener("click", watch)

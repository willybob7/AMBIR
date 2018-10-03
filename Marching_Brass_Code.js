
document.addEventListener("DOMContentLoaded", function() {

  var slideIndex = 1;
  const test1 = {
    item1: {
      type: "brass",
      pics: ["store1.jpg", "store2.jpg","store3.jpg",
      "store4.jpg","store5.jpg","store6.jpg","store7.jpg",
      "store8.jpg","store9.jpg","store10.jpg","store11.jpg",
      "store12.jpg"],
      brand: "King",
      model: "1120",
      ser: "904730",
      description: ["This is a King model 1120 Marching mellophone in ready to play condition. ",
      "It has been ultrasonically cleaned and serviced ",
      "for this auction by a professional repair technician. All slides and valves ",
      "work freely and easily. There are dings, scratches and wear from normal usage. ",
      "There is a case and a Holton 7C mouthpiece."],
      shipping: "$35",
    },
    item2: {
      type: "woodwind",
      pics: ["s-l1600.jpg", "s-l1600 (1).jpg", "s-l1600 (2).jpg",
      "s-l1600 (3).jpg", "s-l1600 (4).jpg", "s-l1600 (5).jpg",
      "s-l1600 (6).jpg", "s-l1600 (7).jpg", "s-l1600 (8).jpg", "s-l1600 (9).jpg",
    "s-l1600 (10).jpg", "s-l1600 (11).jpg"],
    brand: "Selmer",
    model: "1430P",
    ser: "61011",
    description: ["This is a used Selmer bass clarinet in good playing condition. ",
  "There are dings and wear from normal usage throughout. ",
"This instrument has been serviced by a professional repair technician. ",
"The pads appear to be original. The tenon cork is in good condition. ",
"It has been play tested and is ready to go on arrival. There is a case and no mouthpiece."],
shipping: "$40",
},
  }
  function createSpots(obj){
    let picArea = document.getElementById("pics");
    for (let item in obj){
      let area = document.createElement("div");
      area.setAttribute("class", "area");
      let focusPic = document.createElement("div");
      focusPic.setAttribute("class", "focusPicArea")
      area.appendChild(focusPic);
      let lightboxContent;
      for (let i = 0; i < obj[item].pics.length; i++){
        if (i==0){
          let pic = document.createElement("img");
          pic.setAttribute("src", "pictures/" + obj[item].pics[i]);
          pic.setAttribute("alt", "stuff");
          pic.setAttribute("class", "focusPic");
          pic.picNum = 0;
          focusPic.appendChild(pic);
          let lightbox = document.createElement("div");
          lightbox.setAttribute("class", "modal");
          // lightbox.setAttribute("id", "myModal");
          let close = document.createElement("span");
          close.setAttribute("class", "close cursor");
          close.addEventListener("click", closeModal);
          close.innerHTML = "&times;";
          lightbox.appendChild(close);
          lightboxContent = document.createElement("div");
          lightboxContent.setAttribute("class", "modal-content");
          lightbox.appendChild(lightboxContent);
          area.appendChild(lightbox);
        }
        let pic = document.createElement("img");
        pic.setAttribute("src", "pictures/" + obj[item].pics[i]);
        pic.setAttribute("alt", "stuff");
        pic.setAttribute("height", "40");
        pic.setAttribute("class", "pic");
        pic.picNum = i;
        // console.log(pic.picNum);
        area.appendChild(pic);
      }
      for (let i = 0; i < obj[item].pics.length; i++){
        let mySlide = document.createElement("div");
        mySlide.setAttribute("class", "mySlides");
        let slidePic = document.createElement("img");
        slidePic.setAttribute("src", "pictures/" + obj[item].pics[i]);
        mySlide.appendChild(slidePic);
        lightboxContent.appendChild(mySlide);
      }
      let prev = document.createElement("a");
      prev.addEventListener("click", plusSlides);
      prev.setAttribute("class", "prev");
      prev.value = -1;
      prev.innerHTML= "&#10094;";
      lightboxContent.appendChild(prev);
      let next = document.createElement("a");
      next.addEventListener("click", plusSlides);
      next.setAttribute("class", "next");
      next.innerHTML = "&#10095;";
      next.value = 1;
      lightboxContent.appendChild(next);
      for (let i = 0; i < obj[item].pics.length; i++){
        let thumbPlace = document.createElement("div");
        thumbPlace.setAttribute("class", "column");
        let thumbNail = document.createElement("img");
        thumbNail.setAttribute("class", "demo");
        thumbNail.setAttribute("src", "pictures/" + obj[item].pics[i]);
        thumbNail.picNum = i;
        thumbNail.addEventListener("click", setSlideIndex);
        thumbNail.setAttribute("alt", "stuff");
        thumbPlace.appendChild(thumbNail);
        lightboxContent.appendChild(thumbPlace);
      }

      let Brand = document.createElement("p");
      let BrandName = document.createTextNode("Brand: " + obj[item].brand);
      Brand.appendChild(BrandName);
      area.appendChild(Brand);
      let model = document.createElement("p");
      let modelNumber = document.createTextNode("Model Number: " + obj[item].model);
      model.appendChild(modelNumber);
      area.appendChild(model);
      let serial = document.createElement("p");
      let ser = document.createTextNode("Serial Number: " + obj[item].ser);
      serial.appendChild(ser);
      area.appendChild(serial);
      let description = document.createElement("p");
      let wordsArr = obj[item].description;
      let wordsVar = ""
      for (let i = 0; i < wordsArr.length; i++){
        wordsVar += wordsArr[i];
      }
      let words = document.createTextNode(wordsVar);
      description.appendChild(words);
      area.appendChild(description);
      picArea.appendChild(area);
    }
  }
  createSpots(test1);
  function changePic(event){
    // console.log(event.target.picNum);
    let picture = event.target.parentNode.childNodes[0];
    picture.removeChild(picture.childNodes[0]);
    let newPic = document.createElement("img");
    newPic.setAttribute("src", event.target.src);
    newPic.setAttribute("class", "focusPic");
    newPic.picNum = event.target.picNum;
    // console.log(newPic.picNum);
    newPic.addEventListener('click', openModal, false);
    newPic.addEventListener("click", currentSlide);
    picture.appendChild(newPic);
  }
  let picClass = document.getElementsByClassName("pic");
  for (let i = 0; i < picClass.length; i++) {
    picClass[i].addEventListener('click', changePic, false);
  }

function setSlideIndex(event){
  slideIndex = event.target.picNum;
  showSlides(slideIndex, event);
}

var currentDisplay;
  function openModal(event) {
    // console.log(event.target.parentNode.parentNode.childNodes[1])
event.target.parentNode.parentNode.childNodes[1].style.display = "block";
currentDisplay = event.target.parentNode.parentNode.childNodes[1];
  }

  // Close the Modal
  function closeModal() {
      currentDisplay.style.display = "none";
  }

  // showSlides(slideIndex, );

  // Next/previous controls
  function plusSlides(event) {
    let n = event.target.value;
    showSlides(slideIndex += n, event);
  }

  // Thumbnail image controls
  function currentSlide(event) {
    slideIndex = event.target.picNum;
    // console.log(event.target.picNum);
    showSlides(event.target.picNum, event);
  }

  function showSlides(n, event) {
    var i;
    console.log(event.target.parentNode.parentNode)
    //get slides to be the pictures in the area that was clicked.
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length - 1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // console.log(slides)
    slides[slideIndex].style.display = "block";
    slides[slideIndex].childNodes[0].className = "display"
    dots[slideIndex].className += " active";
  }

  let focusPicClass = document.getElementsByClassName("focusPic");
  console.log(focusPicClass);
  for (let i = 0; i < focusPicClass.length; i++) {
    focusPicClass[i].addEventListener('click', openModal);
    focusPicClass[i].addEventListener("click", currentSlide);
    };
  });
  // Why not just get the arguments from the target attribute of the event?
  //
  // Example:
  //
  // var someInput = document.querySelector('input');
  // someInput.addEventListener('click', myFunc, false);
  // someInput.myParam = 'This is my parameter';
  // function myFunc(evt)
  // {
  //   window.alert( evt.target.myParam );
  // }

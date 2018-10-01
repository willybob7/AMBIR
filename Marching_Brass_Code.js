
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
document.addEventListener("DOMContentLoaded", function() {

  const test1 = {
    item1: {
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
    }
  }
  function createSpots(obj){
    let picArea = document.getElementById("pics");
    for (let item in obj){
      let area = document.createElement("div");
      area.setAttribute("class", "area");
      let focusPic = document.createElement("div");
      focusPic.setAttribute("class", "focusPicArea")
      area.appendChild(focusPic);

      for (let i = 0; i < obj[item].pics.length; i++){
        if (i==0){
          let pic = document.createElement("img");
          pic.setAttribute("src", "pictures/" + obj[item].pics[i]);
          pic.setAttribute("alt", "stuff");
          pic.setAttribute("class", "focusPic");
          focusPic.appendChild(pic);
          let lightbox = document.createElement("div");
          lightbox.setAttribute("id", "myModal");
          lightbox.setAttribute("class", "modal");
          let close = document.createElement("span");
          close.setAttribute("class", "close cursor");
          close.addEventListener("click", closeModal);
          let x = document.createTextNode("&times;");
          close.appendChild(x);
          lightbox.appendChild(close);
          let lightboxContent = document.createElement("div");
          lightboxContent.setAttribute("class", "modal-content");
          lightbox.appendChild(lightboxContent);
        }
        let pic = document.createElement("img");
        pic.setAttribute("src", "pictures/" + obj[item].pics[i]);
        pic.setAttribute("alt", "stuff");
        pic.setAttribute("height", "40");
        pic.setAttribute("class", "pic");
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
      prev.addEventListener("click", function() {
        showSlides(slideIndex += n);
      });
      prev.setAttribute("class", "prev");
      let left = document.createTextNode("&#10094;");
      prev.appendChild(left);
      lightboxContent.appendChild(prev);
      let next = document.createElement("a");
      next.addEventListener("click", function () {
        showSlides(slideIndex += n);
      });
      next.setAttribute("class", "next");
      let right = document.createTextNode("&#10095;");
      next.appendChild(right);
      lightboxContent.appendChild(next);
      for (let i = 0; i < obj[item].pics.length; i++){
        let thumbPlace = document.createElement("div");
        thumbPlace.setAttribute("class", "column");
        let thumbNail = document.createElement("img");
        thumbNail.setAttribute("class", "demo");
        thumbNail.setAttribute("src", "pictures/" + obj[item].pics[i]);
        thumbNail.addEventListener("click", function(n){
            showSlides(slideIndex = n);
          });
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
    let picture = event.target.parentNode.childNodes[0];
    picture.removeChild(picture.childNodes[0]);
    let newPic = document.createElement("img");
    newPic.setAttribute("src", event.target.src);
    newPic.setAttribute("class", "focusPic");
    newPic.addEventListener('click', openModal, false);
    newPic.addEventListener("click", function(){
        showSlides(slideIndex = n);
      });
    picture.appendChild(newPic);
  }
  let picClass = document.getElementsByClassName("pic");
  for (let i = 0; i < picClass.length; i++) {
    picClass[i].addEventListener('click', changePic, false);
  }




  function openModal() {
    if (document.getElementById("myModal")!==null){
      document.getElementById('myModal').style.display = "block";

    }
  }

  // Close the Modal
  function closeModal() {
    if (document.getElementById("myModal")!==null){

      document.getElementById('myModal').style.display = "none";
    }
  }

  var slideIndex = 1;
  // showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  let focusPicClass = document.getElementsByClassName("focusPic");
  console.log(focusPicClass);
  for (let i = 0; i < focusPicClass.length; i++) {
    focusPicClass[i].addEventListener('click', openModal);
    focusPicClass[i].addEventListener("click", function(n){
        showSlides(slideIndex = n);
      });
    };
  });

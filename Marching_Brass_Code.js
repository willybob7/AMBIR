
var test1; 
      var config = {
        databaseURL: "https://spencer-s-site.firebaseio.com",
        storageBucket: "spencer-s-site.appspot.com",
        messagingSenderId: "614107400154"
      };
      firebase.initializeApp(config);
      
      firebase.database().ref("items").on("value", gotData, errData);
      function gotData(data){
        test1 = data.val()
        createSpots(test1);
        changePicListener();
        focusPicListener();
      }
      function errData(err){
        console.log(err);
      }
      

      function createSpots(obj){
        let picArea = document.getElementById("pics");
        for (let item in obj){
          let area = document.createElement("div");
          area.setAttribute("class", "area");
          let p = document.createElement("p");
          p.innerHTML = "Click to expand";
          p.setAttribute("class", "p");
      area.appendChild(p);
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
      var thumbPlace;
      for (let i = 0; i < obj[item].pics.length; i++){
        if (i === 0){
          thumbPlace = document.createElement("div");
          thumbPlace.setAttribute("class", "column");
        }
        let thumbNail = document.createElement("img");
        thumbNail.setAttribute("class", "demo");
        thumbNail.setAttribute("src", "pictures/" + obj[item].pics[i]);
        thumbNail.picNum = i;
        thumbNail.addEventListener("click", setSlideIndex);
        thumbNail.setAttribute("alt", "stuff");
        thumbPlace.appendChild(thumbNail);
      }
      lightboxContent.appendChild(thumbPlace);
      
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
      
      let buyButton = obj[item].buyButton;
      let buyHtml = "";
      let button;
      if (buyButton != undefined){
        for (let i = 0; i < buyButton.length; i++){
          buyHtml += buyButton[i];
        }
        console.log(buyHtml);
        button = document.createElement("div");
        button.innerHTML = buyHtml;
        area.appendChild(button);
      }
      // area.appendChild(buyHtml);
      picArea.appendChild(area);
    }
  }
  function changePic(event){
    let picture = event.target.parentNode.childNodes[1];
    picture.removeChild(picture.childNodes[0]);
    let newPic = document.createElement("img");
    newPic.setAttribute("src", event.target.src);
    newPic.setAttribute("class", "focusPic");
    newPic.picNum = event.target.picNum;
    newPic.addEventListener('click', openModal);
    newPic.addEventListener("click", currentSlide);
    picture.appendChild(newPic);
  }
  function changePicListener (){
    let picClass = document.getElementsByClassName("pic");
    for (let i = 0; i < picClass.length; i++) {
      picClass[i].addEventListener('click', changePic);
    }
  }

  var slideIndex = 1;
  function setSlideIndex(event){
    slideIndex = event.target.picNum;
    showSlides(slideIndex, event);
  }
  var currentDisplay;
  function openModal(event) {
    event.target.parentNode.parentNode.childNodes[2].style.display = "block";
    currentDisplay = event.target.parentNode.parentNode.childNodes[2];
  }

  function closeModal() {
    currentDisplay.style.display = "none";
  }

  function plusSlides(event) {
    let n = event.target.value;
    showSlides(slideIndex += n, event);
  }

  function currentSlide(event) {
    slideIndex = event.target.picNum;
    showSlides(event.target.picNum, event);
  }

  function showSlides(n, event) {
    var i, slides;
    slides = event.target.parentNode.parentNode.getElementsByClassName("mySlides");
    var dots = event.target.parentNode.parentNode.getElementsByClassName("demo");
    if (n > slides.length - 1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    slides[slideIndex].childNodes[0].className = "display"
    dots[slideIndex].className += " active";
  }
  function focusPicListener(){
    let focusPicClass = document.getElementsByClassName("focusPic");
    for (let i = 0; i < focusPicClass.length; i++) {
    focusPicClass[i].addEventListener('click', openModal);
    focusPicClass[i].addEventListener("click", currentSlide);
    }
  }

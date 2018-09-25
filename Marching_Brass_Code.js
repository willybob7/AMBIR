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
    focusPic.setAttribute("id", "focusPic");
    area.appendChild(focusPic);
    for (let i = 0; i < obj[item].pics.length; i++){
      if (i==0){
        let pic = document.createElement("img");
        pic.setAttribute("src", "pictures/" + obj[item].pics[i]);
        pic.setAttribute("alt", "stuff");
        focusPic.appendChild(pic);
      }
      let pic = document.createElement("img");
      pic.setAttribute("src", "pictures/" + obj[item].pics[i]);
      pic.setAttribute("alt", "stuff");
      pic.setAttribute("height", "40");
      pic.setAttribute("class", "pic");
      area.appendChild(pic);
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
  let picture = document.getElementById('focusPic');
  picture.removeChild(picture.childNodes[0]);
  let newPic = document.createElement("img");
  newPic.setAttribute("src", event.target.src);
  picture.appendChild(newPic);
}
let picClass = document.getElementsByClassName("pic");
for (let i = 0; i < picClass.length; i++) {
    picClass[i].addEventListener('click', changePic, false);
}

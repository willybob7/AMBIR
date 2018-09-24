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
    for (let i = 0; i < obj[item].pics.length; i++){
      let pic = document.createElement("img");
      pic.setAttribute("src", "pictures/" + obj[item].pics[i]);
      pic.setAttribute("alt", "stuff");
      // pic.setAttribute("width", "304");
      pic.setAttribute("height", "30");
      area.appendChild(pic);
      if (i==0){
        let space = document.createElement("br");
        area.appendChild(space);
      }
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
// function addPics(pics){
//   let picArea = document.getElementById('pics');
//   for (var i = 0; i < pics.length; i++){
//     let pic = document.createElement("img");
//     pic.setAttribute("src", pics[i]);
//     pic.setAttribute("alt", "stuff");
//     // pic.setAttribute("width", "304");
//     pic.setAttribute("height", "80");
//     picArea.appendChild(pic);
//   }
// }
createSpots(test1);
// addPics(test1.pics);

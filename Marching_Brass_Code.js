const test1 = {
  pics: ["store1.jpg", "store2.jpg","store3.jpg",
"store4.jpg","store5.jpg","store6.jpg","store7.jpg",
"store8.jpg","store9.jpg","store10.jpg","store11.jpg",
"store12.jpg"],
ser: 904730,
model: 1120,
brand: "King",
description: ["This is a King model 1120 Marching mellophone in ready to play condition. ",
"The serial number is 904730. It has been ultrasonically cleaned and serviced ",
"for this auction by a professional repair technician. All slides and valves ",
"work freely and easily. There are dings, scratches and wear from normal usage. ",
"There is a case and a Holton 7C mouthpiece."],
shipping: "$35",
}

function addPics(pics){
  let picArea = document.getElementById('pics');
  for (var i = 0; i < pics.length; i++){
    let pic = document.createElement("img");
    pic.setAttribute("src", pics[i]);
    pic.setAttribute("alt", "stuff");
    // pic.setAttribute("width", "304");
    pic.setAttribute("height", "80");
    picArea.appendChild(pic);
  }
}
addPics(test1.pics);

var age = 30; //number
var name = "naza"; //string
var isNight = true; //boolean
var isDarkTheme = false; //boolean
var fruit = "apple";
var fruits = ["apple", "orange", "pear", "strawberry"]; //array
var numbers = [1, 10, 7, 10000];

// function doFruits(fruit)
// {console.log(fruit)

// }
// fruits.forEach(doFruits)

// fruits.forEach(function(text){
//     var li = document.createElement("li")
//     li.textContent = text
//     li.style.border = "3px solid"
//     li.style.margin = "10px"
//     li.style.listStyleType = "none"
//     li.style.padding = "5px"
//     document.querySelector("ul").appendChild(li)
// });

var images = [
  "https://picsum.photos/id/1040/200",
  "https://picsum.photos/id/1041/200",
  "https://picsum.photos/id/1042/200",
  "https://picsum.photos/id/1043/200",
  "https://picsum.photos/id/1044/200",
  "https://picsum.photos/id/1045/200",
  "https://picsum.photos/id/1047/200",
];

function addImage() {
  images.forEach(function (link) {
   var image =  document.createElement("img");
   image.src = link
   document.querySelector("figure").appendChild(image)

  });
}

var name = "john"
var surname = "blogs"

var fullname = name + " " + surname;
console.log(fullname)


for(var i = 1;i < 10;i++){
 var image = document.createElement("img");
 image.src="https://picsum.photos/id/" + i + "/200";
 document.body.appendChild(image)
}
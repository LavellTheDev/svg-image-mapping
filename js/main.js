// var hideImages = document.querySelectorAll('.clickableImage');

 // hideImages[0].classList.add('hidden');

 function toggleBackBay(){
   var x = document.getElementById('backbayCard');
   if (x.style.display === "none") {
     x.style.display = "block"
   }else{
     x.style.display = "none";
   }
 }

function toggleBeaconHill(){
  var x = document.getElementById('beaconhillCard');
  if (x.style.display === "none") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

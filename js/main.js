var hideImages = document.querySelectorAll('.clickableImage');

 hideImages[0].classList.add('hidden');

function toggleBeaconHill(){
  var x = document.getElementById('beaconhillCard');
  if (x.style.display === "none") {
    x.style.display = "inline"
  }else{
    x.style.display = "none";
  }
  console.log('toggleBeacon')
}

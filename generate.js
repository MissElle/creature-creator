//These variables hold the div information that will hold the images and create the creature - keeping them global in case I want to add other functions to the form later
 
var contentHead = document.getElementById('creature-head');
var contentBody = document.getElementById('creature-body');
var contentTail = document.getElementById('tail');
var contentWings = document.getElementById('wings');
var contentBreasts = document.getElementById('breasts');
var contentHorns = document.getElementById('horns');
 
function createCreature () {
//These are all the elements that will change text only
  var contentName = document.getElementById('name');
  var contentGenderRace = document.getElementById('gender-race');
  var contentDescription = document.getElementById('description');
 
  contentName.innerHTML = document.creature.name.value;
  contentGenderRace.innerHTML = document.creature.gender.value + ' ' + document.creature.race.value;
  contentDescription.innerHTML = document.creature.description.value;
 
//These variables will pull the values from the form
  var creatureColor = document.creature.color.value;
  var creatureSkin = document.creature.skin.value;
  var creatureTerrain = document.creature.terrain.value;
  var creatureFace = document.creature.face.value;
  var creatureBody = document.creature.body.value;
  var creatureAttTail = document.creature.atttail;
  var creatureAttWings = document.creature.attwings;
  var creatureAttBreasts = document.creature.attbreasts;
  var creatureAttHorns = document.creature.atthorns;
  var creatureAttBrain = document.creature.attbrain;
 
//This will change the background to one matching the terrain value
  var layoutBackground = document.getElementById('generator');
  layoutBackground.style.backgroundImage = 'url(images/background-' + creatureTerrain + '.png)';
  event.preventDefault();
 
//The values will go into the images naming convention to generate the content of the creature
 
if (creatureFace !== '') {
  contentHead.innerHTML = '<img src="images/head-' + creatureSkin + '-' + creatureTerrain + '-' + creatureFace + '.png">';
}
 
if (creatureBody !=='') {
  contentBody.innerHTML = '<img src="images/body-' + creatureSkin + '-' + creatureTerrain + '-' + creatureBody + '.png">';
}
 
if (creatureAttTail.checked == true) {
  contentTail.innerHTML = '<img src="images/tail-' + creatureSkin + '-' + creatureTerrain + '.png">';
}else {
  contentTail.innerHTML = '';
}
 
if (creatureAttWings.checked == true) {
  contentWings.innerHTML = '<img src="images/wings-' + creatureSkin + '-' + creatureTerrain + '.png">';
}else {
  contentWings.innerHTML = '';
}
 
if (creatureAttBreasts.checked == true) {
  contentBreasts.innerHTML = '<img src="images/breasts-' + creatureSkin + '-' + creatureTerrain + '-' + creatureBody + '.png">';
}else {
  contentBreasts.innerHTML = '';
}
 
if (creatureAttHorns.checked == true) {
  contentHorns.innerHTML = '<img src="images/horns-' + creatureSkin + '-' + creatureTerrain + '-' + creatureFace + '.png">';
}else {
  contentHorns.innerHTML = '';
}
 
//This statement forgoes all stylings and makes your creature a floating brain
if (creatureAttBrain.checked == true) {
  contentHead.innerHTML = '';
  contentTail.innerHTML = '';
  contentWings.innerHTML = '';
  contentBreasts.innerHTML = '';
  contentHorns.innerHTML = '';
  contentBody.innerHTML = '<img src="images/brain.png">';
}            
 
}
 
//This function will change the color of the sprite image based on the user selection
 
function colorCreature(imgElement, tintcolor) {
  var imgList = document.images;
  var canvas = document.createElement('canvas');
  canvas.width = imgElement.offsetWidth;
  canvas.height = imgElement.offsetHeight;
  var x = imgElement.width;
  var y = imgElement.height;
 
  var ctx = canvas.getContext('2d');
  ctx.drawImage(imgElement,0,0);
 
  var map = ctx.getImageData(0,0,x,y);
  var imdata = map.data;
 
  for(var i=0; i<imgList.length; i++) {
    console.log(imgList.length);
  }
 
  imgElement.src = canvas.toDataURL();
 
}
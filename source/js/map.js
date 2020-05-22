ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 17,
    controls: [],
});

let coords = [
  [59.938635, 30.323118]
],

myCollection = new ymaps.GeoObjectCollection({}, {
  draggable: false,
  iconLayout: "default#image",
  iconImageHref: "./img/map-pin.png",
  iconImageSize: [82, 70],
  iconImageOffset: [-35, -52]
});

for (let i = 0; i < coords.length; i++) {
  myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable("scrollZoom");
};

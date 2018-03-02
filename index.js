const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  var newDrivers = drivers.slice();
  newDrivers.push(name);
}
function prependDriver(name){

}
function removeLastDriver(){
  var newArray = drivers.slice(-1,1);
  return newArray;
}
function removeFirstDriver(){
  var newArray = drivers.slice(0,1);
  return newArray;
}

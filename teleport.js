//This script teleports you anywhere even past the max coordinates you can usually teleport to! Do teleport() in console, or teleport(xcoord,ycoord). Leave a field empty to not change it. Type in "max" or ""min" to go to the world borders.
menu.addOption("Ultra teleport",
function teleport(x=null, y=null){
  if(!x && !y){
    const empty=true;
    var px=prompt('Enter your X coordinates (none if you want to keep the same, "max" or "min" for normal teleport limits.)',-positionX / tileW / 4);
    if(px==null) return;
  }else{
    px=x;
    py=y;
  }
  if(px=="max"||px=="maximum"||px=="maxi"||px=="maxx")
  {
    px=14073748835532;
  }
  else if(px=="min"||px=="minimum"||px=="mini"||px=="minx"){
    px=-14073748835532;
  }
  else if(px=="maxy")
  {
    px=15637498706147;
  }
  else if(px=="miny"){
    px=-15637498706147;
  }
  else if(px=="maxx")
  {
    py=14073748835532;
  }
  else if(px=="minx"){
    py=-14073748835532;
  }
  else if(px=="far"){
      px=2251799813685248
  }
  else{
    px=parseFloat(px);
    if(isNaN(px)){
      console.log("No number detected for X, not changing X coords..");
    }
  }
  if(!x && !y){
    var py=prompt('Enter your Y coordinates (none if you want to keep the same, "max" or "min" for normal teleport limits, "far" or "-far" for the farlands.)',positionY / tileH / 4);
    if(py==null) return;
  }
  if(py=="max"||py=="maximum"||py=="maxi"||py=="maxy")
  {
    py=15637498706147;
  }
  else if(py=="min"||py=="minimum"||py=="mini"||py=="miny"){
    py=-15637498706147;
  }
  else if(py=="far"){
      py=2251799813685248
  }
  else if(px=="-far"){
      px=-2251799813685248
  }
  else if(py=="-far"){
      py=-2251799813685248
  }
  else{
    py=parseFloat(py);
    if(isNaN(py)){
      console.log("No number detected for Y, not changing Y coords..");
    }
  }
  if (x==px && y==py){
    return ('You are already there!');
  }else if(isNaN(px)&&isNaN(py)){
    return('No coordinates given. Nothing happens...');
  }
  console.log("✨Teleporting you...");
  if(!isNaN(px)){positionX= -(px*tileW*4);}
  if(!isNaN(py)) {positionY= (py*tileH*4);}
  updateCoordDisplay()
  return("✨Teleported you! If the coords/window do not update, try moving it!");
}
);

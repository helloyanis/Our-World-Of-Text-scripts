//This script can write a secret message on the OWOT grid! Then you get a link to that message, so you can share 
menu.addOption("Secret message", function secret(){
  var text=prompt("Enter your text...");
  if (text==null) return;
  if(window.confirm("Are you sure about this? You will have a pop-up with the adress to see your secret message. Keep in mind that if other people write on your text, it will mess your message up!")){
    x1=cursorCoords[0]
    x2=cursorCoords[0]+Math.ceil(128/text.length)
    y1=cursorCoords[1]
    y2=cursorCoords[1]
  }else{
    return
  }
  cursorCoords=[x1,y1,0,0]
  for(let i = 0; i < text.length; i++){
    writeChar(text[i])
    if (cursorCoords[2]==0){
      if(cursorCoords[3]==7){
        cursorCoords=[cursorCoords[0],cursorCoords[1],0,0]
      }else{
        cursorCoords=[cursorCoords[0]-1,cursorCoords[1],0,cursorCoords[3]+1]
      }
    }
  }
  url="https://ourworldoftext.com/?fetch=1&min_tileX="+x1+"&max_tileX="+x2+"&min_tileY="+y1+"&max_tileY="+y2+"&content_only=true&concat=true"
  alert(url)
});

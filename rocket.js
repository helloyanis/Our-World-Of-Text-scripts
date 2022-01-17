//This script launches a rocket! Watch it go higher and higher!
function truecoords() {
  return [cursorCoords[0] * 16 + cursorCoords[2], cursorCoords[1] * 8 + cursorCoords[3]]
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
rocketspeed = 200
menu.addOption("Send a rocket",
  async function rocket(wait = null) {
    if (!wait) wait = rocketspeed
    dist = 0
    x = cursorCoords[0]
    try {
      if (launched) {
        launched = false
        text = "This rocket reached its destination!"
        for (let i = 0; i < text.length; i++) {
          await writeCharToXY(text[i], YourWorld.Color, rocketx + i, truecoords()[1] - 1)
        }
        return

      } else {
        launched = true
      }
    } catch{
      launched = true
    }
    rocketx = truecoords()[0]
    char = []
    distlen = []
    while (launched) {
      text = ["This rocket travelled " + dist + " tiles.", "   /\\    ", "  (  )  ", "  (  )  ", " /|/\\|\\ ", "/_||||_\\"]
      distlen.push(text[0].length)

      for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text[i].length; j++) {
          if (i == 0) {
            char.push(getCharInfoXY(rocketx + j, truecoords()[1] + i))
            console.log(char)
            console.log(getCharInfoXY(rocketx + j, truecoords()[1] + i).char)
          }
          writeCharToXY(text[i][j], YourWorld.Color, rocketx + j, truecoords()[1] + i)
        }
      }

      await sleep(wait)
      if (launched) {
        for (let i = 0; i < text[0].length; i++) {
          writeCharToXY(" ", YourWorld.Color, rocketx + i, truecoords()[1])
        }
        if (dist >= text.length - 1) {
          console.log("ok!!")

          for (let i = 0; i < distlen[0]; i++) {
            tow = char.shift()

            writeCharToXY(tow.char, tow.color, rocketx + i, truecoords()[1] + text.length - 1)

          }
          distlen.shift()
        } else {
          for (let i = 0; i < text[text.length - 1].length; i++) {

            writeCharToXY(" ", YourWorld.color, rocketx + i, truecoords()[1] + text.length - 1)
          }
        }
        moveCursor("up")
        dist++
      } else return

    }
  }
);
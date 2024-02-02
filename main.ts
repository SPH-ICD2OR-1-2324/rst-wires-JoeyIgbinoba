namespace SpriteKind {
    export const Wire = SpriteKind.create()
}
// WireList get value at 2: means the WIrelist being 0,1,2,3,4,5, the 2 value just mean the third wire because it starts at 0 so 2 is just really 3.
// 
// = 1 means color
// 
// 
// Wirelist means all the wires, and by picking wire 4 we really mean wire 3 because it starts and 0. Then the = # means the color type. If talking about color black we would be using number 4 to represent it.
// 0 - red
// 1- white
// 2 - blue
// 3- yellow 
// 4 - black
// Name of the variables i gave such Red2, or Blue8 are just Variables to count how many reds or blues that are present in the array of wires.
// If there are move then red wires you use
// Red2 > 1 
// Cut last wire
// I also added a reset button for the fun of it
// I added a serial number variable, which would be another component in disarming the bomb, by using true statements
// I added a Button pressed which after the wirecount has been chosen it will determine the count of wires and send the user to the needed messages to disarm the bomb.
function wirecounts_for_4 () {
    RED2 = 0
    White1 = 0
    Blue8 = 0
    Yellow5 = 0
    Black15 = 0
    for (let value of WireList) {
        if (value == 4) {
            Black15 += 1
        } else if (value == 0) {
            RED2 += 1
        } else if (value == 2) {
            Blue8 += 1
        } else if (value == 3) {
            Yellow5 += 1
        } else if (value == 1) {
            White1 += 1
        }
    }
    if (SerialNumber % 2 == 1) {
        OddSerialNumber = true
    }
    if (RED2 > 1 && OddSerialNumber == true) {
        game.splash("Cut last red wire")
    } else if (WireList[3] == 3 && RED2 == 0) {
        game.splash("Cut first wire!")
    } else if (Blue8 == 1) {
        game.splash("Cut first wire")
    } else if (Yellow5 > 1) {
        game.splash("Cut last wire")
    } else {
        game.splash("Cut second it")
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorPos += -1
    if (cursorPos < 0) {
        cursorPos = wireCount - 1
    }
    UpdateCursor()
})
function UpdateCursor () {
    cursor.top = Math.floor(120 / Ratio) * (cursorPos + 1) - 2
}
// WireList get value at 2: means the WIrelist being 0,1,2,3,4,5, the 2 value just mean the third wire because it starts at 0 so 2 is just really 3.
// 
// = 1 means color
// 
// 
// Wirelist means all the wires, and by picking wire 4 we really mean wire 3 because it starts and 0. Then the = # means the color type. If talking about color black we would be using number 4 to represent it.
// 0 - red
// 1- white
// 2 - blue
// 3- yellow 
// 4 - black
// Name of the variables i gave such Red2, or Blue8 are just Variables to count how many reds or blues that are present in the array of wires.
// If there are move then red wires you use
// Red2 > 1 
// Cut last wire
// I also added a reset button for the fun of it
// I added a serial number variable, which would be another component in disarming the bomb, by using true statements
// I added a Button pressed which after the wirecount has been chosen it will determine the count of wires and send the user to the needed messages to disarm the bomb.
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
function startPhase () {
    while (wireCount < 3 || wireCount > 6) {
        wireCount = game.askForNumber("# of wires? (3-6)", 1)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // WireList get value at 2: means the WIrelist being 0,1,2,3,4,5, the 2 value just mean the third wire because it starts at 0 so 2 is just really 3.
    // 
    // = 1 means color
    // 
    // 
    // Wirelist means all the wires, and by picking wire 4 we really mean wire 3 because it starts and 0. Then the = # means the color type. If talking about color black we would be using number 4 to represent it.
    // 0 - red
    // 1- white
    // 2 - blue
    // 3- yellow 
    // 4 - black
    // Name of the variables i gave such Red2, or Blue8 are just Variables to count how many reds or blues that are present in the array of wires.
    // If there are move then red wires you use
    // Red2 > 1 
    // Cut last wire
    // I also added a reset button for the fun of it
    // I added a serial number variable, which would be another component in disarming the bomb, by using true statements
    // I added a Button pressed which after the wirecount has been chosen it will determine the count of wires and send the user to the needed messages to disarm the bomb.
    if (wireCount == 3) {
        wirecounts_for_3()
    } else if (wireCount == 4) {
        wirecounts_for_4()
    } else if (wireCount == 5) {
        wirecounts_for_5()
    } else if (wireCount == 6) {
        wirecounts_for_6()
    }
})
function InitSerial () {
    SerialNumber = game.askForNumber("Last Digit of Serial Number", 1)
}
function InitWirePhase () {
    InitColours()
    InitCursor()
}
// WireList get value at 2: means the WIrelist being 0,1,2,3,4,5, the 2 value just mean the third wire because it starts at 0 so 2 is just really 3.
// 
// = 1 means color
// 
// 
// Wirelist means all the wires, and by picking wire 4 we really mean wire 3 because it starts and 0. Then the = # means the color type. If talking about color black we would be using number 4 to represent it.
// 0 - red
// 1- white
// 2 - blue
// 3- yellow 
// 4 - black
// Name of the variables i gave such Red2, or Blue8 are just Variables to count how many reds or blues that are present in the array of wires.
// If there are move then red wires you use
// Red2 > 1 
// Cut last wire
// I also added a reset button for the fun of it
// I added a serial number variable, which would be another component in disarming the bomb, by using true statements
// I added a Button pressed which after the wirecount has been chosen it will determine the count of wires and send the user to the needed messages to disarm the bomb.
function wirecounts_for_5 () {
    RED2 = 0
    White1 = 0
    Blue8 = 0
    Yellow5 = 0
    Black15 = 0
    for (let value of WireList) {
        if (value == 4) {
            Black15 += 1
        } else if (value == 0) {
            RED2 += 1
        } else if (value == 2) {
            Blue8 += 1
        } else if (value == 3) {
            Yellow5 += 1
        } else if (value == 1) {
            White1 += 1
        }
    }
    if (SerialNumber % 2 == 1) {
        OddSerialNumber = true
    }
    if (WireList[4] == 4 && OddSerialNumber == true) {
        game.splash("Cut fourth wire")
    } else if (Yellow5 > 1 && RED2 == 1) {
        game.splash("Cut first wire")
    } else if (Black15 == 0) {
        game.splash("Cut second wire")
    } else {
        game.splash("Cut first it")
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    WireList[cursorPos] = WireList[cursorPos] - 1
    if (WireList[cursorPos] < 0) {
        WireList[cursorPos] = colourList.length - 1
    }
    WireSprites[cursorPos].fill(colourList[WireList[cursorPos]])
    WireSprites[cursorPos].drawRect(0, 0, 160, 5, 15)
    sprite_list = sprites.allOfKind(SpriteKind.Wire)
    for (let value of sprite_list) {
        if (value.top == Math.floor(120 / Ratio) * (cursorPos + 1)) {
            value.destroy()
        }
    }
    mySprite2 = sprites.create(WireSprites[cursorPos], SpriteKind.Wire)
    mySprite2.top = Math.floor(120 / Ratio) * (cursorPos + 1)
})
function InitCursor () {
    mySprite = img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `
    mySprite.drawRect(0, 0, 160, 9, 10)
    mySprite.drawRect(0, 1, 160, 7, 10)
    cursor = sprites.create(mySprite, SpriteKind.Wire)
    cursor.top = Math.floor(120 / Ratio) - 2
    cursorPos = 0
}
function wirecounts_for_3 () {
    RED2 = 0
    Blue8 = 0
    for (let value of WireList) {
        if (value == 0) {
            RED2 += 1
        }
        if (value == 2) {
            Blue8 += 1
        }
    }
    // WireList get value at 2: means the WIrelist being 0,1,2,3,4,5, the 2 value just mean the third wire because it starts at 0 so 2 is just really 3.
    // 
    // = 1 means color
    // 
    // 
    // Wirelist means all the wires, and by picking wire 4 we really mean wire 3 because it starts and 0. Then the = # means the color type. If talking about color black we would be using number 4 to represent it.
    // 0 - red
    // 1- white
    // 2 - blue
    // 3- yellow 
    // 4 - black
    // Name of the variables i gave such Red2, or Blue8 are just Variables to count how many reds or blues that are present in the array of wires.
    // If there are move then red wires you use
    // Red2 > 1 
    // Cut last wire
    // I also added a reset button for the fun of it
    // I added a serial number variable, which would be another component in disarming the bomb, by using true statements
    // I added a Button pressed which after the wirecount has been chosen it will determine the count of wires and send the user to the needed messages to disarm the bomb.
    if (RED2 == 0) {
        game.splash("Cut the second wire")
    } else if (WireList[2] == 1) {
        game.splash("Cut last white wire")
    } else if (Blue8 > 1) {
        game.splash("Cut the last blue wire that appears.")
    } else {
        game.splash("Cut last wire")
    }
}
function InitColours () {
    colourList = [
    2,
    1,
    8,
    5,
    15
    ]
    WireList = []
    Ratio = wireCount + 1
    WireSprites = []
    for (let index = 0; index <= wireCount - 1; index++) {
        WireList.push(0)
        mySprite = img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `
        mySprite.fill(colourList[WireList[index]])
        mySprite.drawRect(0, 0, 160, 5, 15)
        WireSprites.push(mySprite)
        mySprite2 = sprites.create(mySprite, SpriteKind.Wire)
        mySprite2.top = Math.floor(120 / Ratio) * (index + 1)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    WireList[cursorPos] = (WireList[cursorPos] + 1) % colourList.length
    WireSprites[cursorPos].fill(colourList[WireList[cursorPos]])
    WireSprites[cursorPos].drawRect(0, 0, 160, 5, 15)
    sprite_list = sprites.allOfKind(SpriteKind.Wire)
    for (let value of sprite_list) {
        if (value.top == Math.floor(120 / Ratio) * (cursorPos + 1)) {
            value.destroy()
        }
    }
    mySprite2 = sprites.create(WireSprites[cursorPos], SpriteKind.Wire)
    mySprite2.top = Math.floor(120 / Ratio) * (cursorPos + 1)
})
// WireList get value at 2: means the WIrelist being 0,1,2,3,4,5, the 2 value just mean the third wire because it starts at 0 so 2 is just really 3.
// 
// = 1 means color
// 
// 
// Wirelist means all the wires, and by picking wire 4 we really mean wire 3 because it starts and 0. Then the = # means the color type. If talking about color black we would be using number 4 to represent it.
// 0 - red
// 1- white
// 2 - blue
// 3- yellow 
// 4 - black
// Name of the variables i gave such Red2, or Blue8 are just Variables to count how many reds or blues that are present in the array of wires.
// If there are move then red wires you use
// Red2 > 1 
// Cut last wire
// I also added a reset button for the fun of it
// I added a serial number variable, which would be another component in disarming the bomb, by using true statements
// I added a Button pressed which after the wirecount has been chosen it will determine the count of wires and send the user to the needed messages to disarm the bomb.
function wirecounts_for_6 () {
    RED2 = 0
    White1 = 0
    Blue8 = 0
    Yellow5 = 0
    Black15 = 0
    for (let value of WireList) {
        if (value == 4) {
            Black15 += 1
        } else if (value == 0) {
            RED2 += 1
        } else if (value == 2) {
            Blue8 += 1
        } else if (value == 3) {
            Yellow5 += 1
        } else if (value == 1) {
            White1 += 1
        }
    }
    if (SerialNumber % 2 == 1) {
        OddSerialNumber = true
    }
    if (Yellow5 == 0 && OddSerialNumber == true) {
        game.splash("Cut third wire")
    } else if (Yellow5 == 1 && White1 >= 1) {
        game.splash("Cut fourth wire")
    } else if (RED2 == 0) {
        game.splash("Cut last wire")
    } else {
        game.splash("Cut fourth wire")
    }
}
sprites.onCreated(SpriteKind.Wire, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorPos += 1
    cursorPos = cursorPos % wireCount
    UpdateCursor()
})
let mySprite: Image = null
let mySprite2: Sprite = null
let sprite_list: Sprite[] = []
let WireSprites: Image[] = []
let colourList: number[] = []
let Ratio = 0
let cursor: Sprite = null
let cursorPos = 0
let OddSerialNumber = false
let SerialNumber = 0
let WireList: number[] = []
let Black15 = 0
let Yellow5 = 0
let Blue8 = 0
let White1 = 0
let RED2 = 0
let wireCount = 0
wireCount = 0
enum phase {start, wire, solve}
let state:phase=phase.start
startPhase()
if (wireCount > 3) {
    InitSerial()
}
state += 1
scene.setBackgroundColor(1)
InitWirePhase()

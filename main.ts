controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -100)
    pause(150)
    mySprite.setVelocity(0, 100)
})
let toppipe2: Sprite = null
let toppipe1: Sprite = null
let gapbottom = 0
let gaptop = 0
let mySprite: Sprite = null
game.splash("Welcome to the game.", "Press A to start")
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setVelocity(0, 100)
game.setGameOverMessage(false, "GAME OVER!")
info.setScore(0)
game.splash("To play you need to press", "A or space key.")
game.onUpdateInterval(1500, function () {
    gaptop = randint(-30, -50)
    console.log("gaptop Position: " + gaptop)
    gapbottom = randint(100, 135)
    console.log("gapbottom Position: " + gapbottom)
    toppipe1 = sprites.create(assets.image`pipe0`, SpriteKind.Enemy)
    toppipe2 = sprites.create(assets.image`pipe1`, SpriteKind.Enemy)
    toppipe1.setPosition(0, gapbottom)
    toppipe2.setPosition(0, gapbottom)
    toppipe2.setVelocity(30, 0)
    toppipe1.setVelocity(30, 0)
})

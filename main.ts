controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . . . . 5 5 5 . . 
        . . . . . . . . . 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 9 9 9 5 . . . 
        . 5 5 5 9 9 9 9 9 9 9 9 5 2 2 2 
        2 5 9 9 9 9 9 9 9 9 9 9 5 . . . 
        2 5 9 9 9 9 9 9 9 9 9 5 5 . . . 
        . 5 5 5 9 9 9 9 9 9 9 5 2 2 2 2 
        . . . 5 5 5 9 9 9 9 9 5 . . . . 
        . . . . . 5 5 5 9 9 9 5 . . . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.setLife(3)
    otherSprite.destroy()
})
let enmy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.confetti.startScreenEffect()
mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 7 7 1 1 
    1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 
    1 1 1 1 1 7 7 7 7 1 1 5 3 2 2 2 
    1 1 7 7 7 7 1 1 1 1 5 5 3 2 2 2 
    1 7 7 1 1 1 1 1 1 1 5 1 1 1 1 1 
    2 7 1 1 1 1 1 1 1 1 5 1 1 1 1 1 
    1 7 7 1 1 1 1 1 1 1 5 1 1 1 1 1 
    1 1 7 7 7 1 1 1 1 1 5 1 1 1 1 1 
    1 1 1 1 7 7 1 1 1 1 5 1 1 1 1 1 
    1 1 1 1 1 7 7 7 7 1 5 1 1 1 1 1 
    1 1 1 1 1 1 7 7 7 7 5 3 3 2 2 2 
    1 1 1 1 1 1 1 1 7 7 7 3 3 2 2 2 
    1 1 1 1 1 1 1 1 1 7 7 7 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 7 7 7 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    enmy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 . . . 
        . . . . . . . . . 7 7 7 . . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . 7 7 2 7 7 . . . . 
        . . . . . . 7 2 2 2 7 7 . . . . 
        . . . . . 7 7 2 2 2 7 7 . . . . 
        . . . 7 7 7 2 2 2 2 7 7 . . . . 
        . . 7 7 7 7 7 2 2 2 7 7 . . . . 
        . . . . . 7 7 7 7 2 7 7 . . . . 
        . . . . . . 7 7 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 7 7 . . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . 7 7 . . . . 
        . . . . . . . . . . 7 7 . . . . 
        . . . . . . . . . . 7 7 . . . . 
        `, SpriteKind.Enemy)
    mySprite.y = scene.screenWidth()
    enmy.vx = -20
    enmy.y = randint(10, scene.screenWidth())
})

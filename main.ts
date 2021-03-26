scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 3 3 3 3 . . . 
    . . . . . . 3 3 3 . 3 . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . 3 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 3 . . . . . . . . . . 
    . . . 3 3 . . . . . . . . . . . 
    . . . . 3 3 . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`niveau1`)
scene.cameraFollowSprite(mySprite)

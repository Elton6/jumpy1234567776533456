//% color="#4ba660" icon="\uF118"
namespace hello {
    //% block
    export function playJumpy() {
        let player2: Sprite = null
        scene.setBackgroundColor(9)
        player2 = sprites.create(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 f 7 7 7 7 7 7 7 7 7 7 f 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 7 
            7 7 f f f f f f f f f f f f 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f
    `, SpriteKind.Player)
        scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile0
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
            game.over(false, effects.melt)
        })
        scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile1
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
            tiles.placeOnRandomTile(player2, assets.tile`
        myTile2
    `)
            tiles.setCurrentTilemap(tilemap`
        level2
    `)
        })
        controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
            if (player2.vy == 0) {
                player2.vy = -150
            }

        })
        scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile3
    `, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
            game.over(true)
        })

        controller.moveSprite(player2, 100, 0)
        scene.cameraFollowSprite(player2)
        player2.ay = 350
        tiles.setCurrentTilemap(tilemap`
    level1
`)
        tiles.placeOnRandomTile(player2, assets.tile`
    myTile2
`)


    }
}
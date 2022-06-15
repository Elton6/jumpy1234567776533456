def on_overlap_tile(sprite, location):
    game.over(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    tiles.place_on_random_tile(player2, assets.tile("""
        myTile2
    """))
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_a_pressed():
    if player2.vy == 0:
        player2.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile3(sprite3, location3):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile3)

player2: Sprite = None
scene.set_background_color(9)
player2 = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(player2, 100, 0)
scene.camera_follow_sprite(player2)
player2.ay = 350
tiles.set_current_tilemap(tilemap("""
    level1
"""))
tiles.place_on_random_tile(player2, assets.tile("""
    myTile2
"""))
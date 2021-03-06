input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.X, -1)
    music.playMelody("C5 - - - - - - - ", 500)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(Player.get(LedSpriteProperty.X), 3)
    basic.pause(250)
    for (let index = 0; index < 5; index++) {
        if (Bullet.isTouching(Enemy)) {
            Player.delete()
            Enemy.delete()
            music.playMelody("E G F G A F A G ", 303)
            game.addScore(1)
            Bullet.delete()
            Player = game.createSprite(2, 4)
            Enemy = game.createSprite(0, 0)
        } else if (Bullet.isTouching(enemys_bullet)) {
            enemys_bullet.delete()
            Bullet.delete()
        } else {
            Bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(250)
        }
    }
    Bullet.delete()
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.X, 1)
    music.playMelody("C5 - - - - - - - ", 500)
})
let Enemy_speed = 0
let sprite = 0
let enemys_bullet: game.LedSprite = null
let Bullet: game.LedSprite = null
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
music.playMelody("B A G B E C5 E C5 ", 500)
Enemy = game.createSprite(0, 0)
loops.everyInterval(60000, function () {
    game.addScore(1)
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        sprite = randint(0, 1)
        if (sprite == 0) {
            Enemy.change(LedSpriteProperty.X, 1)
            Enemy_speed = randint(0, 2)
            if (Enemy_speed == 0) {
                basic.pause(100)
            } else if (Enemy_speed == 1) {
                basic.pause(250)
            } else {
                basic.pause(500)
            }
        } else {
            enemys_bullet = game.createSprite(Enemy.get(LedSpriteProperty.X), 1)
            basic.pause(500)
            Enemy.change(LedSpriteProperty.X, 1)
            for (let index = 0; index < 4; index++) {
                if (Player.isDeleted()) {
                    enemys_bullet.delete()
                }
                enemys_bullet.change(LedSpriteProperty.Y, 1)
                basic.pause(250)
                if (enemys_bullet.isTouching(Player)) {
                    Player.delete()
                    music.playMelody("E B C5 A B G A F ", 300)
                    music.playMelody("E - - - - - - - ", 103)
                    basic.showIcon(IconNames.Heart)
                    basic.showIcon(IconNames.SmallHeart)
                    game.gameOver()
                }
            }
            enemys_bullet.delete()
        }
    }
    for (let index = 0; index < 4; index++) {
        sprite = randint(0, 1)
        if (sprite == 0) {
            Enemy.change(LedSpriteProperty.X, -1)
            Enemy_speed = randint(0, 2)
            if (Enemy_speed == 0) {
                basic.pause(100)
            } else if (Enemy_speed == 1) {
                basic.pause(250)
            } else {
                basic.pause(500)
            }
        } else {
            enemys_bullet = game.createSprite(Enemy.get(LedSpriteProperty.X), 1)
            basic.pause(500)
            Enemy.change(LedSpriteProperty.X, -1)
        }
        for (let index = 0; index < 4; index++) {
            if (Player.isDeleted()) {
                enemys_bullet.delete()
            }
            enemys_bullet.change(LedSpriteProperty.Y, 1)
            basic.pause(250)
            if (enemys_bullet.isTouching(Player)) {
                Player.delete()
            }
            music.playMelody("E B C5 A B G A F ", 300)
            music.playMelody("E - - - - - - - ", 103)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            game.gameOver()
        }
        enemys_bullet.delete()
    }
})

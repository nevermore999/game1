var Paddle = function() {
    var image = imageFromPath('paddle.jpg')
    var p = {
        image: image,
        x: 100,
        y: 250,
        speed: 15,
    }
    p.moveLeft = function() {
        p.x -= p.speed
        if (p.x < 0) {
            p.x = 0
        }
    }
    p.moveRight = function() {
        p.x += p.speed
        if (p.x + p.image.width > 400) {
            p.x = 400 - p.image.width
        }
    }
    p.collide = function(ball) {
        if (ball.y + ball.image.height > p.y) {
            if (ball.x > p.x && ball.x < p.x + p.image.width) {
                return true
            }
        }
        return false
    }
    return p
}

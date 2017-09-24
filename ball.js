var Bullet = function() {
    var image = imageFromPath('bullet.jpg')
    console.log(image);
    var o = {
        image: image,
        x: 40,
        y: 130,
        speedX: 8,
        speedY: 8,
        speed: 10,
        fired: false,
    }
    o.fire = function() {
        o.fired = true
    }
    o.move = function() {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    return o
}

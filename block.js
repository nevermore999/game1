var Block = function(p) {
    //p是数组 [0, 0]
    var image = imageFromPath('block.jpg')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        actions: true,
    }
    o.kill = function() {
        o.actions = false
    }
    o.collide = function(b) {
        return o.actions && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}

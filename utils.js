var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}

var loadlevel = function(n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(p)
        blocks.push(b)
    }
    return blocks
}

var enable = function() {
    window.paused = false
    window.addEventListener('keydown', function(event) {
        if (event.key == 'p') {
            window.paused = !window.paused
        }else if('1234567'.includes(event.key)) {
            blocks = loadlevel(Number(event.key))
        }
    })
    document.querySelector('#id-range').addEventListener('input', function(event) {
        var input = event.target
        window.fps = Number(input.value)
        console.log(window.fps);
    })
}

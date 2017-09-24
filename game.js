var Game = function(fps) {
    var g = {
        actions: {},
        keyStatus: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var content = canvas.getContext('2d')
    g.canvas = canvas
    g.content = content
    g.drawImage = function(drawimage) {
        g.content.drawImage(drawimage.image, drawimage.x, drawimage.y)
    }
    window.addEventListener('keydown', function(event) {
        g.keyStatus[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keyStatus[event.key] = false
    })
    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    window.fps = 30
    var runloop = function() {
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keyStatus[key]) {
                g.actions[key]()
            }
        }
        g.update()
        //clear
        content.clearRect(0, 0, canvas.width, canvas.height)
        //draw
        g.draw()
        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }
    setTimeout(function() {
        runloop()
    }, 1000/fps)
    return g
}

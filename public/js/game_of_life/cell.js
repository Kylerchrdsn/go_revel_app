Cell = (function() {
  function Cell() {
    var instance = this
    var element  = null
    var row      = null
    var col      = null
    var alive    = false

    if (arguments.length === 2) {
    } else if (arguments.length === 1) {
      element = $(arguments[0])
      row     = +element.closest('.row').attr('enum')
      col     = +element.attr('enum')
      alive   = element.hasClass('on')
    }

    instance.__defineGetter__('alive', function() {
      return alive
    })
    instance.__defineGetter__('row', function() {
      return row
    })
    instance.__defineGetter__('col', function() {
      return col
    })
    instance.__defineGetter__('element', function() {
      return element
    })
    instance.__defineSetter__('alive', function(_alive) {
      alive = _alive
      if (alive) {
        element.addClass('on')
      } else {
        element.removeClass('on')
      }
    })
  }

  return Cell
})()

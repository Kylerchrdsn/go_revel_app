World = (function() {
  function World(element) {
    var instance   = this
    var grid       = []
    var timer      = null
    var generation = 0
    var population = 0

    $(element).find('.row').each(function(i, row) {
      grid.push([])
      $(row).find('.game-cell').each(function(j, gameCell) {
        var cell = new Cell(gameCell)
        if(cell.alive) { population++ }
        grid[i].push(cell)
      })
    })

    //****************************************************************
    instance.__defineGetter__('grid', function() {
      return grid
    })
    //****************************************************************
    instance.__defineGetter__('generation', function() {
      return generation
    })
    //****************************************************************
    instance.__defineGetter__('population', function() {
      return population
    })

    //****************************************************************
    function westCell(cell) {
      var upperLimitX = grid[0].length - 1

      neighborRow = cell.row
      neighborCol = cell.col - 1
      neighborCol = (neighborCol < 0 ? upperLimitX : neighborCol)

      return grid[neighborRow][neighborCol]
    }

    //****************************************************************
    function eastCell(cell) {
      var upperLimitX = grid[0].length - 1

      neighborRow = cell.row
      neighborCol = cell.col + 1
      neighborCol = (neighborCol > upperLimitX ? 0 : neighborCol)

      return grid[neighborRow][neighborCol]
    }

    //****************************************************************
    function northCell(cell) {
      var upperLimitY = grid.length - 1

      neighborRow = cell.row - 1
      neighborCol = cell.col
      neighborRow = (neighborRow < 0 ? upperLimitY : neighborRow)

      return grid[neighborRow][neighborCol]
    }

    //****************************************************************
    function southCell(cell) {
      var upperLimitY = grid.length - 1

      neighborRow = cell.row + 1
      neighborCol = cell.col
      neighborRow = (neighborRow > upperLimitY ? 0 : neighborRow)

      return grid[neighborRow][neighborCol]
    }

    //****************************************************************
    function northWestCell(cell) {
      return westCell(northCell(cell))
    }
    //****************************************************************
    function northEastCell(cell) {
      return eastCell(northCell(cell))
    }
    //****************************************************************
    function southWestCell(cell) {
      return westCell(southCell(cell))
    }
    //****************************************************************
    function southEastCell(cell) {
      return eastCell(southCell(cell))
    }

    //****************************************************************
    function neighbors(cell) {
      var _neighbors = 0
      if (westCell(cell).alive) {
        _neighbors++
      }
      if (northCell(cell).alive) {
        _neighbors++
      }
      if (eastCell(cell).alive) {
        _neighbors++
      }
      if (southCell(cell).alive) {
        _neighbors++
      }
      if (northWestCell(cell).alive) {
        _neighbors++
      }
      if (northEastCell(cell).alive) {
        _neighbors++
      }
      if (southWestCell(cell).alive) {
        _neighbors++
      }
      if (southEastCell(cell).alive) {
        _neighbors++
      }

      return _neighbors
    }

    //****************************************************************
    function updateGeneration(val) {
      if (typeof val === 'undefined') { var val = generation }
      $('.generation').text(val)
      generation = val
    }

    //****************************************************************
    function updatePopulation(val) {
      if (typeof val === 'undefined') { var val = population }
      $('.population').text(val)
      population = val
    }

    //****************************************************************
    function willLive(cell) {
      var _neighbors = neighbors(cell)

      if (_neighbors < 2 || _neighbors > 3) {
        return false
      } else if (_neighbors >= 2 && _neighbors <= 3 && cell.alive) {
        return true
      } else if (_neighbors === 3 && !cell.alive) {
        return true
      }
    }

    //****************************************************************
    function propagate() {
      nextGeneration = []
      newPop         = 0

      grid.forEach(function(row, i) {
        nextGeneration.push([])
        row.forEach(function(cell, j) {
          if (willLive(cell)) {
            nextGeneration[i].push(true)
            newPop++
          } else {
            nextGeneration[i].push(false)
          }
        })
      })

      nextGeneration.forEach(function(row, i) {
        row.forEach(function(life, j) {
          grid[i][j].alive = life
        })
      })

      population = newPop
      generation++
      updatePopulation()
      updateGeneration()
    }

    //****************************************************************
    instance.start = function() {
      timer = setInterval(function() {
        propagate()
      }, 500)
    }
    //****************************************************************
    instance.stop = function() {
      clearInterval(timer)
    }
    //****************************************************************
    instance.editOn = function() {
      grid.forEach(function(row, i) {
        row.forEach(function(cell, j) {
          cell.element.click(function() {
            cell.alive = !cell.alive
          })
        })
      })
    }
    //****************************************************************
    instance.editOff = function() {
      grid.forEach(function(row, i) {
        row.forEach(function(cell, j) {
          cell.element.unbind('click')
        })
      })
    }
    //****************************************************************
    instance.reset = function() {
      updateGeneration(0)
      updatePopulation(0)
    }
  }

  World.prototype.set = function(grid) {
    grid = grid || [[]]
    var world = this

    grid.forEach(function(row, i) {
      row.forEach(function(alive, j) {
        world.grid[i][j].alive = alive
      })
    })
  }

  return World
})()

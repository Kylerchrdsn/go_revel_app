import React from 'react'

const Palette = () => {
  const contain = {
    height: 'calc(100% - 50px)',
    width: '100%',
    padding: 0,
    margin: 0
  }
  const row = {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontSize: '3em',
    fontWeight: 'bold'
  }
  const one = {
    background: '#ffffcc',
    height: '100%',
    color: '#253494'
  }
  const two = {
    background: '#a1dab4',
    height: '100%',
    color: '#2c7fb8'
  }
  const three = {
    background: '#41b6c4',
    height: '100%',
    color: '#253494'
  }
  const four = {
    background: '#2c7fb8',
    height: '100%',
    color: '#a1dab4'
  }
  const five = {
    background: '#253494',
    height: '100%',
    color: '#ffffcc'
  }
  const six = {
    background: '#dcdcdc',
    height: '100%',
    color: '#000000'
  }

  return (
    <div className="container" style={ contain }>
      <div className="row" style={ row }>
        <div className="col-md-2 one" style={ one }>
          &#35;ffffcc
        </div>
        <div className="col-md-2 two" style={ two }>
          &#35;a1dab4
        </div>
        <div className="col-md-2 three" style={ three }>
          &#35;41b6c4
        </div>
        <div className="col-md-2 four" style={ four }>
          &#35;2c7fb8
        </div>
        <div className="col-md-2 five" style={ five }>
          &#35;253494
        </div>
        <div className="col-md-2 six" style={ six }>
          &#35;dcdcdc
        </div>
      </div>
    </div>
  )
}

export default Palette

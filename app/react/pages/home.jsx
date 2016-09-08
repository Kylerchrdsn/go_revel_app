import React from 'react'

const Home = () => {
  const headerStyles = {
    backgroundColor: '#253494',
    marginBottom: 0
  }
  const h1Styles = {
    color: 'white'
  }

  return (
    <header className="jumbotron" style={ headerStyles }>
      <div className="container">
        <div className="row">
          <h1 style={ h1Styles }>
            Konichiwa, World <span className="glyphicon glyphicon-globe"></span>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Home

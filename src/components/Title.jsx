import React from 'react'

const Title = (props) => {
    const{name = "Text" } = props
  return (
   <h2 className=""> {name} </h2>
  )
}

export default Title
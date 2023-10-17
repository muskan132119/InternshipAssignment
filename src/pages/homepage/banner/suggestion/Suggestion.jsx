import React from 'react'
import './suggestion.scss'

const Suggestion = ({value}) => {
  return (
    <div className='suggested-item'>{value}</div>
  )
}

export default Suggestion
import React from 'react'

const Joke = ({title, subtitle}) => {
  return (
    <div>
        <div className='flex flex-col'>
            <p>Setup: {title}</p>
            <p>Punchline: {subtitle}</p>
        </div>
    </div>
  )
}

export default Joke
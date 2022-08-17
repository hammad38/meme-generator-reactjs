import React from 'react'

const Meme = () => {
  return (
    <div>
        <main>
          <form action="" className='form'>
            <input placeholder='Top Text' type="text" className='form--input'/>
            <input placeholder='Bottom Text' type="text" className='form--input' />
            <button className='form--button' >Get a new meme image</button>
          </form>
        </main>
    </div>
  )
}

export default Meme
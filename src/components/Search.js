import React from 'react'

function Search ({ handleInput }) {
  return (
    <section className='searchbox-wrap'>
        <input
        type='text'
        placeholder='Search for a movie...'
        className='searchbox'
        onChange={props.handleInput}/>
    </section>
  )
}

export default Search
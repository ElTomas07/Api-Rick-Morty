import React from 'react'
import './Card.css'

export const Card = ({ imgCharacter, nameCharacter, genderCharacter}) => {
    return (
      <>
        <section>
          <div className='card'>
            <img src={imgCharacter} alt={imgCharacter} className='img' />
            <h2 className='title'>{nameCharacter}</h2>
            <p className='gender'>{genderCharacter}</p>
          </div>
        </section>
      </>
    )
  }
  
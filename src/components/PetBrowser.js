import React from 'react'

import Pet from './Pet'

const PetBrowser = (props) => {
  const petList =  props.pets.map(p => <Pet pet={p} key={p.id} onAdoptPet={props.onAdoptPet} />)

  return (<div className="ui cards">{petList}</div>)
}

export default PetBrowser

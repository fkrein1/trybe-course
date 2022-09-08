import React from "react";

class Pokemon extends React.Component {
  render () {
    const {name, type, averageWeight, image, moreInfo } = this.props.pokemon;

    return (
      <div className='pokemon-container'>
        <div className='pokemon-text'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <a href={moreInfo}><img src={image} alt={name}/></a>
      </div>
    )
  }
}

export default Pokemon
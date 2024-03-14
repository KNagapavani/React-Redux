import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Carousels = ({images}) => {
  return (
    <div>
      <Carousel>
            {images.map((imageUrl) => (
          <div className='paper'>
            <img src={imageUrl.pic} alt={imageUrl.title} className='bgimage' /> 
            <div className='overlay'> 
            <h3 key={imageUrl.id} style={{textAlign:'center'}}>{imageUrl.title}</h3>
            </div>
          </div>   
             
      ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
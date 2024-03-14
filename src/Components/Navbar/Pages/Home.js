import React from 'react';
import Carousels from '../Carousels';


const Home = ({images}) => {
  const imageUrls = [
    {
      id: 1,
      title: "Upto 30% Offer on Women Dresses",
      pic: "https://t4.ftcdn.net/jpg/06/32/54/09/360_F_632540957_wEpq5Tta6xBZzk4GA4uj1OiVIH9K5Xma.jpg",
    },
    {
      id: 2,
      title: "Upto 20% Offer on Footwear",
      pic: "https://media.istockphoto.com/id/1070513260/photo/many-womans-shoes.jpg?s=612x612&w=0&k=20&c=Upb69YynjCWvDuWN8hJDA6qPKYJKHNsdhyhAvR7oGts=",
    },
    {
      id: 3,
      title: "Upto 25% Offer on Cosmetics",
      pic: "https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-makeup-cosmetic-products-on-white-surface-image_2512969.jpg",
    },
    {
      id: 4,
      title : "Upto 10% Offer on Electronics",
      pic: "https://png.pngtree.com/background/20230521/original/pngtree-commercial-electronics-store-of-many-screens-picture-image_2683696.jpg",
    }
  ]; 
  return (
    <div>
      <Carousels images={imageUrls}/>
    </div>
  );
}

export default Home;

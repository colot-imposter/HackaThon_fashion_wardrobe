import React, { Component } from "react";

export default class WardrobeDisplay extends Component {
  render() {
    const { clothingItem } = this.props;
    console.log('this.props', this.props);
    console.log('clothingItem.image', clothingItem.image);
    return (
      <div>

        <img
          className=""
          style={{ height: 100, float: "left", marginRight: 10 }}
          src={require(`../styles/imgs/shirts/${clothingItem.image}`)}
          alt="clothing pic"
        />
      </div>
    );
  }
}


// import React, {Component} from 'react';
// import {connect} from 'react-redux';
//
//
// export default class ImageDisplay extends Component {
//   render() {
//     let photos = this.props.users.images.map( (photo, index) => {
//       return (
//         <div key={index} className="margin" style={{ backgroundColor:"#3d3737"}}>>
//           <img src={userid.images} alt='img'></img>
//         </div>
//       );
//     });
//
//     return (
//       <div>
//         {images}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import users from "../data/userData.js";
import WardrobeDisplay from "../containers/WardrobeDisplay.js";
>>>>>>> fe5b41994a2daf59372fd428d74a22f415cceed0
=======
import users from "../data/userData.js";
import WardrobeDisplay from "../containers/WardrobeDisplay.js";

>>>>>>> 3b2668cf1f65e420626abc5a68f13d51214ef710

const styles =  {
  clothingpreview:{
    display: 'inline-flex',
    width: '10px',
    // height: '50px',
    // border: '1px solid black',
    padding: '5px'},
  previewbody:{
    display:'inline-flex'
  },
    header: {
      'margin-left': 'auto',
      border: '1px solid black'
    },
};

<<<<<<< HEAD
<<<<<<< HEAD
export default class Wardrobe extends Component {
=======
=======

>>>>>>> 3b2668cf1f65e420626abc5a68f13d51214ef710


export default class Wardrobe extends Component {
//   constructor(props) {
//       super(props);
//
//   this.state = {
//     clothingItem: [],
//   }
//
//       this.LengthFilter = this.LengthFilter.bind(this);
//       this.WeightFilter = this.WeightFilter.bind(this);
//       this.ColorFilter = this.ColorFilter.bind(this);
//
// }
//
// LengthFilter(e) {
//   this.setState(
//     {
//       clothingItem: e.target.value,
//     })
// }
<<<<<<< HEAD
>>>>>>> fe5b41994a2daf59372fd428d74a22f415cceed0
=======

>>>>>>> 3b2668cf1f65e420626abc5a68f13d51214ef710

  render() {
    return (
        <div>
          <div className='clothingpreview' style={styles.clothingpreview}>
           <h3>Filter</h3>
             <a onClick={this.LengthFilter}>Sleeve Length</a>
            <br></br>
<<<<<<< HEAD
<<<<<<< HEAD
            <a onClick={this.handleClickForColorFilter}>Color</a>
          </div>
        <div className="todaypreview" style={styles.clothingpreview}>
          <img
          src="http://i3.cpcache.com/product/606802989/unicorn_kids_dark_tshirt.jpg?color=Navy&height=460&width=460&qv=90&Filters="
          alt="unicorn shirt"
        />
=======
=======

>>>>>>> 3b2668cf1f65e420626abc5a68f13d51214ef710
             <a onClick={this.WeightFilter}>Item Weight</a>
             <br></br>
             <a onClick={this.ColorFilter}>Color</a>
           </div>
          <div>
          {users.map(clothingItem => {
            // if (clothingItem.image === "")
              return <WardrobeDisplay key={clothingItem.image} clothingItem={clothingItem} />;
            })}
          </div>
          <br />
<<<<<<< HEAD
>>>>>>> fe5b41994a2daf59372fd428d74a22f415cceed0
=======
>>>>>>> 3b2668cf1f65e420626abc5a68f13d51214ef710
        </div>
      );
    }
  }



// export default class Wardrobe extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           images: []
//       }
//   }
//
//
//
//   componentWillMount = () => {
//     this.setState({images: [this.props.images]}, function () {
//       this.props.updatedWardrobe(this.state.images);
//     })
//   }

//   render() {
//     return (
//     <div>
//       <div className="steps">
//         <h1>Wardrobe</h1>
//       </div>
//       <div className= 'previewbody' style= {styles.previewbody}>
//         <div>
//           <h3>Filter</h3>
//             <a to="/" onClick={this.handleClickForLengthFilter}>Sleeve Length</a>
//             <br></br>
//             <a to="/" onClick={this.handleClickForLengthWeight}>Item Weight</a>
//             <br></br>
//             <a onClick={this.handleClickForColorFilter}>Color</a>
//           </div>
//           <div>
//             <ImageDisplay />
// />          </div>
//         <div className="todaypreview" style={styles.clothingpreview}>
//           <img
//           src="http://i3.cpcache.com/product/606802989/unicorn_kids_dark_tshirt.jpg?color=Navy&height=460&width=460&qv=90&Filters="
//           alt="unicorn shirt"
//         />
//         </div>
//       </div>
//     </div>
//     );
//   }
// }

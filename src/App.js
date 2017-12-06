import React, { Component } from 'react';
import './App.css';

import Jumbotron from './components/jumbotron';
import PhotosList from './components/photosList';

class App extends Component {
  constructor() {
    super();

    this.state= {photos: [
      {location: "Saint Lucia",
        url: "https://www.stlucianewsonline.com/wp-content/uploads/2015/10/St.-Lucia-Pitons2.jpg",
      },
      {location: "Thailand",
        url: "http://www.phsproperty.com/wp-content/uploads/2017/01/phuket2-3.jpg",
      },
      {location: "Saint Vincent And The Grenadines",
        url: "https://mychaletfinder.com/countries/summer-villas/st-vincent-grenadines/headers/st-vincent-grenadines-mychaletfinder.jpg",
      }
    ]};
  }

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron />
        <div className="row">
          <PhotosList photos={this.state.photos}/>
        </div>
      </div>
    );
  }
}

export default App;

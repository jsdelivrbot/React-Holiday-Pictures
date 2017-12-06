import React, { Component } from 'react';
import $ from "jquery";
import './App.css';

import Jumbotron from './components/jumbotron';
import PhotosList from './components/photosList';

class App extends Component {
  constructor() {
    super();

    
    $.ajax({
        headers: { 'Authorization':'Client-ID 49d8632e19189c214e4af423f5c4e263fd41a2e5464def15ba352b93c8673864'},
        url: "https://api.unsplash.com/photos??page=1&query=beach",
        success: function(data) {
          const result = data.map(photo => ({
                id:photo.id,
                url: photo.urls.regular
              })
            )

          this.state ={photos: result};
        }

      })
  };  



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

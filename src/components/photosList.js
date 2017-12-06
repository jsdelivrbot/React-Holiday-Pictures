import React from "react";
import PhotoItem from "./photoItem"

class PhotosList extends React.Component{

  render(){
    let photoItems = this.props.photos.map(photo => {
      return (
          <div className="col-lg-4">
            <PhotoItem photo={photo} key={photo.location} />
        </div>
        )
     
    });

    return (
      <ul>
      {photoItems}
      </ul>
    )
  }
}

export default PhotosList;

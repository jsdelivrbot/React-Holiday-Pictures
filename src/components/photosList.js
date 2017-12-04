import React from "react";
import PhotoItem from "./photoItem"

class PhotosList extends React.Component{

  render(){
    let photoItems = this.props.photos.map(photo => {
      return <PhotoItem photo={photo} key={photo.location} />
    });

    return (
      <ul>
      {photoItems}
      </ul>
    )
  }
}

export default PhotosList;

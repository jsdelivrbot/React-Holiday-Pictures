import React from "react";

class PhotoItem extends React.Component{
  render(){
    return (
      <li>
        <img src={this.props.photo.url} alt={this.props.photo.location} />
      </li>
    );
  };
}

export default PhotoItem;

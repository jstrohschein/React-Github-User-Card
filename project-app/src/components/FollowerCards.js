import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


class FollowerCards extends React.Component {

  render(){
    return(
      <div>
        <h1>{this.props.followers.followerName}</h1>
      </div>
    )
  }

}


export default FollowerCards
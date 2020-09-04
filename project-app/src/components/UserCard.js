import React from 'react';
import FollowerCards from './FollowerCards'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';



class UserCard extends React.Component {

  

  render(){
    return(
      <div>
        
        <Card>
        <CardImg className='card' top width="100%" src={this.props.user.avatar} alt={`image of ${this.props.user.name}`} />
        <CardBody>
          <CardTitle className='name'>{this.props.user.name}</CardTitle>
          <CardSubtitle className='name'>{this.props.user.username}</CardSubtitle>
          <CardText className='name'>{this.props.user.location}</CardText>
          <Button className='get-button' tag={Link} to={`/${this.props.username}/followers`} >See Followers</Button>
        </CardBody>
      </Card>
      </div>
    )
  }
}


export default UserCard
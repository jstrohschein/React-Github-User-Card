import React from 'react';
import FollowerCards from './FollowerCards'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';



class UserCard extends React.Component {


  
  state = [{
    follwerName: '',
    followerAvatar: '',
    followerLocation: '',
    followerUsername: '',
    followerId: 1,
    getNewFollowers: false,
    showFollowers: false
  }];

  componentDidUpdate(){
    if (this.state.getNewFollowers){
      this.setState({
        getNewFollowers: false,
        showFollowers: false
      })
      axios
        .get(`https://api.github.com/users/${this.props.user.username}/followers`)
        .then(response => {
          console.log(`UserCard.js: CDU: response for followers: `, response.data)
          response.data.forEach(follower => {
            return(
              this.setState({
                followerName: follower.name
              })
            )
          })
        })
        .catch(error => console.log('Error for response for followers: ', error))
        
    }


    console.log(this.state)
  }


  handleGetFollowers = e => {
    e.preventDefault()
    this.setState({
      getNewFollowers: true,
      showFollowers: true
    })
  }
   

  render(){
    return(
      <div>
        <Card>
        <CardImg className='card' top width="100%" src={this.props.user.avatar} alt={`image of ${this.props.user.name}`} />
        <CardBody>
          <CardTitle className='name'>{this.props.user.name}</CardTitle>
          <CardSubtitle className='name'>{this.props.user.username}</CardSubtitle>
          <CardText className='name'>{this.props.user.location}</CardText>
          <Button className='get-button' onClick={this.handleGetFollowers} >See Followers</Button>
        </CardBody>
      </Card>
      <FollowerCards followers={this.state} />
      </div>
    )
  }
}


export default UserCard
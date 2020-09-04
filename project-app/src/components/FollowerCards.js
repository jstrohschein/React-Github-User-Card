import React from 'react';
import FollowerCard from './FollowerCard'
import axios from 'axios';
import { Container, Row } from 'reactstrap'


class FollowerCards extends React.Component {

  
  state = {
    followers: []
  }




  componentDidMount(){
    
      axios
        .get(`https://api.github.com/users/${this.props.user.username}/followers`)
        .then(response => {
          console.log(`FollowerCards: CDM: Response for ${this.props.user.username}: `, response.data)
          console.log(`FollowerCard props for ${this.props.user.username}: `, this.props.user)
          this.setState({followers: response.data})
        })
        .catch(error => console.log('Error for response for followers: ', error))
        
    }

  

  render(){
    return(
      <Container>
        <Row>
        {this.state.followers && this.state.followers.map((follower, index) => {
          return <FollowerCard key={index} follower={follower} />
        })}
        </Row>
      </Container>
    )
  }

}


export default FollowerCards
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';
import {Link} from 'react-router-dom'




class FollowerCard extends React.Component {

  

  render(){
    return(

      <Col>
        <Card xs="12" md="4" xl="3" className='follower-card'> 
          <CardImg top width="100%" height='100%' src={this.props.follower.avatar_url} alt={`image of ${this.props.follower.name}`} />
          <CardBody>
            <CardTitle className='name'>{this.props.follower.login}</CardTitle>
          </CardBody>
        </Card>
      </Col>
      
    )
  }
}


export default FollowerCard
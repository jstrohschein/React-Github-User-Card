import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import './App.css';
import { InputGroup, Input, Button, InputGroupAddon } from 'reactstrap'
import { Route, Switch, Link } from 'react-router-dom'
import FollowerCards from './components/FollowerCards';


class App extends React.Component {

  state = {
    name: '',
    avatar: '',
    location: '',
    username: '',
    id: 1,
    getNewUser: false,
    userText: ''
  };

  componentDidMount(){
    axios
      .get('https://api.github.com/users/jstrohschein')
      .then(response => {
        console.log('App.js: CDM: axios result: ', response.data)
        this.setState({
          name: response.data.name,
          avatar: response.data.avatar_url,
          location: response.data.location,
          username: response.data.login,
          id: response.data.id
        })
        console.log(`App.js: CDM: state for ${response.data.login}: `, this.state)
      })
      .catch(error => console.log('App.js: CDM axios error: ', error))
  };

  

  componentDidUpdate(prevProps, prevState) {
    // CDU
    if (this.state.getNewUser) {
      this.setState({
        getNewUser: false
      });
      axios
        .get(`https://api.github.com/users/${this.state.userText}`)
        .then(response => {
          console.log(`App.js: CDU: response for follower req: `, response.data)
          this.setState({
            name: response.data.name,
            avatar: response.data.avatar_url,
            location: response.data.location,
            username: response.data.login,
            id: response.data.id
          })
        })
        .catch(error => console.error("failure to fetch followers: ", error));
    }
  }
        

  handleNewUser = e => {
    e.preventDefault()
    this.setState({
      getNewUser: true
    })
  }

  handleUserChange = e => {
    e.preventDefault()
    this.setState({
      userText: e.target.value
    })
  }




  render(){
  return (
    <div>
      <h1>GitHub UserCards</h1>
      <label htmlFor='user'></label>
      <InputGroup className='searchBar'>
        <Input 
        placeholder='GitHub Username'
        value={this.state.userText}
        onChange={this.handleUserChange} />
        <InputGroupAddon addonType="append"><Button onClick={this.handleNewUser} tag={Link} to={'/'}>Find</Button></InputGroupAddon>
      </InputGroup>
      <Switch>
      <Route exact path='/' render={props => {
        return <UserCard user={this.state} />
      }} />
      <Route path='/:username/followers' render={props => {
        return <FollowerCards user={this.state} />
      }} /> 
      </Switch>
    </div>
  );
  }
}

export default App;

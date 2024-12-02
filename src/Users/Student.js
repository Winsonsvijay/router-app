import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Student extends Component {
  constructor() {
    super();
    this.state = {
      usersList: [],
      isDataLoaded: false
    }
  }

  componentDidMount() {
    if(!this.state.isDataLoaded) {
      fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((userList) => {
        this.setState({
          usersList: userList,
          isDataLoaded: true
        })
      }).catch((error) => {
        console.log('error', error)
      })
    }
  }


  render() {
    const usersList = this.state.usersList
    console.log('usersList', usersList)
    return (
      <div>
        <h1> Hi I am Student page </h1>
        <button>
          <Link to="/users"> Back  </Link>
  
        </button>
      </div>
    )
  }
}

export default Student;

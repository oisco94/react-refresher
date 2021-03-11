import React from 'react'

export class HomeScreen extends React.Component {

  render(){
    const {username} = this.props
      
    return (
        <h2>Welcome {{username}}</h2>   
    )
  }
}

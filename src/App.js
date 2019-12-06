// create your App component here
import React from 'react'

export default class App from React.component{
  componentDidMount(){
  return  fetch("http://api.open-notify.org/astros.json").then(res=>res.json()).then(json=>json)
  }
}
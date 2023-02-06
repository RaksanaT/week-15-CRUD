// Using the Houses API, or any open API of your choice you can find online, create a 
// - single page that allows for all 4 CRUD operations to be performed on a resource from the API. 
// Create a React component (or more, if needed) to represent the resource. 
// Make all forms and other necessary UI pieces their own components as reasonable.

import './App.css';
import React, { Component } from 'react';
import { HousesList } from './Components/HousesList';

class App extends Component {
  render () {
    return (
      <div>
        <HousesList/>
      </div>
    )
  }
}

export default App;
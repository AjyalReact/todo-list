import React, { Component } from 'react';
import { PageHeader } from './Components';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <main className='main-page'>
          <PageHeader />
        </main>
      </div>
    )
  }
}


export default App;
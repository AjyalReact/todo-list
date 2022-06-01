import React, { Component } from 'react';
import { Form, PageHeader } from './Components';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <main className='main-page'>
          <PageHeader />
          <Form />
        </main>
      </div>
    )
  }
}


export default App;
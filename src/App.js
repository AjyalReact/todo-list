import React, { Component } from 'react';
import { Form, PageHeader, Result } from './Components';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <main className='main-page'>
          <PageHeader />
          <Form />
          <Result />
        </main>
      </div>
    )
  }
}


export default App;
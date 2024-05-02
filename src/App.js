import React, { Component } from 'react'
import LVH_Form1 from './components/LVH_Form1';
import LVH_Form2 from './components/LVH_Form2';

import LVH_Form3 from './components/LVH_Form3';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Event - Form - Controlled Component - Lê Văn Hoàng</h1>
        <div>
          <LVH_Form1/>
          <LVH_Form2/>
          <LVH_Form3/>
        </div>
      </div>
    )
  }
}
export default App;



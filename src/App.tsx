import React from 'react';
import './App.css';

import { Button,Dropdown, List, Radio, Icon } from '@artifi/common-ui';
import { DemoData } from './demodata';
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row"><br></br>
          <div className="col-md-1"><Icon className="glyphicon glyphicon-star"></Icon></div>
          <div className="col-md-1"><Icon className="glyphicon glyphicon-envelope"></Icon></div>
          <div className="col-md-1"><Icon className="glyphicon glyphicon-glass"></Icon></div>
        </div>
        <div className="row"><br></br>
          <div className="col-md-3">
            <Button  style={{ color: '#ffffff' }} ></Button>
            {/* classes ={"btn btn-warning"} */}
          </div>
          <div className="col-md-3">
            <Dropdown btnClassName={"btn btn-success dropdown-toggle dropdown-toggle-split"}></Dropdown> 
          </div>
          <div className="col-md-3">
            <List demoData={DemoData} listClass="list-group-item"></List>
          </div>
          <div className="col-md-3">
            <Radio></Radio>
          </div>
        </div>
      </div>
        
     
    </div>
  );
}

export default App;


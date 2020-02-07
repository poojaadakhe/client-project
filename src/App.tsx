import React from 'react';
import './App.css';
import { Tabs , Dropdown,Button, Icon ,List, Accordian} from '@artifi/common-ui';
import { DemoData } from './demodata';

// import '@artifi/common-ui-2/main.css';
class App extends React.Component {

  render() {

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

              <Button classes="btn btn-danger" style={{ color: '#ffffff' }} ></Button>
              <br></br> <br></br>
              <Button label="Click here.." ></Button>
            </div>
            <div className="col-md-3">
              <Dropdown btnClassName={"btn btn-success dropdown-toggle dropdown-toggle-split"}></Dropdown>
            </div>
            <div className="col-md-3">
              <List demoData={DemoData} listClass="list-group-item"></List>
            </div>
            <div className="col-md-3">
              {/* <Radio></Radio> */}
            </div>

          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <Tabs></Tabs>
            </div>
            <div className="col-md-6">
              <Accordian></Accordian>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


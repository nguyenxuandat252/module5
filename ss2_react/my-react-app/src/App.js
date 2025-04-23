import logo from './logo.svg';
import './App.css';
import React from "react";



function App() {
  const element = React.createElement('ul',null,
      React.createElement('li',null,'Hà Pội'),
      React.createElement('li',null,'Đà Nẵng'),
      React.createElement('li',null,'Hải Phòng'),
      React.createElement('li',null,'Hồ Chí Minh'),
      React.createElement('li',null,'Cần Thơ')
  );
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;

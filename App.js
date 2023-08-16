/*import FirstComponent from './FirstComponent';
import Employee from './Employee/Employee';
import emp from './Employee/empdata';*/
import InventoryComponent from './inventory/InventoryComponent.js';
import Navbar from './Navbar.js';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
    /*<>
      <FirstComponent myname="Asish Magham"/>
      <hr/>
      <Employee empObj={emp}/>
    </>*/
  );
}

export default App;
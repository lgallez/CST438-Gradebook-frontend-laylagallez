import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import AddAssignmentModal from './components/AddAssignmentModal';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import React from "react";


function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Gradebook
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Assignment} />
        <Route path='/gradebook' component={Gradebook} />
        <Route path='/AddAssignmentModal' component={AddAssignmentModal} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

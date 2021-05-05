import React from 'react'
import Navigation from '../SideNavigation/navigation';
import Profile from './Profile/profile';
import Messenger from './Messenger/messenger';
import './content.css';
import {BrowserRouter, Route} from 'react-router-dom';

const Content = (props) => {

  return (
    <BrowserRouter>
      <div className ="app-body">
        <Navigation />
        <div className ="app-content"> 
          <Route path='/profile' render={ () => <Profile profile={props.profile} /> } />
          <Route path='/messenger' render={ () => <Messenger dialogs={props.dialogs}  /> } />
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default Content;
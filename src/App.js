import React from 'react'
import './App.css';
import Avatar from "./assets/images/avatar.svg";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default  () => {
  return (
    <>
      <div className='sidebar'>
          <header>
            <img src={Avatar} alt=''className='header-avatar' ></img>
            <div className='header-buttons'>
              <div className='header-btn'>
                  <DonutLargeIcon style={{color:`#919191`}}/>
              </div>
              <div className='header-btn'>
                  <ChatIcon style={{color:`#919191`}}/>
              </div>
              <div className='header-btn'>
                  <MoreVertIcon style={{color:`#919191`}}/>
              </div>
            </div>
          </header>
          
          <div className='search'>
              ...
          </div>
          
          <div className='charlist'>
              ...
          </div>
          
      </div>

      <div className='contentarea'>
      </div>
    </>
  );
}
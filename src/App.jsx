import React, {useState,useEffect} from 'react'
import './App.css';
import ChatListItem from './components/ChatListItem';

import Avatar from "./assets/images/avatar.svg";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
const [chatList,setChatList] = useState([{},{},{},{}]);

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
              <div className='search-input'>
                <SearchIcon fontSize='small' style={{color: '#919191'}}/>
                <input type='search' placeholder='Procurar ou começar uma nova conversar'/>
              </div>
          </div>
          
          <div className='chatlist'>
              {chatList.map((item,key)=>(
                  <ChatListItem
                    key={key}
                  />
              ))}
          </div>
          
      </div>

      <div className='contentarea'>
      </div>
    </>
  );
}
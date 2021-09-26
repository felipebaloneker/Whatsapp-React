import React, {useState} from 'react'
import './App.css';

// Components import
import ChatListItem from './components/ChatListItem';
import ChatInit from './components/ChatInit';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat'

// Images Import
import Avatar from "./assets/images/avatar.svg";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
  const [chatList,setChatList] = useState([
    {chatId:1, title:'Fulano', image:Avatar},
    {chatId:2, title:'Fulano', image:Avatar},
    {chatId:3, title:'Fulano', image:Avatar},
    {chatId:4, title:'Fulano', image:Avatar}  
    ,]);
  
  const [activeChat, setActiveChat] = useState({});
  const [user,setUser] =useState({
    id:12,
    avatar:Avatar,
    name:"felipe",
  })

 // Show new Chat
  const [showNewChat,setShowNewChat] = useState(false);

  // Abrir novo Chat
  const openNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className="app-window">
      <div className='sidebar'>
          <NewChat
            chatlist={chatList}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}

          />
          <header>
            <img src={user.avatar} alt=''className='header-avatar' ></img>
            <div className='header-buttons'>
              <div className='header-btn'>
                  <DonutLargeIcon style={{color:`#919191`}} />
              </div>
              <div className='header-btn'>
                  <ChatIcon style={{color:`#919191`}} 
                     onClick={openNewChat}
                  />
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
                    data={item}
                    active={activeChat.chatId ===chatList[key].chatId}
                    onClick={()=> setActiveChat(chatList[key])}
                  />
              ))}
          </div>
          
      </div>

      <div className='contentarea'>
                {activeChat.chatId !== undefined &&
                  <ChatWindow 
                  className="contentChat"
                  user={user}
                  />
                }
                {activeChat.chatId === undefined &&
                   <ChatInit/>
                }
      </div>
    </div>
  );
}
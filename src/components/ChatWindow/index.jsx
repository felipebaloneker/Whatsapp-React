import React, {useState,useEffect,useRef} from 'react'
import './style.css'

import {MessageItem} from '../MessageItem'
import EmojiPicker from 'emoji-picker-react'
import Avatar from '../../assets/images/avatar.svg'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import Api from '../../services/Api'

export default ({user,data}) =>{

    const [emojiOpen,setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([]);
    const [users,setUsers] = useState([]);
    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }
    

    // Moritorando Chat selecionado
    useEffect(()=>{
        setList([]);
        let unsub = Api.onChatContent(data.chatId,setList, setUsers);
        return unsub;

    },[data.chatId])

    // Rolando para final das mensagens
    useEffect(()=>{
        if(body.current.scrolHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    },[list]);


    // Open Div with emojis
    const openEmojiArea = () => {
        {emojiOpen === true ? (
            setEmojiOpen(false)
        ):(
            setEmojiOpen(true)
        )}
    }

    // Get clicked emoji
    const handleEmojiClick = (e, emojiObject) =>{
        setText(text + emojiObject.emoji);;
    }

    // Send Functions

    const sendMicMassage = () =>{
        if(recognition !== null){
            recognition.onstart = () =>{
                setListening(true);
            }
            recognition.onend = () =>{
                setListening(false); 
            }
            recognition.onresult = (e) =>{
                setText(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }

    // verficando se usuario apertou enter
    const handleInputKeyUp = (e) =>{
        if(e.keyCode == 13){
            sendTextMessage();
        }
    }
    // Enviando mensagem
    const sendTextMessage = () =>{
        if(text !== ''){
            Api.sendMessage(data,user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }
    }

    return(
        <>
            <div className='chatWindow-header'>
                <div className='chatWindow-headerinfo'>
                    <img className ='chatWindow-avatar' src={data.image}/>
                    <div className='chatWindow-name'>{data.tittle}</div>
                </div>

                <div className='chatWindow-headerbtns'>
                    <div className='chatWindow-btn'>
                        <SearchIcon style={{color:'#919191'}}/>
                    </div>
                    <div className='chatWindow-btn'>
                        <AttachFileIcon style={{color:'#919191'}}/>
                    </div>
                    <div className='chatWindow-btn'>
                        <MoreVertIcon style={{color:'#919191'}}/>
                    </div>
                </div>

            </div>
            <div ref={body} className='chatWindow-body'>
                <div className='chatWindow-message'
                style={{ position: emojiOpen ? "absolute" : "relative"}}
                >
                    {list.map((item,key)=>(
                        <MessageItem
                            key={key}
                            data={item}
                            user={user}
                        />
                    ))}
                </div>
                <div className='chatWindow-emojiarea'
                style={{display: emojiOpen ? "block" : "none"}}
                >
                    <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                    />
                </div>
            </div>
            <div className='chatWindow-footer'>
                <div className='chatWindow-pre'>
                    <div className='chatWindow-btn'
                    onClick={openEmojiArea}
                    >
                        <InsertEmoticonIcon style={{color:emojiOpen?'#009688 ':'#919191'}}/>
                    </div>
                </div>

                <div className='chatWindow-inputarea'>
                        <input className='chatWindow-input' 
                        type='text'
                        placeholder='Digite uma mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                        />
                </div>

                <div className='chatWindow-pos '>
                    <div className='chatWindow-btn'>
                    {text === ""?(
                        <MicIcon style={{color:listening?'#009688':'#919191'}}
                        onClick={sendMicMassage}
                        />
                    ):(
                        <SendIcon style={{color:'#919191'}}
                        onClick={sendTextMessage}
                        />
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}
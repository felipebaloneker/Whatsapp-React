import React, {useState} from 'react'
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

export default ({user}) =>{

    const [emojiOpen,setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author:123,body:'blablabla'},
        {author:123,body:'blablabla'},
        {author:12,body:'blablabla'},
    ]);

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }
    
    // Open Div with emojis
    const openEmojiArea = () => {
        {emojiOpen === true ? (
            setEmojiOpen(false)
        ):(
            setEmojiOpen(true)
        )}
    }

    // Get clicked emoji
    const getEmoji = (e, emojiObject) =>{
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
    const sendTextMessage = () =>{

    }

    return(
        <>
            <div className='chatWindow-header'>
                <div className='chatWindow-headerinfo'>
                    <img className='chatWindow-avatar' src={Avatar}/>
                    <div className='chatWindow-name'>Felipe</div>
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
            <div className='chatWindow-body'>
                    {list.map((item,key)=>(
                        <MessageItem
                            key={key}
                            data={item}
                            user={user}
                        />
                    ))}
                <div className='chatWindow-emojiarea'
                style={{opacity: emojiOpen ? "1" : "0"}}
                >
                    <EmojiPicker
                    onEmojiClick={getEmoji}
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
                        onChange={e=> setText(e.target.value)}
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
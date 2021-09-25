import React, {useState} from 'react'
import './style.css'
import EmojiPicker from 'emoji-picker-react'
import Avatar from '../../assets/images/avatar.svg'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';

export default () =>{

    const [emojiOpen,setEmojiOpen] = useState(false);
    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () =>{
        setEmojiOpen(false);
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
            <div>
            
            </div>
            <div className='chatWindow-emojiarea'
            style={{height: emojiOpen ? "25vh" : "0"}}
            >
                <EmojiPicker
                disableSearchBar
                disableSkinTonePicker
                />
            </div>
            </div>
            <div className='chatWindow-footer'>
                <div className='chatWindow-pre'>
                     <div className='chatWindow-btn'
                     onClick={handleCloseEmoji}
                     >
                        <CloseIcon style={{color:'#919191'}}/>
                        
                    </div>
                    <div className='chatWindow-btn'
                    onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color:'#919191'}}/>
                    </div>
                </div>

                <div className='chatWindow-inputarea'>
                        <input className='chatWindow-input' 
                        type='text'
                        placeholder='Digite uma mensagem'
                        />
                </div>

                <div className='chatWindow-pos '>
                    <div className='chatWindow-btn'>
                        <SendIcon style={{color:'#919191'}}/>
                    </div>
                </div>
            </div>
        </>
    );
}
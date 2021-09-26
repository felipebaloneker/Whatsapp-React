import {useState} from 'react'
import './style.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Avatar from "../../assets/images/avatar.svg"

export default function NewChat({user, chatlist, show,setShow}){
    const [list,setList] = useState([
        {id:123,avatar:Avatar,name:'Fulano'},
        {id:123,avatar:Avatar,name:'Fulano'},
        {id:123,avatar:Avatar,name:'Fulano'},
    ]);

    const closeChatClick = () => {
        setShow(false);
    }
    return(
        <div className='newChat'
            style={{left: show? '0': '-35vw'}}
        >
            <div className='newChat-head'>
                <div className='newChat-backbutton'>
                    <ArrowBackIcon
                    onClick = {closeChatClick}
                    />
                </div>
                <div className='newChat-headtitle'>Nova Conversa</div>
            </div>
            <div className="newChat-list">
                {list.map((item,key)=>(
                    <div className='newChat-item' key={key}>
                        <img className='newChat-itemavatar' src={item.avatar}/>
                        <div className='newChat-itemname'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
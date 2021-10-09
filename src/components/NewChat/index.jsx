import {useState,useEffect} from 'react'
import './style.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Avatar from "../../assets/images/avatar.svg"
import Api from '../../services/Api'

export default function NewChat({user, chatlist, show,setShow}){
    const [list,setList] = useState([]);

    // lendo Lista de contatos
    useEffect(()=>{
        const getList = async () =>{
            if(user !== null){
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        }
        getList()
    },[user]);

    // Fechando Aba de  Novo Chat
    const closeChatClick = () => {
        setShow(false);
    }

    // Começando nova Chat
    const addNewChat = async (user2)=>{
        await Api.addNewChat(user,user2);

        closeChatClick();
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
                    <div onClick={()=>addNewChat(item)} className='newChat-item' key={key}>
                        <img className='newChat-itemavatar' src={item.avatar}/>
                        <div className='newChat-itemname'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
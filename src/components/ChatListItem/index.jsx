import React from 'react';
import Avatar from "../../assets/images/avatar.svg";

import "./style.css";

export default () =>{
    return(
        <>
            <div className='chatListItem'>
                <img className='chatListItem-avatar' src={Avatar} alt=''></img>
                <div className='chatListItem-lines'>
                    <div className='chatListItem-line'>
                        <div className='chatListItem-name'>Felipe Baloneker</div>
                        <div className='chatListItem-date'>19:00</div>
                    </div>
                    <div className='chatListItem-line'>
                        <div className='chatListItem-lastMsg'>
                            <p>Opa, tudo bem</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import React from 'react';

import "./style.css";

export default ({onClick, active, data}) =>{
    return(
        <>
            <div className={`chatListItem ${active? 'active': ''}`}
            onClick={onClick}
            >
                <img className='chatListItem-avatar' src={data.image} alt=''></img>
                <div className='chatListItem-lines'>
                    <div className='chatListItem-line'>
                        <div className='chatListItem-Name'>{data.title}</div>
                        <div className='chatListItem-hour'>19:00</div>
                    </div>
                    <div className='chatListItem-line'>
                        <div className='chatListItem-lastMsg'>
                            <p>Opa, tudo bem,Opa, tudo bemOpa, tudo bemOpa, tudo bemOpa, tudo bem</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
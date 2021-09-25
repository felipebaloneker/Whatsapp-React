import React from 'react'
import './style.css'

export function MessageItem(){
    console.log('oi');

    return(
        <>
            <div className='messageLine'> 
                <div className='messageItem'>
                    <div className='messageText'>texto</div>
                    <div className='messageDate'>19:00</div>
                </div>
            </div >
         </>
    )
}
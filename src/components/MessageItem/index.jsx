import React from 'react'
import './style.css'

export function MessageItem({data,user}){
    return(
        <>
            <div 
            className='messageLine'
            style={{
                justifyContent:user.id == data.author ? 'flex-end': "flex-start"
            }}
            > 
                <div className='messageItem'>
                    <div className='messageText'>{data.body}</div>
                    <div className='messageDate'>19:00</div>
                </div>
            </div >
         </>
    )
}
import React from 'react'
import './style.css'

export function MessageItem({data}){
    console.log(data.body)
    return(
        <>
            <div className='messageLine'> 
                <div className='messageItem'>
                    <div className='messageText'>{data.body}</div>
                    <div className='messageDate'>19:00</div>
                </div>
            </div >
         </>
    )
}
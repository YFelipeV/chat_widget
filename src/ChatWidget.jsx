import React from 'react'
import {ChatBot} from './components/chatbot/ChatBot'

export const ChatWidget=()=> {
    return (
        <div>
            <div className='chat-toogle-content'>
                <ChatBot />
            </div>
        </div>
    )
}

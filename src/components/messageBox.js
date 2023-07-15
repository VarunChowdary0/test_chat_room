import React, { useState } from 'react'
import '../styles/messageBox.css'

export default function MessageBox() {
    const [typeOfInput,changeType] =useState("text");
    const setLinkInp=()=>{
        changeType("url");
    }
  return (
    <>
        <div className='box_body'>
            <div className='top_part'></div>
            <div className='bottem_part'>
                <div className='inner_bot'>
                    <div className='menu_line'>
                        <div className='ele_l1_1 e_1'>
                            <i class="fa-solid fa-bold"></i>
                        </div>
                        <div className='ele_l1_2 e_1'>
                             <i class="fa-solid fa-italic"></i>
                        </div>
                        <div className='ele_l1_3 e_1'>
                              <i class="fa-solid fa-strikethrough"></i>
                        </div>
                        <div className='ele_l1_4 e_1' onClick={()=>setLinkInp}>
                             <i class="fa-solid fa-link"></i>
                        </div>
                        <div className='ele_l1_5 e_1'>
                             <i class="fa-solid fa-list-ol"></i>
                        </div>
                        <div className='ele_l1_6 e_1'>
                            <i class="fa-solid fa-list"></i>
                        </div>
                        <div className='ele_l1_7 e_1'>
                            <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <div className='ele_l1_8 e_1'>
                             <i class="fa-solid fa-code"></i>
                        </div>
                        <div className='ele_l1_9 e_1'>
                            <i class="fa-solid fa-file-code"></i>
                        </div>
                    </div>
                    <div className='chat_box_line'>
                        <input type={typeOfInput} placeholder='Chat comes here...'/>
                    </div>
                    <div className='line_3_'>
                        <div className='ele_l2_1 e_2'>
                            <i class="fa-solid fa-file-circle-plus"></i>
                        </div>
                        <div className='ele_l2_2 e_2'>
                             <i class="fa-solid fa-face-smile"></i>
                        </div>
                        <div className='ele_l2_3 e_2'>
                             <i class="fa-solid fa-at"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

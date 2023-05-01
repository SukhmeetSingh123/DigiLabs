import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai';
const TextArea = () => {
    return (
        <div>
            <div className="TextArea">
                <div className='TextArea1'>
                    <span>Name</span>

                    <div className='textBoxContainer'>
                    <input type="text" className='input' />
                    <div><AiOutlineInfoCircle size={20} color='#A5ACBA' /></div>
                    </div>
                    <span style={{marginTop:'1rem'}}>Email*</span>

                    <div className='textBoxContainer'>
                    <input type="email" className='input' />
                    <div><AiOutlineInfoCircle size={20} color='#A5ACBA' /></div>
                    </div>
                    <span style={{color:"#A5ACBA"}}>Please input a real Email Address</span>
                </div>

                <div className='PassCPass'>

                    <div className="TextArea2">
                        <span>Password*</span>

                        <div className=' textBoxContainer textBoxContainer2'>
                        <input type="text" className=' input inputPass' />
                        <div><AiOutlineInfoCircle size={20} color='#A5ACBA'/></div>
                        </div>
                        <div style={{color:"#A5ACBA"}}>Please enter your password</div>
                    </div>

                    <div className='TextArea3'>
                        <span>Confirm Password*</span>

                        <div className='textBoxContainer textBoxContainer2'>
                        <input type="text" className=' input inputCPass' />
                        <div><AiOutlineInfoCircle size={20} color='#A5ACBA'/></div>
                        </div>
                        <div style={{color:"#A5ACBA"}}>Passwords need to match</div>
                    </div>
                </div>

                <div className="CheckBox">
                    <input type="checkbox" />
                    <span>I accept the Terms and Privacy Policy</span>
                </div>


            </div>
            <div className="Button">
                <button className="button">Next</button>
            </div>
        </div>
    )
}

export default TextArea

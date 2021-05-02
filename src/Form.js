import React from 'react'
import './style/form.scss';

const Form = () => {
    return (
        <div className="form-container">
            <div className="title">
            <h2>Send a Message</h2>
            </div>
            <div className="form-items">
                <div className="left">
                    <div className="container-input">
                        <input type="text" className="input" required/>
                        <span className="span">First Name</span>
                    </div>
                    <div className="container-input">
                    <input type="text" className="input" required/>
                        <span className="span">Last Name</span>
                    </div>
                </div>
                <div className="right">
                    <div className="container-input">
                    <input type="text" className="input" required/>
                        <span className="span">Email</span>
                    </div>
                    <div className="container-input">
                    <input type="text"  className="input" required/>
                        <span className="span">Mobile Number</span>
                    </div>
                </div>
            </div>
            <div className="textarea">
                <textarea className="textareaf" cols="30" rows="5" required>

                </textarea>
                <span className="textareaspan">Write your message here</span>
            </div>
            <button type="submit" className="button">Send</button>
        </div>
    )
}

export default Form

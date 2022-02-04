import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText('');
    }
    const [text, setText] = useState('');
    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    return (
        <>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : '#fff', color: props.mode === 'dark' ? '#fff' : '#000' }}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary ms-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-success ms-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-info ms-2" onClick={handleCopyClick}>Copy</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} Words and {text.length} Characters</p>
                <p>{text.split(' ').length * 0.008} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Something in the textbox to preview'}</p>
            </div>
        </>
    )
}

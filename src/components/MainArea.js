import React, { useState } from 'react'
import Preview from './Preview'

export default function MainArea(props) {
    const [text, setText] = useState(``)
    let speakText = new SpeechSynthesisUtterance(text);

    function toUpCase() {
        setText(text.toUpperCase())
        props.setAlerts({
            type: "success",
            message: "Text Upper Cased"
        })
        setTimeout(() => {
            props.setAlerts({
                type: null,
                message: null
            })
        }, 2000);
    }
    let toLowCase = () => {
        setText(text.toLowerCase())
        props.setAlerts({
            type: "success",
            message: "Text Lower Cased"
        })
        setTimeout(() => {
            props.setAlerts({
                type: null,
                message: null
            })
        }, 2000);
    }
    function toSpeak() {
        window.speechSynthesis.speak(speakText)
    }
    function toStopSpeak() {
        window.speechSynthesis.cancel()
    }
    function toReset() {
        setText(``);
        props.setAlerts({
            type: "success",
            message: "Text Reset"
        })
        setTimeout(() => {
            props.setAlerts({
                type: null,
                message: null
            })
        }, 2000);
    }
    function toOnChange(event) {
        setText(event.target.value);
    }
    return (
        <main>
            <div className="container my-3">
                <label htmlFor="floatingTextarea2" className='my-2'><h4>{props.title}</h4></label>
                <textarea className="form-control" placeholder="Enter text here" id="floatingTextarea2" cols="30" rows="8" value={text} onChange={toOnChange}></textarea>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary mx-2 my-3" type="button" onClick={toUpCase}>To UpperCase</button>
                    <button className="btn btn-primary mx-2 my-3" type="button" onClick={toLowCase}>To LowerCase</button>
                    <button className="btn btn-danger mx-2 my-3" type="reset" onClick={toReset}>Reset</button>
                    <button className="btn btn-primary mx-2 my-3" type="button" onClick={toSpeak}>Speak</button>
                    <button className="btn btn-primary mx-2 my-3" type="button" onClick={toStopSpeak}>Stop Speak</button>
                    <p>Word Count: <strong>{(text.trim() !== ``) ? text.replace(/\s+/g, ' ').trim().split(` `).length : 0}</strong>  &  Character Count: <strong>{text.length}</strong></p>
                    <div className="container my-3 overflow-auto" >
                        <Preview previewData={text} />
                    </div>
                </div>
            </div>
        </main>
    )
}

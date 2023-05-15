import React from 'react'

export default function Alerts(props) {
    const capitalize = (word)=>{
        if(props.alertType != null){
            let show_Word = word.toLowerCase();
            return show_Word.charAt(0).toUpperCase() + show_Word.slice(1)
        }
    }
    return (
        <>
            <div style={{ height: '50px' }}>
                <div className={`alert alert-${props.alertType} alert-dismissible fade show my-alert`} role="alert">
                    <strong>{capitalize(props.alertType)}</strong>{props.alertText}
                </div>
            </div>
        </>
    )
}

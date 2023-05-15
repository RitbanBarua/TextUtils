import React from 'react'

export default function ThemeMode(props) {
    return (
        <>
            <div className="form-check form-switch" style={{ marginRight: `1rem` }}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleTheme} style={{cursor: `pointer`}}/>
                <label className={`form-check-label text-${props.mode}`} htmlFor="flexSwitchCheckChecked">{props.themeBtnText}</label>
            </div>
        </>
    )
}

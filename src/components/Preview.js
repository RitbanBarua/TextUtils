import React from 'react'
import PropTypes from 'prop-types'

export default function Preview(props) {
    return (
        <>
            <label htmlFor="previewArea" className='my-2'><h3>Preview:</h3></label>
            <textarea className="form-control" placeholder="" id="previewArea" cols="30" rows="20" value={props.previewData} readOnly></textarea>
        </>
    )
}

Preview.propTypes = {
    previewData: PropTypes.string.isRequired
}

Preview.defaultProps = {
    previewData: 'Please add a valid preview data while using the React component'
}
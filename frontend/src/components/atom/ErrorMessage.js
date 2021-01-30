import React from 'react'

function ErrorMessage(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
        {props.children}
      </div>
    )
}

export default ErrorMessage

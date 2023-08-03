import React from 'react'

const Parent = ({ movetoParent, buttononTest }) => {
    return (
        <div>Parent {movetoParent} <button onClick={buttononTest}>Click on Parent</button></div>
    )
}

export default Parent
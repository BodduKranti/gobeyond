import React, { useState } from 'react'
import Parent from './Parents/Parent'

const Test = () => {
    const [state, setState] = useState(false)

    const clickOntest = () => {
        // alert('clik')
        setState(!state)
    }
    return (
        <>
            <div className='mt-5 pt-4'>
                <div className='container'>
                    {state ? 'test' : 'no conent'}
                    <Parent
                        movetoParent={state}
                        buttononTest={clickOntest}
                    />
                </div>
            </div>
        </>
    )
}

export default Test
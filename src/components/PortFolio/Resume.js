import React from 'react'
import ResumeLink from './Shubham.pdf'

function Resume() {
    return (
        <div>
            <div>
                <iframe
                    src={ResumeLink}
                    frameBorder="0"
                    scrolling="auto"
                    height='600px'
                    width="100%"
                ></iframe>
            </div>
        </div>
    )
}

export default Resume
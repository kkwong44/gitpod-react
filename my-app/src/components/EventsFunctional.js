import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("Clicked the funtional button")
    }
    return (
        <div>
            <button onClick={clickHandler}>click me - fuctional component</button>
        </div>
    )
}

export default EventsFunctional
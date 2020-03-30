import React from 'react'
import { withRouter } from 'react-router-dom'
import Note from '../Note/Note'
import CircleButton from '../Buttons/CircleButton/CircleButton'

function RenderHomePathMain(props) {

    return (
        <section>
            <ul>
               <Note />
            </ul>
            <div>
                <CircleButton />
            </div>
        </section>
    )

}

export default withRouter(RenderHomePathMain)
import React from 'react';
import ReactDOM from 'react-dom';
import pi,{doublePi,triplePi} from './math';

ReactDOM.render(

    <div>

        <ul>
            <li>{pi}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>
        </ul>


    </div>,document.getElementById("root")

)



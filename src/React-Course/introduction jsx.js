import React from 'react';
import ReactDOM from 'react-dom';

//react works creating these jsx files. reactDom.render and inside paranthesis these are jsx files()
//in this files we have got html right in the body odf javascript file. behind the secene story our html picked by comiler 
//and convert it into javascript file. comiler come from react module
ReactDOM.render(<h1>hello world</h1>,document.getElementById("root"));

//render fun takes only single element 

//ReactDOM.render(<h1>hello world</h1><p>this is paragraph</p> ,document.getElementById("root"));

//solution
ReactDOM.render(
    <div>

<h1>hello world</h1>
<p>i am usman</p>

</div>
,document.getElementById("root"));


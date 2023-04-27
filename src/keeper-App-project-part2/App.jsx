import React from "react";
import Card from "./Card";
import list from "./list";

function App()
{

    return(<div>

      {list.map((item) => (
        <Card term={item.term} detail={item.detail} />
      ))}
        

        </div>

    );

}

export default App;


 // <Card
 //   term={list.term1[1]}
 //   detail={list.detail[1]}
 // 
 // />
 // <Card
 //   term={list.term1[2]}
 //   detail={list.detail[2]}
 // />
import react from 'react'
import Card from './Card';
import contacts from './Contacts';


function CreateCard(contact)
{
  return <Card 
  id={contact.id}
  name={contact.name}

  img={contact.imgurl}
  tel={contact.phone}
  email={contact.email}
  graph={contact.graph}
 

  />
}


function App()
{
  return(
    <div>
      <h1 className="Heading">My contacts</h1>

      {contacts.map(CreateCard)}

     { /*  
      <Card
      name={contacts[0].name}
      img={contacts[0].img}
      tel={contacts[0].phone}
      email={contacts[0].email}

      />

<Card
name={contacts[1].name}
img={contacts[1].img}
tel={contacts[1].phone}
email={contacts[1].email}
/>

<Card
name={contacts[2].name}
img={contacts[2].img}
tel={contacts[2].phone}
email={contacts[2].email}
/>

  */}
    
    </div>
  )

}


export default App;


import axios from 'axios'
import './Reading.css'
import React, { useEffect, useState } from 'react'
import{
  ReadingContainer,
  Reader,
  ListWrapper,
  ReadCard,
  ReadList,
  List
} from './ReadingListStyler';

const ReadingList = ({words}) => {

  const [data, setData] = useState({
    book_name: ""
  })
  // fetching reading list
const [reader, setReader]= useState([])
useEffect (() => {
  fetch ('https://little-tales.herokuapp.com/reading')
  .then (response => response.json())
  .then((vitabu) =>
  // console.log (products)
  setReader(vitabu) 
  )
}, [])

// Submit
  const handleChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name]:value})

  }

  const submit = (e) =>{
    e.preventDefault()
    console.log(data)

    axios.post("https://little-tales.herokuapp.com/reading", {
      book_name: data.book_name
    })
    .then(response => {console.log(response)})
  }
  const remove = (e) =>{
    axios.delete("https://little-tales.herokuapp.com/reading", {
      
    })
  }
  const update = (e) =>{
    axios.put("https://little-tales.herokuapp.com/reading", {

    })
  }
  return (
    <div>
    <form>
    <label className='text-holder'>
    Reading list:  
    <input type="text" className='readlist' name="book_name" placeholder='Write book name here...' onChange={handleChange}/>
  </label>
  <button className='adder-btn' onClick={submit}>Add</button>
 
</form>



<div className="readerlist" >
<Reader>Welcome Reader to Our List</Reader>
<ReadingContainer>
<ListWrapper> 
{reader.map((read,  index) =>{
return (
  <ReadCard key={index}>
  <ReadList>
  <List>
  <ul>
  <li>{read.book_name}
  </li>
  </ul>
  </List>
  <button className='editor-btn' onClick={update}>Edit</button>
  <button className= 'deleter-btn' onClick={remove}>Delete</button>
  </ReadList>
  
  </ReadCard>
)
})}

</ListWrapper>
</ReadingContainer>

</div>
    </div>
  )
}

export default ReadingList
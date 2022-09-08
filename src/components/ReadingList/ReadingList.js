import axios from 'axios'
import React, { useState } from 'react'

const ReadingList = () => {

  const [data, setData] = useState({
    book_name: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name]:value})

  }

  const submit = (e) =>{
    e.preventDefault()
    console.log(data)

    axios.post("http://localhost:9292/reading", {
      book_name: data.book_name
    })
    .then(response => {console.log(response)})
  }
  const remove = (e) =>{
    axios.delete("http://localhost:9292/reading", {

    })
  }
  return (
    <div>
    <form>
    <label>
    Reading list 
    <input type="text" name="book_name" placeholder='type here' onChange={handleChange}/>
  </label>
  <button onClick={submit}>Add to list</button>
 
</form>



<div className="readerlist">
<ReadingContainer>
<button onClick={remove}>Delete from list</button>
</ReadingContainer>

</div>
    </div>
  )
}

export default ReadingList
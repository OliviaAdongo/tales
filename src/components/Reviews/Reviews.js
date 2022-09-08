import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Reviews = () => {
  const [data, setData] = useState("")
  useEffect(()=>{

  axios("http://localhost:9292/review")
  .then((response) => {setData(response.data)})
  },[])


  console.log(data)

  return (
    <div>
    <form>
  <label> 
  Tutors Name: 
  <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
    Review: 
    <input type="text" name="review" />
    
  </label>
  <input type="submit" value="Submit" />
  
</form>
</div>
  )
}

export default Reviews
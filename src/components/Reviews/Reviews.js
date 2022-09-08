import axios from 'axios'
import React, { useEffect, useState } from 'react'
import{
  ReviewContainer,
  Reviewer,
  ReviewWrapper,
  ReviewCard,
  ReviewList,
  Views
} from './ReviewStyler';


const Reviews = () => {
const [reviews, setReview] = useState([])

  const [data, setData] = useState("")
  useEffect(()=>{

  axios("http://localhost:9292/review")
  .then((response) => {setData(response.data)})
  },[])

  useEffect (() => {
    fetch ('http://127.0.0.1:9292/review')
    .then (response => response.json())
    .then((reviews) =>
    // console.log (products)
    setReview(reviews)
    )
  }, [])

  console.log(data)

  return (
    <div>
    <form>
  <label> 
    Add Review: 
    <input type="text" name="review" />
  </label>
  <input type="submit" value="Submit" />
</form>

<div className="reviewer" >
<Reviewer>Reviews</Reviewer>
<ReviewContainer>
<ReviewWrapper>
{reviews.map((read,  index) =>{
return (
  <ReviewCard key={index}>
  <ReviewList>
  <Views>{reviews.reviews}
  </Views>
  <button className='upvote'>upvote</button>
  <button className= 'downvote'>downvote</button>
  </ReviewList>
  
  </ReviewCard>
)
})}

</ReviewWrapper>
</ReviewContainer>

</div>

</div>
  )
}

export default Reviews
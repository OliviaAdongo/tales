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
// useState for upvoting and down votting
const [upvote, setUpvote] = useState(1)
const [downvote, setDownvote] = useState(0)

const [upvoteactive, setUpvoteActive] = useState(false)
const [downvoteactive, setDownvoteActive] = useState(false)

//upvote function
function upvotefun(){
  // alert('Upvote')
  if (upvoteactive) {
    setUpvoteActive(false)
    setUpvote(-1)
  } else {
    setUpvoteActive(true)
    setUpvote(+1)

    if (downvoteactive) {
      setDownvoteActive(false)
      setUpvote(upvote+1)
      setDownvote(downvote -1)
    }
  }

}
function downvotefun(){
  if (downvoteactive) {
    setDownvoteActive(false)
    setDownvote(downvote -1)
  } else {
    setDownvoteActive(true)
    setDownvote(upvote -1)

    if (upvoteactive) {
      setUpvoteActive(false)
      setUpvote(+1)
      setDownvote(downvote -1)
    }
  }
  
}
  // usestate for fetching reviews
const [reviews, setReview] = useState([])

// usestate for posting  reviews
  const [data, setData] = useState("")
  useEffect(()=>{

  axios("http://localhost:9292/review")
  .then((response) => {setData(response.data)})
  },[])

  useEffect (() => {
    fetch ('http://127.0.0.1:9292/review')
    .then (response => response.json())
    .then((reviews) =>
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
{reviews.slice(1).map((reviews,  index) =>{
return (
  <ReviewCard key={index}>
  <ReviewList>
  <Views>{reviews.reviews}
  </Views>
  <button className='upvote' onClick={upvotefun}>Upvote{upvote}</button>
  <button className= 'downvote' onClick={downvotefun}>Downvote{downvote}</button>
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
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  BookContainer,
  BookWrapper,
  BookAuthor,
  BookButton,
  BookCard,
  BookDescription,
  BookHeading,
  BookImage,
  BookInfo,
  
} from './Bookstyler';

const Books = ({data}) => {
let navigate = useNavigate()
const [books, setBooks] =  useState ([])

useEffect (() => {
  fetch ('https://little-tales.herokuapp.com/books')
  .then (response => response.json())
  .then((products) =>
  // console.log (products)
  setBooks(products) 
  )
}, [])

  return (
    <div>
    <BookContainer>
    <BookHeading>Books We Love</BookHeading>
    <BookWrapper>
    
    {books.slice(1).map((book, index) =>{
      return(
        <BookCard key={index}>
        <BookImage src={book.imgurl} alt={book.alt}/>
        <BookInfo>
        <BookDescription>{book.description}</BookDescription>
        <BookAuthor>{book.author}</BookAuthor>
        <BookButton onClick={()=>{ navigate('/review')}}>Review</BookButton> 
        </BookInfo>
        </BookCard>
      )

    })}
    </BookWrapper>
    </BookContainer>
    
    </div>
  )
  
}

export default Books
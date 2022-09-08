import React from 'react'
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
  return (
    <div>
    <BookContainer>
    <BookHeading>Books We Love</BookHeading>
    <BookWrapper>
    {data.map((book, index) =>{
      return(
        <BookCard key={index}>
        <BookImage src={book.img} alt={book.alt}/>
        <BookInfo>
        <BookDescription>{book.description}</BookDescription>
        <BookAuthor>{book.author}</BookAuthor>
        <BookButton>{book.button}</BookButton>
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
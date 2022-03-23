import React from 'react'
import { useParams } from 'react-router-dom'


export const MoviesDetail = () => {
    let id=useParams().id;
    // console.log(idf)
  return (
    <div>

        <h1>Movie detail</h1>
        <h1>The id is :{id}</h1>

    </div>
    
  )
}

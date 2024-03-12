import React from 'react'
import { Repository } from '../hooks/types'

type CardProps={
    repository: Repository
    isFavorite: boolean
}

function Cards({repository, isFavorite}:CardProps) {
  return (
    <div>
        <h1>{repository.name}</h1>
        <button>{isFavorite ? "dislike": "like"}</button>
    </div>
  )
}

export default Cards
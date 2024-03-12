import React from 'react'
import { Repository } from '../hooks/types'
import { useFavoriteReposStore } from '../store/favoriteRepos'

type CardProps={
    repository: Repository
    isFavorite: boolean
}

function Cards({repository, isFavorite}:CardProps) {

  const addFavoriteRepo=useFavoriteReposStore(state=> state.addFavoriteRepo);

  return (
    <div>
        <h1>{repository.name}</h1>
        <button>{isFavorite ? "dislike": "like"}</button>
    </div>
  )
}

export default Cards
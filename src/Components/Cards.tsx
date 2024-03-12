import React from 'react'
import { Repository } from '../hooks/types'

type CardProps={
    repository: Repository
}

function Cards({repository}:CardProps) {
  return (
    <div><h1>{repository.name}</h1></div>
  )
}

export default Cards
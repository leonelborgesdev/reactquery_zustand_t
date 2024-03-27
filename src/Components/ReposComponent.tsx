import React from 'react'
import { useFetchRepositories } from '../hooks/useRepos'
import Cards from '../Components/Cards';
import { useFavoriteReposStore } from '../store/favoriteRepos';

export const ReposComponent = () => {
    const { data, isLoading }=useFetchRepositories();
    const { favoriteReposIds }=useFavoriteReposStore();
  
    if (isLoading) {
      return <div>Loading...</div>
    }
    console.log(data)
    return (
      <div>{data?.map((repository)=>(
        <Cards repository={repository} 
        key={repository.id}
        isFavorite={favoriteReposIds.includes(repository.id)}/>
      ))}</div>
    )
}

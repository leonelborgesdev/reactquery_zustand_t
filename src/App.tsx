import React from 'react'
import { useFetchRepositories } from './hooks/useRepos'
import Cards from './Components/Cards';

function App() {
  const {data, isLoading}=useFetchRepositories();
  if (isLoading) {
    return <div>Loading...</div>
  }
  console.log(data)
  return (
    <div>{data?.map((repository)=>(
      <Cards repository={repository}/>
    ))}</div>
  )
}

export default App
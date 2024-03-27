import { useFetchRootVideogames } from "../hooks/rootVideogames"

export const VideogamesComponent = () => {
    const {data, isLoading}= useFetchRootVideogames();
    if (isLoading) {
        return(
            <div>Loading Videogames...</div>
        )
    }
    console.log(data)
    return (
        <div>VideogamesComponent</div>
    )
}

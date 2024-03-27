import { useFetchGenres } from "../hooks/rootGeneres";
import { useFetchRootVideogames } from "../hooks/rootVideogames"

export const VideogamesComponent = () => {
    // const {data, isLoading}= useFetchRootVideogames();
    const listvideogames= useFetchRootVideogames().data
    const listgenres =useFetchGenres().data
    if (!listvideogames && !listgenres ) {
        return(
            <div>Loading Videogames...</div>
        )
    }
    console.log(listvideogames)
    return (
        <div>
            <div></div>
            <div></div>
        </div>
    )
}

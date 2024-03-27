import { useFetchGenres } from "../hooks/rootGeneres";
import { useFetchRootVideogames } from "../hooks/rootVideogames"
import { Genre, Videogame } from "../hooks/types";

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
        <div className="container_videogames">
            <div>{listgenres?.map((genre: Genre)=>{
                return (
                    <h4 key={genre.id}>{genre.nombre}</h4>
                )
            })            
}           </div>
            <div>{listvideogames?.map((videogame: Videogame)=>{
                return(
                    <h2 key={videogame.id}>{videogame.nombre}</h2>
                )
            })}</div>
        </div>
    )
}

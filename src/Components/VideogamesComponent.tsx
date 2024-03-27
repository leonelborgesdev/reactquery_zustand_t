import { useFetchGenres } from "../hooks/rootGeneres";
import { useFetchRootVideogames } from "../hooks/rootVideogames"
import { Genre, Videogame } from "../hooks/types";
import "../styles/Videogames.css"

export const VideogamesComponent = () => {
    // const {data, isLoading}= useFetchRootVideogames();
    const listvideogames= useFetchRootVideogames().data
    const listgenres =useFetchGenres().data
    if (!listvideogames && !listgenres ) {
        return(
            <div>Loading Videogames...</div>
        )
    }
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
                    <div key={videogame.id}>
                        <h2>{videogame.nombre}</h2>
                        <span>Genres: </span>
                        {videogame.genres.map((genre:Genre)=>{
                            return(
                                <span key={genre.id}>[{genre.nombre}] </span>
                            )
                        })}
                    </div>
                )
            })}</div>
        </div>
    )
}

import { useQuery } from "@tanstack/react-query";
import api from "../api/root";
import { rootVideogames } from "./types";

async function fetchRoot() {
    const { data } = await api.get<rootVideogames>('/videogames')
    const listvideogames= data.videogames
    return listvideogames
}

export function useFetchRootVideogames() {
    return useQuery({
        queryKey: ['getvideogames'], // Esta es la clave de la consulta, puede ser cualquier valor único
        queryFn: fetchRoot // Aquí debes proporcionar la función que realiza la consulta y devuelve los datos
    });
}
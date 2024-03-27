import { useQuery } from "@tanstack/react-query";
import api from "../api/root";
import { Genre, rootGenre } from "./types";

async function fetchGenres() {
    const { data } = await api.get<rootGenre>('/genres')
    const listGenres=data.genres;
    return listGenres
}

export function useFetchGenres() {
    return useQuery({
        queryKey: ['getGenres'], // Esta es la clave de la consulta, puede ser cualquier valor único
        queryFn: fetchGenres // Aquí debes proporcionar la función que realiza la consulta y devuelve los datos
    });
}
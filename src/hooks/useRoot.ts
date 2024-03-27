import { useQuery } from "@tanstack/react-query";
import api from "../api/root";
import { Root } from "./types";

async function fetchRoot() {
    const {data}=await api.get<Root>('/videogames')
    return data
}

export function useFetchRepositories() {
    return useQuery({
        queryKey: ['root'], // Esta es la clave de la consulta, puede ser cualquier valor único
        queryFn: fetchRoot // Aquí debes proporcionar la función que realiza la consulta y devuelve los datos
    });
}
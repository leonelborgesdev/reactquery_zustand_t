import { useQuery } from "@tanstack/react-query";
import api from "../api/github";

async function fetchRespos() {
    const {data}=await api.get('/users/leonelborgesdev/repos')
    return data
}

export function useFetchRepositories() {
    return useQuery({
        queryKey: ['repos'], // Esta es la clave de la consulta, puede ser cualquier valor único
        queryFn: fetchRespos // Aquí debes proporcionar la función que realiza la consulta y devuelve los datos
    });
}
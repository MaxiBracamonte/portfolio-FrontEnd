import { Usuario } from "./usuario";

   
export interface Skills {
    id: number;
    skill: string;
    porcentaje: string;
    usuario:Usuario;
    
}
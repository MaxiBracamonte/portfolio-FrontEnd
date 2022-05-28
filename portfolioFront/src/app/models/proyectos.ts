import { Usuario } from "./usuario";


export interface Proyectos {
    id: number;
    nombreProyecto: string;
    descripcion: string;
    urlImagen: string;    
    usuario: Usuario;
}
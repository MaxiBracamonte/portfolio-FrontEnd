import { Usuario } from "./usuario";


export interface Experiencia {
    id: number;
    puesto: string;
    nombreEmpresa: string;
    fechaInicio: string;
    fechaFinalizacion: string;
    descripcion: string;
    usuario: Usuario;
}
import { Schema, model, models } from 'mongoose';


interface IUsuario {
    _id: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    telefono: string;
    email: string;
    password: string;
    direccion: string;
    rol: string;
    fechaRegistro: string;
    especialidad: string;
  }

const usuarioSchema = new Schema({                           
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  direccion: { type: String },
  rol: { type: String },
  fechaRegistro: { type: String },
  especialidad: { type: String },
});

const Usuario = models.Usuario || model<IUsuario>('Usuario', usuarioSchema, 'usuario');

export type { IUsuario };
export default Usuario; 
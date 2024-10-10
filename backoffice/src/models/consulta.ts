import { Schema, model, models } from 'mongoose';

interface IConsulta {
    _id: string;
    usuarioId: string;
    pregunta: string;
    respuestaBot: string;
    derivado: boolean;
    estadoConsulta: string;
    fechaConsulta: string; 
    abogadoAsignado: string;
    apellidom_abogado: string;
    apellidom_cliente: string;
    apellidop_abogado: string;
    apellidop_cliente: string;
    contacto_abogado: string;
    contacto_cliente: string;
    direccion_cliente: string;
    email_abogado: string;
    email_cliente: string;
    especialidad: string;
    nombre_abogado: string;
    nombre_cliente: string;
  }
  

const consultaSchema = new Schema({
  usuarioId: {
    type: String,
    required: true,
  },
  pregunta: {
    type: String,
    required: true,
  },
  respuestaBot: {
    type: String,
    required: true,
  },
  derivado: {
    type: Boolean,
    default: false,
  },
  estadoConsulta: {
    type: String,
    default: 'no asignado',
  },
  fechaConsulta: {
    type: Date,
    required: true,
  },
  abogadoAsignado: {
    type: String,
    default: 'no',
  },
  apellidom_abogado: {
    type: String,
    default: 'no',
  },
  apellidom_cliente: {
    type: String,
    default: 'no',
  },
  apellidop_abogado: {
    type: String,
    default: 'no',
  },
  apellidop_cliente: {
    type: String,
    default: 'no',
  },
  contacto_abogado: {
    type: String,
    default: 'no',
  },
  contacto_cliente: {
    type: String,
    required: true,
  },
  direccion_cliente: {
    type: String,
    required: true,
  },
  email_abogado: {
    type: String,
    default: 'no',
  },
  email_cliente: {
    type: String,
    required: true,
  },
  especialidad: {
    type: String,
    required: true,
  },
  nombre_abogado: {
    type: String,
    default: 'no',
  },
  nombre_cliente: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Consulta = models.Consulta || model<IConsulta>('Consulta', consultaSchema, 'consulta');

export default Consulta;
export type { IConsulta };
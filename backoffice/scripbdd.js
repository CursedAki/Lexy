const { readFileSync } = require('fs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Leer los archivos JSON
    const usersData = JSON.parse(readFileSync('./lexy.users.json'));
    const consultasData = JSON.parse(readFileSync('./lexy.consultas.json'));

    // Crear usuarios
    for (const usuario of usersData) {
      await prisma.usuario.create({
        data: {
          id: usuario._id.$oid, // Asegúrate de que el ID esté en el formato correcto
          nombre: usuario.nombre,
          apellidoPaterno: usuario.apellidoPaterno,
          apellidoMaterno: usuario.apellidoMaterno,
          telefono: usuario.telefono,
          email: usuario.email,
          password: usuario.password,
          direccion: usuario.direccion,
          rol: usuario.rol,
          fechaRegistro: usuario.fechaRegistro,
          Especialidad: usuario.Especialidad,
        },
      });
    }

    // Crear consultas
    for (const consulta of consultasData) {
      await prisma.consulta.create({
        data: {
          id: consulta._id.$oid,
          usuarioId: consulta.usuarioId,
          pregunta: consulta.pregunta,
          respuestaBot: consulta.respuestaBot,
          derivado: consulta.derivado,
          estadoConsulta: consulta.estadoConsulta,
          fechaConsulta: consulta.fechaConsulta,
          abogadoAsignado: consulta.abogadoAsignado,
          apellidom_abogado: consulta.apellidom_abogado,
          apellidom_cliente: consulta.apellidom_cliente,
          apellidop_abogado: consulta.apellidop_abogado,
          apellidop_cliente: consulta.apellidop_cliente,
          contacto_abogado: consulta.contacto_abogado,
          contacto_cliente: consulta.contacto_cliente,
          direccion_cliente: consulta.direccion_cliente,
          email_abogado: consulta.email_abogado,
          email_cliente: consulta.email_cliente,
          especialidad: consulta.especialidad,
          nombre_abogado: consulta.nombre_abogado,
          nombre_cliente: consulta.nombre_cliente,
        },
      });
    }

    console.log('Datos insertados exitosamente.');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}

seedDatabase();
import { consultas, users } from '@prisma/client';

export const getUsers = async () => {
    const response = await fetch('/api/users', {
      method: 'GET'
    })
    if (response.statusText !== 'ok'){
      console.log('error en peticion')
    }
    const json = await response.json();
    console.log(json)
    return json;
  }

export const getConsultas = async () => {
  const response = await fetch('/api/consultas',{
    method: 'GET'
  })
  if (response.statusText !== 'ok'){
    console.log('error de solicitud')
  }
  const json = await response.json();
  console.log(json)
  return json;
}

export const getUserespe = async (id: String) => {
  const response = await fetch(`/api/consultas/${id}`,{
    method: 'GET'
  })
  if (response.statusText !== 'ok'){
    console.log('error de solicitud')
  }
  const json = await response.json();
  console.log(json)
  return json;
}

/*export const agregarDatosUsuariosAConsultas = async (users: users[], consultas: consultas[]) => {
  return consultas.map(consulta => {
    const usuario = users.find(user => user.id === consulta.usuarioId);

    if (usuario) {
      return {
        ...consulta,
        nombreUsuario: usuario.nombre,
        apellidoPaternoUsuario: usuario.apellidoPaterno,
        apellidoMaternoUsuario: usuario.apellidoMaterno,
        telefonoUsuario: usuario.telefono,
        emailUsuario: usuario.email,
        direccionUsuario: usuario.direccion,
        fechaRegistroUsuario: usuario.fechaRegistro,
        especialidadUsuario: usuario.Especialidad,
      };
    }

    return consulta;
  });
};*/


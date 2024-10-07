import { NextResponse, NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma'; // Reutiliza la instancia de Prisma

export async function GET() {
  try {

    const usuarios = await prisma.usuario.findMany();
    return NextResponse.json(usuarios);
  } catch (error) {
    console.error("Error fetching usuarios:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {

    const { nombre, apellidoPaterno, apellidoMaterno, telefono, email, password, direccion, rol, fechaRegistro, especialidad } = await request.json();


    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        telefono,
        email,
        password,
        direccion,
        rol,
        fechaRegistro,
        especialidad
      }
    });

    return NextResponse.json(nuevoUsuario, { status: 201 }); // Retorna el nuevo usuario creado con estado 201
  } catch (error) {
    console.error("Error creando usuario:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
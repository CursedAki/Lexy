import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_, { params }: { params: { id: string } }) {
    const { id } = params; // Extrae el 'id' de los parámetros de la ruta
  
    try {
      // Obtener la consulta específica según el ID
      const user = await prisma.users.findUnique({
        where: { id: String(id) }, // Asegúrate de que el id sea un string
      });
  
      if (!user) {
        return NextResponse.json({ error: 'Consulta no encontrada' }, { status: 404 });
      }
  
      return NextResponse.json(user);
    } catch (error) {
      console.error("Error fetching consulta:", error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const consultas = await prisma.consultas.findMany();
    return NextResponse.json(consultas);
  } catch (error) {
    console.error("Error fetching consultas:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
 
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { slides } = await request.json();
    
    await prisma.setting.upsert({
      where: { key: 'hero_slides' },
      update: { value: JSON.stringify(slides) },
      create: { key: 'hero_slides', value: JSON.stringify(slides) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update setting' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { getStoreData, updateStoreData } from '@/lib/store';
import { cookies } from 'next/headers';

export async function GET() {
  const data = getStoreData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (token !== 'admin-secret-token') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (typeof body.maintenanceMode === 'boolean') {
      const newData = updateStoreData({ maintenanceMode: body.maintenanceMode });
      return NextResponse.json(newData);
    }
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

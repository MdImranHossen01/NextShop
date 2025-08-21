import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function GET(request, { params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
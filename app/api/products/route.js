import { NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]/route';


// GET all products (public)
export async function GET() {
  return NextResponse.json(products);
}

// POST a new product (protected)
export async function POST(request) {
  const session = await getServerSession(authOptions);

  // Check if the user is authenticated
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, description, price } = body;

    if (!name || !description || !price) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newProduct = {
      id: String(products.length + 1), // Simple ID generation
      name,
      description,
      price: parseFloat(price),
    };

    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating product' }, { status: 500 });
  }
}
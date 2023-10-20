import { NextRequest, NextResponse } from 'next/server';

const user = {
  name: 'John',
  age: 30,
  email: 'john@mail.com',
  purchase: {
    date: '2020-01-01',
    total: 100,
    product_id: 1,
  },
};

export async function GET(req: NextRequest) {
  const body = await req.json();

  console.log('bod bod: ', body);
  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log('bod bod: ', body);

  return NextResponse.json(user);

}

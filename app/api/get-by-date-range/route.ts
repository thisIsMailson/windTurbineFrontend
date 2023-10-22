import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const base_url = process.env.NX_ANNEA_GCF_URL;
  const data = await axios.get(`${base_url}/filter-by-time-range`, {
    params: {
      start_date: req.nextUrl.searchParams.get('start_date'),
      end_date: req.nextUrl.searchParams.get('end_date'),
    },
  });
  console.log('data ===>', data.data);
  return NextResponse.json(data.data);
}

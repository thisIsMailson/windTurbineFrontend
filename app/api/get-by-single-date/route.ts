import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const base_url = process.env.NX_ANNEA_GCF_URL;
  const data = await axios.get(`${base_url}/search-by-timestamp`, {
    params: {
      timestamp: req.nextUrl.searchParams.get('start_date'),
    },
  });
  console.log('data ===>', data.data);

  return NextResponse.json(data.data);
}

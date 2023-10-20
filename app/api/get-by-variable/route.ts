import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const base_url = process.env.NX_ANNEA_GCF_URL;
  const variable = req.nextUrl.searchParams.get('variable');
  const data = await axios.get(`${base_url}/filter-by-variable`, {
    params: {
      variable: variable,
    },
  });

  return NextResponse.json(data.data);
}

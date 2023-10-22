import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const base_url = process.env.NX_ANNEA_GCF_URL;
  const data = await axios.get(`${base_url}/get-grouped-summary`);

  return NextResponse.json(data.data);
}

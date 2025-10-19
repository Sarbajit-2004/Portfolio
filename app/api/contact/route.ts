import { NextResponse } from 'next/server';
export async function POST(req:Request){const d=await req.json();console.log('Contact submission:',d);return NextResponse.json({ok:true});}

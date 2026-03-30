import{NextResponse}from"next/server";
export async function GET(){return NextResponse.json({data:[],total:0,timestamp:Date.now()});}
export async function POST(req:Request){const body=await req.json();return NextResponse.json({success:true,...body});}
import {NextRequest,NextResponse} from 'next/server';import {issue} from '@/lib/auth';
export async function POST(r:NextRequest){const {password}=await r.json();if(!process.env.ADMIN_PASSWORD||password!==process.env.ADMIN_PASSWORD)return NextResponse.json({error:'Senha inválida'},{status:401});issue();return NextResponse.json({ok:true})}

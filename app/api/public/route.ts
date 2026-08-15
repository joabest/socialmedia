import {NextResponse} from 'next/server';import {getCandidates} from '@/lib/data';export const revalidate=60;export async function GET(){return NextResponse.json({candidates:await getCandidates()})}

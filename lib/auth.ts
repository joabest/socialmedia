import crypto from 'crypto';
import {cookies} from 'next/headers';
const token=()=>crypto.createHmac('sha256',process.env.AUTH_SECRET||'dev-secret').update('admin').digest('hex');
export const valid=()=>cookies().get('admin_session')?.value===token();
export const issue=()=>cookies().set('admin_session',token(),{httpOnly:true,sameSite:'strict',secure:process.env.NODE_ENV==='production',maxAge:60*60*8,path:'/'});

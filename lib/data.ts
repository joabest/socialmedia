import {createClient} from '@supabase/supabase-js';
export type Candidate={id:string;name:string;handle:string;bio:string;photo_url:string;links:Link[]};
export type Link={id:string;label:string;url:string;icon:string;position:number};
export const fallback:Candidate[]=[
 {id:'ana',name:'Ana Carolina Serra',handle:'@anacarolinaserra',bio:'Advogada, professora e deputada estadual. Trabalho, cuidado e compromisso com São Paulo.',photo_url:'',links:[{id:'ana-instagram',label:'Instagram',url:'#',icon:'instagram',position:1},{id:'ana-facebook',label:'Facebook',url:'#',icon:'facebook',position:2},{id:'ana-youtube',label:'YouTube',url:'#',icon:'youtube',position:3},{id:'ana-site',label:'Site oficial',url:'#',icon:'globe',position:4}]},
 {id:'paulo',name:'Paulo Serra',handle:'@pauloserra',bio:'Economista, advogado e ex-prefeito de Santo André. Experiência para representar São Paulo.',photo_url:'',links:[{id:'paulo-instagram',label:'Instagram',url:'#',icon:'instagram',position:1},{id:'paulo-facebook',label:'Facebook',url:'#',icon:'facebook',position:2},{id:'paulo-youtube',label:'YouTube',url:'#',icon:'youtube',position:3},{id:'paulo-site',label:'Site oficial',url:'#',icon:'globe',position:4}]}
];
export function adminDb(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!url||!key)return null;return createClient(url,key,{auth:{persistSession:false}})}
export async function getCandidates(){const db=adminDb();if(!db)return fallback;const {data,error}=await db.from('candidates').select('*,links(*)').order('name');return error||!data?.length?fallback:data as Candidate[]}

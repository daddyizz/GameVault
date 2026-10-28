import {games, type Game} from './games';
import {createClient} from '@supabase/supabase-js';

export type PublishedGame={id:string;title:string;genre:string;description:string;download_url:string;cover_url:string;published:boolean};
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function loadCatalog():Promise<{games:Game[];covers:Record<string,string>}>{
  if(!url||!key)return {games,covers:{}};
  const client=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data,error}=await client.from('gv_games').select('id,title,genre,description,download_url,cover_url,published').eq('published',true).order('created_at',{ascending:false});
  if(error){console.error('GameVault catalog:',error.message);return {games,covers:{}};}
  const covers:Record<string,string>={};
  const merged=new Map<string,Game>(games.map(g=>[g.id,g]));
  for(const row of (data||[]) as PublishedGame[]){
    if(!row.published)continue;
    if(row.cover_url?.startsWith('https://'))covers[row.id]=row.cover_url;
    const prior=merged.get(row.id);
    merged.set(row.id,{id:row.id,title:row.title,genre:row.genre,description:row.description,url:row.download_url,tag:prior?.tag||'FREE DOWNLOAD',gradient:prior?.gradient||'#a52a34',year:prior?.year||'',platform:prior?.platform||'PC',features:prior?.features||[]});
  }
  return {games:[...merged.values()],covers};
}

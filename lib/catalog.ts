import {games, type Game} from './games';
import {createClient} from '@supabase/supabase-js';

export type DownloadMirror={host:string;url:string};
export type PublishedGame={download_mirrors?:DownloadMirror[];id:string;title:string;genre:string;description:string;download_url:string;cover_url:string;published:boolean;platform:string;version:string;file_size:string;release_date:string|null;screenshots:string[];featured:boolean;sort_order:number};
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function loadCatalog():Promise<{games:Game[];covers:Record<string,string>;details:Record<string,{version:string;file_size:string;release_date:string|null;screenshots:string[];download_mirrors:DownloadMirror[]}>}>{
  if(!url||!key)return {games,covers:{},details:{}};
  const client=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data,error}=await client.from('gv_games').select('id,title,genre,description,download_url,cover_url,published,platform,version,file_size,release_date,screenshots,featured,sort_order,download_mirrors').eq('published',true).order('featured',{ascending:false}).order('sort_order',{ascending:true}).order('created_at',{ascending:false});
  if(error){console.error('GameVault catalog:',error.message);return {games,covers:{},details:{}};}
  const covers:Record<string,string>={};
  const details:Record<string,{version:string;file_size:string;release_date:string|null;screenshots:string[];download_mirrors:DownloadMirror[]}>={};
  const merged=new Map<string,Game>(games.map(g=>[g.id,g]));
  for(const row of (data||[]) as PublishedGame[]){
    if(!row.published)continue;
    details[row.id]={version:row.version||'',file_size:row.file_size||'',release_date:row.release_date||null,screenshots:(row.screenshots||[]).filter(x=>x.startsWith('https://')).slice(0,12),download_mirrors:Array.isArray(row.download_mirrors)?row.download_mirrors.filter(m=>m&&typeof m.host==='string'&&typeof m.url==='string'&&m.url.startsWith('https://')).slice(0,12):[]};
    if(row.cover_url?.startsWith('https://'))covers[row.id]=row.cover_url;
    const prior=merged.get(row.id);
    merged.set(row.id,{id:row.id,title:row.title,genre:row.genre,description:row.description,url:row.download_url,tag:prior?.tag||'FREE DOWNLOAD',gradient:prior?.gradient||'#a52a34',year:prior?.year||'',platform:row.platform||prior?.platform||'PC',features:prior?.features||[]});
  }
  const dbRows=((data||[]) as PublishedGame[]).filter(r=>r.published);
  const dbIds=new Set(dbRows.map(r=>r.id));
  const orderedIds=[...dbRows.map(r=>r.id),...games.filter(g=>!dbIds.has(g.id)).map(g=>g.id)];
  return {games:orderedIds.map(id=>merged.get(id)!).filter(Boolean),covers,details};
}

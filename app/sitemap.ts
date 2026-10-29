import type {MetadataRoute} from 'next';
import {loadCatalog} from '../lib/catalog';
const base='https://game-vault-ochre.vercel.app';
export const dynamic='force-dynamic';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const {games}=await loadCatalog();
  return [{url:base,changeFrequency:'weekly',priority:1},...games.map(g=>({url:base+'/games/'+encodeURIComponent(g.id),changeFrequency:'weekly' as const,priority:0.7}))];
}

import type {MetadataRoute} from 'next';import {games} from '../lib/games';
const base='https://game-vault-ochre.vercel.app';
export default function sitemap():MetadataRoute.Sitemap{return [{url:base,changeFrequency:'weekly',priority:1},...games.map(g=>({url:base+'/games/'+g.id,changeFrequency:'monthly' as const,priority:0.7}))]}
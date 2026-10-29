import './globals.css';
import type {Metadata,Viewport} from 'next';

export const metadata:Metadata={
  metadataBase:new URL('https://game-vault-ochre.vercel.app'),
  title:{default:'GameVault | Discover Games from Official Sources',template:'%s | GameVault'},
  description:'Explore curated games, gameplay screenshots and official download sources. GameVault is an independent discovery catalog and does not host game files.',
  applicationName:'GameVault',
  verification:{google:'25pnhlCTDJAmDOkNR4FwwhyC4VsKMCR7oj3OYMQtyes'},
  alternates:{canonical:'/'},
  openGraph:{type:'website',locale:'en_US',siteName:'GameVault',title:'GameVault | Discover Games from Official Sources',description:'Explore curated games and their authorized official download sources.',url:'/',images:[{url:'/opengraph-image',width:1200,height:630,alt:'GameVault cinematic game discovery'}]},
  twitter:{card:'summary_large_image',title:'GameVault | Discover Games from Official Sources',description:'Discover curated games and authorized sources.',images:['/opengraph-image']},
  robots:{index:true,follow:true}
};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#080910'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

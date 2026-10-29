import {ImageResponse} from 'next/og';
export const runtime='edge';
export const alt='GameVault cinematic game discovery';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:85,background:'linear-gradient(120deg,#07080c,#201013 70%,#4d1420)',color:'#fff',fontFamily:'sans-serif'}}>
      <div style={{display:'flex',alignItems:'center',fontSize:26,letterSpacing:8,color:'#fa5a69',fontWeight:700}}>DISCOVER YOUR NEXT GAME</div>
      <div style={{display:'flex',marginTop:22,fontSize:120,fontWeight:900,letterSpacing:-6}}>GAME<span style={{color:'#ff334e'}}>VAULT</span></div>
      <div style={{display:'flex',marginTop:20,fontSize:27,color:'#ddd'}}>CURATED GAMES · OFFICIAL SOURCES</div>
      <div style={{display:'flex',marginTop:55,width:210,height:8,background:'#ff334e',borderRadius:10}}/>
    </div>,size
  );
}

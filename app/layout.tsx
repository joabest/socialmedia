import './globals.css';
import Script from 'next/script';
export const metadata={title:'Ana Carolina Serra & Paulo Serra',description:'Links oficiais'};
export default function Layout({children}:{children:React.ReactNode}){const ga=process.env.NEXT_PUBLIC_GA_ID;return <html lang="pt-BR"><body>{children}{ga&&<><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive"/><Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}</Script></>}</body></html>}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="stylesheet" href="https://use.typekit.net/juj0acv.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" rel="stylesheet"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
                rel="stylesheet"/>
        </Head>

        {/*<script type="text/javascript">(function(){var k=function(a,c,d,b){if(a.getElementById(d)){if(b){var e=100;var f=function(){setTimeout(function() {e--;if(window.RESENGO_WIDGET_SCRIPT_LOADED)b();else if(0<e)f();else throw Error("resengo script failed to load");},100)};f()}}else{var g=a.getElementsByTagName(c) [0];a=a.createElement(c);a.id=d;a.src="https://static.resengo.com/ResengoWidget";b&&(a.onload=b);g.parentNode.insertBefore(a,g)}},h=function() {return k(document,"script","resengo-flow-widget-script",function(){RESENGO_WIDGET({companyId:"1778383",language:"nl"})})}; window.attachEvent?window.attachEvent("onload",h):window.addEventListener("load",h,!1)})();</script>*/}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

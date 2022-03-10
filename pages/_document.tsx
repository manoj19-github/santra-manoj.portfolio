import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@500;600;700&family=Kaushan+Script&family=Lato:ital,wght@0,400;1,300&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,800;1,200;1,300&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;1,100;1,200&family=Raleway:ital,wght@0,100;0,200;0,300;0,500;1,100&family=Roboto+Serif:ital,wght@0,100;0,200;0,300;1,100;1,200&family=Roboto:ital,wght@0,500;0,900;1,500;1,900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@500;600;700&family=Kaushan+Script&family=Lato:ital,wght@0,400;1,300&family=Lobster&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,800;1,200;1,300&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;1,100;1,200&family=Raleway:ital,wght@0,100;0,200;0,300;0,500;1,100&family=Roboto+Serif:ital,wght@0,100;0,200;0,300;1,100;1,200&family=Roboto:ital,wght@0,500;0,900;1,500;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <body
      className="bg-gradient-to-r from-green to-blue-600 text-gray-600 dark:from-dark-500 dark:to-dark-700 dark:text-white scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

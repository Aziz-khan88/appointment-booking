import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Header from '@/src/app/layout/header';
import Footer from '@/src/app/layout/footer';
import Head from 'next/head';

const myFont = localFont({
  src: [
    { path: '../fonts/Gilroy-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/Gilroy-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/Gilroy-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Gilroy-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Gilroy-Light.woff2', weight: '300', style: 'normal' }
  ],
  variable: '--font-myfont',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL("https://appointment-booking-mocha.vercel.app/"),
  title: "",
  description:
    "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description:
      "",
    url: "/",
    siteName: "Schedulifi ",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.variable}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

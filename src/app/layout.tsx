
import {Header} from "./components/shared/Header";
import {Footer} from "./components/shared/Footer";
//import {Footer} from 'app/components/shared/Footer';
//import './sass/main.sass';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}

 

import "./globals.css";
import {Inter} from 'next/font/google'
import Header from '../components/Header.jsx'
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "AI EXAM MANAGEMENT",
  description: "Exam Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <header><Header/>  </header>
        
            <main className="min-h-screen">
               {children}
            </main>

            <footer className="bg-gray-900 py-8 ">

              <div className="container mx-auto px-4 text-center text-gray-300">
              <p>Made with ❤️ in India</p>

              </div>
             
            </footer>
            
           

         
        
      </body>
    </html>
    </ClerkProvider>
  );
}

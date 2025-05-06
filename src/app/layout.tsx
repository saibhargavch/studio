import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter font for a modern feel
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Updated metadata with user's actual name and description
export const metadata: Metadata = {
  title: 'Chitteti Sai Bhargav - Cybersecurity Portfolio', // Updated title with user's name
  description: 'Portfolio showcasing the skills, projects, and experience of Chitteti Sai Bhargav, an aspiring Cybersecurity student.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
         className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

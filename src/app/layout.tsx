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

// TODO: Update metadata with your actual name and description
export const metadata: Metadata = {
  title: 'Alex Chen - Full-Stack Developer Portfolio', // Updated title with example name
  description: 'Personal portfolio website showcasing the skills and projects of Alex Chen, a Full-Stack Developer.', // Updated description with example name/role
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

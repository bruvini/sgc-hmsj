import type {Metadata} from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css'; // Global styles
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'SGC - Sistema de Gestão de Cirurgias',
  description: 'Sistema para gestão e monitoramento de solicitações de cirurgias eletivas do Hospital Municipal São José (HMSJ).',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-slate-50">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-1 flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto bg-slate-50 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

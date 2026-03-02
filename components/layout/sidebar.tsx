'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText, Settings, LogOut } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Pacientes', href: '/pacientes', icon: Users },
  { name: 'Solicitações', href: '/solicitacoes', icon: FileText },
  { name: 'Configurações', href: '/configuracoes', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-navy text-white shadow-xl">
      <div className="flex h-24 items-center justify-center border-b border-navy-light px-4">
        <Image
          src="https://www.joinville.sc.gov.br/wp-content/uploads/2021/09/Logotipo_Prefeitura_vertical_positivo.png"
          alt="Prefeitura de Joinville"
          width={120}
          height={160}
          className="h-16 w-auto object-contain brightness-0 invert"
          priority
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex flex-1 flex-col overflow-y-auto py-4">
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-light text-white'
                    : 'text-slate-300 hover:bg-navy-hover hover:text-white'
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="border-t border-navy-light p-4">
        <button className="group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-navy-hover hover:text-white">
          <LogOut className="mr-3 h-5 w-5 text-slate-400 group-hover:text-white" />
          Sair do Sistema
        </button>
      </div>
    </div>
  );
}

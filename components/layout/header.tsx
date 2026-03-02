'use client';

import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <div className="flex flex-1 items-center">
        <h1 className="text-xl font-semibold text-navy">
          S.G.C - Sistema de Gestão de Cirurgias
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500">
          <span className="sr-only">Notificações</span>
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        
        <div className="flex items-center space-x-3 border-l border-slate-200 pl-4">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-slate-700">João Silva</span>
            <span className="text-xs text-slate-500">Enfermeiro Gestor</span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}

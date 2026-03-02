import { CheckCircle2, Clock, AlertCircle, XCircle, CalendarClock } from 'lucide-react';

const statuses = [
  { id: 'CADASTRADO', name: 'Cadastrado', icon: FileText, color: 'text-slate-500', bg: 'bg-slate-100' },
  { id: 'AGUARDANDO_SMS', name: 'Aguardando SMS', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-100' },
  { id: 'APROVADO_SMS', name: 'Aprovado SMS', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  { id: 'NEGADO_SMS', name: 'Negado SMS', icon: XCircle, color: 'text-red-500', bg: 'bg-red-100' },
  { id: 'AGUARDANDO_SES', name: 'Aguardando SES', icon: AlertCircle, color: 'text-indigo-500', bg: 'bg-indigo-100' },
  { id: 'AUTORIZADO_AGENDAMENTO', name: 'Autorizado', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-100' },
];

import { FileText } from 'lucide-react';

interface StatusTimelineProps {
  data: {
    status: string;
    count: number;
  }[];
}

export function StatusTimeline({ data }: StatusTimelineProps) {
  // Map data to statuses
  const timelineData = statuses.map((s) => ({
    ...s,
    count: data.find((d) => d.status === s.id)?.count || 0,
  }));

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-lg font-medium text-navy">Funil de Aprovação</h3>
      <p className="mt-1 text-sm text-slate-500">
        Distribuição de solicitações por etapa do processo
      </p>

      <div className="mt-6 flow-root">
        <ul role="list" className="-mb-8">
          {timelineData.map((item, itemIdx) => (
            <li key={item.id}>
              <div className="relative pb-8">
                {itemIdx !== timelineData.length - 1 ? (
                  <span
                    className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-slate-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white ${item.bg}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-slate-500">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-900">{item.name}</span>
                        <span className="font-semibold text-navy">{item.count} pacientes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
          
          {/* Placeholder for future feature */}
          <li>
            <div className="relative pb-8">
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white bg-slate-50 border-2 border-dashed border-slate-300">
                    <CalendarClock className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  </div>
                </div>
                <div className="min-w-0 flex-1 py-1.5">
                  <div className="text-sm text-slate-400 italic">
                    <div className="flex justify-between">
                      <span>Agendamento Cirúrgico</span>
                      <span className="text-xs rounded-full bg-slate-100 px-2 py-0.5">Em breve</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

import { MetricCard } from '@/components/dashboard/metric-card';
import { StatusTimeline } from '@/components/dashboard/status-timeline';
import { Users, FileText, AlertTriangle, Activity } from 'lucide-react';

// Mock data for initial layout
const mockMetrics = {
  totalPatients: 1245,
  totalRequests: 1350,
  activeRequests: 840,
  priorityPatients: 156,
};

const mockTimelineData = [
  { status: 'CADASTRADO', count: 120 },
  { status: 'AGUARDANDO_SMS', count: 340 },
  { status: 'APROVADO_SMS', count: 210 },
  { status: 'NEGADO_SMS', count: 45 },
  { status: 'AGUARDANDO_SES', count: 80 },
  { status: 'AUTORIZADO_AGENDAMENTO', count: 45 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-navy">Visão Geral</h2>
          <p className="text-sm text-slate-500">
            Acompanhamento em tempo real das solicitações de cirurgias eletivas.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">
            Exportar Relatório
          </button>
          <button className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-navy-hover">
            Nova Solicitação
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total de Pacientes"
          value={mockMetrics.totalPatients}
          icon={Users}
          description="Pacientes cadastrados no sistema"
        />
        <MetricCard
          title="Solicitações Ativas"
          value={mockMetrics.activeRequests}
          icon={Activity}
          description={`De um total de ${mockMetrics.totalRequests} solicitações`}
        />
        <MetricCard
          title="Aguardando Autorização"
          value={mockTimelineData.find(d => d.status === 'AGUARDANDO_SMS')?.count || 0}
          icon={FileText}
          description="Na fila da Secretaria Municipal"
        />
        <MetricCard
          title="Pacientes com Prioridade"
          value={mockMetrics.priorityPatients}
          icon={AlertTriangle}
          description="Urgência, Alta ou Média prioridade"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 h-full">
            <h3 className="text-lg font-medium text-navy">Evolução de Solicitações</h3>
            <p className="mt-1 text-sm text-slate-500">
              Volume de novas solicitações nos últimos 30 dias
            </p>
            <div className="mt-6 flex h-[300px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50">
              <span className="text-sm text-slate-500">Gráfico de evolução (Em breve)</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <StatusTimeline data={mockTimelineData} />
        </div>
      </div>
    </div>
  );
}

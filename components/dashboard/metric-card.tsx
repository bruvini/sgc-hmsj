import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function MetricCard({ title, value, icon: Icon, description, trend }: MetricCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-navy">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex items-baseline">
        <p className="text-3xl font-semibold text-slate-900">{value}</p>
        {trend && (
          <p
            className={`ml-2 flex items-baseline text-sm font-semibold ${
              trend.isPositive ? 'text-emerald-600' : 'text-red-600'
            }`}
          >
            {trend.isPositive ? '+' : '-'}
            {trend.value}%
          </p>
        )}
      </div>
      {description && (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      )}
    </div>
  );
}

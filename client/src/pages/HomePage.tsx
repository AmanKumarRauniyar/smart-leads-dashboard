import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/axios';
import type { ApiSuccessResponse } from '@/types/api';

interface HealthData {
  service: string;
  status: string;
  timestamp: string;
}

async function fetchHealth(): Promise<HealthData> {
  const { data } = await apiClient.get<ApiSuccessResponse<HealthData>>('/health');
  return data.data;
}

export function HomePage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">Smart Leads</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-2 max-w-md text-sm text-muted">
          Production-grade CRM scaffold. Phase 1 complete — architecture, tooling, and API wiring
          are in place.
        </p>

        <div className="mt-6 rounded-lg border border-border bg-background px-4 py-3">
          {isLoading && <span className="text-sm text-muted">Checking API connection…</span>}
          {isError && (
            <span className="text-sm text-destructive">
              API unreachable. Start the server with{' '}
              <code className="rounded bg-black/5 px-1 py-0.5 text-xs">
                npm run dev --prefix server
              </code>
              {error instanceof Error ? ` — ${error.message}` : ''}
            </span>
          )}
          {data && (
            <span className="text-sm text-emerald-600">
              API connected · {data.service} · {data.status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

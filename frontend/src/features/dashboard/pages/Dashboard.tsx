import { StatsCard } from '../components/StatsCard';
import { RevenueChart } from '../components/RevenueChart';
import { SalesChart } from '../components/SalesChart';
import { ActivityCard } from '../components/ActivityCard';
import { RecentLeads } from '../components/RecentLeads';
import { AIInsights } from '../components/AIInsights';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Total Leads" value={1250} />
        <StatsCard title="Active Deals" value={45} />
        <StatsCard title="Monthly Revenue" value="$12,450" />
        <StatsCard title="Conversion Rate" value="3.2%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RevenueChart />
          <SalesChart />
        </div>
        <div className="space-y-6">
          <AIInsights />
          <RecentLeads />
          <ActivityCard />
        </div>
      </div>
    </div>
  );
}

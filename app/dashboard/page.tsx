import { Suspense } from 'react';
import { Card } from '../ui/dashboard/cards';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';
export default async function DashboardPage() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Collected"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui';

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-xs text-muted-foreground mt-1">Review revenue summaries and schedule report dispatches.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Revenue Performance</CardTitle>
              <CardDescription>Monthly growth metrics.</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-end gap-3 justify-between pb-6 pt-10 px-6">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-indigo-600/30 rounded-t h-20" />
                <span className="text-xs font-semibold text-muted-foreground">Apr</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-indigo-600/50 rounded-t h-32" />
                <span className="text-xs font-semibold text-muted-foreground">May</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-indigo-600 rounded-t h-48" />
                <span className="text-xs font-semibold text-muted-foreground">Jun</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report Dispatch Scheduler</CardTitle>
              <CardDescription>Configure automated PDF delivery timing channels.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="text-sm">
                <p className="font-semibold">Weekly Pipeline Digest</p>
                <p className="text-xs text-muted-foreground mt-1">Dispatched to board@axivon.com every Monday at 8:00 AM.</p>
              </div>
              <div className="text-sm border-t border-border pt-4">
                <p className="font-semibold">Monthly Financial Summaries</p>
                <p className="text-xs text-muted-foreground mt-1">Dispatched to accounting@axivon.com on the 1st of every month.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

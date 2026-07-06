import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui';

export default function CalendarPage() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Calendar</h1>
          <p className="text-xs text-muted-foreground mt-1">Interactive monthly meeting and activity scheduler.</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg">July 2026</span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-border rounded-lg text-xs hover:bg-muted font-semibold">Prev</button>
                <button className="px-3 py-1.5 border border-border rounded-lg text-xs hover:bg-muted font-semibold">Next</button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-muted-foreground border-b border-border pb-2 mb-2">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
            <div className="grid grid-cols-7 gap-2 h-96">
              {days.map((day) => (
                <div key={day} className="border border-border/60 rounded-lg p-2 text-left text-xs hover:bg-muted/10 transition-colors flex flex-col justify-between">
                  <span className="font-semibold">{day}</span>
                  {day === 10 && (
                    <span className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 p-1 rounded font-medium text-[9px] truncate">
                      Stark Sync
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

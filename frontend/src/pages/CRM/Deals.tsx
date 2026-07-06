import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardContent, Button, Input, Badge } from '../../components/ui';
import { useCRMStore, Deal } from '../../store/crmStore';
import { Plus } from 'lucide-react';

export default function Deals() {
  const { deals, addDeal, updateDealStage } = useCRMStore();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [expectedClose, setExpectedClose] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && value && expectedClose) {
      addDeal({ title, value: Number(value), stage: 'Discovery', expectedClose });
      setTitle('');
      setValue('');
      setExpectedClose('');
    }
  };

  const stages: Deal['stage'][] = ['Discovery', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Deals Pipeline</h1>
          <p className="text-xs text-muted-foreground mt-1">Manage pipeline deal stages and valuations.</p>
        </div>

        {/* Add Deal */}
        <Card className="max-w-xl">
          <CardContent className="p-6">
            <h3 className="font-semibold text-base mb-4">Add Deal</h3>
            <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <Input label="Deal Title" placeholder="Stark Contract Setup" value={title} onChange={(e) => setTitle(e.target.value)} />
              <Input label="Value ($)" type="number" placeholder="10000" value={value} onChange={(e) => setValue(e.target.value)} />
              <Input label="Close Date" type="date" value={expectedClose} onChange={(e) => setExpectedClose(e.target.value)} />
              <Button type="submit" className="w-full gap-1.5 sm:col-span-3">
                <Plus size={16} />
                <span>Create Deal</span>
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Pipeline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {stages.map((stg) => {
            const stageDeals = deals.filter((d) => d.stage === stg);
            const totalValue = stageDeals.reduce((sum, d) => sum + d.value, 0);
            return (
              <div key={stg} className="flex flex-col gap-3 min-w-[200px]">
                <div className="flex flex-col bg-muted/30 px-3 py-2 rounded-lg border border-border gap-1">
                  <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">{stg}</span>
                  <div className="flex justify-between items-center text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                    <span>{stageDeals.length} Deals</span>
                    <span>${totalValue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 bg-muted/10 p-2 rounded-xl border border-border/50 min-h-[300px]">
                  {stageDeals.map((deal) => (
                    <Card key={deal.id} className="p-4 flex flex-col gap-2">
                      <span className="font-semibold text-sm text-foreground">{deal.title}</span>
                      <span className="text-emerald-600 font-semibold text-sm">${deal.value.toLocaleString()}</span>
                      <span className="text-[10px] text-muted-foreground">Close: {deal.expectedClose}</span>
                      <div className="flex gap-1.5 mt-2 pt-2 border-t border-border/50">
                        {stages.map((st) => (
                          <button
                            key={st}
                            onClick={() => updateDealStage(deal.id, st)}
                            className={`w-3.5 h-3.5 rounded-full border transition-all ${
                              deal.stage === st ? 'bg-primary border-primary scale-110' : 'bg-transparent border-input hover:border-primary'
                            }`}
                            title={`Move to ${st}`}
                          />
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

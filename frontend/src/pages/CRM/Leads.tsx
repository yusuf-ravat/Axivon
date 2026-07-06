import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardContent, Button, Input, Badge } from '../../components/ui';
import { useCRMStore, Lead } from '../../store/crmStore';
import { Plus } from 'lucide-react';

export default function Leads() {
  const { leads, addLead, updateLeadStatus } = useCRMStore();
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [source, setSource] = useState('Website');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && value) {
      addLead({ name, value: Number(value), status: 'New', source });
      setName('');
      setValue('');
      setSource('Website');
    }
  };

  const columns: Lead['status'][] = ['New', 'Qualified', 'Proposal', 'Won', 'Lost'];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Leads</h1>
            <p className="text-xs text-muted-foreground mt-1">Track prospective client acquisition progress.</p>
          </div>
        </div>

        {/* Form to add lead */}
        <Card className="max-w-xl">
          <CardContent className="p-6">
            <h3 className="font-semibold text-base mb-4">Add New Lead</h3>
            <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <Input label="Lead Name" placeholder="Wayne Enterprises" value={name} onChange={(e) => setName(e.target.value)} />
              <Input label="Value ($)" type="number" placeholder="5000" value={value} onChange={(e) => setValue(e.target.value)} />
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Source</label>
                <select
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="Website">Website</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Referral</option>
                  <option value="Cold Call">Cold Call</option>
                </select>
              </div>
              <Button type="submit" className="w-full gap-1.5 sm:col-span-3">
                <Plus size={16} />
                <span>Create Lead</span>
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Kanban Board Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {columns.map((col) => {
            const colLeads = leads.filter((l) => l.status === col);
            return (
              <div key={col} className="flex flex-col gap-3 min-w-[200px]">
                <div className="flex justify-between items-center bg-muted/30 px-3 py-2 rounded-lg border border-border">
                  <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">{col}</span>
                  <Badge variant="secondary">{colLeads.length}</Badge>
                </div>
                <div className="flex flex-col gap-3 bg-muted/10 p-2 rounded-xl border border-border/50 min-h-[300px]">
                  {colLeads.map((lead) => (
                    <Card key={lead.id} className="p-4 flex flex-col gap-2">
                      <span className="font-semibold text-sm text-foreground">{lead.name}</span>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-emerald-600 font-semibold">${lead.value.toLocaleString()}</span>
                        <span className="text-muted-foreground bg-muted px-1.5 py-0.5 rounded text-[10px]">{lead.source}</span>
                      </div>
                      <div className="flex gap-1.5 mt-2 pt-2 border-t border-border/50">
                        {columns.map((st) => (
                          <button
                            key={st}
                            onClick={() => updateLeadStatus(lead.id, st)}
                            className={`w-3.5 h-3.5 rounded-full border transition-all ${
                              lead.status === st ? 'bg-primary border-primary scale-110' : 'bg-transparent border-input hover:border-primary'
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

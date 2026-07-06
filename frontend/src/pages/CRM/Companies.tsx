import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardContent, Button, Input } from '../../components/ui';
import { useCRMStore } from '../../store/crmStore';
import { Building2, Plus, Trash2 } from 'lucide-react';

export default function Companies() {
  const { companies, addCompany, deleteCompany } = useCRMStore();
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [domain, setDomain] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && industry && domain) {
      addCompany({ name, industry, domain });
      setName('');
      setIndustry('');
      setDomain('');
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Companies</h1>
            <p className="text-xs text-muted-foreground mt-1">Manage corporate clients and accounts directories.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* List Table */}
          <Card className="lg:col-span-2">
            <CardContent className="p-0">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/40 border-b border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4">Company Name</th>
                    <th className="px-6 py-4">Industry</th>
                    <th className="px-6 py-4">Domain</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {companies.map((company) => (
                    <tr key={company.id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                        <Building2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                        {company.name}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{company.industry}</td>
                      <td className="px-6 py-4 text-muted-foreground">{company.domain}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => deleteCompany(company.id)}
                          className="text-destructive hover:bg-destructive/10 p-1.5 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Create Modal/Card Panel */}
          <Card>
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="font-semibold text-base">Add Company</h3>
              <form onSubmit={handleAdd} className="flex flex-col gap-4">
                <Input label="Company Name" placeholder="Google Inc" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label="Industry" placeholder="Technology" value={industry} onChange={(e) => setIndustry(e.target.value)} />
                <Input label="Domain" placeholder="google.com" value={domain} onChange={(e) => setDomain(e.target.value)} />
                <Button type="submit" className="w-full gap-1.5">
                  <Plus size={16} />
                  <span>Add Company</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

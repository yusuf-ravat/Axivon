import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardContent, Button, Input } from '../../components/ui';
import { useCRMStore } from '../../store/crmStore';
import { User, Plus, Trash2 } from 'lucide-react';

export default function Contacts() {
  const { contacts, companies, addContact, deleteContact } = useCRMStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [companyId, setCompanyId] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && role) {
      addContact({ name, email, role, companyId: companyId || '1' });
      setName('');
      setEmail('');
      setRole('');
      setCompanyId('');
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Contacts</h1>
            <p className="text-xs text-muted-foreground mt-1">Manage individual client representatives and profiles.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* List Table */}
          <Card className="lg:col-span-2">
            <CardContent className="p-0">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/40 border-b border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {contacts.map((contact) => {
                    const comp = companies.find((c) => c.id === contact.companyId);
                    return (
                      <tr key={contact.id} className="hover:bg-muted/10 transition-colors">
                        <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                          <User size={16} className="text-indigo-600 dark:text-indigo-400" />
                          {contact.name}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{comp ? comp.name : 'Unknown'}</td>
                        <td className="px-6 py-4 text-muted-foreground">{contact.email}</td>
                        <td className="px-6 py-4 text-muted-foreground">{contact.role}</td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="text-destructive hover:bg-destructive/10 p-1.5 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Add Panel */}
          <Card>
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="font-semibold text-base">Add Contact</h3>
              <form onSubmit={handleAdd} className="flex flex-col gap-4">
                <Input label="Full Name" placeholder="Bruce Wayne" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label="Email" type="email" placeholder="bruce@wayne.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label="Role / Title" placeholder="CEO" value={role} onChange={(e) => setRole(e.target.value)} />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Company</label>
                  <select
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select Company</option>
                    {companies.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" className="w-full gap-1.5">
                  <Plus size={16} />
                  <span>Add Contact</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

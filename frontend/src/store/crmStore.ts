import { create } from 'zustand';

export interface Company {
  id: string;
  name: string;
  industry: string;
  domain: string;
}

export interface Contact {
  id: string;
  name: string;
  companyId: string;
  email: string;
  role: string;
}

export interface Lead {
  id: string;
  name: string;
  value: number;
  status: 'New' | 'Qualified' | 'Proposal' | 'Won' | 'Lost';
  source: string;
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: 'Discovery' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  expectedClose: string;
}

export interface Task {
  id: string;
  title: string;
  dueDate: string;
  isCompleted: boolean;
}

interface CRMState {
  companies: Company[];
  contacts: Contact[];
  leads: Lead[];
  deals: Deal[];
  tasks: Task[];
  addCompany: (c: Omit<Company, 'id'>) => void;
  deleteCompany: (id: string) => void;
  addContact: (c: Omit<Contact, 'id'>) => void;
  deleteContact: (id: string) => void;
  addLead: (l: Omit<Lead, 'id'>) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  addDeal: (d: Omit<Deal, 'id'>) => void;
  updateDealStage: (id: string, stage: Deal['stage']) => void;
  addTask: (t: Omit<Task, 'id'>) => void;
  toggleTask: (id: string) => void;
}

export const useCRMStore = create<CRMState>((set) => ({
  companies: [
    { id: '1', name: 'Acme Corp', industry: 'SaaS Software', domain: 'acme.com' },
    { id: '2', name: 'Stark Industries', industry: 'Defense Tech', domain: 'stark.com' },
  ],
  contacts: [
    { id: '1', name: 'Tony Stark', companyId: '2', email: 'tony@stark.com', role: 'CEO' },
    { id: '2', name: 'Pepper Potts', companyId: '2', email: 'pepper@stark.com', role: 'COO' },
  ],
  leads: [
    { id: '1', name: 'Wayne Enterprises', value: 45000, status: 'Qualified', source: 'LinkedIn' },
    { id: '2', name: 'Cyberdyne Systems', value: 12000, status: 'New', source: 'Website' },
  ],
  deals: [
    { id: '1', title: 'Enterprise Plan Setup', value: 25000, stage: 'Discovery', expectedClose: '2026-09-30' },
    { id: '2', title: 'Consulting Engagement', value: 15000, stage: 'Proposal', expectedClose: '2026-08-15' },
  ],
  tasks: [
    { id: '1', title: 'Follow up with Stark CEO regarding contract terms', dueDate: '2026-07-10', isCompleted: false },
    { id: '2', title: 'Draft corporate renewal presentation deck', dueDate: '2026-07-06', isCompleted: true },
  ],
  addCompany: (c) => set((s) => ({ companies: [...s.companies, { ...c, id: Date.now().toString() }] })),
  deleteCompany: (id) => set((s) => ({ companies: s.companies.filter((c) => c.id !== id) })),
  addContact: (c) => set((s) => ({ contacts: [...s.contacts, { ...c, id: Date.now().toString() }] })),
  deleteContact: (id) => set((s) => ({ contacts: s.contacts.filter((c) => c.id !== id) })),
  addLead: (l) => set((s) => ({ leads: [...s.leads, { ...l, id: Date.now().toString() }] })),
  updateLeadStatus: (id, status) =>
    set((s) => ({ leads: s.leads.map((l) => (l.id === id ? { ...l, status } : l)) })),
  addDeal: (d) => set((s) => ({ deals: [...s.deals, { ...d, id: Date.now().toString() }] })),
  updateDealStage: (id, stage) =>
    set((s) => ({ deals: s.deals.map((d) => (d.id === id ? { ...d, stage } : d)) })),
  addTask: (t) => set((s) => ({ tasks: [...s.tasks, { ...t, id: Date.now().toString() }] })),
  toggleTask: (id) =>
    set((s) => ({ tasks: s.tasks.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)) })),
}));

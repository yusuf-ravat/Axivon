import React, { useState } from 'react';
import { Button, Input, Badge, Switch, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Modal } from '../components/ui';

export default function DesignSystem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchVal, setSwitchVal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-6xl mx-auto flex flex-col gap-10 transition-colors duration-200">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Axivon Design System</h1>
          <p className="text-muted-foreground mt-1">Premium UI System for Large-Scale AI CRM SaaS (Phase 1)</p>
        </div>
        <Button variant="outline" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
      </header>

      {/* Buttons */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center border border-border rounded-xl p-6 bg-card">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="primary" isLoading>Loading State</Button>
          <Button variant="primary" disabled>Disabled State</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-4 items-center border border-border rounded-xl p-6 bg-card">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success Status</Badge>
          <Badge variant="warning">Warning Status</Badge>
        </div>
      </section>

      {/* Inputs & Form Controls */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Form Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-border rounded-xl p-6 bg-card">
          <Input label="Name" placeholder="Enter your full name" />
          <Input label="Email Address" type="email" placeholder="you@company.com" error="Please enter a valid business email." />
          <div className="flex flex-col gap-4 justify-center">
            <Switch label="Auto-assign Leads to Sales Reps" checked={switchVal} onChange={() => setSwitchVal(!switchVal)} />
            <span className="text-xs text-muted-foreground">Status: {switchVal ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hoverable>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
              <CardDescription>Ideal for sales teams of 50+ members.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Unlock unlimited pipelines, AI-driven summaries, and dedicated client databases with isolated performance parameters.</p>
            </CardContent>
            <CardFooter className="justify-between border-t border-border pt-4">
              <span className="text-sm font-semibold">$99 / user / month</span>
              <Button size="sm">Select Plan</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>PostgreSQL Status Metrics.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <span>Database Connectivity</span>
                <Badge variant="success">Online</Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Migration Verification</span>
                <Badge variant="outline">57 Tables Synced</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal Actions */}
      <section className="flex flex-col gap-4 mb-10">
        <h2 className="text-xl font-semibold">Overlays</h2>
        <div className="border border-border rounded-xl p-6 bg-card flex gap-4">
          <Button onClick={() => setIsModalOpen(true)}>Open Showcase Modal</Button>
          
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirm Transaction Action">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">Are you sure you want to perform this administrative task? This will update structural logs across all tenant schemas.</p>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm Action</Button>
              </div>
            </div>
          </Modal>
        </div>
      </section>
    </div>
  );
}

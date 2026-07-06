import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Input } from '../../components/ui';

export default function SettingsPage() {
  const [domain, setDomain] = useState('crm.axivon.com');
  const [mfaSecret, setMfaSecret] = useState('JBSWY3DPEHPK3PXP');

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-xl font-bold tracking-tight">System Settings</h1>
          <p className="text-xs text-muted-foreground mt-1">Configure whitelabel domains, security secrets, and client profile properties.</p>
        </div>

        {/* Tenant domains */}
        <Card>
          <CardHeader>
            <CardTitle>Whitelabel Custom Domain Mappings</CardTitle>
            <CardDescription>Route client workspace accounts dynamically.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <Input label="Workspace Access Domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
            </div>
            <Button className="w-full sm:w-auto shrink-0">Update Mapping</Button>
          </CardContent>
        </Card>

        {/* Security / MFA */}
        <Card>
          <CardHeader>
            <CardTitle>Two-Factor Authentication (MFA)</CardTitle>
            <CardDescription>Secure login verification secret mapping.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="text-sm">
              <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Active Cryptographic MFA Secret</p>
              <kbd className="inline-block mt-2 bg-muted px-3 py-1.5 rounded-lg border border-border font-mono text-sm font-semibold select-all">
                {mfaSecret}
              </kbd>
            </div>
            <Button variant="outline" className="w-fit" onClick={() => setMfaSecret(Math.random().toString(36).substring(2, 18).toUpperCase())}>
              Rotate MFA Secret
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

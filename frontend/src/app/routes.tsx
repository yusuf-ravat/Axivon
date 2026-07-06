import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useAuthStore } from '../store/authStore';

// Main Pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Unauthorized from '../pages/Unauthorized';
import Maintenance from '../pages/Maintenance';
import DesignSystem from '../pages/DesignSystem';

// Auth Pages
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import VerifyEmail from '../pages/Auth/VerifyEmail';

// CRM Pages
import Companies from '../pages/CRM/Companies';
import Contacts from '../pages/CRM/Contacts';
import Leads from '../pages/CRM/Leads';
import Deals from '../pages/CRM/Deals';
import Tasks from '../pages/CRM/Tasks';
import CalendarPage from '../pages/CRM/CalendarPage';
import ReportsPage from '../pages/CRM/ReportsPage';
import SettingsPage from '../pages/CRM/SettingsPage';

// Route Guard: Access only if authenticated
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" replace />;
}

// Route Guard: Access only if NOT authenticated (guest routes)
function PublicRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/" replace /> : <>{children}</>;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core Layout Index (Protected) */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/design" element={<ProtectedRoute><DesignSystem /></ProtectedRoute>} />

        {/* Authentication Routes (Public/Guest only) */}
        <Route path="/auth/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/auth/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/auth/forgot" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
        <Route path="/auth/reset" element={<PublicRoute><ResetPassword /></PublicRoute>} />
        <Route path="/auth/verify" element={<PublicRoute><VerifyEmail /></PublicRoute>} />

        {/* CRM Modules Routes (Protected) */}
        <Route path="/companies" element={<ProtectedRoute><Companies /></ProtectedRoute>} />
        <Route path="/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
        <Route path="/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
        <Route path="/deals" element={<ProtectedRoute><Deals /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
        <Route path="/calendar" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

        {/* System Error & Helpers Routes */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

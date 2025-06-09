
import React from 'react';
import AuthGuard from '@/components/AuthGuard';
import Header from '@/components/Header';
import DashboardTabs from '@/components/DashboardTabs';

const Index = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col min-h-[calc(100vh-80px)]">
          <DashboardTabs />
        </main>
      </div>
    </AuthGuard>
  );
};

export default Index;

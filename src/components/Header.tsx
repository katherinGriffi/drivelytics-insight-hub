import React from 'react';
import { Car, BarChart3, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import the supabase client for logout functionality
import { supabase } from "@/integrations/supabase/client"; 

const Header = () => {
  const [loadingLogout, setLoadingLogout] = React.useState(false); // State for logout loading

  // Handle user logout with Supabase
  const handleLogout = async () => {
    setLoadingLogout(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error logging out:', error.message);
      alert('Error al cerrar sesión: ' + error.message); // Provide user feedback
    } else {
      console.log('User logged out successfully.');
      // After logout, refresh the page to trigger AuthGuard and redirect to login
      window.location.reload(); 
    }
    setLoadingLogout(false);
  };

  return (
    <header className="bg-gradient-to-r from-drivelytics-purple-primary to-drivelytics-purple-accent text-white p-4 md:p-6 shadow-lg flex items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        {/* Adjusted logo styling to match AuthGuard */}
        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-hidden">
        <img 
 

  src={`${import.meta.env.BASE_URL}favicon.ico`} 
  alt="Logo de Drivelytics" 
  className="w-full h-full object-contain p-1" // Added padding for better fit
/>
        </div>
        <h1 className="text-2xl font-bold">Drivelytics</h1>
        {/* Removed "Intelligent Analytics" subtitle as it's not in AuthGuard's header */}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        {/* Dashboard button (optional, if you want it clickable but not a "tab") */}
        <Button variant="ghost" size="sm" className="hidden md:flex text-white/90 hover:text-white hover:bg-white/10">
          <BarChart3 className="w-4 h-4 mr-2" />
          Dashboard
        </Button>
        {/* Settings button (keep if desired, otherwise remove)
        <Button variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">
          <Settings className="w-4 h-4" />
          <span className="hidden sm:ml-2 sm:inline">Settings</span>
        </Button> */}
        {/* Logout Button - now handles actual logout */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white/90 hover:text-white hover:bg-white/10" // Apply consistent styling
          onClick={handleLogout}
          disabled={loadingLogout}
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:ml-2 sm:inline">{loadingLogout ? 'Cerrando...' : 'Logout'}</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
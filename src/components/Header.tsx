import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-sm backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Domku Box
        </h1>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
        className="md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;
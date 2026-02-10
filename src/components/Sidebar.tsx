import React from 'react';
import { X, Home, Code, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1];

  const navItems = [
    { icon: Home, label: 'Beranda', path: `/${currentLang}/~` },
    { icon: Code, label: 'Dokumentasi API', path: `/${currentLang}/apidocs` },
    { icon: FileText, label: 'Syarat & Ketentuan', path: `/${currentLang}/terms` },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[260px] sm:w-[300px] p-0 bg-white dark:bg-gray-900">
        <SheetHeader className="p-4 border-b border-gray-200 dark:border-gray-800">
          <SheetTitle className="text-left">Navigasi</SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              onClick={onClose}
              className={`flex items-center px-4 py-3 mx-2 rounded-lg transition-all duration-200 ${
                location.pathname.includes(item.path) 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
import React from 'react';
import { Github, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-3 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span>dibuat dengan</span>
          <span className="text-red-500">❤️</span>
          <span>dan kode</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span>created by</span>
          <a 
            href="https://akadev.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 font-medium hover:underline"
          >
            aka
          </a>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://t.me/akamodebaik" target="_blank" rel="noopener noreferrer">
                <Send className="h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/akaanakbaik" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
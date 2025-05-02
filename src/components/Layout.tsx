
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LayoutDashboard, Settings, Route, Plus } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6" />
            <span>ReactApp</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-1")}>
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/dashboard" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-1")}>
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <Link to="/features" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Features</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore our powerful features
                      </p>
                    </Link>
                    <Link to="/pricing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Pricing</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        View our price plans and packages
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-1")}>
                  <Route className="h-4 w-4" />
                  <span>About</span>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/settings" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-1")}>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} ReactApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

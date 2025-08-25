import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Users from './Users';

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState('dashboard');

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const handleSignOut = () => {
    // In a real app, this would clear auth tokens and redirect to login
    console.log('Signing out...');
    // For now, just redirect to the root (which should be SignIn)
    window.location.href = '/';
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <Transactions />;
      case 'users':
        return <Users />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Box display="flex" minH="100vh" w="100vw" bg="gray.50">
      <Sidebar
        activePage={activePage}
        onPageChange={handlePageChange}
        onSignOut={handleSignOut}
      />
      <Box 
        ml="250px" 
        flex={1} 
        maxW="calc(100vw - 250px)"
        overflow="hidden"
      >
        {renderPage()}
      </Box>
    </Box>
  );
}

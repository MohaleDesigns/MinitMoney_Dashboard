import { useState } from 'react';
import { Box, useBreakpointValue, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Users from './Users';

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState('dashboard');
  const { open: isOpen, onToggle, onClose } = useDisclosure();
  
  // Responsive breakpoints
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarWidth = useBreakpointValue({ base: '100%', md: '250px' });
  const mainMargin = useBreakpointValue({ base: 0, md: '250px' });
  const mainMaxWidth = useBreakpointValue({ base: '100vw', md: 'calc(100vw - 250px)' });

  const handlePageChange = (page: string) => {
    setActivePage(page);
    // Close mobile menu when page changes
    if (isMobile) {
      onClose();
    }
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
    <Box display="flex" minH="100vh" w="100vw" bg="gray.50" position="relative">
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <IconButton
          aria-label="Toggle menu"
          onClick={onToggle}
          position="fixed"
          top={4}
          left={4}
          zIndex={1000}
          bg="white"
          color="gray.800"
          _hover={{ bg: 'gray.100' }}
          boxShadow="md"
        >
          <FaBars />
        </IconButton>
      )}

      {/* Sidebar */}
      <Box
        position={isMobile ? 'fixed' : 'fixed'}
        left={0}
        top={0}
        h="100vh"
        w={sidebarWidth}
        zIndex={999}
        transform={isMobile && !isOpen ? 'translateX(-100%)' : 'translateX(0)'}
        transition="transform 0.3s ease-in-out"
      >
        <Sidebar
          activePage={activePage}
          onPageChange={handlePageChange}
          onSignOut={handleSignOut}
          isMobile={isMobile}
          onClose={onClose}
        />
      </Box>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          zIndex={998}
          onClick={onClose}
        />
      )}

      {/* Main Content */}
      <Box 
        ml={mainMargin}
        flex={1}
        maxW={mainMaxWidth}
        overflow="hidden"
        pt={isMobile ? '80px' : 0}
        px={isMobile ? 4 : 6}
      >
        {renderPage()}
      </Box>
    </Box>
  );
}

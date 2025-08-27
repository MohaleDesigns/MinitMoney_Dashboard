import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { FaHome, FaExchangeAlt, FaUsers, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import logo from '../assets/minit_money_logo.png';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  onSignOut: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ activePage, onPageChange, onSignOut, isMobile = false, onClose }: SidebarProps) {
  const bgColor = '#17489D';
  const borderColor = 'gray.200';
  const textColor = 'gray.600';
  const activeBgColor = 'blue.600';
  const activeTextColor = 'white';
  const white = '#ffffff';

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaHome },
    { id: 'transactions', label: 'Transactions', icon: FaExchangeAlt },
    { id: 'users', label: 'Users', icon: FaUsers },
  ];

  return (
    <Box
      w={isMobile ? '100%' : '250px'}
      h="100vh"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      py={6}
      position="fixed"
      left={0}
      top={0}
      overflowY="auto"
    >
      <VStack h="full" justify="space-between">
        {/* Header with Logo and Close Button */}
        <HStack w="full" justify="space-between" px={6} mb={8}>
          <Image src={logo} alt="MiniMoney" maxH="40px" />
          {isMobile && onClose && (
            <IconButton
              aria-label="Close menu"
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              size="sm"
              onClick={onClose}
            >
              <FaTimes />
            </IconButton>
          )}
        </HStack>

        {/* Navigation Menu */}
        <VStack flex={1} w="full" gap={2}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <Box
                key={item.id}
                w="full"
                px={6}
                py={isMobile ? 4 : 3}
                cursor="pointer"
                bg={isActive ? activeBgColor : 'transparent'}
                color={isActive ? activeTextColor : textColor}
                _hover={{
                  bg: isActive ? activeBgColor : activeBgColor,
                  '& .icon': {
                    color: isActive ? activeTextColor : white,
                  },
                  '& .menu-text': {
                    color: isActive ? activeTextColor : white,
                  },
                }}
                onClick={() => onPageChange(item.id)}
                transition="all 0.2s"
                borderRadius={isMobile ? 'md' : 'none'}
              >
                <HStack gap={3}>
                  <Icon 
                    className="icon"
                    color={isActive ? activeTextColor : white} 
                    size={isMobile ? 20 : 18} 
                  />
                  <Text 
                    className="menu-text"
                    color={isActive ? activeTextColor : white} 
                    fontWeight={isActive ? 'semibold' : 'medium'}
                    fontSize={isMobile ? 'lg' : 'md'}
                  >
                    {item.label}
                  </Text>
                </HStack>
              </Box>
            );
          })}
        </VStack>

        <Box borderTop="1px" borderColor="gray.200" />

        {/* Sign Out */}
        <Box p={6} w="full">
          <IconButton
            aria-label="Sign out"
            variant="ghost"
            w="full"
            justifyContent="flex-start"
            bg="#F4CE34"
            color="#17489D"
            _hover={{ 
              bg: '#FFFFFF',
              color: '#17489D'
            }}
            px={4}
            py={isMobile ? 4 : 3}
            onClick={onSignOut}
            fontSize={isMobile ? 'lg' : 'md'}
          >
            <HStack gap={3}>
              <FaSignOutAlt />
              <Text>Sign Out</Text>
            </HStack>
          </IconButton>
        </Box>
      </VStack>
    </Box>
  );
}

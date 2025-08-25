import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { FaHome, FaExchangeAlt, FaUsers, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  onSignOut: () => void;
}

export default function Sidebar({ activePage, onPageChange, onSignOut }: SidebarProps) {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const textColor = 'gray.600';
  const activeBgColor = 'blue.50';
  const activeTextColor = 'blue.600';

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaHome },
    { id: 'transactions', label: 'Transactions', icon: FaExchangeAlt },
    { id: 'users', label: 'Users', icon: FaUsers },
  ];

  return (
    <Box
      w="250px"
      h="100vh"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      py={6}
      position="fixed"
      left={0}
      top={0}
    >
      <VStack h="full" justify="space-between">
        {/* Logo/Brand */}
        <Box px={6} mb={8}>
          <Text fontSize="xl" fontWeight="bold" color="blue.600">
            MiniMoney
          </Text>
        </Box>

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
                py={3}
                cursor="pointer"
                bg={isActive ? activeBgColor : 'transparent'}
                color={isActive ? activeTextColor : textColor}
                _hover={{
                  bg: isActive ? activeBgColor : 'gray.50',
                }}
                onClick={() => onPageChange(item.id)}
                transition="all 0.2s"
              >
                <HStack gap={3}>
                  <Icon size={18} />
                  <Text fontWeight={isActive ? 'semibold' : 'medium'}>
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
            color={textColor}
            _hover={{ bg: 'gray.50' }}
            onClick={onSignOut}
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

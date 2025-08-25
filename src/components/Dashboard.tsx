import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import { FaDollarSign, FaUsers, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

export default function Dashboard() {
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const stats = [
    {
      label: 'Total Balance',
      value: '$12,450.75',
      change: '+12.5%',
      icon: FaDollarSign,
      color: 'green.500'
    },
    {
      label: 'Active Users',
      value: '1,234',
      change: '+8.2%',
      icon: FaUsers,
      color: 'blue.500'
    },
    {
      label: 'Transactions',
      value: '456',
      change: '+23.1%',
      icon: FaExchangeAlt,
      color: 'purple.500'
    },
    {
      label: 'Growth Rate',
      value: '18.7%',
      change: '+2.3%',
      icon: FaChartLine,
      color: 'orange.500'
    }
  ];

  return (
    <Box p={8}>
      <Heading size="lg" mb={8} color="gray.800">
        Dashboard Overview
      </Heading>

      {/* Stats Grid */}
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} mb={8}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <GridItem key={index}>
              <Box
                bg={bgColor}
                p={6}
                borderRadius="xl"
                border="1px"
                borderColor={borderColor}
                boxShadow="sm"
                _hover={{ boxShadow: 'md' }}
                transition="all 0.2s"
              >
                <HStack justify="space-between" align="flex-start" mb={4}>
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg={`${stat.color}10`}
                    color={stat.color}
                  >
                    <Icon size={20} />
                  </Box>
                  <Text color="green.500" fontSize="sm" fontWeight="medium">
                    ↗ {stat.change}
                  </Text>
                </HStack>
                
                <Text color="gray.600" fontSize="sm" fontWeight="medium">
                  {stat.label}
                </Text>
                
                <Text fontSize="2xl" fontWeight="bold" color="gray.800" mt={2}>
                  {stat.value}
                </Text>
                
                <Text color="green.500" fontSize="sm" fontWeight="medium">
                  {stat.change} from last month
                </Text>
              </Box>
            </GridItem>
          );
        })}
      </Grid>

      {/* Recent Activity Section */}
      <Box
        bg={bgColor}
        p={6}
        borderRadius="xl"
        border="1px"
        borderColor={borderColor}
        boxShadow="sm"
      >
        <Heading size="md" mb={4} color="gray.800">
          Recent Activity
        </Heading>
        <Text color="gray.600">
          Welcome to MiniMoney! Your financial dashboard is ready. Navigate to Transactions to view your transaction history or Users to manage your account.
        </Text>
      </Box>
    </Box>
  );
}

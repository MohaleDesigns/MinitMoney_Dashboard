export interface Transaction {
  id: string;
  recipient: string;
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  dateTime: string;
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  lastLogin: string;
}

export const mockTransactions: Transaction[] = [
  {
    id: 'TXN-001',
    recipient: 'John Doe',
    amount: 150.00,
    currency: 'USD',
    status: 'completed',
    dateTime: '2024-01-15T10:30:00Z',
    description: 'Payment for services'
  },
  {
    id: 'TXN-002',
    recipient: 'Jane Smith',
    amount: 75.50,
    currency: 'EUR',
    status: 'pending',
    dateTime: '2024-01-15T14:20:00Z',
    description: 'Invoice payment'
  },
  {
    id: 'TXN-003',
    recipient: 'Bob Johnson',
    amount: 200.00,
    currency: 'USD',
    status: 'completed',
    dateTime: '2024-01-14T09:15:00Z',
    description: 'Monthly subscription'
  },
  {
    id: 'TXN-004',
    recipient: 'Alice Brown',
    amount: 45.25,
    currency: 'GBP',
    status: 'failed',
    dateTime: '2024-01-14T16:45:00Z',
    description: 'Failed transfer'
  },
  {
    id: 'TXN-005',
    recipient: 'Charlie Wilson',
    amount: 300.00,
    currency: 'USD',
    status: 'pending',
    dateTime: '2024-01-13T11:00:00Z',
    description: 'Contract payment'
  }
];

export const mockUsers: User[] = [
  {
    id: 'USR-001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-01-15T10:30:00Z'
  },
  {
    id: 'USR-002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '2024-01-15T14:20:00Z'
  },
  {
    id: 'USR-003',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'user',
    status: 'inactive',
    lastLogin: '2024-01-10T09:15:00Z'
  },
  {
    id: 'USR-004',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '2024-01-15T16:45:00Z'
  }
];

export const formatCurrency = (amount: number, currency: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

export const formatDateTime = (dateTime: string): string => {
  return new Date(dateTime).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'completed':
      return 'green.500';
    case 'pending':
      return 'yellow.500';
    case 'failed':
      return 'red.500';
    default:
      return 'gray.500';
  }
};

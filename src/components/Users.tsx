import {
  Box,
  Table,
  Badge,
  Button,
  Dialog,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { mockUsers, formatDateTime, type User } from '../utils/mockData';

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedUser(null);
  };

  const getRoleBadge = (role: string) => {
    return (
      <Badge colorScheme={role === 'admin' ? 'purple' : 'blue'}>
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge colorScheme={status === 'active' ? 'green' : 'red'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <Box p={8}>
      <Box
        bg={bgColor}
        p={6}
        borderRadius="xl"
        border="1px"
        borderColor={borderColor}
        boxShadow="sm"
        mb={6}
      >
        <Heading size="lg" color="#17489D">
          Users
        </Heading>
        <Text color="gray.600" fontSize="xs" fontWeight="regular">
          {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}{" "}
          •{" "}
          {new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </Box>

      {/* Users Table */}
      <Box
        bg={bgColor}
        borderRadius="xl"
        border="1px"
        borderColor={borderColor}
        boxShadow="sm"
        overflow="hidden"
      >
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>User ID</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Role</Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
              <Table.ColumnHeader>Last Login</Table.ColumnHeader>
              <Table.ColumnHeader>Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {mockUsers.map((user) => (
              <Table.Row key={user.id} _hover={{ bg: 'gray.50' }}>
                <Table.Cell color="gray.600" fontWeight="medium">{user.id}</Table.Cell>
                <Table.Cell color="gray.600" fontWeight="semibold">{user.name}</Table.Cell>
                <Table.Cell color="gray.600">{user.email}</Table.Cell>
                <Table.Cell color="gray.600">{getRoleBadge(user.role)}</Table.Cell>
                <Table.Cell color="gray.600">{getStatusBadge(user.status)}</Table.Cell>
                <Table.Cell color="gray.600">{formatDateTime(user.lastLogin)}</Table.Cell>
                <Table.Cell>
                  <Button
                    size="sm"
                    variant="surface"
                    colorPalette="blue"
                    color="white"
                    onClick={() => handleViewDetails(user)}
                  >
                    <FaEye />
                    View
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      {/* User Details Dialog */}
      <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && handleClose()}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color="gray.800">User Details</Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              {selectedUser && (
                <VStack gap={4} align="stretch">
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      User ID
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {selectedUser.id}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Name
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {selectedUser.name}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Email
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {selectedUser.email}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Role
                    </Text>
                    {getRoleBadge(selectedUser.role)}
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Status
                    </Text>
                    {getStatusBadge(selectedUser.status)}
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Last Login
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {formatDateTime(selectedUser.lastLogin)}
                    </Text>
                  </Box>
                </VStack>
              )}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
}

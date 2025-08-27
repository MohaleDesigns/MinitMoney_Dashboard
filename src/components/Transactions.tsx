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
import { mockTransactions, formatCurrency, formatDateTime, type Transaction } from '../utils/mockData';

export default function Transactions() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedTransaction(null);
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge colorScheme={status === 'completed' ? 'green' : status === 'pending' ? 'yellow' : 'red'}>
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
          Transactions
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

      {/* Transactions Table */}
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
              <Table.ColumnHeader>Transaction ID</Table.ColumnHeader>
              <Table.ColumnHeader>Recipient</Table.ColumnHeader>
              <Table.ColumnHeader>Amount & Currency</Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
              <Table.ColumnHeader>Date/Time</Table.ColumnHeader>
              <Table.ColumnHeader>Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {mockTransactions.map((transaction) => (
              <Table.Row key={transaction.id} _hover={{ bg: 'gray.50' }}>
                <Table.Cell color="gray.600" fontWeight="medium">{transaction.id}</Table.Cell>
                <Table.Cell color="gray.600">{transaction.recipient}</Table.Cell>
                <Table.Cell color="gray.600" fontWeight="semibold">
                  {formatCurrency(transaction.amount, transaction.currency)}
                </Table.Cell>
                <Table.Cell color="gray.600">{getStatusBadge(transaction.status)}</Table.Cell>
                <Table.Cell color="gray.600">{formatDateTime(transaction.dateTime)}</Table.Cell>
                <Table.Cell>
                  <Button
                    size="sm"
                    variant="surface"
                    colorPalette="blue"
                    color="white"
                    onClick={() => handleViewDetails(transaction)}
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

      {/* Transaction Details Dialog */}
      <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && handleClose()}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color="gray.800">Transaction Details</Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              {selectedTransaction && (
                <VStack gap={4} align="stretch">
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Transaction ID
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {selectedTransaction.id}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Recipient
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {selectedTransaction.recipient}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Amount
                    </Text>
                    <Text fontSize="md" color="green.600">
                      {formatCurrency(selectedTransaction.amount, selectedTransaction.currency)}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Status
                    </Text>
                    {getStatusBadge(selectedTransaction.status)}
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      Date & Time
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {formatDateTime(selectedTransaction.dateTime)}
                    </Text>
                  </Box>

                  {selectedTransaction.description && (
                    <Box>
                      <Text fontSize="sm" color="gray.600" fontWeight="medium">
                        Description
                      </Text>
                      <Text fontSize="md" color="gray.600">
                        {selectedTransaction.description}
                      </Text>
                    </Box>
                  )}
                </VStack>
              )}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
}

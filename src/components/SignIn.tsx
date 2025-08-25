import {
  Box,
  Button,
  Field,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In v3, we'll need to implement toast differently
      console.log('Sign in successful');
    }, 1000);
  };

  return (
    <Box
      minH="100vh"
      w="100vw"
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      px={4}
    >
      <Box
        w="full"
        maxW="md"
        bg="white"
        borderRadius="xl"
        boxShadow="xl"
        p={8}
        border="1px"
        borderColor="gray.200"
      >
        <VStack gap={6} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading size="lg" color="gray.800">
              Welcome back
            </Heading>
            <Text color="gray.600" mt={2}>
              Sign in to your account
            </Text>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" />

          {/* Email/Password Form */}
          <form onSubmit={handleSignIn}>
            <VStack gap={4}>
              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  size="lg"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Box position="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    size="lg"
                    pr="12"
                  />
                  <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    variant="ghost"
                    size="sm"
                    position="absolute"
                    right="2"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconButton>
                </Box>
              </Field.Root>

              <Button
                type="submit"
                colorPalette="blue"
                size="lg"
                w="full"
                loading={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </VStack>
          </form>

          {/* Footer Links */}
          <VStack gap={3} pt={4}>
            <Link color="blue.500" fontSize="sm">
              Forgot your password?
            </Link>
            <HStack gap={1} fontSize="sm">
              <Text color="gray.600">
                Don't have an account?
              </Text>
              <Link color="blue.500" fontWeight="semibold">
                Sign up
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

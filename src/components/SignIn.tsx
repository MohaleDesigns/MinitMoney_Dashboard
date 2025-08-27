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
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/minit_money_logo.png';
import background from '../assets/background.png';

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
      // Navigate to Dashboard
      window.location.href = '/dashboard';
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
      backgroundImage={`url(${background})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
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
        backgroundColor="#17489D"
      >
        <VStack gap={6} align="stretch">
          {/* Header */}
          <Box textAlign="center">
          <Box px={12} mb={8}>
          <Image src={logo} alt="MiniMoney" />
          </Box>
            <Heading size="lg" color="#ffffff">
              Welcome back
            </Heading>
            <Text color="#ffffff" mt={2}>
              Sign in to your account
            </Text>
          </Box>

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
                  color="#cccccc"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Box position="relative" w="100%">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    size="lg"
                    pr="12"
                    color="#cccccc"
                  />
                  <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    variant="ghost"
                    size="sm"
                    color="#17489D"
                    bg="#F4CE34"
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
                color="#17489D"
                bg="#F4CE34"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </VStack>
          </form>

          {/* Footer Links */}
          <VStack gap={3} pt={4}>
            <Link color="#ffffff" fontSize="sm">
              Forgot your password?
            </Link>
            <HStack gap={1} fontSize="sm">
              <Text color="#ccccccc">
                Don't have an account?
              </Text>
              <Link color="#ffffff" fontWeight="semibold">
                Sign up
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

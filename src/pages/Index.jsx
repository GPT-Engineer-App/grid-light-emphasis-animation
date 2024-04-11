import { Box, keyframes } from "@chakra-ui/react";

const animateGrid = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const Index = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      bgImage={`linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`}
      bgSize="100px 100px, 100px 100px, 20px 20px, 20px 20px"
      bgPosition="0 0, 0 0, 0 0, 0 0"
      animation={`${animateGrid} 20s linear infinite`}
      zIndex={-1}
    />
  );
};

export default Index;

import { Box, useToken } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaBone } from "react-icons/fa";

const colors = ["blue.500", "green.500", "orange.500", "red.500", "purple.500"];

function BackgroundPattern() {
  const [randomColors, setRandomColors] = useState([]);
  const chakraColors = useToken("colors", colors);

  useEffect(() => {
    const generatedColors = colors.map((color) => chakraColors[Math.floor(Math.random() * chakraColors.length)]);
    setRandomColors(generatedColors);
  }, []);

  const logos = Array.from({ length: 100 }).map((_, index) => ({
    color: randomColors[index % randomColors.length],
    top: `${(index % 10) * 10}%`,
    left: `${Math.floor(index / 10) * 10}%`,
    transform: `scale(${Math.random() + 0.5}) rotate(${Math.random() * 360}deg)`,
  }));

  return (
    <Box position="fixed" top={0} left={0} right={0} bottom={0} zIndex={-1}>
      {logos.map((logo, index) => (
        <FaBone key={index} color={logo.color} position="absolute" top={logo.top} left={logo.left} transform={logo.transform} opacity="0.1" />
      ))}
    </Box>
  );
}

export default BackgroundPattern;

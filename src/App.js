import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { MenuProvider } from 'kmenu';
import Palette from './Command';

const lightThemeConfigs = {
  backdropColor: '#FFFFFF20',
  backdropBlur: 4,
  backgroundColor: '#FFFFFF',
  breadcrumbColor: '#F3F3F3',
  breadcrumbRadius: 5,
  borderWidth: 1,
  borderColor: 'rgb(233, 236, 239)',
  borderRadius: 10,
  boxShadow: '0px 0px 60px 10px #00000020',
  inputColor: '#000000',
  inputBorder: '#E9ECEF',
  headingColor: '#777777',
  commandInactive: '#828282',
  commandActive: '#343434',
  barBackground: '#0000000F',
  shortcutBackground: '#82828220',
};

const darkThemeConfigs = {
  backdropColor: '#00000099',
  backgroundColor: '#171717',
  backdropBlur: 4,
  borderWidth: 1,
  borderColor: '#333333',
  inputBorder: '#333333',
  inputColor: '#ffffff',
  barBackground: '#FFFFFF10',
  headingColor: '#696969',
  commandInactive: '#696969',
  commandActive: '#fff',
  breadcrumbColor: '#ffffff',
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MenuProvider
        config={darkThemeConfigs}
        dimensions={{ commandHeight: 50, sectionHeight: 40 }}
      >
        <Box>
          <Palette />
        </Box>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text>
                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
              </Text>
              <Link
                color="teal.500"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Chakra
              </Link>
            </VStack>
          </Grid>
        </Box>
      </MenuProvider>
    </ChakraProvider>
  );
}

export default App;

/**
    backdropColor: '#FFFFFF20',
    backdropBlur: 2,
    backgroundColor: '#FFFFFF',
    breadcrumbColor: '#EFEFEF',
    breadcrumbRadius: 5,
    borderWidth: 1,
    borderColor: '#3F3F3F',
    borderRadius: 10,
    boxShadow: '0px 0px 60px 10px #00000020',
    inputColor: '#000000',
    inputBorder: '#E9ECEF',
    headingColor: '#777777',
    commandInactive: '#828282',
    commandActive: '#343434',
    barBackground: '#FFFFFF20',
    shortcutBackground: '#82828220'
 */

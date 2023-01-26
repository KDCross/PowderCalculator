import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useMerriweather,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from "@expo-google-fonts/merriweather";
import {useFonts as useMono,
  RobotoMono_400Regular,
} from "@expo-google-fonts/roboto-mono";


import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const [merriweatherLoaded] = useMerriweather({ Merriweather_400Regular });
  const [monoLoaded] = useMono({ RobotoMono_400Regular });

  if (!merriweatherLoaded || !monoLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

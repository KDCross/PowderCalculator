import { NavigationContainer } from "@react-navigation/native";

import { ProgramNavigation } from "./program-navigation";

export const Navigation = () => {  
    return (
      <NavigationContainer>
        <ProgramNavigation />
      </NavigationContainer>
    );
  };
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../features/homescreen/screens/home-screen";
import { HowMuchPowder } from "../../features/powder/screens/how-much-powder.screen";
import { HowManyRounds } from "../../features/rounds/screens/how-many-rounds.screen";

const Stack = createNativeStackNavigator();

export const ProgramNavigation = ({ route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Powder"
        component={HowMuchPowder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rounds"
        component={HowManyRounds}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

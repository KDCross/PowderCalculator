import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  AppButton,
  Separator,
  ViewContainer,
} from "../../../components/utility/screen-styles";
import { Spacer } from "../../../components/utility/spacer";
import { Text } from "../../../components/utility/typography";

export const HomeScreen = ({navigation}) => {
  return (
    <SafeArea>
      <Spacer position="top" size="xxl" />
      <ViewContainer>
        <Text align="center">I know the weight of the powder charge</Text>
        <Text align="center">that I want to use, and I know:</Text>
        <Spacer position="top" size="medium" />
        <AppButton
          title="How Much Powder I Have"
          onPress={() => navigation.navigate("Powder")}
        />
        <Spacer position="top" size="large" />
        <Separator />
        <Spacer position="top" size="large" />

        <Text align="center">I know the weight of the powder charge</Text>
        <Text align="center">that I want to use, and I know:</Text>
        <Spacer position="top" size="medium" />
        <AppButton
          title="How Many Rounds I Want to Load"
          onPress={() => navigation.navigate("Rounds")}
        />
      </ViewContainer>
    </SafeArea>
  );
};

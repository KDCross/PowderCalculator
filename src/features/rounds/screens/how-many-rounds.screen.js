import React, { useState } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  AppButton,
  RowContainer,
  Separator,
  ViewContainer,
} from "../../../components/utility/screen-styles";
import { Spacer } from "../../../components/utility/spacer";
import { Text } from "../../../components/utility/typography";
import { InputField } from "../../../components/utility/text-input";

export const HowManyRounds = ({ navigation }) => {
  const [powderCharge, setPowderCharge] = useState(0);
  const [wantToLoad, setWantToLoad] = useState(0);

  let needToHave = (powderCharge * wantToLoad) / 7000;

  return (
    <SafeArea>
      <Spacer position="top" size="xxl" />
      <ViewContainer>
        <RowContainer>
          <Text>I want to use </Text>
          <InputField
            onChangeText={(powderCharge) => setPowderCharge(powderCharge)}
            value={powderCharge}
          />
          <Text> grains of powder.</Text>
        </RowContainer>
        <Spacer position="top" size="large" />
        <RowContainer>
          <Text>And I want to load </Text>
          <InputField
            onChangeText={(wantToLoad) => setWantToLoad(wantToLoad)}
            value={wantToLoad}
          />
          <Text> rounds of ammunition.</Text>
        </RowContainer>
        <Spacer position="top" size="large" />
        <AppButton title="Calculate" onSubmit={() => {}} />
        <Spacer position="top" size="large" />
        <AppButton title="Clear" onSubmit={() => {}} />
        <Spacer position="top" size="medium" />
        <Separator />
        <RowContainer>
          <Text>
            So I will need to have {Math.ceil(needToHave)} pound(s) of powder.
          </Text>
        </RowContainer>
        <Spacer position="top" size="medium" />
        <Separator />
        <Spacer position="top" size="medium" />
        <AppButton
          title="Go Home"
          onPress={() => navigation.navigate("Home")}
        />
      </ViewContainer>
    </SafeArea>
  );
};

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

export const HowMuchPowder = ({ navigation }) => {
  const [powderCharge, setPowderCharge] = useState(0);
  const [powderOnHand, setPowderOnHand] = useState(0);
  const [displayCanLoad, setDisplayCanLoad] = useState(0);
  const [PC, setPC] = useState(0);
  const [PoH, setPoH] = useState(0);

  let canLoad = (powderOnHand * 7000) / powderCharge;

  if (isNaN(canLoad)) {
    canLoad = 0;
  } else {
    canLoad = Math.floor(canLoad);
  }

  const ClearInputs = () => {
    const powderOnHand = setPowderOnHand(0);
    const powderCharge = setPowderCharge(0);
  };

  const RunCalculation = (value) => {
    const powderOnHand = setPowderOnHand(powderOnHand);
    const powderCharge = setPowderCharge(powderCharge);
    const displayCanLoad = setDisplayCanLoad(Math.floor(canLoad));
  };

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
          <Text> grains of powder per round.</Text>
        </RowContainer>
        <Spacer position="top" size="large" />
        <RowContainer>
          <Text>And I have </Text>
          <InputField
            onChangeText={(powderOnHand) => setPowderOnHand(powderOnHand)}
            value={powderOnHand}
          />
          <Text> pound(s) of powder.</Text>
        </RowContainer>
        <Spacer position="top" size="large" />
        <Separator />
        <Spacer position="top" size="large" />
        <RowContainer>
          <Text>So I will be able to load {canLoad} rounds of ammunition.</Text>
        </RowContainer>
        <Spacer position="top" size="medium" />
        <Separator />
        <Spacer position="top" size="large" />
        <AppButton title="Clear" onPress={ClearInputs} />
        <Spacer position="top" size="large" />
        <AppButton
          title="Go Home"
          onPress={() => navigation.navigate("Home")}
        />
      </ViewContainer>
    </SafeArea>
  );
};

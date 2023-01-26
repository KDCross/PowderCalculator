import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputField = styled(TextInput).attrs({
  keyboardType: "numeric",
  textAlign: "center",
})`
  width: 15%;
  border-style: solid;
  border-width: 1px;
`;

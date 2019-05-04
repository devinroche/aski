import styled from "styled-components/native";
import Colors from "app/constants/Colors";
import { StyledText } from "./StyledText";
import React from "react";

const AsciiContainer = styled.TouchableHighlight.attrs({
  activeOpacity: 0.6,
  underlayColor: Colors.tintColor
})`
  justify-content: center;
  text-align: center;
  border-width: 1;
  border-color: ${Colors.tintColor};
  border-radius: 10;
  padding: 0;
  height: 85;
`;

export default class AsciiButton extends React.PureComponent{
  render() {
    const {el, onPress} = this.props;
    return (
      <AsciiContainer onPress={() => onPress()}>
        <StyledText>{el.ascii}</StyledText>
      </AsciiContainer>
    );
  };
}

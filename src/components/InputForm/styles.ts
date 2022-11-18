import styled, {StyledComponent} from "styled-components";
import {Input} from "antd";

interface InputTextProps {
    error?: any;
}

export const StyledInput: StyledComponent<any, any> = styled(Input)<InputTextProps>`
  &:focus {
    border: none;
    outline: 1px solid ${(props) => (props.error ? 'red' : '#40a9ff')};
    box-shadow: none;
  }
`;
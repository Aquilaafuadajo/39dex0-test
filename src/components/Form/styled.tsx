import styled from "styled-components";
import { Column } from "../Flex";
import { BaseButton } from "../IconButton";

export const FormWrapper = styled(Column)`
  padding-top: 1.9rem;
  padding-bottom: 2.5rem;
  padding-left: 1.125rem;
  padding-right: 1.125rem;
`;

export const FormInput = styled(Column)`
  max-width: 17.2rem;
  gap: 0.25rem;
  label {
    font-size: 1rem;
    font-weight: 400;
    color: #282828;
    margin: 0;
  }

  input {
    font-size: 1rem;
    font-weight: 400;
    color: #9b9b9b;
    background: #f6f6f6;
    border: 1px solid #f9f9f9;
    border-radius: 0.625rem;
    padding: 1.125rem;
    width: 100%;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      color: #9b9b9b;
    }
  }
`;

export const FormButton = styled(BaseButton)`
  padding: 1.125rem;
  max-width: 17.2rem;
`;

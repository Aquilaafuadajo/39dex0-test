import styled, { css } from "styled-components";
import { font, theme } from "../utils/variables";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "text" | "outlined";
  background?: "primary" | "secondary" | "accent" | "grey" | "white" | string;
  color?: "primary" | "secondary" | "accent" | "grey" | "white" | string;
  size?: string;
  toolTipTitle?: string;
}

export const BaseButton = styled.button<ButtonProps>`
  ${({ variant, background = "primary", color = "white" }) => {
    const bg = Object.keys(theme).includes(background)
      ? theme[background][700]
      : background;
    const col: string = Object.keys(theme).includes(color)
      ? theme[color][100]
      : color;

    switch (variant) {
      case "solid":
        return css`
          border: none;
          background-color: ${bg};
          color: ${col};
          svg,
          path,
          * {
            stroke: ${col};
            color: ${col};
          }
        `;
      case "outlined":
        return css`
          background-color: transparent;
          color: ${bg};
          border: 1px solid ${bg};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${bg};
          }
        `;
      case "text":
        return css`
          background-color: transparent;
          border: none;
          color: ${bg};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${bg};
          }
        `;
      default:
        return css`
          border: none;
          background-color: ${bg};
          color: ${col};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${col};
          }
        `;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: ${font.sizes.base};
  font-weight: ${font.weights.semibold};
  width: 100%;
  cursor: pointer;
`;

export const IconButton = styled(BaseButton)<
  ButtonProps
>`
  padding: 0;
  height: ${({ size }) => size || "3.3125rem"};
  width: ${({ size }) => size || "3.3125rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    ${({ toolTipTitle }) => {
      return (
        toolTipTitle &&
        css`
          &::after {
            font-size: ${font.sizes.xs};
            content: '${toolTipTitle ?? ""}';
            width: max-content;
            position: absolute;
            top: -2.5rem;
            background-color: ${theme.grey[700]};
            font-weight: ${font.weights.bold};
            color: ${theme.white[100]};
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
          }
        `
      );
    }}
  }
`;

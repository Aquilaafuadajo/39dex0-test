import { IconButton, ButtonProps } from "../../components/IconButton";
import { font, theme } from "../../utils/variables";
import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 5.625rem;
  background-color: ${theme.white[200]};
  padding: 1.25rem 0;
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 1rem;
`;

export interface SidebarItemProps extends ButtonProps {
  active?: boolean;
  title?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = styled(IconButton)`
  position: relative;
  width: 3rem;
  height: 3rem;
  svg,
  path {
    width: 1.25rem;
    height: 1.25rem;
  }
  ${({ active }: SidebarItemProps) =>
    active &&
    css`
      background-color: ${theme.secondary[700]};
      color: ${theme.white[100]};
      svg,
      path {
        stroke: ${theme.white[100]};
      }
    `}

  &:hover {
    background-color: ${theme.white[100]};
    border: 1px solid ${theme.secondary[600]};
    color: ${theme.grey[600]};
    svg,
    path {
      stroke: ${theme.grey[600]};
    }
    &::after {
      font-size: ${font.sizes.xs};
      content: ${({ title }) => `"${title}"`};
      width: max-content;
      position: absolute;
      left: 3.5rem;
      background-color: ${theme.white[100]};
      font-weight: ${font.weights.bold};
      color: ${theme.grey[600]};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
`;

export const SwitchAccountButton = styled.button`
  /* width: fit-content; */
  padding: 0;
  border: 0;
  outline: 0;
  background: none;
  position: relative;
  cursor: pointer;
  &:hover {
    & > * {
      background-color: ${theme.white[100]};
      border: 1px solid ${theme.secondary[600]};
      color: ${theme.grey[600]};
      svg,
      path {
        stroke: ${theme.grey[600]};
      }
    }
    &::after {
      content: "Switch Account";
      width: max-content;
      position: absolute;
      left: 3.5rem;
      top: 10%;
      background-color: ${theme.white[100]};
      color: ${theme.grey[600]};
      font-weight: ${font.weights.bold};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
`;

export const HR = styled.hr`
  width: 70%;
  border: 0.5px solid ${theme.grey[200]};
`;

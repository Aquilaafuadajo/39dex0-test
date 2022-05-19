export type Theme = {
  [key: string]: Record<number, string>;
};

export const theme: Theme = {
  primary: {
    700: "#171717",
    600: "#3D3D3D",
    500: "#626262",
    400: "#888888",
    300: "#AEAEAE",
    200: "#D3D3D3",
    100: "#F9F9F9"
  },
  secondary: {
    700: "#F97B5C",
    600: "#FA8E74",
    500: "#FBA18B",
    400: "#FCB5A3",
    300: "#FDC8BB",
    200: "#FEDBD2",
    100: "#FFEEEA"
  },
  accent: {
    700: "#FFB341",
    600: "#FFBF5F",
    500: "#FFCA7D",
    400: "#FFD69B",
    300: "#FFE2B8",
    200: "#FFEDD6",
    100: "#FFF9F4"
  },
  blue: {
    600: "#3FB2E3",
    500: "#3FB2E3",
    400: "#88D1EE",
    300: "#ACE0F3",
    200: "#D1F0F9",
    100: "#F5FFFE"
  },
  red: {
    600: "#F64811",
    500: "#F86B3F",
    400: "#FA8E6C",
    300: "#FBB29A",
    200: "#FDD5C7",
    100: "#FFF8F5"
  },
  green: {
    600: "#1FBC55",
    500: "#42C76F",
    400: "#65D189",
    300: "#89DCA4",
    200: "#ACE6BE",
    100: "#CFF1D8"
  },
  yellow: {
    600: "#FFB341",
    500: "#EDB460",
    400: "#F1C684",
    300: "#F6D7A8",
    200: "#FAE9CC",
    100: "#FFFAF0"
  },
  grey: {
    700: "#686868",
    600: "#626262",
    500: "#888888",
    400: "#AEAEAE",
    300: "#D3D3D3",
    200: "#BCBCBC",
    100: "#F9F9F9"
  },
  white: {
    200: "#FFFBF2",
    100: "#FFFFFF"
  },
  black: {
    200: "#68614E",
    100: "#171717"
  }
};

export const font = {
  sizes: {
    base: "1rem",
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    lg: "1.5rem",
    xl: "2.25rem",
    xxl: "2.875rem",
    xxxl: "3.625rem"
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
};

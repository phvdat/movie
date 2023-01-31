import { css, Theme } from "@emotion/react";

export const root = css`
  :root {
    --height-header: 60px;
    --width-sidebar: 305px;
    --container-area-default-layout: 975px;
  }
`;

export const themeLight = css`
  body[data-theme="light"] {
    --background-primary: #ffffff;
    --background-secondary: #f3f3f3;
    --background-third: #e7e7e7;

    --text-primary: #1a202c;
    --text-secondary: #555555;
    --text-disabled: #a3a3a3;

    --box-shadow-sm: 4px 4px 10px rgba(0, 0, 0, 0.04);
    --box-shadow-md: 0px 0px 8px rgba(0, 0, 0, 0.08);
    --box-shadow-lg: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  }
`;

export const themeDark = css`
  body[data-theme="dark"] {
    --background-primary: #171717;
    --background-secondary: #404040;
    --background-third: #262626;

    --text-primary: #ffffffeb;
    --text-secondary: #a3a3a3;
    --text-disabled: #404040;

    --box-shadow-sm: 4px 4px 10px rgba(255, 255, 255, 0.04);
    --box-shadow-md: 0px 0px 8px rgba(255, 255, 255, 0.08);
    --box-shadow-lg: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.1));
  }
`;

export const theme = {
  container: "1280px",
  colors: {
    primary: "#FACC15",
    success: "#22C55E",
    warning: "#FF9800",
    danger: "#EF4444",
    info: "#2196F3",
    yellow: {
      50: "#FEFCE8",
      300: "#FDE047",
      400: "#FACC15",
      500: "#705D12",
    },
    red: {
      100: "#FEE2E2",
      300: "#FCA5A5",
      500: "#EF4444",
      600: "#E31B0C",
      800: "#7F1D1D",
      900: "rgba(83, 41, 41, 0.5)",
    },
    orange: {
      50: "#FFF7ED",
      100: "#FFEDD5",
      300: "#FDBA74",
      400: "#FF9800",
      700: "#C77700",
      800: "#AB6703",
      900: "rgba(78, 55, 27, 0.5)",
    },
    blue: {
      100: "#DBEAFE",
      400: "#64B6F7",
      600: "#2196F3",
      700: "#0B79D0",
      800: "#1B4D75",
      900: "rgba(22, 37, 56, 0.5)",
    },
    green: {
      100: "#DCFCE7",
      300: "#7BC67E",
      500: "#22C55E",
      700: "#3B873E",
      800: "#226024",
      900: "rgba(32, 94, 53, 0.5)",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#FAFAFA",
      200: "#E7E7E7",
      300: "#F3F3F3",
      400: "#A3A3A3",
      500: "#555555",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
  spacing: {
    1: "2px",
    2: "4px",
    3: "8px",
    4: "12px",
    5: "16px",
    6: "20px",
    7: "24px",
    8: "32px",
    9: "36px",
    10: "48px",
    11: "64px",
    12: "80px",
    13: "160px",
  },
  fontFamily: {
    primary: "Roboto, sans-serif",
    secondary: "Tahoma",
  },
  fontSize: {
    xs: "1rem",
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.6rem",
    xl: "2rem",
    "2xl": "2.4rem",
  },

  zIndex: {
    fab: 1050,
    drawer: 1200,
    dialog: 1300,
    tooltip: 1500,
    snackbar: 1400,
    backdrop: 1199,
  },

  borderRadius: {
    sm: "4px",
    full: "50%",
  },

  boxShadow: {
    sm: "4px 4px 10px rgba(0, 0, 0, 0.04)",
    md: "0px 0px 8px rgba(0, 0, 0, 0.08)",
  },
} as Theme;

import { css, Theme } from "@emotion/react";

export const headerStyle = {
  self: css({
    height: "var(--height-header)",
    backgroundColor: "var(--background-primary)",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
  }),
  wrapper: css({
    width: "var(--container-area-default-layout)",
    height: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  wrapperLogo: ({ fontSize, spacing }: Theme) =>
    css({
      display: "inline-flex",
      alignItems: "center",
      span: {
        fontWeight: "700",
        fontSize: fontSize?.xl,
      },
    }),

  logo: css({
    width: "20px",
    height: "20px",
  }),
};

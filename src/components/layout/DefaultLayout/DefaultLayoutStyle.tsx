import { css } from "@emotion/react";

export const defaultLayoutStyle = {
  sefl: css({}),
  outlet: css({
    width: "var(--container-area-default-layout)",
    minHeight: "calc(100vh - var(--height-header))",
    margin: "auto",
  }),
};

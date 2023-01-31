import '@emotion/react';

declare module '@emotion/react' {
  interface Model<T> {
    [key: string]: T;
  }
  interface Colors {
    primary: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    yellow: Model<string>;
    red: Model<string>;
    orange: Model<string>;
    blue: Model<string>;
    green: Model<string>;
    neutral: Model<string>;
  }
  export interface Theme {
    container: string;
    colors: Colors;
    spacing: Model<string>;
    fontFamily: Model<string>;
    fontSize: Model<string>;
    zIndex: Model<number>;
    borderRadius: Model<string>;
    boxShadow: Model<string>;
  }
}

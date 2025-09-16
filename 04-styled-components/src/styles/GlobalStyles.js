import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.25s ease, color 0.25s ease;
  }
`;

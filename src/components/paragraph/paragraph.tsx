import React from "react";
import styled, { CSSObject } from "styled-components";

interface IParagraphProps {
  underline?: boolean;
  boldTitle?: boolean;
  text: string;
  style?: CSSObject;
  title?: string;
  titleStyle?: CSSObject;
  fallBackText?: string;
}

const StyledSpan = styled.span`
  font-weight: bold;
  padding-right: 0.5em;
`;

const StyledParagraph = styled.p<IParagraphProps>`
  text-decoration: ${({ underline }) => underline && "underline"};
  text-transform: capitalize;
`;

const Paragraph = ({
  text,
  style,
  underline,
  title,
  titleStyle,
  fallBackText,
}: IParagraphProps) => (
  <StyledParagraph text={text} style={{ ...style }} underline={underline}>
    {title && <StyledSpan style={{ ...titleStyle }}>{title}</StyledSpan>}
    {text && text.length ? text : fallBackText || "Unknown"}
  </StyledParagraph>
);
export default Paragraph;

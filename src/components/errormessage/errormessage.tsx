import React from "react";
import Paragraph from "../paragraph/paragraph";

interface IErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: IErrorMessageProps) => {
  return <Paragraph text={text} style={{ textAlign: "center" }} />;
};

export default ErrorMessage;

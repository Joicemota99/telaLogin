import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "../Button/types";


const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export {Button};
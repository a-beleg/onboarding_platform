import {ButtonHTMLAttributes, FC} from "react";
import {Wrapper} from "./style";

type ButtonProps = {
  noPadding?: boolean;
  onClick?: (e: MouseEvent | TouchEvent) => void;
}

export const ButtonLink: FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = ({
                                                                                          noPadding = false,
                                                                                          ...props
                                                                                      }) => {
    return (
        <Wrapper noPadding={noPadding} {...props} />
    )
}
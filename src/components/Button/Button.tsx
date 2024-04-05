import { MouseEventHandler, ReactNode } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

//#region  Interfaces
interface IButtonChildren {
  children: ReactNode | JSX.Element;
}

interface IButtonProps extends IButtonChildren {
  variant?: "primary" | "secondary" | "disabled";
  clickAction?: MouseEventHandler<HTMLDivElement>;
  style?: string;
}
//#endregion

const Button = ({
  variant = "primary",
  clickAction,
  style,
  children,
}: IButtonProps) => {
  return (
    <div
      onClick={clickAction}
      className={`button button--${variant} ${style}}`}
      tabIndex={0}
      role="button"
      aria-label="Button"
    >
      {children}
    </div>
  );
};

const Text = ({ children }: IButtonChildren): ReactNode => {
  return <p className="button__text">{children}</p>;
};

Button.Text = Text; // Exporting as compound object

// RunTime Typechecking using PropTypes
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "disabled"]),
  clickAction: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;

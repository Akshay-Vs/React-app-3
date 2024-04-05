import { ReactNode } from "react";
import PropTypes from "prop-types";
import "./Typography.scss";

//#region  Interfaces
interface IChildren {
  children: ReactNode | JSX.Element;
}

interface ITypographyHeading extends IChildren {
  variant?: "h1" | "h2" | "h3";
  style?: string;
}
//#endregion

const Typography = ({ children }: IChildren) => {
  return <div className="typography">{children}</div>;
};

const Heading = ({ variant, style, children }: ITypographyHeading) => {
  return (
    <div
      className={`typography__heading typography__heading--${variant} ${style}`}
    >
      {children}
    </div>
  );
};

const SubHeading = ({ children }: IChildren) => {
  return <div className="sub-heading">{children}</div>;
};

// Attach Heading and SubHeading components
// to the Typography object for compound export
Typography.Heading = Heading;
Typography.SubHeading = SubHeading;

// RunTime Typechecking using PropTypes
Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3"]),
  style: PropTypes.string,
};

export default Typography;

import { ReactNode } from "react";
import "./Input.scss";

interface IChildren {
  children: ReactNode | JSX.Element;
}

interface ITextInput extends IChildren {
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const TakeInput = ({ children }: IChildren) => {
  return <div className="input">{children}</div>;
};

const TextInput = ({ props, children }: ITextInput) => {
  return (
    <div className="input__text-input">
      <input className="input__text-input__input" type="text" {...props} />
      <label className="input__text-input__label">{children}</label>
    </div>
  );
};

const RadioInput = ({ children }: IChildren) => {
  return <div className="input__radio">{children}</div>;
};

TakeInput.TextInput = TextInput;
TakeInput.RadioInput = RadioInput;

export default TakeInput;

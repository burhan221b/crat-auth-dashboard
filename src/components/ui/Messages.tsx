import { Messages } from "../../types";

export const ErrorMessage = ({ children }: Messages) => <div className="error-msg">{children}</div>;
export const SuccessMessage = ({ children }: Messages) => <div className="success-msg">{children}</div>;
export const GeneralMessage = ({ children }: Messages) => <div className="general-msg">{children}</div>;

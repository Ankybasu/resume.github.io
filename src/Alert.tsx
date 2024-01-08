import React, { ReactNode } from "react";
interface Props {
  children: string;
}
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;

import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div>
      <h3 className="mb-3">{title}</h3>
      {children}
    </div>
  );
}

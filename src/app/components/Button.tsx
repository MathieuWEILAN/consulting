import { MouseEventHandler } from "react";

const Button = ({
  text,
  action,
  className,
  value,
  type,
}: {
  text: string;
  action?: MouseEventHandler;
  className?: string;
  value?: string;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={action}
      className={`${className} w-fit border-2 py-2.5 px-4 rounded-full uppercase bg-slate-50 border-primaryBlue text-primaryBlue hover:border-slate-50 hover:bg-primaryBlue hover:text-slate-50 font-bold`}
    >
      {text}
    </button>
  );
};

export default Button;

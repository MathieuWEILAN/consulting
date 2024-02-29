const Button = ({
  text,
  action,
  className,
}: {
  text: string;
  action: Function;
  className: string;
}) => {
  return (
    <button
      onClick={action}
      className="border-4 py-2.5 px-4 rounded-full uppercase bg-slate-50 border-green-600 text-green-600 hover:border-slate-50 hover:bg-green-600 hover:text-slate-50"
    >
      {text}
    </button>
  );
};

export default Button;

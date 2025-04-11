"use client";

const Button = ({
  children,
  type,
  width,
  onClick,
  reference,
}: Readonly<{
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width: number | string;
  onClick?: () => void;
  reference?: string;
}>) => {
  return (
    <>
      {reference ? (
        <a
          href={reference}
          className="font-medium text-center py-2 my-3 flex items-center justify-center hover:text-white transition-colors duration-300 uppercase rounded-xl"
          type={type}
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            background: "linear-gradient(to bottom, var(--primary-color), var(--primary-color-dark))",
            color: "var(--foreground)",
          }}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          className="font-medium text-center py-2 my-3 flex items-center justify-center hover:text-white transition-colors duration-300 uppercase rounded-xl"
          type={type}
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            background: "linear-gradient(to bottom, var(--primary-color), var(--primary-color-dark))",
            color: "var(--foreground)",
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
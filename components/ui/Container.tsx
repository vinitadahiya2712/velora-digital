import { ReactNode } from "react";

interface Props {
children: ReactNode;
}

export default function Container({ children }: Props) {
return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10 xl:px-20">
    {children}
    </div>
);
}
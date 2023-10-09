import { ChildrenType } from "../context/ProductsContext";

export default function SquareBorder({ children }: ChildrenType) {
    return (
        <div className="w-fit border-2 border-gray-400 p-3 grid place-items-center">
            {children}
        </div>
    );
}

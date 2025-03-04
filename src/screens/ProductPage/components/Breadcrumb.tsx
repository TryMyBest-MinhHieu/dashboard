"use client";

import { usePathname } from "next/navigation";

// Hàm viết hoa chữ cái đầu
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Breadcrumb = () => {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);

    if (paths.length === 0) return null;

    return (
        <>
            {paths.map((path, index) => (
                <span key={index} className="mx-2 capitalize">
                    / {capitalize(path)}
                </span>
            ))}
        </>
    );
};

export default Breadcrumb;

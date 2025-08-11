import type { Metadata } from "next";
import '@/app/reset.css'
import type { PropsWithChildren} from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import AntDesignProvider from "@/Providers/AntDesignProvider/AntDesignProvider";

export const metadata: Metadata = {
    title: "Portofio",
    description: "Portofio Alisa Kap",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ru">
        <body>
        <AntDesignProvider>
            <Sidebar />
            {children}
        </AntDesignProvider>
        </body>
        </html>
    );
}

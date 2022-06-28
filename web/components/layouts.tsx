import React, {ReactNode} from "react";
import {Header} from "./header";


export const Layout: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}
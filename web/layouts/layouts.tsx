import React, {ReactNode} from "react";
import {Header} from "./Header";
import styles from "./Layouts.module.scss"
import Head from "next/head";

export const Layout: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Head>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=0.7"/>
            </Head>
            <Header/>
            <main>{children}</main>
        </div>
    )
}
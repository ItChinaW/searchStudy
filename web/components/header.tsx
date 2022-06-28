import styles from "../styles/Home.module.scss";
import Image from "next/image";
import LOGO from "../static/logo.png";
import {Button, Input} from "antd";

export const Header = () => {
    return (
        <div className={styles.container}>
            <h1>
                <Image src={LOGO} width={150} height={150} className="logo" alt="logo"/>
            </h1>
            <div className="search">
                <Input placeholder="输入题目内容搜索答案" className="input"/>
                <Button className="submit">搜索题目</Button>
            </div>
        </div>
    )
}
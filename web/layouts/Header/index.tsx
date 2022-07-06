import styles from "./Index.module.scss";
import Image from "next/image";
import LOGO from "../../static/logo.png";
import {Button, Input} from "antd";
import {useState} from "react";
import Link from "next/link";

export const Header = () => {
    const [keyword, setKeyword] = useState<string>("")

    return (
        <div className={styles.container}>
            <h1>
                <Link href={{pathname: '/'}}>
                    <a>
                        <Image src={LOGO} width={150} height={150} className="logo" alt="logo"/>
                    </a>
                </Link>
            </h1>
            <div className="search">
                <Input
                    placeholder="输入题目内容搜索答案"
                    className="input"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    autoFocus={true}
                />
                <Link href={{pathname: '/search', query: {keyword}}}>
                    <a>
                        <Button className="submit">搜索题目</Button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

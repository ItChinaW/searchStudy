import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import {Button, Input} from "antd";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Input placeholder={"输入题目内容搜索答案"}/>
            <Button>搜索题目</Button>
        </div>
    )
}

export default Home

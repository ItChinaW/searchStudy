import React from 'react';
import styles from "../../styles/Page.module.scss"
import {Card} from "antd";
import Head from "next/head";

const Index = () => {
    return (
        <div className={styles.detail}>
            <Head>
                <title>2016超星尔雅东北亚国际关系史</title>
            </Head>
            <Card title={"2016超星尔雅东北亚国际关系史"}>
                <div>
                    <strong>题目：</strong>
                    <span>2016超星尔雅东北亚国际关系史2016超星尔雅东北亚国际关系史2016超星尔雅东北亚国际关系史2016超星尔雅东北亚国际关系史2016超星尔雅东北亚国际关系史2016超星尔雅东北亚国际关系史</span>
                    <p className="select">
                        <span>A：星尔</span>
                        <span>B：北亚</span>
                        <span>C：际关</span>
                        <span>D：超星</span>
                    </p>
                    <p className="answer">
                        <strong>答案：</strong>
                        <span>A、B</span>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Index;

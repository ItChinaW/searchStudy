import React from 'react';
import styles from "../../styles/Page.module.scss"
import {Card} from "antd";
import Head from "next/head";
import {GetServerSideProps, NextPage} from "next";
import {Project} from "../../apis/api-functions";
import {ProjectDto} from "../../apis/dto-types";

const Index: NextPage<{ data: ProjectDto }> = ({data}) => {
    return (
        <div className={styles.detail}>
            <Head>
                <title>{data.projectsTitle}</title>
            </Head>
            <Card title={data.projectsTitle}>
                <div>
                    <strong>题目：</strong>
                    <span>{data.projectsContent}</span>
                    <p className="select">
                        <span>{data.projectsSelection}</span>
                    </p>
                    <p className="answer">
                        <strong>答案：</strong>
                        <span>{data.projectsAnswer}</span>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.query.id as unknown as number
    const res = await Project.getProjectById(id)
    return {
        props: {
            data: res.data.data
        }
    }
}

export default Index;

import {GetServerSideProps, NextPage} from "next";
import {Card, Pagination, Spin} from "antd";
import styles from "../styles/Search.module.scss";
import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";
import {Project} from "../apis/api-functions";
import {ProjectDto} from "../apis/dto-types";
import {useState} from "react";

const Search: NextPage<{ data: ProjectDto[], total: number }> = ({data, total}) => {
    const router = useRouter()
    const keyword = router.query.keyword ?? ""
    const [pagination, setPagination] = useState<{
        current: number,
        pageSize: number
    }>()
    return (
        <div className={styles.search}>
            <Head>
                <title>{keyword ? `${keyword} - 搜索结果` : "搜索结果"}</title>
            </Head>
            <Card title={`搜索结果 - ${keyword}`}>
                <Spin spinning={false}>
                    <ul className="box">
                        {data?.map((item, index) => (
                            <li key={item.ID}>
                                <Link href={{pathname: `/page/${item.ID}`}}><a>{item.projectsTitle}</a></Link>
                                <Link href={{pathname: `/page/${item.ID}`}}>
                                    <a>
                                        <span className="pointer">查看</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        {...pagination}
                        total={total}
                        onChange={(page, pageSize) => {
                            setPagination({
                                pageSize,
                                current: page,
                            })
                            router.push({query: {page}})
                        }}/>
                </Spin>
            </Card>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const keyword = context.query.keyword
    let page = 0;
    if (context.query.page) {
        page = Number(context.query.page)
    }
    const res = await Project.getProjectList(keyword, page)
    return {
        props: {
            data: res.data.data,
            total: res.data.total
        }
    }
}

export default Search

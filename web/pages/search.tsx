import {GetServerSideProps, NextPage} from "next";
import {Card, Pagination, Spin} from "antd";
import styles from "../styles/Search.module.scss";
import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";
import {Project} from "../apis/api-functions";
import {ProjectDto} from "../apis/dto-types";

const Search: NextPage<{ data: ProjectDto[] }> = ({data}) => {
    const router = useRouter()
    const keyword = router.query.keyword ?? ""
    return (
        <div className={styles.search}>
            <Head>
                <title>搜索结果</title>
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
                    <Pagination defaultCurrent={1} total={50}/>
                </Spin>
            </Card>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const keyword = context.query.keyword
    const res = await Project.getProjectList(keyword)
    return {
        props: {
            data: res.data.data
        }
    }
}

export default Search

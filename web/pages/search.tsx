import {NextPage} from "next";
import {Card, Pagination, Spin} from "antd";
import styles from "../styles/Search.module.scss";
import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";

const Search: NextPage = () => {
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
                        <li>
                            <Link href="#"><a>2016超星尔雅东北亚国际关系史</a></Link>
                            <Link href={{pathname: `/page/${1}`}}><a><span className="pointer">查看</span></a></Link>
                        </li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                        <li><a href="">2016超星尔雅东北亚国际关系史</a></li>
                    </ul>
                    <Pagination defaultCurrent={1} total={50}/>
                </Spin>
            </Card>
        </div>
    )
}

export default Search
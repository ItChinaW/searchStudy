import {NextPage} from "next";
import {Card} from "antd";
import styles from "../styles/Search.module.scss";

const Search: NextPage = () => {
    return (
        <div className={styles.search}>
            <Card title="题库">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Card>
        </div>
    )
}

export default Search
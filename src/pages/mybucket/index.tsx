import React from "react";
import Nav from "@/components/Nav/Nav";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import TextField from "@/components/Input/TextField/TextField";
import List from "@/components/List/List";
import Item from "@/components/List/Item";
import Title from "@/components/Title/Title";
import Checkbox from "@/components/Input/Checkbox/Checkbox";
import {APP_PATH} from "@/constants/APP_INFO";
import Link from "next/link";
import { listData } from "@/data";
import Icon from "@/components/Icon/Icon";

function MyBucket() {
    return (
        <main>
            <Header leftCont={<Title as='h1'>LOGO</Title>} rightCont={
                <div>
                    <button>
                        <Icon name='filter' />
                    </button>
                    <Link href={APP_PATH.MY_BUCKET_ADD}>
                        <Icon name='add' />
                    </Link>
                </div>}/>

            <Layout>
                <TextField line type='search' placeholder='제목 또는 카테고리를 입력해주세요.' style={{marginBottom: '20px'}} />

                <ul>
                    {listData.map(({category_idx, category, list}) => (
                        <li key={category_idx} style={{marginBottom: '40px'}}>
                            <Title as='h6'>{category}</Title>
                            <List>
                                {list?.map(({idx, title, checked}) => (
                                    <Item key={idx}>
                                        <Link href={`${APP_PATH.MY_BUCKET}/${idx}`}>
                                            <p>{title}</p>
                                            <Checkbox defaultChecked={checked}/>
                                        </Link>
                                    </Item>
                                ))}
                            </List>
                        </li>
                    ))}
                </ul>
            </Layout>

            <Nav/>
        </main>
    )
}

export default MyBucket;

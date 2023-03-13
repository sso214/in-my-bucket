import React from "react";
import Nav from "@/components/Nav/Nav";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import List from "@/components/List/baseUI/List";
import Item from "@/components/List/baseUI/Item";
import Title from "@/components/Title/Title";

function MyBucket() {
    return (
        <main>
            <Header rightCont={
                <div>
                    <button>filter</button>
                    <button>add</button>
                </div>}/>

            <Layout>
                <Input type='search' placeholder='제목 또는 카테고리를 입력해주세요.' style={{marginBottom: '20px'}} />

                <ul>
                    <li>
                        <Title as='h5'>Category</Title>
                        <List>
                            <Item>
                                <p>title</p>
                                <input type='checkbox'/>
                            </Item>
                            <Item>
                                <p>title</p>
                                <input type='checkbox'/>
                            </Item>
                            <Item>
                                <p>title</p>
                                <input type='checkbox'/>
                            </Item>
                        </List>
                    </li>
                </ul>
            </Layout>

            <Nav/>
        </main>
    )
}

export default MyBucket;

import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import React from "react";

function index() {
    return (
        <main>
            <Header leftCont={<i>back</i>} />
            <Layout>
                <input type='search' />
                <ul>
                    <li>tag1</li>
                    <li>tag2</li>
                    <li>tag3</li>
                </ul>
                <ul>
                    <li>category</li>
                    <li>title</li>
                </ul>
                <ol>
                    <li>
                        <p>title</p>
                        <input type='checkbox'/>
                    </li>
                    <li>
                        <p>title</p>
                        <input type='checkbox'/>
                    </li>
                    <li>
                        <p>title</p>
                        <input type='checkbox'/>
                    </li>
                </ol>
            </Layout>
        </main>
    );
}

export default index;

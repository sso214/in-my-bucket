import React from "react";
import Nav from "@/components/Nav/Nav";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";

function MyBucket() {
    return (
        <main>
            <Header logo rightCont={
                <div>
                    <button>filter</button>
                    <button>add</button>
                </div>}/>

            <Layout>
                <input type='search'/>

                <ul>
                    <li>
                        <h5>category</h5>
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
                            <li>
                                <p>title</p>
                                <input type='checkbox'/>
                            </li>
                        </ol>
                    </li>
                </ul>
            </Layout>

            <Nav/>
        </main>
    )
}

export default MyBucket;

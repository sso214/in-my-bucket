import React from 'react';
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

function MyBucketDetail() {
    return (
        <main>
            <Header rightCont={<i>close</i>}/>
            <Layout>
                <table>
                    <tbody>
                    <tr>
                        <th>title</th>
                        <td>?</td>
                    </tr>
                    <tr>
                        <th>status</th>
                        <td>?</td>
                    </tr>
                    <tr>
                        <th>date</th>
                        <td>0000.00.00</td>
                    </tr>
                    <tr>
                        <th>filling</th>
                        <td>*****</td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th>image</th>
                        <td>
                            <img src='#' alt='title'/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </Layout>
        </main>
    );
}

export default MyBucketDetail;

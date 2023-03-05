import React from 'react';
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

function MyBucketAdd() {
    return (
        <main>
            <Header rightCont={<i>close</i>}/>
            <Layout>
                <table>
                    <tbody>
                    <tr>
                        <th>category</th>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <th>title</th>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <th>status</th>
                        <td><input type='checkbox' /></td>
                    </tr>
                    <tr>
                        <th>date</th>
                        <td><input type='date' /></td>
                    </tr>
                    <tr>
                        <th>filling</th>
                        <td>
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                        </td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <th>image</th>
                        <td><input type='file' /></td>
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

export default MyBucketAdd;

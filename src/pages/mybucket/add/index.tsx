import React from 'react';
import {css} from '@emotion/react';
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import TextField from "@/components/Input/TextField/TextField";
import Checkbox from "@/components/Input/Checkbox/Checkbox";

function MyBucketAdd() {
    return (
        <main>
            <Header rightCont={<i>close</i>}/>
            <Layout>
                <table css={Table}>
                    <tbody>
                    <tr>
                        <th>category</th>
                        <td><TextField /> <Checkbox /></td>
                    </tr>
                    <tr>
                        <th>title</th>
                        <td><TextField /></td>
                    </tr>
                    <tr>
                        <th>date</th>
                        <td><TextField type='date' /></td>
                    </tr>
                    <tr>
                        <th>filling</th>
                        <td>
                            <i/>
                            <i/>
                            <i/>
                            <i/>
                            <i/>
                        </td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <th>image</th>
                        <td><input type='file'/></td>
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

const Table = css`
  width: 100%;
  table-layout: fixed;
  
  font-size: 15px;
  
  th {
    font-weight: bold;
  }
  
  th,
  td {
    height: 45px;
    text-align: left;
  }
`;

export default MyBucketAdd;

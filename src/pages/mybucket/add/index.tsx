import React from 'react';
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Icon from "@/components/Icon/Icon";
import Link from "next/link";
import {APP_PATH} from "@/constants/APP_INFO";
import DataTable from "@/pages/mybucket/DataTable/DataTable";
import {useRouter} from "next/router";
import Checkbox from "@/components/Input/Checkbox/Checkbox";
import TextField from "@/components/Input/TextField/TextField";
import { css } from '@emotion/react';
import Button from "@/components/Button/Button";

function MyBucketDetail() {
    const router = useRouter();

    return (
        <main>
            <Header
                leftCont={<Link href={APP_PATH.MY_BUCKET}><Icon name='back' /></Link>}
                centerCont='버킷리스트 생성'
            />
            <Layout>
                <DataTable col={['35%', '65%']}>
                    <tr>
                        <th>title</th>
                        <td>
                            <TextField />
                        </td>
                    </tr>
                    <tr>
                        <th>status</th>
                        <td>
                            <Checkbox />
                        </td>
                    </tr>
                    <tr>
                        <th>date</th>
                        <td>
                            <TextField type='date' />
                        </td>
                    </tr>
                    <tr>
                        <th>filling</th>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <th>tag</th>
                        <td>
                            <TextField />
                        </td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td>
                            <textarea></textarea>
                        </td>
                    </tr>
                </DataTable>

                <div css={ButtonWrap}>
                    <Button onClick={() => router.push(APP_PATH.MY_BUCKET)}>
                        ADD
                    </Button>
                    <Button onClick={() => router.push(APP_PATH.MY_BUCKET)}>
                        CANCEL
                    </Button>
                </div>
            </Layout>
        </main>
    );
}

const ButtonWrap = css`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    flex: 1;
    
    &:first-child {
      margin-right: 10px;
    }
  }
`;

export default MyBucketDetail;

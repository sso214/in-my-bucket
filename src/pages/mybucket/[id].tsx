import React from 'react';
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Icon from "@/components/Icon/Icon";
import Link from "next/link";
import {APP_PATH} from "@/constants/APP_INFO";
import DataTable from "@/pages/mybucket/DataTable/DataTable";
import { detailData } from "@/data";
import {useRouter} from "next/router";
import Checkbox from "@/components/Input/Checkbox/Checkbox";
import TextField from "@/components/Input/TextField/TextField";
import { css } from '@emotion/react';
import Button from "@/components/Button/Button";

function MyBucketDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [data] = detailData.filter((v) => v.idx === Number(id));

    return (
        <main>
            <Header leftCont={<Link href={APP_PATH.MY_BUCKET}><Icon name='back' /></Link>}/>
            <Layout>
                <DataTable col={['35%', '65%']}>
                    <tr>
                        <th>title</th>
                        <td>
                            <TextField defaultValue={data?.title} />
                        </td>
                    </tr>
                    <tr>
                        <th>status</th>
                        <td>
                            <Checkbox defaultChecked={data?.checked} />
                        </td>
                    </tr>
                    <tr>
                        <th>date</th>
                        <td>
                            <TextField type='date' defaultValue={data?.date} />
                        </td>
                    </tr>
                    <tr>
                        <th>filling</th>
                        <td>
                            {data?.filling}
                        </td>
                    </tr>
                    <tr>
                        <th>tag</th>
                        <td>
                            {data?.tag?.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                            <TextField />
                        </td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td>
                            <textarea defaultValue={data?.description}></textarea>
                        </td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <th>image</th>*/}
                    {/*    <td>*/}
                    {/*        <img src='#' alt='title'/>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                </DataTable>

                <div css={ButtonWrap}>
                    <Button onClick={() => router.push(APP_PATH.MY_BUCKET)}>
                        SAVE
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

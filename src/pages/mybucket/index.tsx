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
import { data } from "@/data";

function MyBucket() {
    return (
        <main>
            <Header leftCont={<Title as='h1'>LOGO</Title>} rightCont={
                <div>
                    <button>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 20.5H10C9.80189 20.4974 9.61263 20.4176 9.47253 20.2775C9.33244 20.1374 9.25259 19.9481 9.25 19.75V12L3.9 4.69C3.81544 4.58007 3.76395 4.44832 3.75155 4.31018C3.73915 4.17204 3.76636 4.03323 3.83 3.91C3.89375 3.78712 3.98984 3.68399 4.10792 3.61173C4.226 3.53947 4.36157 3.50084 4.5 3.5H19.5C19.6384 3.50084 19.774 3.53947 19.8921 3.61173C20.0101 3.68399 20.1062 3.78712 20.17 3.91C20.2336 4.03323 20.2608 4.17204 20.2484 4.31018C20.236 4.44832 20.1846 4.58007 20.1 4.69L14.75 12V19.75C14.7474 19.9481 14.6676 20.1374 14.5275 20.2775C14.3874 20.4176 14.1981 20.4974 14 20.5ZM10.75 19H13.25V11.75C13.2492 11.5907 13.302 11.4357 13.4 11.31L18 5H6L10.62 11.31C10.718 11.4357 10.7708 11.5907 10.77 11.75L10.75 19Z" fill="black"/>
                        </svg>
                    </button>
                    <Link href={APP_PATH.MY_BUCKET_ADD}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z" fill="black"/>
                            <path d="M12 16.75C11.8019 16.7474 11.6126 16.6676 11.4725 16.5275C11.3324 16.3874 11.2526 16.1981 11.25 16V8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V16C12.7474 16.1981 12.6676 16.3874 12.5275 16.5275C12.3874 16.6676 12.1981 16.7474 12 16.75Z" fill="black"/>
                            <path d="M16 12.75H8C7.80109 12.75 7.61032 12.671 7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697C7.61032 11.329 7.80109 11.25 8 11.25H16C16.1989 11.25 16.3897 11.329 16.5303 11.4697C16.671 11.6103 16.75 11.8011 16.75 12C16.75 12.1989 16.671 12.3897 16.5303 12.5303C16.3897 12.671 16.1989 12.75 16 12.75Z" fill="black"/>
                        </svg>
                    </Link>
                </div>}/>

            <Layout>
                <TextField type='search' placeholder='제목 또는 카테고리를 입력해주세요.' style={{marginBottom: '20px'}} />

                <ul>
                    {data.map(({category_idx, category, list}) => (
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

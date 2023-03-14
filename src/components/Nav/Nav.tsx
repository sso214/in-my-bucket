import Link from 'next/link'
import * as S from './styles';
import {APP_PATH} from "@/constants/APP_INFO";
import Icon from "@/components/Icon/Icon";

function Nav(){
    const { MY_BUCKET } = APP_PATH;

    return (
        <nav css={S.Nav}>
            <Link href={MY_BUCKET}>
                <Icon name='navMyBucket' />
                <p>나의 버킷</p>
            </Link>
            <Link href={MY_BUCKET}>
                <Icon name='navBucketTree' />
                <p>버킷 구경</p>
            </Link>
            <Link href={MY_BUCKET}>
                <Icon name='navBucketPot' />
                <p>버킷팟</p>
            </Link>
            <Link href={MY_BUCKET}>
                <Icon name='navMore' />
                <p>더보기</p>
            </Link>
        </nav>
    )
}

export default Nav;

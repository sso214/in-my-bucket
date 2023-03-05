import * as S from './styles';

function Nav(){
    return (
        <nav css={S.Nav}>
            <button>
                <img src='#' alt='나의 버킷' />
                <p>나의 버킷</p>
            </button>
            <button>
                <img src='#' alt='버킷 구경' />
                <p>버킷 구경</p>
            </button>
            <button>
                <img src='#' alt='버킷팟' />
                <p>버킷팟</p>
            </button>
            <button>
                <img src='#' alt='더보기' />
                <p>더보기</p>
            </button>
        </nav>
    )
}

export default Nav;

export const detailData = [
    {idx: 1, title: '목공 배우기', checked: false, date:'0000.00.00',filling:5,tag:['20대','뚝딱'],description:'abc'},
    {idx: 2, title: '앙상블 합주하기', checked: true, date:'0000.00.00',filling:0,tag:['20대','뚝딱'],description:'abc'},
    {idx: 3, title: '카페 알바해보기', checked: false, date:'0000.00.00',filling:3,tag:['20대','뚝딱'],description:'abc'},
    {idx: 4, title: '마라톤 대회 출전', checked: true, date:'0000.00.00',filling:2,tag:['20대','뚝딱'],description:'abc'},
    {idx: 5, title: '복근 만들기', checked: false, date:'0000.00.00',filling:1,tag:['20대','뚝딱'],description:'abc'},
    {idx: 6, title: '요가 배우기', checked: true, date:'0000.00.00',filling:2,tag:['20대','뚝딱'],description:'abc'},
    {idx: 7, title: '스타트업 다녀보기', checked: true, date:'0000.00.00',filling:5,tag:['20대','뚝딱'],description:'abc'},
    {idx: 8, title: '관련 분야 책 30권 읽기', checked: true, date:'0000.00.00',filling:3,tag:['20대','뚝딱'],description:'abc'},
    {idx: 9, title: '디지털 노마드', checked: false, date:'0000.00.00',filling:4,tag:['20대','뚝딱'],description:'abc'},
    {idx: 10, title: '동생이랑 일본 여행 다녀오기', checked: true, date:'0000.00.00',filling:0,tag:['20대','뚝딱'],description:'abc'},
    {idx: 11, title: '가족이랑 제주도 여행', checked: false, date:'0000.00.00',filling:0,tag:['20대','뚝딱'],description:'abc'},
    {idx: 12, title: '오로라 보러 북유럽 가기', checked: false, date:'0000.00.00',filling:2,tag:['20대','뚝딱'],description:'abc'},
    {idx: 13, title: '히야시츄카 먹어보기', checked: false, date:'0000.00.00',filling:1,tag:['20대','뚝딱'],description:'abc'},
    {idx: 14, title: '굴 튀김 먹기', checked: false, date:'0000.00.00',filling:5,tag:['20대','뚝딱'],description:'abc'},
    {idx: 15, title: '당근 라페 만들기', checked: true, date:'0000.00.00',filling:3,tag:['20대','뚝딱'],description:'abc'},
    {idx: 16, title: '수익 파이프라인 3개 이상 만들기', checked: true, date:'0000.00.00',filling:4,tag:['20대','뚝딱'],description:'abc'},
    {idx: 17, title: '내 집 마련', checked: true, date:'0000.00.00',filling:0,tag:['20대','뚝딱'],description:'abc'},
    {idx: 18, title: '수익의 70% 적금', checked: true, date:'0000.00.00',filling:1,tag:['20대','뚝딱'],description:'abc'},
];

export const listData = [
    {
        category_idx: 1,
        category: '경험',
        list: detailData.slice(0,3),
    },
    {
        category_idx: 2,
        category: '건강',
        list: detailData.slice(3,6),
    },
    {
        category_idx: 3,
        category: '커리어',
        list: detailData.slice(6,9),
    },
    {
        category_idx: 4,
        category: '장소',
        list: detailData.slice(9,12),
    },
    {
        category_idx: 5,
        category: '음식',
        list: detailData.slice(12,15),
    },
    {
        category_idx: 6,
        category: '재정',
        list: detailData.slice(15,18),
    },
];

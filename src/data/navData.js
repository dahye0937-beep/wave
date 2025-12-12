const navData = [
    {
        id:1,
        title:"회사소개",
        link:'/info',
        subMenu:[
            {title:"연혁",link:'/info'},
            {title:"글로벌 네트워크",link:'/info#page-1'},
            {title:"찾아오시는 길",link:'/info#page-2'},
            {title:"제휴제안",link:'/info#page-3'},
            {title:"CI",link:''},
        ]
    },
    {
        id:2,
        title:"사업영역",
        link:'/about',
        subMenu:[
            {title:"사업개요",link:"/about"},
            {title:"컨슈머 커머스",link:'/about/consumer'},
            {title:"셀러 커머스",link:'/about/seller'},
            {title:"크로스보더 커머스",link:'/about/crossborder'}
        ]
    },
    {
        id:3,
        title:"IR 자료실",
        link:'/',
        subMenu:[
            {title:"IR 자료/실적발표",link:''},
            {title:"재무정보",link:''},
            {title:"전자공고",link:''},
        ]
    },
    {
        id:4,
        title:"윤리경영",
        link:'/',
        subMenu:[
            {title:"윤리규범",link:''},
            {title:"제보하기",link:''}
        ]
    },
    {
        id:5,
        title:"보도자료",
        link:'/',
        subMenu:[]
    },
    {
        id:6,
        title:"채용",
        link:'/',
        subMenu:[]
    },
];
export default navData;
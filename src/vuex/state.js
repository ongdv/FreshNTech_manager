export default {
    currentView: "Auth", //기본 레이아웃
    user: {}, //세션
    layoutView: "Main", //레이아웃
    list: [ //사이드바 메뉴 리스트
        {
            name: "주문 관리",
            menus: [
                {
                    name: "주문 목록",
                    component: "Order"
                }
            ]
        },
        {
            name: "상품 관리",
            menus: [
                {
                    name: "상품 목록",
                    component: "Goods"
                },
                {
                    name: "카테고리 관리",
                    component: "Category"
                }
            ]
        },
        {
            name: "거래처 관리",
            menus: [
                {
                    name: "테스트",
                    component: "test"
                },
                {
                    name: "테스트2",
                    component: "test"
                }
            ]
        },
        {
            name: "배송자 관리",
            menus: [
                {
                    name: "테스트",
                    component: "test"
                },
                {
                    name: "테스트2",
                    component: "test"
                }
            ]
        },
        {
            name: "매입처 관리",
            menus: [
                {
                    name: "테스트",
                    component: "test"
                },
                {
                    name: "테스트2",
                    component: "test"
                }
            ]
        },
        {
            name: "통계",
            menus: [
                {
                    name: "테스트",
                    component: "test"
                },
                {
                    name: "테스트2",
                    component: "test"
                }
            ]
        },
        {
            name: "공지사항 관리",
            menus: [
                {
                    name: "테스트",
                    component: "test"
                },
                {
                    name: "테스트2",
                    component: "test"
                }
            ]
        }
    ],
    orderList: [], //주문 목록
    goodsList: [], //상품 목록
    employee: [], //직원 목록
    client: [], //거래처 목록 
    clientName: [], //거래처 이름 목록
    item: { //상품 정보 바인딩용 상태
        itemName:'',
        itemQTY:0,
        manufacturer:'',
        origin:'',
        spec:'',
        unit:'',
        price1:0,
        price2:0,
        price3:0,
        purchasePrice:0,
        first:1,
        second:2,
        bName:'',
        memo:'',
        tbCustomer_ID:'',
    },
    fCategory: [], //1차 카테고리
    sCategory: [], //2차 카테고리
    purchase: [],
    goods:{},
}
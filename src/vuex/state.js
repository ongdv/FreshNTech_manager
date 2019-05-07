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
                    name: "거래처 목록",
                    component: "Client"
                }
            ]
        },
        {
            name: "배송자 관리",
            menus: [
                {
                    name: "배송자 목록",
                    component: "Deliverer"
                }
            ]
        },
        {
            name: "매입처 관리",
            menus: [
                {
                    name: "매입처 목록",
                    component: "Purchase"
                }
            ]
        },
        {
            name: "직원 관리",
            menus: [
                {
                    name: "직원 목록",
                    component: "Employee"
                }
            ]
        },
        {
            name: "통계",
            menus: [
                {
                    name: "주문 통계",
                    component: "test"
                },
                {
                    name: "상품 통계",
                    component: "test"
                },
                {
                    name: "거래처 통계",
                    component: "test"
                }
            ]
        },
        {
            name: "공지사항 관리",
            menus: [
                {
                    name: "거래처 공지사항",
                    component: "Notice"
                },
                {
                    name: "배송자 공지사항",
                    component: "Notice"
                }
            ]
        }
    ],
    orderList: [], //주문 목록
    goodsList: [], //상품 목록
    employee: [], //직원 목록
    clientList: [], //거래처 목록 
    clientName: [], //거래처 이름 목록
    client: {},
    salesmanList: [],
    delivererList: [],
    deliverer: {},
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
        firstcategory_id:1,
        secondcategory_id:2,
        thirdcategory_id: 3,
        bName:'',
        memo:'',
        tbCustomer_ID:'',
        itemImage: "",
    },
    fCategory: [], //1차 카테고리
    sCategory: [], //2차 카테고리
    purchaseField:[
        {
            key: 'id',
            label: "매입처 코드",
            sortable:true
        },
        {
            key: 'bName',
            label: "매입처명",
            sortable:true
        },
        {
            key: 'count',
            label: "상품수",
            sortable:true
        },
    ], //매입처 테이블 필드
    purchaseList: [], //매입처 목록
    purchase:{}, //매입처 상세보기 필드
    goods:{}, //상품 상세보기 
    clientFields: [ //거래처 테이블 필드
        {
            key: 'id',
            label: "거래처코드",
            sortable: true
        },
        {
            key: 'bName',
            label: "거래처명",
            sortable: true
        },
        {
            key: 'regDate',
            label: "등록일",
            sortable: true
        },
        {
            key: 'payment',
            label: "총매출액",
            sortable: true
        },
        
    ],
    goodsFields: [ //상품 테이블 필드
        {
            key: 'id',
            label: "상품코드",
            sortable:true
        },
        {
            key: 'itemName',
            label: '상품명',
            sortable:true
        },
        {
            key: 'unit',
            label: '규격(단위)',
            sortable:true
        },
        {
            key: 'origin',
            label: '제조사(원산지)',
            sortable:true
        },
        {
            key: 'price1',
            label: '배송단가',
            sortable:true
        },
        {
            key: 'price2',
            label: '소비자가격',
            sortable:true
        },
        {
            key: 'purchasePrice',
            label: '예비가격',
            sortable:true
        },
        {
            key: 'itemQty',
            label: '재고량',
            sortable:true
        },
        {
            key: 'state',
            label: '판매상태',
            sortable:true
        }
    ],
    delivererFileds: [
        {
            key: 'id',
            label: 'ID',
            sortable:true
        },
        {
            key: 'userId',
            label: '사용자ID',
            sortable:true
        },
        {
            key: 'manager',
            label: '이름',
            sortable:true
        },
        {
            key: 'bName',
            label: '담당 거래처',
            sortable:true
        },
        {
            key: 'regDate',
            label: '등록일',
            sortable:true
        },
        
    ],
    clientItem: {
        bName:"",
        bNumber:"",
        chief:"",
        manager:"",
        mobile:"",
        fax:"",
        email:"",
        priceRate:0,
        bSector:"",
        userID:"",
        userPW:"",
        tel:"",
        postNo:"",
        address1:"",
        address2:"",
        address3:"",
        priceRate:"",
        tbDeliverer_ID:"",
        salesman_ID:""
    }
}
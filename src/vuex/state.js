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
            name: "매입 관리",
            menus: [
                {
                    name: "매입처 목록",
                    component: "Provider"
                },
                {
                    name: "발주 목록",
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
    order: {},
    orderList: [], //주문 목록
    orderFields: [
        {
            key: 'orderDate',
            label: "주문일자",
            sortable: true
        },
        {
            key: 'id',
            label: '주문코드',
            sortable: true
        },
        {
            key: 'tbCustomer_ID',
            label: '거래처',
            sortable: true
        },
        {
            key: 'payMethod',
            label: '결제수단',
            sortable: true
        },
        {
            key: 'amount',
            label: '주문금액',
            sortable: true
        },
        {
            key: 'orderState',
            label: '주문상태',
            sortable: true
        }
    ],
    goodsList: [], //상품 목록
    employeeList: [], //직원 목록
    employee: {}, //직원 상세보기
    clientList: [], //거래처 목록 
    clientName: [], //거래처 이름 목록
    client: {},
    salesmanList: [],
    delivererList: [],
    deliverer: {},
    item: { //상품 정보 바인딩용 상태
        itemName: '',
        itemQTY: 0,
        manufacturer: '',
        origin: '',
        spec: '',
        unit: '',
        price1: 0,
        price2: 0,
        price3: 0,
        purchasePrice: 0,
        firstcategory_id: 1,
        secondcategory_id: 2,
        thirdcategory_id: 3,
        bName: '',
        memo: '',
        tbCustomer_ID: '',
        itemImage: "",
    },
    fCategory: [], //1차 카테고리
    sCategory: [], //2차 카테고리
    purchaseItem: {// 발주 아이템
        tbProvider_ID: "",
        remark: "",
        dday: "",
        state: "",
        bname: "",
        pmPurchaseItemVOs: []
    },
    pmPurchaseItemVO: {
        purchaseDate: "",
        tbItem_ID: "",
        tbProvider_ID: "",
        price: 0,
        qty: 0,
        amount: 0,
        state: "",
        memo: "",
        remark1: "",
        remark2: "비고2"
    },
    purchaseList: [], //발주 목록
    purchase: {}, //발주 상세보기 필드
    purchaseField: [
        {
            key: 'id',
            label: "매입처 코드",
            sortable: true
        },
        {
            key: 'bname',
            label: "매입처",
            sortable: true
        },
        {
            key: 'dday',
            label: "발주일시",
            sortable: true
        },
        {
            key: 'state',
            label: "발주 상태",
            sortable: true
        },
    ],
    purchaseItemFields: [ //발주 상세보기 아이템 필드
        {
            key: 'tbItemID',
            label: "상품ID",
            sortable: true
        },
        {
            key: 'tbItemItemName',
            label: "상품명",
            sortable: true
        },
        {
            key: 'tbItemSpec',
            label: "규격",
            sortable: true
        },
        {
            key: 'tbItemUnit',
            label: "단위",
            sortable: true
        },
        {
            key: 'tbItemItemQTY',
            label: "수량",
            sortable: true
        },
        {
            key: 'tbItemManufacturer',
            label: "제조사",
            sortable: true
        },
        {
            key: 'tbItemPurchasePrice',
            label: "매입단가",
            sortable: true
        },
        {
            key: 'state',
            label: "배송단가",
            sortable: true
        },
        {
            key: 'tbItemPrice1',
            label: "소비자 가격",
            sortable: true
        },
        {
            key: 'tbItemPrice2',
            label: "예비 가격",
            sortable: true
        },
        {
            key: 'tbItemPrice3',
            label: "합계 금액",
            sortable: true
        },
    ],
    providerField: [  //매입처 테이블 필드
        {
            key: 'id',
            label: "매입처 코드",
            sortable: true
        },
        {
            key: 'bname',
            label: "매입처명",
            sortable: true
        },
        {
            key: 'count',
            label: "상품수",
            sortable: true
        },
    ],
    providerList: [], //매입처 목록
    provider: {}, //매입처 상세보기 필드
    provderItem: { //매입처 입력
        bname: "",
        bnumber: "",
        bsector: "",
        manager: "",
        tel: "",
        fax: "",
        email: "",
        mobile: "",
        postNo: "",
        address1: "",
        address2: "",
        address3: "",
        memo: "",
        remark1: "",
        remark2: "",
        pmProviderItemVOs: []
    },
    goods: {}, //상품 상세보기
    clientFields: [ //거래처 테이블 필드
        {
            key: 'id',
            label: "거래처코드",
            sortable: true
        },
        {
            key: 'bname',
            label: "거래처명",
            sortable: true
        },
        {
            key: 'regDate',
            label: "등록일",
            sortable: true
        },
        {
            key: 'priceRate',
            label: "총매출액",
            sortable: true
        },
    ],
    goodsFields: [ //상품 테이블 필드
        {
            key: 'id',
            label: "상품코드",
            sortable: true
        },
        {
            key: 'itemName',
            label: '상품명',
            sortable: true
        },
        {
            key: 'unit',
            label: '규격(단위)',
            sortable: true
        },
        {
            key: 'origin',
            label: '제조사(원산지)',
            sortable: true
        },
        {
            key: 'price1',
            label: '배송단가',
            sortable: true
        },
        {
            key: 'price2',
            label: '소비자가격',
            sortable: true
        },
        {
            key: 'purchasePrice',
            label: '예비가격',
            sortable: true
        },
        {
            key: 'itemQTY',
            label: '재고량',
            sortable: true
        },
        {
            key: 'state',
            label: '판매상태',
            sortable: true
        }
    ],
    itemVOs: [],
    delivererFileds: [
        {
            key: 'id',
            label: 'ID',
            sortable: true
        },
        {
            key: 'userID',
            label: '사용자ID',
            sortable: true
        },
        {
            key: 'manager',
            label: '이름',
            sortable: true
        },
        {
            key: 'bname',
            label: '담당 거래처',
            sortable: true
        },
        {
            key: 'regDate',
            label: '등록일',
            sortable: true
        },

    ],
    clientItem: {
        bname: "",
        bnumber: "",
        chief: "",
        manager: "",
        mobile: "",
        fax: "",
        email: "",
        priceRate: 0,
        bSector: "",
        userID: "",
        userPW: "",
        tel: "",
        postNo: "",
        address1: "",
        address2: "",
        address3: "",
        priceRate: "",
        tbDeliverer_ID: "",
        salesman_ID: ""
    },
    clientItemList: [],
    clientItemFiled: [
        {
            key: 'tbItemID',
            label: 'ID',
            sortable: true
        },
        {
            key: 'tbItemItemName',
            label: '상품명',
            sortable: true
        },
        {
            key: 'tbItemPrice1',
            label: '가격',
            sortable: true
        },
        {
            key: 'tbItemState',
            label: '판매상태',
            sortable: true
        },
    ],
    employeeFiled: [
        {
            key: 'id',
            label: 'ID',
            sortable: true
        },
        {
            key: 'name',
            label: '이름',
            sortable: true
        },
        {
            key: 'role',
            label: '구분',
            sortable: true
        }
    ],
    employeeItem: {
        id: "",
        userPW: "",
        name: "",
        role: "",
        itemAccess: "",
        customerAccess: "",
        providerAccess: "",
        delivererAcces: "",
        orderAccess: "",
        purchaseAccess: "",
        noticeAccess: "",
        paymentAccess: "",
        remark1: "",
        remark2: "",
        remark3: "",
        remark4: "",
        remark5: "",
        memo: ""
    },
    orderItem: {
        address1: "",
        address2: "",
        address3: "",
        amount: 0,
        id: "",
        itemCount: 0,
        memo: "",
        orderDate: 0,
        orderState: "",
        payMethod: "",
        payment: 0,
        pmOrderItamVOs: [],
        pmOrderItemJoinItemVOs: [],
        points: 0,
        remark1: "",
        remark2: "",
        reqDate: 0,
        requests: "",
        salesPersonID: "",
        tbCustomer_ID: "",
        tbDeliverer_ID: "",
        updateDate: 0,
    },
    delivererItem: {
        userID: "",
        userPW: "",
        bname: "",
        bnumber: "",
        bsector: "",
        chief: "",
        manager: "",
        tel: "",
        fax: "",
        email: "",
        mobile: "",
        postNo: "",
        address1: "",
        address2: "",
        address3: "",
        memo: "",
        remark1: "",
        remark2: "",
        salesman_id: ""
    },
    orderItemFiled: [
        {
            key: "tbItemID",
            label: "ID",
            sortable: true
        },
        {
            key: "tbItemItemName",
            label: "상품명",
            sortable: true
        },
        {
            key: "tbItemItemQTY",
            label: "수량",
            sortable: true
        },
        {
            key: "tbItemPrice1",
            label: "가격",
            sortable: true
        },
        {
            key: "tbItemState",
            label: "상태",
            sortable: true
        },
    ],
}
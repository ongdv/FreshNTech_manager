export default {
    //Common
    LOGIN: "login",
    LOGOUT: "logout",
    CHANGE_PAGE: "changePage", // 페이지 전환
    FETCH_READY: "fetchReady", // 직원, 거래처 목록 불러오기
    
    //Providers
    FETCH_PROVIDER: "fetchProvider", //매입처 목록 불러오기
    FETCH_PROVIDER_DETAIL: "fetchProviderDetail", //매입처 상세보기
    INSERT_PROVIDER: "insertProvider", //매입처 등록
    UPDATE_PROVIDER: "updateProvider", //매입처 수정
    DELETE_PROVIDER: "deleteProvider", //매입처 삭제

    //Purchase
    FETCH_PURCHASE: "fetchPurchase", //매입처 목록 불러오기
    FETCH_PURCHASE_SEARCH: "fetchPurchaseSearch", //매입처 검색
    FETCH_PURCHASE_DETAIL: "fetchPurchaseDetail", //매입처 상세보기
    INSERT_PURCHASE: "insertPurchase", //매입처 등록
    UPDATE_PURCHASE: "updatePurchase", //매입처 수정
    DELETE_PURCHASE: "deletePurchase", //매입처 삭제

    //Goods
    FETCH_GOODS: "fetchGoods", // 물품 전체 목록
    FETCH_GOODS_SEARCH: "fetchGoodsSearch", //물품 검색 목록
    FETCH_GOODS_DETAIL: "fetchGoodsDetail", //물품 상세 정보
    FILTER_GOODS: "filterGoods", // 물품 정보 필터링
    INSERT_GOODS: "insertGoods", // 물품 등록
    UPDATE_GOODS: "updateGoods", // 물품 수정
    DELETE_GOODS: "deleteGoods", // 물품 삭제

    //Order
    FETCH_ORDER: "fetchData", // 주문 전체 목록
    FETCH_ORDER_SEARCH: "fetchDataSearch", //주문 검색 목록
    FETCH_ORDER_DETAIL: "fetchDataDetail",
    INSERT_ORDER: "insertOrder", //주문 등록
    UPDATE_ORDER: "updateOrder", // 주문 수정
    DELETE_ORDER: "deleteOrder", // 주문 삭제

    //Category
    FETCH_CATEGORY: "fetchCategory", //카테고리 목록
    INSERT_CATEGORY: "insertCategory", //카테고리 등록
    UPDATE_CATEGORY: "updateCategory", //카테고리 수정
    DELETE_CATEGORY: "deleteCategory", //카테고리 삭제

    //Client
    FETCH_CLIENT: "fetchClient", //거래처 목록
    FETCH_CLIENT_SEARCH: "fetchClientSearch", //거래처 검색 목록
    FETCH_CLIENT_DETAIL: "fetchClientDetail", //거래처 상세 정보
    INSERT_CLIENT: "insertClient", //거래처 등록
    UPDATE_CLIENT: "updateClient", //거래처 수정
    DELETE_CLIENT: "deleteClient", //거래처 삭제

    //Deliverer
    FETCH_DELIVERER: "fetchDeliverer", //배송자 목록
    FETCH_DELIVERER_SEARCH: "fetchDelivererSearch", //배송자 검색 목록
    FETCH_DELIVERER_DETAIL: "fetchDelivererDetail", //매송자 상세 정보
    INSERT_DELIVERER: "insertDeliverer", //배송자 등록
    UPDATE_DELIVERER: "updateDeliverer", //배송자 수정
    DELETE_DELIVERER: "deleteDeliverer", //배송자 삭제
}
export default {
    //Common
    LOGIN: "login",
    LOGOUT: "logout",
    CHANGE_PAGE: "changePage", // 페이지 전환
    FETCH_READY: "fetchReady", // 직원, 거래처 목록 불러오기
    FETCH_PURCHASE: "fetchPurchase", //매입처 목록 불러오기

    //Goods
    FETCH_GOODS: "fetchGoods", // 물품 전체 목록
    FETCH_GOODS_SEARCH: "fetchGoodsSearch", //물품 검색 목록
    FETCH_GOODS_DETAIL: "fetchGoodsDetail", //물품 상세 정보
    INSERT_GOODS: "insertGoods", // 물품 등록
    UPDATE_GOODS: "updateGoods", // 물품 수정
    DELETE_GOODS: "deleteGoods", // 물품 삭제

    //Order
    FETCH_ORDER: "fetchData", // 주문 전체 목록
    FETCH_ORDER_SEARCH: "fetchDataSearch", //주문 검색 목록
    INSERT_ORDER: "insertOrder", //주문 등록
    UPDATE_ORDER: "updateOrder", // 주문 수정
    DELETE_ORDER: "deleteOrder", // 주문 삭제

    //Category
    FETCH_CATEGORY: "fetchCategory", //카테고리 목록
    INSERT_CATEGORY: "insertCategory", //카테고리 등록
    UPDATE_CATEGORY: "updateCategory", //카테고리 수정
    DELETE_CATEGORY: "deleteCategory" //카테고리 삭제
}
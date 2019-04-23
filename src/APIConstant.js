var BASE_URL = "http://freshntech.cafe24.com/";

export default {
    //Common
    LOGIN: BASE_URL+"pm/login", //auth => post

    //Category
    FETCH_DATA_CATEGORY: BASE_URL+"category", //getCategory => get
    INSERT_DATA_CATEGORY: BASE_URL+"cateory", //insertCategory => post
    UPDATE_DATA_CATEGORY: BASE_URL+"category", //updateCategory => put
    DELETE_DATA_CATEGORY: BASE_URL+"category", //deleteCategory => delete

    //Client
    FETCH_DATA_CLIENT: BASE_URL+"customer", //getClient => get
    FETCH_DATA_CLIENT_DETAIL: BASE_URL+"customer/detail/${id}", //getClientDetail => get
    INSERT_DATA_CLIENT: BASE_URL+"customer", //insertClient => post
    UPDATE_DATA_CLIENT: BASE_URL+"customer",//updateClient => put
    DELETE_DATA_CLIENT: BASE_URL+"customer/${id}", //deleteClient => delete

    //Purchase
    FETCH_DATA_PURCHASE: BASE_URL+"purchase", // getPurchase => get
    FETCH_DATA_PURCHASE_DETAIL: BASE_URL+"purchase/detail/${id}", //getPurchaseDetail => get
    FETCH_DATA_PURCHASE_BY_ID: BASE_URL+"purchase/search", //getPurchaseById => post
    FETCH_DATA_PURCHASE_BY_NAME: BASE_URL+"purchase/search", //getPurchaseByName => post
    UPDATE_DATA_PURCHASE: BASE_URL+"",

    //Emplyoee
    FETCH_DATA_EMPLOYEE: BASE_URL+"member", //getEmployee => get
    FETCH_DATA_EMPLOYEE_DETAIL: BASE_URL+"member/${id}", //getEmployeeDetail => get
    UPDATE_DATA_EMPLOYEE: BASE_URL+"member", //updateEmployee => put
    DELETE_DATA_EMPLOYEE: BASE_URL+"member/${id}", //deleteEmployee => delete

    //Goods
    FETCH_DATA_GOODS: BASE_URL+"item/customersearch?keyword=", //getGoodsList => get
    FETCH_DATA_GOODS_SEARCH: BASE_URL+"item/customersearch?keyword=${id}", //searchGoods =>post?
    FETCH_DATA_GOODS_DETAIL: BASE_URL+"item/detail/${id}", //getGoods => get
    INSERT_DATA_GOODS: BASE_URL+"item", //insertGoods => post
    UPDATE_DATA_GOODS: BASE_URL+"item/update", //updateGoods => post
    DELETE_DATA_GOODS: BASE_URL+"item/${id}", //deleteGoods => delete

    //Order
    FETCH_DATA_ORDER: BASE_URL+"order", //getOrder =>get
    FETCH_DATA_ORDER_DETAIL: BASE_URL+"order/detail/${id}", //getOrderDetail => get
    FETCH_DATA_ORDER_SEARCH: BASE_URL+"order/search", //searchOrder => post
    FERCH_DATA_ORDER_READY: BASE_URL+"order/setinsert", //setInsert => get
}
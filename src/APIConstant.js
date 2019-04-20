var BASE_URL = "http://freshntech.cafe24.com/";

export default {
    //Common
    LOGIN: BASE_URL+"pm/login", //auth => post
    FETCH_DATA_CATEGORY: BASE_URL+"category", //getCategory => get
    FETCH_DATA_PURCHASE: BASE_URL+"purchase",

    //Order
    FETCH_DATA_ORDER: BASE_URL+"order", //getOrder =>get
    FETCH_DATA_ORDER_DETAIL: BASE_URL+"order/detail/${id}", //getOrderDetail => get
    FETCH_DATA_ORDER_SEARCH: BASE_URL+"order/search", //searchOrder => post
    FERCH_DATA_ORDER_READY: BASE_URL+"order/setinsert", //setInsert => get

    //Goods
    FETCH_DATA_GOODS: BASE_URL+"item/customersearch?keyword=", //getGoodsList => get
    FETCH_DATA_GOODS_SEARCH: BASE_URL+"item/customersearch?keyword=${id}", //searchGoods =>post?
    FETCH_DATA_GOODS_DETAIL: BASE_URL+"item/detail/${id}", //getGoods => get
    INSERT_DATA_GOODS: BASE_URL+"item", //insertGoods => post
    UPDATE_DATA_GOODS: BASE_URL+"item/update", //updateGoods => post
    DELETE_DATA_GOODS: BASE_URL+"item/${id}" //deleteGoods => delete
}
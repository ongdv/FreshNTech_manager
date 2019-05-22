var BASE_URL = "http://freshntech.cafe24.com/";

export default {
    //Common
    LOGIN: BASE_URL+"pm/login", //auth => post

    //Category
    FETCH_DATA_CATEGORY: BASE_URL+"categories", //getCategory => get
    INSERT_DATA_CATEGORY: BASE_URL+"cateories", //insertCategory => post
    UPDATE_DATA_CATEGORY: BASE_URL+"categories", //updateCategory => put
    DELETE_DATA_CATEGORY: BASE_URL+"categories", //deleteCategory => delete

    //Client
    FETCH_DATA_CLIENT: BASE_URL+"customers", //getClient => get
    FETCH_DATA_CLIENT_DETAIL: BASE_URL+"customers/${id}", //getClientDetail => get
    INSERT_DATA_CLIENT: BASE_URL+"customers", //insertClient => post
    UPDATE_DATA_CLIENT: BASE_URL+"customers/${id}",//updateClient => put
    DELETE_DATA_CLIENT: BASE_URL+"customers/${id}", //deleteClient => delete
    //ClientItem
    FETCH_DATA_CLIENT_ITEM: BASE_URL+"pmCustomerItems/${id}",
    INSERT_DATA_CLIENT_ITEM: BASE_URL+"pmCustomerItems",
    UPDATE_DATA_CLIENT_ITEM: BASE_URL+"pmCustomerItems/${id}",
    DELETE_DATA_CLIENT_ITEM: BASE_URL+"pmCustomerItems/${id}",

    //Deliverer
    FETCH_DATA_DELIVERER: BASE_URL+"deliverers", //getDeliverer => get
    FETCH_DATA_DELIVERER_DETAIL: BASE_URL+"deliverers/${id}", //getDelivererDetail => get
    INSERT_DATA_DELIVERER: BASE_URL+"deliverers", //insertDeliverer => post 
    UPDATE_DATA_DELIVERER: BASE_URL+"deliverers/${id}", //updateDeliverer => put
    DELETE_DATA_DELIVERER: BASE_URL+"deliverers/${id}", //deleteDeliverer => delete

    //Provider
    FETCH_DATA_PROVIDER: BASE_URL+"providers", //getProvider => get
    FETCH_DATA_PROVIDER_DETAIL: BASE_URL+"providers/${id}", //getProviderDetail => get
    INSERT_DATA_PROVIDER: BASE_URL+"providers", //insertProvider => post
    UPDATE_DATA_PROVIDER: BASE_URL+"providers/${id}", //updateProvider => put
    DELETE_DATA_PROVIDER: BASE_URL+"providers/${id}", //deleteProvider => delete

    //Purchase
    FETCH_DATA_PURCHASE: BASE_URL+"purchases", // getPurchase => get
    FETCH_DATA_PURCHASE_DETAIL: BASE_URL+"purchases/${id}", //getPurchaseDetail => get
    FETCH_DATA_PURCHASE_BY_ID: BASE_URL+"purchases/search", //getPurchaseById => post
    FETCH_DATA_PURCHASE_BY_NAME: BASE_URL+"purchases/search", //getPurchaseByName => post
    INSERT_DATA_PURCHASE: BASE_URL+"purchase", //insertPurchase => post
    UPDATE_DATA_PURCHASE: BASE_URL+"purchase", //updatePurchase => put
    DELETE_DATA_PURCHASE: BASE_URL+"purchase/${id}", //deletePurchase => delete

    //Emplyoee
    FETCH_DATA_EMPLOYEE: BASE_URL+"members", //getEmployee => get
    FETCH_DATA_EMPLOYEE_SEARCH: BASE_URL+"members", //searchEmployee => get
    FETCH_DATA_EMPLOYEE_DETAIL: BASE_URL+"members/${id}", //getEmployeeDetail => get
    INSERT_DATA_EMPLOYEE: BASE_URL+"members", //insertEmployee => post
    UPDATE_DATA_EMPLOYEE: BASE_URL+"members/${id}", //updateEmployee => put
    DELETE_DATA_EMPLOYEE: BASE_URL+"members/${id}", //deleteEmployee => delete

    //Goods
    FETCH_DATA_GOODS: BASE_URL+"items", //getGoodsList => get
    FETCH_DATA_GOODS_DETAIL: BASE_URL+"items/${id}", //getGoods => get
    INSERT_DATA_GOODS: BASE_URL+"items", //insertGoods => post
    UPDATE_DATA_GOODS: BASE_URL+"items/${id}", //updateGoods => post
    DELETE_DATA_GOODS: BASE_URL+"items/${id}", //deleteGoods => delete

    //Order
    FETCH_DATA_ORDER: BASE_URL+"orders", //getOrder =>get
    FETCH_DATA_ORDER_DETAIL: BASE_URL+"orders/${id}", //getOrderDetail => get
    FETCH_DATA_ORDER_SEARCH: BASE_URL+"orders/search", //searchOrder => post,
    INSERT_DATA_ORDER: BASE_URL+"orders",
    UPDATE_DATA_ORDER: BASE_URL+"orders/${id}"
}
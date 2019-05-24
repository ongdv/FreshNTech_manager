import Constant from '../Constant';
import APIConstant from '../APIConstant';
import axios from 'axios';

export default {
    //common start
    // getSession
    // id, pw
    [Constant.LOGIN]: (store, payload) => {
        var formData = {
            id: "admin",
            username: "관리자"
        }
        store.commit(Constant.LOGIN, formData);
    },

    //common end

    //Employee start
    //getEmployee
    [Constant.FETCH_EMPLOYEE]: (store) => {
        console.log(Constant.FETCH_EMPLOYEE);
        axios.get(APIConstant.FETCH_DATA_EMPLOYEE)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_EMPLOYEE, res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    //getEmployeeDetail
    [Constant.FETCH_EMPLOYEE_DETAIL]: (store, payload) => {
        console.log(Constant.FETCH_EMPLOYEE_DETAIL);
        axios.get(APIConstant.FETCH_DATA_EMPLOYEE_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_EMPLOYEE_DETAIL, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //insertEmployee
    [Constant.INSERT_EMPLOYEE]: (store, payload) => {
        console.log(Constant.INSERT_EMPLOYEE);
        axios.post(APIConstant.INSERT_DATA_EMPLOYEE, payload)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.CHANGE_PAGE, {component:"Employee"});
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //updateEmployee
    [Constant.UPDATE_EMPLOYEE]: (store, payload) => {
        console.log(Constant.UPDATE_EMPLOYEE);
        axios.put(APIConstant.UPDATE_DATA_EMPLOYEE.replace("${id}", payload.id), payload)
        .then(res=>{
            console.log(res.data);
            store.dispatch(Constant.FETCH_EMPLOYEE_DETAIL, payload.id);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //deleteEmployee
    [Constant.DELETE_EMPLOYEE]: (store, payload) => {
        console.log(Constant.DELETE_EMPLOYEE);
        axios.delete(APIConstant.DELETE_DATA_EMPLOYEE.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.CHANGE_PAGE, {component: "Employee"});
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //Employee end

    //Client start
    // getClient
    [Constant.FETCH_CLIENT]: (store, payload) => {
        console.log(Constant.FETCH_CLIENT);
        axios.get(APIConstant.FETCH_DATA_CLIENT.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_CLIENT, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //getClientDetail
    [Constant.FETCH_CLIENT_DETAIL]: (store, payload) => {
        console.log(Constant.FETCH_CLIENT_DETAIL);
        axios.get(APIConstant.FETCH_DATA_CLIENT_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_CLIENT_DETAIL, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //deleteClient
    [Constant.DELETE_CLIENT]: (store, payload) => {
        console.log(Constant.DELETE_CLIENT);
        axios.delete(APIConstant.DELETE_DATA_CLIENT.replace("${id}", payload))
        .then(res=>{
            store.commit(Constant.DELETE_CLIENT);
            store.commit(Constant.FETCH_CLIENT);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //insertClient
    [Constant.INSERT_CLIENT]: (store, payload) => {
        console.log(Constant.INSERT_CLIENT);
        axios.post(APIConstant.INSERT_DATA_CLIENT, payload)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_CLIENT);
            store.commit(Constant.FETCH_CLIENT_SEARCH, payload.bName);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //updateClient
    [Constant.UPDATE_CLIENT]: (store, payload) => {
        console.log(Constant.UPDATE_CLIENT);
        axios.put(APIConstant.UPDATE_DATA_CLIENT.replace("${id}", payload.id), payload)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.UPDATE_CLIENT);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    [Constant.FETCH_CLIENT_ITEM]: (store, payload) => {
        console.log(payload);
        axios.get(APIConstant.FETCH_DATA_CLIENT_ITEM.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_CLIENT_ITEM, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    [Constant.INSERT_CLIENT_ITEM]: (store, payload) => {
        console.log(Constant.INSERT_CLIENT_ITEM);
        console.log(payload);
        axios.post(APIConstant.INSERT_DATA_CLIENT_ITEM, payload)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.CHANGE_PAGE, {component: "Client"})
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    [Constant.DELETE_CLIENT_ITEM]: (store, payload) => {
        console.log(Constant.DELETE_CLIENT_ITEM);
        axios.delete(APIConstant.DELETE_DATA_CLIENT_ITEM.replace("${id}", payload.tbCustomerItemID))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.CHANGE_PAGE, {component: "Client"})
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    [Constant.UPDATE_CLIENT_ITEM]: (store, payload) => {
        console.log(Constant.UPDATE_CLIENT_ITEM);
        axios.put(APIConstant.UPDATE_CLIENT_ITEM.replace("${id}", payload.id), payload)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //Client end

    //Deliverer start
    //getDeliverer
    [Constant.FETCH_DELIVERER]: (store) => {
        console.log(Constant.FETCH_DELIVERER);
        axios.get(APIConstant.FETCH_DATA_DELIVERER)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_DELIVERER, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //getDelivererDetail
    [Constant.FETCH_DELIVERER_DETAIL]: (store, payload) => {
        console.log(Constant.FETCH_DELIVERER_DETAIL);
        axios.get(APIConstant.FETCH_DATA_DELIVERER_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_DELIVERER_DETAIL, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //insertDeliverer
    [Constant.INSERT_DELIVERER]: (store, payload) => {
        console.log(Constant.INSERT_DELIVERER);
        axios.post(APIConstant.INSERT_DATA_DELIVERER, payload)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //updateDeliverer
    [Constant.UPDATE_DELIVERER]: (store, payload) => {
        console.log(Constant.UPDATE_DELIVERER);
        axios.put(APIConstant.UPDATE_DATA_DELIVERER.replace("${id}", payload.id), payload)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.CHANGE_PAGE, {component: "Deliverer"});
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })

    },

    //deleteDeliverer
    [Constant.DELETE_DELIVERER]: (store, payload) => {
        console.log(Constant.DELETE_DELIVERER);
        console.log(payload);
        axios.delete(APIConstant.DELETE_DATA_DELIVERER.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.CHANGE_PAGE, {component: "Deliverer"});
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //Deliverer end

    //category start
    //getCategory
    [Constant.FETCH_CATEGORY]: (store) => {
        console.log(Constant.FETCH_CATEGORY);
        axios.get(APIConstant.FETCH_DATA_CATEGORY)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_CATEGORY, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //updateCategory
    [Constant.UPDATE_CATEGORY]: (store, payload) => {
        console.log(Constant.UPDATE_CATEGORY);
        store.commit(Constant.ERROR, "Not Implement");
    },
    //deleteCategory
    [Constant.DELETE_CATEGORY]: (store, payload) => {
        console.log(Constant.DELETE_CATEGORY);
        store.commit(Constant.ERROR, "Not Implement");
        console.log("Not implement");
    },
    //category end

    //provider start
    //getProvider
    [Constant.FETCH_PROVIDER]: (store) => {
        console.log(Constant.FETCH_PROVIDER);
        axios.get(APIConstant.FETCH_DATA_PROVIDER)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_PROVIDER, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //getProviderDetail
    [Constant.FETCH_PROVIDER_DETAIL]: (store, payload) => {
        console.log(Constant.FETCH_PROVIDER_DETAIL);
        axios.get(APIConstant.FETCH_DATA_PROVIDER_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_PROVIDER_DETAIL, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //insertProvider
    [Constant.INSERT_PROVIDER]: (store, payload) => {
        console.log(Constant.INSERT_PROVIDER);
        axios.post(APIConstant.INSERT_DATA_PROVIDER, payload)
        .then(res=>{
            store.dispatch(Constant.FETCH_PROVIDER);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //updateProvider
    [Constant.UPDATE_PROVIDER]: (store, payload) => {
        console.log(Constant.UPDATE_PROVIDER);
        axios.put(APIConstant.UPDATE_DATA_PROVIDER.replace("${id}", payload.id), payload)
        .then(res=>{
            console.log(res.data);
            store.dispatch(Constant.FETCH_PROVIDER_DETAIL, payload.id);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },

    //deleteProvider
    [Constant.DELETE_PROVIDER]: (store, payload) => {
        console.log(Constant.DELETE_PROVIDER);
        axios.delete(APIConstant.DELETE_DATA_PROVIDER.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.CHANGE_PAGE, {component: "Provider"})
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //provider end

    //goods start
    //getGoods
    [Constant.FETCH_GOODS]: (store) => {
        console.log(Constant.FETCH_GOODS);
        axios.get(APIConstant.FETCH_DATA_GOODS)
        .then(res=>{
            // console.log(res.data);
            store.commit(Constant.FETCH_GOODS, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    // searchGoods
    [Constant.FETCH_GOODS_SEARCH]: (store, payload) => {
        console.log(Constant.FETCH_GOODS_SEARCH);
        // var option = {state: payload.state.selected, first: payload.fCategory.selected, second: payload.sCategory.selected, }
        console.log(payload);
        axios.get(APIConstant.FETCH_DATA_GOODS_SEARCH.replace("${id}", payload))
        .then(res=>{
            store.commit(Constant.FETCH_GOODS_SEARCH, {goods: res.data});
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    // insertGoods
    [Constant.INSERT_GOODS]: (store, payload) => {
        console.log(Constant.INSERT_GOODS);
        console.log(payload);
        axios.post(APIConstant.INSERT_DATA_GOODS, payload.item)
        .then(()=>{
            store.dispatch(Constant.FETCH_GOODS_SEARCH, payload.item.itemName);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    // getGoodsDetail
    [Constant.FETCH_GOODS_DETAIL]: (store, payload) => {
        console.log(Constant.FETCH_GOODS_DETAIL);
        axios.get(APIConstant.FETCH_DATA_GOODS_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_GOODS_DETAIL, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    // updateGoods
    [Constant.UPDATE_GOODS]: (store, payload) => {
        console.log(Constant.UPDATE_GOODS);
        axios.post(APIConstant.UPDATE_DATA_GOODS.replace("${id}", payload.id), payload)
        .then(res=>{
            store.commit(Constant.FETCH_GOODS_SEARCH, {id: payload.id});
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
        
    },
    // deleteGoods
    [Constant.DELETE_GOODS]: (store, payload) => {
        console.log(Constant.DELETE_GOODS);
        axios.delete(APIConstant.DELETE_DATA_GOODS.replace("${id}", payload.id), payload)
        .then(res=>{
            console.log(res);
            store.commit(Constant.DELETE_GOODS, res.data);
            store.commit(Constant.FETCH_GOODS);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
        // store.commit(Constant.FETCH_GOODS_SEARCH, {id: payload.id});
    },
    //goods end

    //order start
    // getOrder
    [Constant.FETCH_ORDER]: (store, payload) => {
        console.log(Constant.FETCH_ORDER);
        axios.get(APIConstant.FETCH_DATA_ORDER)
        .then(res=> {
            console.log(res.data);
            store.commit(Constant.FETCH_ORDER, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    [Constant.FETCH_ORDER_DETAIL]: (store, payload) => {
        console.log(Constant.FETCH_ORDER_DETAIL);
        axios.get(APIConstant.FETCH_DATA_ORDER_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_ORDER_DETAIL, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    // insertOrder
    [Constant.INSERT_ORDER]: (store, payload) => {
        console.log(Constant.INSERT_ORDER);
        var formData = payload;
        console.log(formData);
        axios.post(APIConstant.INSERT_DATA_GOODS, formData)
        .then(res=> {
            console.log(res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    // updateOrder
    [Constant.UPDATE_ORDER]: (store, payload) => {
        console.log(Constant.UPDATE_ORDER);
        store.commit(Constant.ERROR, "Not Implement");
    },
    // deleteOrder
    [Constant.DELETE_ORDER]: (store, payload) => {
        store.commit(Constant.ERROR, "Not Implement");
    },
    //Order end

    //Purchase start
    //getPurchase
    [Constant.FETCH_PURCHASE]: (store) => {
        console.log(Constant.FETCH_PURCHASE);
        axios.get(APIConstant.FETCH_DATA_PURCHASE)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_PURCHASE, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //getPurchaseDetail
    [Constant.FETCH_PURCHASE_DETAIL]: (store, payload) => {
        console.log(Constant.FETCH_PURCHASE_DETAIL);
        axios.get(APIConstant.FETCH_DATA_PURCHASE_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_PURCHASE_DETAIL, res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //searchPurchase
    [Constant.FETCH_PURCHASE_SEARCH]: (store, payload) => {
        console.log(Constant.FETCH_PURCHASE_SEARCH);
        switch (payload.condition) {
            case "id":
                axios.get(APIConstant.FETCH_DATA_PURCHASE_BY_ID)
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    store.commit(Constant.ERROR, err);
                })
                break;
            case "name":
                axios.get(APIConstant.FETCH_DATA_PURCHASE_BY_NAME)
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    store.commit(Constant.ERROR, err);
                })
                break;
        }
    },
    //insertPurchase
    [Constant.INSERT_PURCHASE]: (store, payload) => {
        console.log(Constant.INSERT_PURCHASE);
        axios.post(APIConstant.INSERT_DATA_PURCHASE)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //updatePurchase
    [Constant.UPDATE_PURCHASE]: (store, payload) => {
        console.log(Constant.UPDATE_PURCHASE);
        axios.put(APIConstant.UPDATE_DATA_PURCHASE)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    },
    //deletePurchase
    [Constant.DELETE_PURCHASE]: (store, payload) => {
        console.log(Constant.DELETE_PURCHASE);
        axios.delete(APIConstant.DELETE_DATA_PURCHASE.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            store.commit(Constant.ERROR, err);
        })
    }
    //Purchase end
}
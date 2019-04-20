import Constant from '../Constant';
import APIConstant from '../APIConstant';
import axios from 'axios';

export default {
    // getSession
    // id, pw
    [Constant.LOGIN]: (store, payload) => {
        var formData = {
            id: "admin",
            username: "관리자"
        }
        store.commit(Constant.LOGIN, formData);
        // axios.post(APIConstant.LOGIN, payload.form)
        // .then(res=>{
        //     console.log(res.data);
        //     // store.commit(Constant.LOGIN, {user: res.data});
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    },
    // getEmployee, getClient
    [Constant.FETCH_READY]: (store) => {
        axios.get(APIConstant.FERCH_DATA_ORDER_READY)
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_READY, res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },

    //getPurchase
    [Constant.FETCH_PURCHASE]: (store) => {
        axios.get(APIConstant.FETCH_DATA_PURCHASE)
        .then(res=>{
            // console.log(res.data);
            store.commit(Constant.FETCH_PURCHASE, res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    //getCategory
    [Constant.FETCH_CATEGORY]: (store) => {
        axios.get(APIConstant.FETCH_DATA_CATEGORY)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },

    // getGoods
    [Constant.FETCH_GOODS]: (store) => {
        axios.get(APIConstant.FETCH_DATA_GOODS)
        .then(res=>{
            // console.log(res.data);
            store.commit(Constant.FETCH_GOODS, {goods: res.data});
        })
        .catch(err=>{
            console.log(err);
        })
    },
    // searchGoods
    [Constant.FETCH_GOODS_SEARCH]: (store, payload) => {
        // var option = {state: payload.state.selected, first: payload.fCategory.selected, second: payload.sCategory.selected, }
        axios.get(APIConstant.FETCH_DATA_GOODS_SEARCH.replace("${id}", payload))
        .then(res=>{
            store.commit(Constant.FETCH_GOODS_SEARCH, {goods: res.data});
        })
        .catch(err=>{
            console.log(err);
        })
    },
    // insertGoods
    [Constant.INSERT_GOODS]: (store, payload) => {
        console.log(payload);
        var formData = new FormData();
        for (const key in payload) {
                const element = payload[key];
                console.log(key+", "+element);
                formData.append(key.toString(), element);
        }
        console.log(formData);
        axios.post(APIConstant.INSERT_DATA_GOODS, formData)
        .then((res)=>{
            console.log(res.data);
            store.commit(Constant.FETCH_GOODS_SEARCH, payload.itemName);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    [Constant.FETCH_GOODS_DETAIL]: (store, payload) => {
        axios.get(APIConstant.FETCH_DATA_GOODS_DETAIL.replace("${id}", payload))
        .then(res=>{
            console.log(res.data);
            store.commit(Constant.FETCH_GOODS_DETAIL, res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    // updateGoods
    [Constant.UPDATE_GOODS]: (store, payload) => {
        console.log(payload);
        // store.commit(Constant.FETCH_GOODS_SEARCH, {id: payload.id});
    },
    // deleteGoods
    [Constant.DELETE_GOODS]: (store, payload) => {
        console.log(payload);
        axios.delete(APIConstant.DELETE_DATA_GOODS.replace("${id}", payload.id), payload)
        .then(res=>{
            console.log(res);
            store.commit(Constant.DELETE_GOODS, res.data);
            store.commit(Constant.FETCH_GOODS);
        })
        .catch(err=>{
            console.log(err);
        })
        // store.commit(Constant.FETCH_GOODS_SEARCH, {id: payload.id});
    },
    // getOrder
    [Constant.FETCH_ORDER]: (store, payload) => {
        axios.get(APIConstant.FETCH_DATA_ORDER)
        .then(res=> {
            console.log(res.data);
            store.commit(Constant.FETCH_ORDER, {orders: res.data[2]});
        })
        .catch(err=>{
            console.log(err);
        })
    },
    // insertOrder
    [Constant.INSERT_ORDER]: (store, payload) => {
        var formData = payload;
        console.log(formData);
        axios.post(APIConstant.INSERT_DATA_GOODS, formData)
        .then(res=> {
            
        })
    }
}
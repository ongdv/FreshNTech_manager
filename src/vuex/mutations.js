import Constant from '../Constant';
import { Store } from 'vuex';

export default {
    //Common start
    //setUser
    //로그인 후 페이지 전환
    [Constant.LOGIN]: (state, payload) => {
        console.log(payload);
        state.user = payload;
        state.currentView = "Layout";
    },

    //sessionOut
    //로그아웃 후 로그인 페이지 전환
    [Constant.LOGOUT]: (state) => {
        state.user = null;
        state.currentView = "Auth";
    },

    //직원, 거래처 목록 입력
    [Constant.FETCH_READY]: (state, payload) => {
        state.employee = payload[0];
        state.client = payload[1];
        payload[1].forEach(element => {
            state.clientName.push(element.bName);
        });
    },

    //setView(total)
    //App.vue에서 사용, 로그인과 레이아웃을 분리하기 위한 변이
    [Constant.CHANGE_PAGE]: (state, payload) => {
        console.log(payload);
        state.layoutView = payload.component;
    },

    //getPurchase
    //매입처 목록 불러오기
    [Constant.FETCH_PURCHASE]: (state, payload) => {
        console.log(payload);
        state.purchase = payload;
    },
    //Common end
    
    //Category start
    //getCategory
    //카테고리 불러오기
    [Constant.FETCH_CATEGORY]: (state, payload) => {
        state.fCategory = payload.first;
        state.sCategory = payload.second;
    },
    //Category end

    //Goods start
    //getGoodsList
    //물품 상태 변이
    [Constant.FETCH_GOODS]: (state, payload) => {
        console.log(payload);
        state.goodsList = payload.goods;
    },

    //getGoods
    //물품 검색 후 물품 상태 변이
    [Constant.FETCH_GOODS_SEARCH]: (state, payload) => {
        console.log(payload);
        state.goodsList = payload.goods;
    },

    //getGoodsDetail
    //물품리스트에서 선택시 물품 상세보기 페이지로 이동
    [Constant.FETCH_GOODS_DETAIL]: (state, payload) => {
        console.log(payload);
        state.goods = payload;
        state.layoutView = "GoodsDetail";
    },

    //deleteGoods
    //물품 삭제 후 상세보기에서 사용된 상태 초기화, 레이아웃 전환
    [Constant.DELETE_GOODS]: (state, payload) => {
        console.log(state.goods);
        state.goods = {};
        state.layoutView = "Goods"
    },
    //Goods end

    //Order start
    //getOrderList
    //주문 상태 변이
    [Constant.FETCH_ORDER]: (state, payload) => {
        console.log(payload);
        state.orderList = payload.orders;
    },
    
    //Order end
}
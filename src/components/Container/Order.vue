<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <h2>주문목록</h2>
            <hr />
            <table class="table border ">
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">기간</th>
                    <td class="w-75 align-middle">
                        <b-form-group style="padding:0;margin:0;">
                            <b-form-radio-group
                                id="btn-radios-2"
                                v-model="selected"
                                :options="options"
                                buttons
                                button-variant="outline-secondary"
                                size="ms"
                                name="radio-btn-outline"
                            >
                            </b-form-radio-group>
                            <!-- add DatePicker -->
                            <DatePicker />
                            <DatePicker />
                        </b-form-group>
                    </td>
                </tr>
                
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                        검색
                    </th>
                    <td>
                        <b-input-group>
                            <b-input-group-prepend>
                                <b-dropdown slot="prepend" text="선택" variant="secondary">
                                    <b-dropdown-item>거래처명</b-dropdown-item>
                                    <b-dropdown-item>주문번호</b-dropdown-item>
                                </b-dropdown>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="검색어를 입력해주세요."></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary">검색</b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <br />
                        <b-button v-b-toggle.collapse-1 variant="secondary">상세 검색</b-button>
                            <b-collapse id="collapse-1" class="mt-2">
                                <b-card>
                                    <p class="card-text">상세 옵션</p>
                                </b-card>
                        </b-collapse>
                    </td>
                </tr>
            </table>
            <hr>
            <b-form-group :label="rows+' 개의 검색결과'">
                <b-form-checkbox v-model="striped" inline>Striped</b-form-checkbox>
                <b-form-checkbox v-model="bordered" inline>Bordered</b-form-checkbox>
                <b-form-checkbox v-model="borderless" inline>Borderless</b-form-checkbox>
                <b-form-checkbox v-model="outlined" inline>Outlined</b-form-checkbox>
                <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>
                <b-form-checkbox v-model="hover" inline>Hover</b-form-checkbox>
                <b-form-checkbox v-model="dark" inline>Dark</b-form-checkbox>
                <b-form-checkbox v-model="fixed" inline>Fixed</b-form-checkbox>
                <b-form-checkbox v-model="footClone" inline>Foot Clone</b-form-checkbox>
            </b-form-group>
            <b-table
                id="order-table"
                hover
                fixed
                stripped
                :items="items"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                primary-key="No"
                class="text-center"
            />
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                align="center"
            />
        </div>
    </div>
</template>

<script>
    import {DatePicker} from '../Component/'
    export default {
        name: "Order",
        components: {
            DatePicker
        },
        data() {
            return {
                date: new Date().toISOString().substr(0, 10),
                menu: false,
                modal: false,
                menu2: false,
                selected: 'radio1',
                startDate: "2019-01-01",
                endDate: "2019-12-31",
                options: [
                    { text: '전체', value: 'radio1' },
                    { text: '전일', value: 'radio2' },
                    { text: '당일', value: 'radio3' },
                    { text: '전월', value: 'radio4' }
                ],
                currentPage: 1,
                perPage: 10,
                fields: [
                    {
                        key: 'No',
                        label: "No",
                        sortable:true
                    },
                    {
                        key: 'orderDate',
                        label: "주문일자",
                        sortable:true
                    },
                    {
                        key: 'orderCode',
                        label: '주문코드',
                        sortable:true
                    },
                    {
                        key: 'account',
                        label: '거래처',
                        sortable:true
                    },
                    {
                        key: 'deliverer',
                        label: '배송팀',
                        sortable:true
                    },
                    {
                        key: 'sales',
                        label: '영업팀',
                        sortable:true
                    },
                    {
                        key: 'totalQty',
                        label: '총 주문수량',
                        sortable:true
                    },
                    {
                        key: 'payment',
                        label: '결제수단',
                        sortable:true
                    },
                    {
                        key: 'orderTotal',
                        label: '주문금액',
                        sortable:true
                    },
                    {
                        key: 'orderState',
                        label: '주문상태',
                        sortable:true
                    }
                ],
                items: [
                        {
                            "No": 1,
                            "orderDate": "3/7/2019",
                            "orderCode": "#83736a",
                            "account": "Jabbertype",
                            "deliverer": "Zoombeat",
                            "sales": "Edgeify",
                            "totalQty": 1771,
                            "payment": "계좌이체",
                            "orderTotal": "$1046.88",
                            "orderState": "주문완료"
                        },
                        {
                    "No": 2,
                    "orderDate": "11/5/2018",
                    "orderCode": "#53dee8",
                    "account": "Skimia",
                    "deliverer": "Youbridge",
                    "sales": "Chatterbridge",
                    "totalQty": 2472,
                    "payment": "계좌이체",
                    "orderTotal": "$3606.76",
                    "orderState": "배송중"
                    }, {
                    "No": 3,
                    "orderDate": "12/8/2018",
                    "orderCode": "#7ca7d6",
                    "account": "Plambee",
                    "deliverer": "Gabcube",
                    "sales": "Mita",
                    "totalQty": 1781,
                    "payment": "신용카드",
                    "orderTotal": "$4887.40",
                    "orderState": "배송중"
                    }, {
                    "No": 4,
                    "orderDate": "12/14/2018",
                    "orderCode": "#9a9123",
                    "account": "Zooxo",
                    "deliverer": "Yodel",
                    "sales": "Bluezoom",
                    "totalQty": 2402,
                    "payment": "신용카드",
                    "orderTotal": "$1145.79",
                    "orderState": "배송완료"
                    }, {
                    "No": 5,
                    "orderDate": "4/9/2019",
                    "orderCode": "#1703a3",
                    "account": "Trudeo",
                    "deliverer": "Vinte",
                    "sales": "Ntag",
                    "totalQty": 1014,
                    "payment": "계좌이체",
                    "orderTotal": "$3111.50",
                    "orderState": "주문완료"
                    }, {
                    "No": 6,
                    "orderDate": "3/28/2019",
                    "orderCode": "#24f43f",
                    "account": "Fanoodle",
                    "deliverer": "Skyble",
                    "sales": "Livepath",
                    "totalQty": 2814,
                    "payment": "계좌이체",
                    "orderTotal": "$2032.62",
                    "orderState": "배송중"
                    }, {
                    "No": 7,
                    "orderDate": "6/5/2018",
                    "orderCode": "#3c5212",
                    "account": "Livepath",
                    "deliverer": "Oyope",
                    "sales": "Kanoodle",
                    "totalQty": 1783,
                    "payment": "신용카드",
                    "orderTotal": "$1324.98",
                    "orderState": "배송준비"
                    }, {
                    "No": 8,
                    "orderDate": "6/5/2018",
                    "orderCode": "#f1b657",
                    "account": "Snaptags",
                    "deliverer": "Zooxo",
                    "sales": "Dynava",
                    "totalQty": 2265,
                    "payment": "계좌이체",
                    "orderTotal": "$4516.06",
                    "orderState": "배송완료"
                    }, {
                    "No": 9,
                    "orderDate": "6/26/2018",
                    "orderCode": "#cdcb07",
                    "account": "Kamba",
                    "deliverer": "Edgeclub",
                    "sales": "Realcube",
                    "totalQty": 2449,
                    "payment": "신용카드",
                    "orderTotal": "$345.34",
                    "orderState": "주문완료"
                    }, {
                    "No": 10,
                    "orderDate": "4/20/2018",
                    "orderCode": "#7fe64a",
                    "account": "Skyble",
                    "deliverer": "Jabbercube",
                    "sales": "Shuffletag",
                    "totalQty": 2978,
                    "payment": "계좌이체",
                    "orderTotal": "$4355.19",
                    "orderState": "배송완료"
                    }, {
                    "No": 11,
                    "orderDate": "3/26/2019",
                    "orderCode": "#0739af",
                    "account": "Voomm",
                    "deliverer": "Brightdog",
                    "sales": "Topicstorm",
                    "totalQty": 1197,
                    "payment": "신용카드",
                    "orderTotal": "$1120.75",
                    "orderState": "배송중"
                    }, {
                    "No": 12,
                    "orderDate": "3/3/2019",
                    "orderCode": "#0533b4",
                    "account": "Edgewire",
                    "deliverer": "Oozz",
                    "sales": "Innojam",
                    "totalQty": 2704,
                    "payment": "계좌이체",
                    "orderTotal": "$2179.78",
                    "orderState": "배송중"
                    }, {
                    "No": 13,
                    "orderDate": "7/15/2018",
                    "orderCode": "#596a49",
                    "account": "Eidel",
                    "deliverer": "Linktype",
                    "sales": "Midel",
                    "totalQty": 2912,
                    "payment": "신용카드",
                    "orderTotal": "$2210.95",
                    "orderState": "배송완료"
                    }, {
                    "No": 14,
                    "orderDate": "12/11/2018",
                    "orderCode": "#8a11ed",
                    "account": "Edgeblab",
                    "deliverer": "Wikizz",
                    "sales": "Centizu",
                    "totalQty": 2704,
                    "payment": "신용카드",
                    "orderTotal": "$3030.83",
                    "orderState": "배송중"
                    }, {
                    "No": 15,
                    "orderDate": "8/17/2018",
                    "orderCode": "#7c8768",
                    "account": "Kazio",
                    "deliverer": "Topicblab",
                    "sales": "Blogpad",
                    "totalQty": 2959,
                    "payment": "신용카드",
                    "orderTotal": "$1038.36",
                    "orderState": "배송중"
                    }, {
                    "No": 16,
                    "orderDate": "12/15/2018",
                    "orderCode": "#fe005d",
                    "account": "Twiyo",
                    "deliverer": "Yamia",
                    "sales": "Browsebug",
                    "totalQty": 1368,
                    "payment": "신용카드",
                    "orderTotal": "$4180.89",
                    "orderState": "배송중"
                    }, {
                    "No": 17,
                    "orderDate": "3/6/2019",
                    "orderCode": "#f22d9e",
                    "account": "Chatterpoint",
                    "deliverer": "Flashpoint",
                    "sales": "Babbleopia",
                    "totalQty": 1362,
                    "payment": "신용카드",
                    "orderTotal": "$1832.73",
                    "orderState": "배송보류"
                    }, {
                    "No": 18,
                    "orderDate": "5/2/2018",
                    "orderCode": "#9c0d19",
                    "account": "Linklinks",
                    "deliverer": "Tagfeed",
                    "sales": "Oodoo",
                    "totalQty": 2412,
                    "payment": "신용카드",
                    "orderTotal": "$3247.60",
                    "orderState": "주문완료"
                    }, {
                    "No": 19,
                    "orderDate": "3/11/2019",
                    "orderCode": "#4af6a7",
                    "account": "Thoughtbeat",
                    "deliverer": "Wordify",
                    "sales": "Zazio",
                    "totalQty": 1793,
                    "payment": "계좌이체",
                    "orderTotal": "$4344.85",
                    "orderState": "주문완료"
                    }, {
                    "No": 20,
                    "orderDate": "4/9/2019",
                    "orderCode": "#98c51f",
                    "account": "Riffwire",
                    "deliverer": "Trudeo",
                    "sales": "Ooba",
                    "totalQty": 2379,
                    "payment": "신용카드",
                    "orderTotal": "$157.33",
                    "orderState": "배송중"
                    }, {
                    "No": 21,
                    "orderDate": "8/12/2018",
                    "orderCode": "#7e3693",
                    "account": "Eimbee",
                    "deliverer": "Demizz",
                    "sales": "Yakitri",
                    "totalQty": 1942,
                    "payment": "계좌이체",
                    "orderTotal": "$558.14",
                    "orderState": "배송준비"
                    }, {
                    "No": 22,
                    "orderDate": "4/2/2019",
                    "orderCode": "#6734eb",
                    "account": "Gabspot",
                    "deliverer": "Edgeify",
                    "sales": "Eire",
                    "totalQty": 2193,
                    "payment": "신용카드",
                    "orderTotal": "$2240.64",
                    "orderState": "배송준비"
                    }, {
                    "No": 23,
                    "orderDate": "2/26/2019",
                    "orderCode": "#f8942e",
                    "account": "Dabvine",
                    "deliverer": "Brainbox",
                    "sales": "Cogilith",
                    "totalQty": 1207,
                    "payment": "계좌이체",
                    "orderTotal": "$2264.64",
                    "orderState": "배송중"
                    }, {
                    "No": 24,
                    "orderDate": "7/8/2018",
                    "orderCode": "#97c904",
                    "account": "Riffwire",
                    "deliverer": "Shufflebeat",
                    "sales": "Myworks",
                    "totalQty": 2862,
                    "payment": "계좌이체",
                    "orderTotal": "$1927.73",
                    "orderState": "주문완료"
                    }, {
                    "No": 25,
                    "orderDate": "2/17/2019",
                    "orderCode": "#756342",
                    "account": "Jayo",
                    "deliverer": "Skimia",
                    "sales": "Skyba",
                    "totalQty": 2295,
                    "payment": "신용카드",
                    "orderTotal": "$834.79",
                    "orderState": "주문완료"
                    }, {
                    "No": 26,
                    "orderDate": "2/22/2019",
                    "orderCode": "#41f6b6",
                    "account": "Yambee",
                    "deliverer": "Topicshots",
                    "sales": "Jabbercube",
                    "totalQty": 2592,
                    "payment": "계좌이체",
                    "orderTotal": "$4975.77",
                    "orderState": "배송완료"
                    }, {
                    "No": 27,
                    "orderDate": "1/1/2019",
                    "orderCode": "#b9f750",
                    "account": "Flashset",
                    "deliverer": "Skiptube",
                    "sales": "Gigashots",
                    "totalQty": 1828,
                    "payment": "신용카드",
                    "orderTotal": "$4602.13",
                    "orderState": "배송중"
                    }, {
                    "No": 28,
                    "orderDate": "4/22/2018",
                    "orderCode": "#347a30",
                    "account": "Tazzy",
                    "deliverer": "Yacero",
                    "sales": "Avamba",
                    "totalQty": 1771,
                    "payment": "계좌이체",
                    "orderTotal": "$4069.37",
                    "orderState": "배송중"
                    }, {
                    "No": 29,
                    "orderDate": "5/13/2018",
                    "orderCode": "#a6c891",
                    "account": "Cogilith",
                    "deliverer": "Zoombox",
                    "sales": "Mynte",
                    "totalQty": 1942,
                    "payment": "신용카드",
                    "orderTotal": "$518.35",
                    "orderState": "배송완료"
                    }, {
                    "No": 30,
                    "orderDate": "10/19/2018",
                    "orderCode": "#a0531d",
                    "account": "Shufflester",
                    "deliverer": "Trilith",
                    "sales": "Rhyzio",
                    "totalQty": 2759,
                    "payment": "신용카드",
                    "orderTotal": "$2082.68",
                    "orderState": "배송완료"
                    }, {
                    "No": 31,
                    "orderDate": "2/12/2019",
                    "orderCode": "#8952a5",
                    "account": "Oba",
                    "deliverer": "Minyx",
                    "sales": "Shufflester",
                    "totalQty": 2540,
                    "payment": "신용카드",
                    "orderTotal": "$58.24",
                    "orderState": "배송중"
                    }, {
                    "No": 32,
                    "orderDate": "10/4/2018",
                    "orderCode": "#a5ffe7",
                    "account": "Nlounge",
                    "deliverer": "Roombo",
                    "sales": "Rhyzio",
                    "totalQty": 2646,
                    "payment": "신용카드",
                    "orderTotal": "$3491.48",
                    "orderState": "배송중"
                    }, {
                    "No": 33,
                    "orderDate": "11/1/2018",
                    "orderCode": "#1c2f43",
                    "account": "Zoombeat",
                    "deliverer": "Flipopia",
                    "sales": "Demizz",
                    "totalQty": 1663,
                    "payment": "계좌이체",
                    "orderTotal": "$4981.20",
                    "orderState": "배송완료"
                    }, {
                    "No": 34,
                    "orderDate": "1/8/2019",
                    "orderCode": "#c3c618",
                    "account": "Twiyo",
                    "deliverer": "Feedbug",
                    "sales": "Kanoodle",
                    "totalQty": 2666,
                    "payment": "계좌이체",
                    "orderTotal": "$2043.97",
                    "orderState": "배송보류"
                    }, {
                    "No": 35,
                    "orderDate": "3/12/2019",
                    "orderCode": "#c260f0",
                    "account": "Tagchat",
                    "deliverer": "Devcast",
                    "sales": "Buzzbean",
                    "totalQty": 2030,
                    "payment": "신용카드",
                    "orderTotal": "$4814.22",
                    "orderState": "배송중"
                    }, {
                    "No": 36,
                    "orderDate": "12/30/2018",
                    "orderCode": "#635bbc",
                    "account": "Jamia",
                    "deliverer": "Yamia",
                    "sales": "Dabjam",
                    "totalQty": 2795,
                    "payment": "신용카드",
                    "orderTotal": "$420.11",
                    "orderState": "배송보류"
                    }, {
                    "No": 37,
                    "orderDate": "1/26/2019",
                    "orderCode": "#7e3611",
                    "account": "Buzzdog",
                    "deliverer": "Kwimbee",
                    "sales": "Linklinks",
                    "totalQty": 2639,
                    "payment": "신용카드",
                    "orderTotal": "$3864.96",
                    "orderState": "배송완료"
                    }, {
                    "No": 38,
                    "orderDate": "10/31/2018",
                    "orderCode": "#7cca19",
                    "account": "Bluejam",
                    "deliverer": "Thoughtstorm",
                    "sales": "Kanoodle",
                    "totalQty": 2278,
                    "payment": "계좌이체",
                    "orderTotal": "$2708.88",
                    "orderState": "배송완료"
                    }, {
                    "No": 39,
                    "orderDate": "10/30/2018",
                    "orderCode": "#64fbc5",
                    "account": "Mydo",
                    "deliverer": "Photobug",
                    "sales": "Rhynoodle",
                    "totalQty": 2412,
                    "payment": "신용카드",
                    "orderTotal": "$937.07",
                    "orderState": "주문완료"
                    }, {
                    "No": 40,
                    "orderDate": "12/12/2018",
                    "orderCode": "#bbd7f9",
                    "account": "Wikizz",
                    "deliverer": "Photobean",
                    "sales": "Snaptags",
                    "totalQty": 2951,
                    "payment": "계좌이체",
                    "orderTotal": "$2968.73",
                    "orderState": "주문완료"
                    }, {
                    "No": 41,
                    "orderDate": "9/21/2018",
                    "orderCode": "#c25739",
                    "account": "Skalith",
                    "deliverer": "Jaloo",
                    "sales": "Jabbertype",
                    "totalQty": 2865,
                    "payment": "신용카드",
                    "orderTotal": "$316.22",
                    "orderState": "배송완료"
                    }, {
                    "No": 42,
                    "orderDate": "12/28/2018",
                    "orderCode": "#a76b39",
                    "account": "Yodoo",
                    "deliverer": "Leenti",
                    "sales": "Fivechat",
                    "totalQty": 1273,
                    "payment": "계좌이체",
                    "orderTotal": "$2682.08",
                    "orderState": "주문완료"
                    }, {
                    "No": 43,
                    "orderDate": "4/26/2018",
                    "orderCode": "#f3c406",
                    "account": "Quinu",
                    "deliverer": "Dynazzy",
                    "sales": "Realblab",
                    "totalQty": 1890,
                    "payment": "신용카드",
                    "orderTotal": "$1332.84",
                    "orderState": "배송완료"
                    }, {
                    "No": 44,
                    "orderDate": "11/27/2018",
                    "orderCode": "#ce5961",
                    "account": "Mynte",
                    "deliverer": "Topiczoom",
                    "sales": "Mydeo",
                    "totalQty": 2365,
                    "payment": "신용카드",
                    "orderTotal": "$4596.90",
                    "orderState": "주문완료"
                    }, {
                    "No": 45,
                    "orderDate": "4/7/2019",
                    "orderCode": "#c5422c",
                    "account": "Fivebridge",
                    "deliverer": "Skipfire",
                    "sales": "Livetube",
                    "totalQty": 1654,
                    "payment": "신용카드",
                    "orderTotal": "$1240.69",
                    "orderState": "배송준비"
                    }, {
                    "No": 46,
                    "orderDate": "3/18/2019",
                    "orderCode": "#5e7f90",
                    "account": "Ozu",
                    "deliverer": "Zoonder",
                    "sales": "Trudeo",
                    "totalQty": 2183,
                    "payment": "신용카드",
                    "orderTotal": "$4970.88",
                    "orderState": "배송중"
                    }, {
                    "No": 47,
                    "orderDate": "7/6/2018",
                    "orderCode": "#c99c18",
                    "account": "Viva",
                    "deliverer": "Tazzy",
                    "sales": "Mynte",
                    "totalQty": 1884,
                    "payment": "계좌이체",
                    "orderTotal": "$3250.49",
                    "orderState": "배송중"
                    }, {
                    "No": 48,
                    "orderDate": "7/16/2018",
                    "orderCode": "#5ce460",
                    "account": "Blogtags",
                    "deliverer": "Quatz",
                    "sales": "Quaxo",
                    "totalQty": 2513,
                    "payment": "신용카드",
                    "orderTotal": "$2301.48",
                    "orderState": "주문완료"
                    }, {
                    "No": 49,
                    "orderDate": "11/7/2018",
                    "orderCode": "#6839fa",
                    "account": "Cogidoo",
                    "deliverer": "Jaxnation",
                    "sales": "Voomm",
                    "totalQty": 2588,
                    "payment": "계좌이체",
                    "orderTotal": "$4111.85",
                    "orderState": "배송준비"
                    }, {
                    "No": 50,
                    "orderDate": "8/21/2018",
                    "orderCode": "#e9dbfa",
                    "account": "Bluejam",
                    "deliverer": "Cogibox",
                    "sales": "Gabcube",
                    "totalQty": 1404,
                    "payment": "신용카드",
                    "orderTotal": "$427.33",
                    "orderState": "배송보류"
                    }, {
                    "No": 51,
                    "orderDate": "7/29/2018",
                    "orderCode": "#3f8bed",
                    "account": "Ntags",
                    "deliverer": "Skipstorm",
                    "sales": "Zoozzy",
                    "totalQty": 2837,
                    "payment": "신용카드",
                    "orderTotal": "$2814.08",
                    "orderState": "배송완료"
                    }, {
                    "No": 52,
                    "orderDate": "1/9/2019",
                    "orderCode": "#bce7f2",
                    "account": "Cogibox",
                    "deliverer": "Janyx",
                    "sales": "Oyonder",
                    "totalQty": 2621,
                    "payment": "계좌이체",
                    "orderTotal": "$2803.39",
                    "orderState": "배송준비"
                    }, {
                    "No": 53,
                    "orderDate": "7/20/2018",
                    "orderCode": "#1131c7",
                    "account": "Thoughtstorm",
                    "deliverer": "Skimia",
                    "sales": "Riffpath",
                    "totalQty": 2180,
                    "payment": "계좌이체",
                    "orderTotal": "$3242.78",
                    "orderState": "주문완료"
                    }, {
                    "No": 54,
                    "orderDate": "11/26/2018",
                    "orderCode": "#b4f355",
                    "account": "Shuffletag",
                    "deliverer": "Ainyx",
                    "sales": "Feedmix",
                    "totalQty": 2089,
                    "payment": "신용카드",
                    "orderTotal": "$390.33",
                    "orderState": "배송완료"
                    }, {
                    "No": 55,
                    "orderDate": "8/21/2018",
                    "orderCode": "#1cdb79",
                    "account": "Babbleopia",
                    "deliverer": "Kwideo",
                    "sales": "Bluezoom",
                    "totalQty": 2666,
                    "payment": "신용카드",
                    "orderTotal": "$4189.43",
                    "orderState": "배송준비"
                    }, {
                    "No": 56,
                    "orderDate": "2/6/2019",
                    "orderCode": "#f42adf",
                    "account": "Aimbo",
                    "deliverer": "Innotype",
                    "sales": "Quatz",
                    "totalQty": 2454,
                    "payment": "신용카드",
                    "orderTotal": "$1225.36",
                    "orderState": "배송보류"
                    }, {
                    "No": 57,
                    "orderDate": "12/26/2018",
                    "orderCode": "#944a59",
                    "account": "Demimbu",
                    "deliverer": "Lajo",
                    "sales": "Trudoo",
                    "totalQty": 2688,
                    "payment": "신용카드",
                    "orderTotal": "$1106.75",
                    "orderState": "배송중"
                    }, {
                    "No": 58,
                    "orderDate": "7/3/2018",
                    "orderCode": "#d866a0",
                    "account": "Gabcube",
                    "deliverer": "Divavu",
                    "sales": "Jabberbean",
                    "totalQty": 2379,
                    "payment": "계좌이체",
                    "orderTotal": "$1314.44",
                    "orderState": "배송완료"
                    }, {
                    "No": 59,
                    "orderDate": "12/27/2018",
                    "orderCode": "#6fe2cb",
                    "account": "Janyx",
                    "deliverer": "Tazzy",
                    "sales": "Lazz",
                    "totalQty": 1898,
                    "payment": "계좌이체",
                    "orderTotal": "$4400.32",
                    "orderState": "배송완료"
                    }, {
                    "No": 60,
                    "orderDate": "12/26/2018",
                    "orderCode": "#40fc5f",
                    "account": "Voolith",
                    "deliverer": "Browsebug",
                    "sales": "Mita",
                    "totalQty": 2632,
                    "payment": "계좌이체",
                    "orderTotal": "$2695.83",
                    "orderState": "주문완료"
                    }, {
                    "No": 61,
                    "orderDate": "5/23/2018",
                    "orderCode": "#6420d5",
                    "account": "Dynazzy",
                    "deliverer": "Wordware",
                    "sales": "Kazio",
                    "totalQty": 2590,
                    "payment": "계좌이체",
                    "orderTotal": "$2661.97",
                    "orderState": "배송완료"
                    }, {
                    "No": 62,
                    "orderDate": "1/7/2019",
                    "orderCode": "#ea8cc8",
                    "account": "Skipstorm",
                    "deliverer": "Skaboo",
                    "sales": "Feednation",
                    "totalQty": 1917,
                    "payment": "신용카드",
                    "orderTotal": "$3051.57",
                    "orderState": "배송완료"
                    }, {
                    "No": 63,
                    "orderDate": "3/8/2019",
                    "orderCode": "#f9b5e8",
                    "account": "Skidoo",
                    "deliverer": "Ntags",
                    "sales": "Skipfire",
                    "totalQty": 1013,
                    "payment": "계좌이체",
                    "orderTotal": "$413.30",
                    "orderState": "배송준비"
                    }, {
                    "No": 64,
                    "orderDate": "12/4/2018",
                    "orderCode": "#0fb793",
                    "account": "Mymm",
                    "deliverer": "Leexo",
                    "sales": "Feedbug",
                    "totalQty": 1992,
                    "payment": "계좌이체",
                    "orderTotal": "$512.84",
                    "orderState": "배송완료"
                    }, {
                    "No": 65,
                    "orderDate": "8/9/2018",
                    "orderCode": "#a3d2f0",
                    "account": "Meevee",
                    "deliverer": "Zoomdog",
                    "sales": "Eimbee",
                    "totalQty": 2648,
                    "payment": "신용카드",
                    "orderTotal": "$2028.12",
                    "orderState": "배송준비"
                    }, {
                    "No": 66,
                    "orderDate": "1/17/2019",
                    "orderCode": "#3f399c",
                    "account": "Quimba",
                    "deliverer": "Gigaclub",
                    "sales": "Mybuzz",
                    "totalQty": 1268,
                    "payment": "신용카드",
                    "orderTotal": "$4105.18",
                    "orderState": "배송완료"
                    }, {
                    "No": 67,
                    "orderDate": "11/15/2018",
                    "orderCode": "#b46fc3",
                    "account": "Chatterbridge",
                    "deliverer": "Topiczoom",
                    "sales": "Kamba",
                    "totalQty": 2449,
                    "payment": "신용카드",
                    "orderTotal": "$4921.43",
                    "orderState": "배송보류"
                    }, {
                    "No": 68,
                    "orderDate": "10/9/2018",
                    "orderCode": "#09f0e1",
                    "account": "Divanoodle",
                    "deliverer": "Mymm",
                    "sales": "Reallinks",
                    "totalQty": 1333,
                    "payment": "신용카드",
                    "orderTotal": "$26.04",
                    "orderState": "배송완료"
                    }, {
                    "No": 69,
                    "orderDate": "10/17/2018",
                    "orderCode": "#345270",
                    "account": "Oba",
                    "deliverer": "Buzzshare",
                    "sales": "BlogXS",
                    "totalQty": 1576,
                    "payment": "신용카드",
                    "orderTotal": "$3614.00",
                    "orderState": "배송중"
                    }, {
                    "No": 70,
                    "orderDate": "6/28/2018",
                    "orderCode": "#b5fef0",
                    "account": "Wordtune",
                    "deliverer": "Tagfeed",
                    "sales": "Gigashots",
                    "totalQty": 2106,
                    "payment": "계좌이체",
                    "orderTotal": "$1540.44",
                    "orderState": "배송완료"
                    }, {
                    "No": 71,
                    "orderDate": "3/1/2019",
                    "orderCode": "#61c520",
                    "account": "Gabtype",
                    "deliverer": "Jabbercube",
                    "sales": "Avavee",
                    "totalQty": 1139,
                    "payment": "계좌이체",
                    "orderTotal": "$2452.78",
                    "orderState": "배송준비"
                    }, {
                    "No": 72,
                    "orderDate": "1/12/2019",
                    "orderCode": "#d2338e",
                    "account": "Rhycero",
                    "deliverer": "Centizu",
                    "sales": "Brightdog",
                    "totalQty": 1562,
                    "payment": "계좌이체",
                    "orderTotal": "$3392.21",
                    "orderState": "배송완료"
                    }, {
                    "No": 73,
                    "orderDate": "8/5/2018",
                    "orderCode": "#f907f5",
                    "account": "Kanoodle",
                    "deliverer": "Thoughtsphere",
                    "sales": "Gabtune",
                    "totalQty": 1305,
                    "payment": "계좌이체",
                    "orderTotal": "$1778.90",
                    "orderState": "주문완료"
                    }, {
                    "No": 74,
                    "orderDate": "6/7/2018",
                    "orderCode": "#35be38",
                    "account": "Skalith",
                    "deliverer": "Meetz",
                    "sales": "Quimba",
                    "totalQty": 2874,
                    "payment": "계좌이체",
                    "orderTotal": "$4578.52",
                    "orderState": "배송보류"
                    }, {
                    "No": 75,
                    "orderDate": "2/15/2019",
                    "orderCode": "#be1305",
                    "account": "Viva",
                    "deliverer": "Dabvine",
                    "sales": "Twinder",
                    "totalQty": 2376,
                    "payment": "신용카드",
                    "orderTotal": "$1622.64",
                    "orderState": "배송준비"
                    }, {
                    "No": 76,
                    "orderDate": "2/1/2019",
                    "orderCode": "#e8480b",
                    "account": "Zazio",
                    "deliverer": "Abatz",
                    "sales": "Oyoba",
                    "totalQty": 2297,
                    "payment": "신용카드",
                    "orderTotal": "$4819.03",
                    "orderState": "배송준비"
                    }, {
                    "No": 77,
                    "orderDate": "1/22/2019",
                    "orderCode": "#806e5f",
                    "account": "Eimbee",
                    "deliverer": "DabZ",
                    "sales": "Feedbug",
                    "totalQty": 1504,
                    "payment": "계좌이체",
                    "orderTotal": "$2636.39",
                    "orderState": "배송보류"
                    }, {
                    "No": 78,
                    "orderDate": "1/23/2019",
                    "orderCode": "#c1a110",
                    "account": "Fivechat",
                    "deliverer": "Thoughtmix",
                    "sales": "Tekfly",
                    "totalQty": 1103,
                    "payment": "신용카드",
                    "orderTotal": "$984.63",
                    "orderState": "배송완료"
                    }, {
                    "No": 79,
                    "orderDate": "8/16/2018",
                    "orderCode": "#edfff3",
                    "account": "Eabox",
                    "deliverer": "Youtags",
                    "sales": "Oyoloo",
                    "totalQty": 1674,
                    "payment": "계좌이체",
                    "orderTotal": "$2920.24",
                    "orderState": "배송완료"
                    }, {
                    "No": 80,
                    "orderDate": "7/1/2018",
                    "orderCode": "#730bc2",
                    "account": "Fivechat",
                    "deliverer": "Snaptags",
                    "sales": "Dynabox",
                    "totalQty": 2046,
                    "payment": "신용카드",
                    "orderTotal": "$3783.36",
                    "orderState": "주문완료"
                    }, {
                    "No": 81,
                    "orderDate": "10/17/2018",
                    "orderCode": "#545535",
                    "account": "Devshare",
                    "deliverer": "Quire",
                    "sales": "Jabberbean",
                    "totalQty": 1538,
                    "payment": "신용카드",
                    "orderTotal": "$2165.09",
                    "orderState": "배송중"
                    }, {
                    "No": 82,
                    "orderDate": "1/29/2019",
                    "orderCode": "#18c585",
                    "account": "Avaveo",
                    "deliverer": "Mymm",
                    "sales": "Mydo",
                    "totalQty": 2497,
                    "payment": "계좌이체",
                    "orderTotal": "$4516.00",
                    "orderState": "배송완료"
                    }, {
                    "No": 83,
                    "orderDate": "6/2/2018",
                    "orderCode": "#ad3688",
                    "account": "Voonder",
                    "deliverer": "Oodoo",
                    "sales": "Skyba",
                    "totalQty": 2418,
                    "payment": "계좌이체",
                    "orderTotal": "$3649.93",
                    "orderState": "주문완료"
                    }, {
                    "No": 84,
                    "orderDate": "1/30/2019",
                    "orderCode": "#6a6567",
                    "account": "Dynabox",
                    "deliverer": "Riffpath",
                    "sales": "Lajo",
                    "totalQty": 1029,
                    "payment": "계좌이체",
                    "orderTotal": "$1871.90",
                    "orderState": "배송중"
                    }, {
                    "No": 85,
                    "orderDate": "11/22/2018",
                    "orderCode": "#3c926f",
                    "account": "Twinte",
                    "deliverer": "Abatz",
                    "sales": "Buzzbean",
                    "totalQty": 1786,
                    "payment": "신용카드",
                    "orderTotal": "$1116.38",
                    "orderState": "배송준비"
                    }, {
                    "No": 86,
                    "orderDate": "1/26/2019",
                    "orderCode": "#992d33",
                    "account": "Yodoo",
                    "deliverer": "Yakitri",
                    "sales": "Blogtags",
                    "totalQty": 1381,
                    "payment": "계좌이체",
                    "orderTotal": "$4854.57",
                    "orderState": "배송완료"
                    }, {
                    "No": 87,
                    "orderDate": "12/11/2018",
                    "orderCode": "#c878d7",
                    "account": "Jaloo",
                    "deliverer": "Buzzster",
                    "sales": "Dabfeed",
                    "totalQty": 2120,
                    "payment": "계좌이체",
                    "orderTotal": "$3654.93",
                    "orderState": "배송중"
                    }, {
                    "No": 88,
                    "orderDate": "1/20/2019",
                    "orderCode": "#5a8a1d",
                    "account": "Wikido",
                    "deliverer": "Youspan",
                    "sales": "Tekfly",
                    "totalQty": 1538,
                    "payment": "신용카드",
                    "orderTotal": "$3638.04",
                    "orderState": "배송보류"
                    }, {
                    "No": 89,
                    "orderDate": "2/2/2019",
                    "orderCode": "#729f14",
                    "account": "Bubblemix",
                    "deliverer": "JumpXS",
                    "sales": "Photofeed",
                    "totalQty": 2528,
                    "payment": "신용카드",
                    "orderTotal": "$2031.76",
                    "orderState": "배송중"
                    }, {
                    "No": 90,
                    "orderDate": "11/17/2018",
                    "orderCode": "#a17530",
                    "account": "Skynoodle",
                    "deliverer": "BlogXS",
                    "sales": "Divape",
                    "totalQty": 2199,
                    "payment": "계좌이체",
                    "orderTotal": "$3225.15",
                    "orderState": "배송중"
                    }, {
                    "No": 91,
                    "orderDate": "11/18/2018",
                    "orderCode": "#be0372",
                    "account": "Kayveo",
                    "deliverer": "Voonix",
                    "sales": "Feedfish",
                    "totalQty": 2586,
                    "payment": "신용카드",
                    "orderTotal": "$2115.08",
                    "orderState": "배송완료"
                    }, {
                    "No": 92,
                    "orderDate": "4/14/2018",
                    "orderCode": "#779324",
                    "account": "Avaveo",
                    "deliverer": "Gigabox",
                    "sales": "Trudoo",
                    "totalQty": 2150,
                    "payment": "신용카드",
                    "orderTotal": "$2582.97",
                    "orderState": "배송중"
                    }, {
                    "No": 93,
                    "orderDate": "5/24/2018",
                    "orderCode": "#f4bbd2",
                    "account": "Gigazoom",
                    "deliverer": "Topiclounge",
                    "sales": "Tazz",
                    "totalQty": 1863,
                    "payment": "신용카드",
                    "orderTotal": "$42.94",
                    "orderState": "배송완료"
                    }, {
                    "No": 94,
                    "orderDate": "5/22/2018",
                    "orderCode": "#34097b",
                    "account": "Blogspan",
                    "deliverer": "Lajo",
                    "sales": "Riffpedia",
                    "totalQty": 2115,
                    "payment": "신용카드",
                    "orderTotal": "$3271.22",
                    "orderState": "배송준비"
                    }, {
                    "No": 95,
                    "orderDate": "4/27/2018",
                    "orderCode": "#370a1e",
                    "account": "Livetube",
                    "deliverer": "Feedspan",
                    "sales": "Trilia",
                    "totalQty": 1697,
                    "payment": "계좌이체",
                    "orderTotal": "$275.91",
                    "orderState": "배송보류"
                    }, {
                    "No": 96,
                    "orderDate": "10/22/2018",
                    "orderCode": "#824ff2",
                    "account": "Jabberstorm",
                    "deliverer": "Jabbersphere",
                    "sales": "Fivespan",
                    "totalQty": 1765,
                    "payment": "신용카드",
                    "orderTotal": "$4686.15",
                    "orderState": "배송보류"
                    }, {
                    "No": 97,
                    "orderDate": "6/6/2018",
                    "orderCode": "#37ae78",
                    "account": "Voomm",
                    "deliverer": "Vinder",
                    "sales": "Latz",
                    "totalQty": 2273,
                    "payment": "신용카드",
                    "orderTotal": "$3341.30",
                    "orderState": "배송준비"
                    }, {
                    "No": 98,
                    "orderDate": "10/15/2018",
                    "orderCode": "#f997d3",
                    "account": "Agimba",
                    "deliverer": "Quinu",
                    "sales": "Dabtype",
                    "totalQty": 1264,
                    "payment": "신용카드",
                    "orderTotal": "$2061.67",
                    "orderState": "배송중"
                    }, {
                    "No": 99,
                    "orderDate": "7/18/2018",
                    "orderCode": "#21e04c",
                    "account": "Skajo",
                    "deliverer": "Zoombeat",
                    "sales": "Yakitri",
                    "totalQty": 1041,
                    "payment": "신용카드",
                    "orderTotal": "$40.86",
                    "orderState": "배송완료"
                    }, {
                    "No": 100,
                    "orderDate": "3/15/2019",
                    "orderCode": "#aa4c02",
                    "account": "Dabfeed",
                    "deliverer": "Oyoyo",
                    "sales": "Npath",
                    "totalQty": 2902,
                    "payment": "신용카드",
                    "orderTotal": "$978.88",
                    "orderState": "배송준비"
                    }],
            }
        },
        methods: {
            
        },
        created() {
            
        },
        computed: {
            rows() {
                console.log(this.items.length);
                return this.items.length
            }
        }
    }
</script>

<style scoped>

</style>
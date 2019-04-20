<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <h2>카테고리</h2>
            <hr />
            <b-card no-body>
            <b-tabs pills card vertical>
            <b-tab title="Tab 1" active><b-card-text>Tab Contents 1</b-card-text></b-tab>
            <b-tab title="Tab 2"><b-card-text>Tab Contents 2</b-card-text></b-tab>
            <b-tab title="Tab 3"><b-card-text>Tab Contents 3</b-card-text></b-tab>
            </b-tabs>
        </b-card>  
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category"
    }
</script>

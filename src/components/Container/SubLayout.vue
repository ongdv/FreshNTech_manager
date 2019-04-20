<template>
    <div >
        <component :is="componentId" />
    </div>
</template>

<script>
    import {
        
    } from './'
    export default {
        name: "SubLayout",
        data(){
            return {
                componentId: "order"
            }
        }
    }
</script>
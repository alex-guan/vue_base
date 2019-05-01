<template>
    <div>
        主页
        <Button @click="getTest">测试service</Button>
        {{result}}
    </div>
</template>

<script>
    export default {
        data(){
            return{
                result:""
            }
        },
        methods:{
         async getTest(){
             this.result = await this.$http.get("/").then(data=>data.data)
          }
        }
    }
</script>

<style lang="less" scoped>

</style>
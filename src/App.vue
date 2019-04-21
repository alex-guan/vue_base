<template>
  <div>
    <Button @click="testHttp">iview</Button>
    <DatePicker></DatePicker>
    {{res}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      res : ""
    }
  },
  methods: {
    async testHttp(){
         this.res = await this.$http.get("").then(data=>data.data)
        }
  },
}
</script>

<style lang="less">

</style>

<template>
    <div>
        <navbar/>
        <div class="content-container">
            <router-view/>
        </div>
        <foo/>
    </div>
</template>
<script>
import navbar from '@/components/nav'
import foo from '@/components/footer'

export default {
    components: {
        navbar,
        foo
    }
}
</script>
<style scoped>
.content-container{
    margin-top:100px
}
</style>
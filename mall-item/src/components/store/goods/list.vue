<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="goods/list">首页</router-link>
                <a href="/goods.html">购物商城</a>
            </div>
        </div>
        <!-- 渲染，引入的组件 -->
        <!-- 组件渲染，如果第一个单词后面的单词如果首字母有大写，则改成小写，中间加 “-” -->
        <list-top></list-top>

        <!--  -->
        <list-main></list-main>
    </div>
</template>

<script>
    //组件里面再引用组件，这里引用的组件仅在list里使用
    import ListTop from './common/ListTop.vue'
    import ListMain from './common/ListMain.vue'

    export default {
        components: {
            ListTop,
            ListMain,
        }
    }
</script>


<style scoped>

</style>
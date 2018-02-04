<template>
  <div class="section">
    <div class="wrapper">
      <div class="wrap-box">
        <!--类别菜单-->
        <div class="left-220" style="margin:0;">
          <div class="banner-nav">
            <ul>

              <!--此处声明下面可重复循环-->
              <li v-for="item in all.catelist" :key='item.id'>
                <!-- 左侧列表 -->
                <h3>
                  <i class="iconfont icon-arrow-right"></i>
                  <!-- 顶级分类 -->
                  <span>{{item.title}}</span>
                  <p>
                    <!-- 子级分类 -->
                    <span v-for='subitem in all.subcates' :key='subitem.id'>{{subitem.title}}</span>
                  </p>
                </h3>

                <!-- 左侧列表鼠标放上去显示的遮盖窗口 -->
                <div class="item-box">
                  <!--如有三级分类，此处可循环-->
                  <dl>
                    <dt>
                      <a href="/goods/40.html">{{item.title}}</a>
                    </dt>
                    <dd>
                      <!-- 这里遍历到的subitem可能还会有自己的subcates, 并且可能无限 -->
                      <a v-for="subitem in item.subcates" :key="subitem.id" href="/goods/43.html">{{ subitem.title }}</a>
                      <!-- <span v-for='subitem in item.subcates' :key='subitem.id'>{{subitem.title}}</span> -->
                    </dd>
                  </dl>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <!--/类别菜单-->

        <!--幻灯片-->
        <div class="left-705">
          <div class="banner-img">
            <!-- element-ui走马灯 -->
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in all.sliderlist" :key="item.id">
                  <img :src="item.img_url" alt="" style="height:100%;">
                </el-carousel-item>
              </el-carousel>
          </div>
        </div>
        <!--/幻灯片-->

        <!--推荐商品-->
        <div class="left-220">
          <ul class="side-img-list">

            <!-- 顶级分类 -->
            <li v-for="(item,index) in all.sliderlist">
              <div class="img-box">
                <label>{{index + 1}}</label>
                <img :src="item.img_url">
              </div>
              <div class="txt-box">
                <!-- <a href="/goods/show-98.html"></a> -->
                <!-- 跳转页面，同时带参数id -->
                <router-link :to="{ name: 'goodsDetail', params:{id:item.id} }">{{item.title}}</router-link>
                <span>{{item.add_time | date}}</span>
              </div>
            </li>

          </ul>
        </div>
        <!--/推荐商品-->
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        all: {
          catelist: [], // 分类列表数据
          sliderlist: [], // 轮播图列表数据
          toplist: [], // 置顶商品列表数据
        }
      }
    },
    methods: {
      //获取所以数据
      getData() {
        this.$axios.get(this.$api.goodsTop).then(res => {
          console.log(res);
          this.all = res.data.message
        })
      }
    },
    //在页面刚加载完毕时调用这个函数
    created() {
      this.getData();
    },
  }

</script>

<style scoped>


</style>

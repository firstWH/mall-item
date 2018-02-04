<template>
  <div>
    <div class="section" v-for='item in all' :key="all.level1cateid">

      <!--子类-->
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <!-- 子集分类参照的对象是父元素的item，而不是 all -->
          <router-link to="" v-for="subitem in item.level2catelist" :key="subitem.subcateid">
              {{ subitem.subcatetitle }}
          </router-link>
          <router-link to="path">更多</router-link>
            <i>+</i>
          </a>
        </p>
      </div>
      <!--/子类-->
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            
            <!-- 同级分类v-for 的项 item，可以写一样的名字，因为各自有自己的作用区域互不干扰，但，子级分类不能与父级名字相同 -->
            <li v-for='subitem in item.datas' :key="subitem.artID">
              <router-link to="path">
                <div class="img-box">
                  <img :src="subitem.img_url">
                </div>
                <div class="info">
                  <h3>{{subitem.artTitle}}</h3>
                  <p class="price">
                    <b>¥{{subitem.sell_price}}</b>元</p>
                  <p>
                    <strong>库存 {{subitem.stock_quantity}}</strong>
                    <span>市场价：
                      <s>{{subitem.market_price}}.00</s>
                    </span>
                  </p>
                </div>
              </router-link>
            </li>
  
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        all:[
          {
            level1cateid: 40,
            catetitle: "手机数码",
            level2catelist: [],
            datas: [],
          }
        ]
      }
    },

    methods: {
      //获取所有数据
      getData(){
        //get请求，第一个参数 请求路径，第二个参数
        this.$axios.get(this.$api.goodsContent).then(src=>{
          this.all=src.data.message
        })
      }
    },
    created () {
      this.getData();
    }
  }

</script>

<style scoped>


</style>

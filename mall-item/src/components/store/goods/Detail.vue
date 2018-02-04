<template>
  <div>
    <!-- 导航栏 -->
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <router-link to="/">首页</router-link> &gt;
        <router-link to="">商品详情</router-link>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          
          <!--页面左边-->
          <div class="left-925">
            <div class="goods-box clearfix">
              <!--商品图片-->
              <div class="pic-box">

              </div>
              <!--/商品图片-->

              <!--商品信息-->
              <datail-info :info="goods.goodsinfo"></datail-info>
              <!--/商品信息-->
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <!--选项卡-->
              <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                <ul>
                  <li>
                    <a class="selected" href="javascript:;">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" class="">商品评论</a>
                  </li>
                </ul>
              </div>
              <!--/选项卡-->

              <!--选项内容-->
              <div class="tab-content entry" style="display:block;">
                内容
              </div>

              <div class="tab-content" style="display: block;">
                <!--网友评论-->
                <div class="comment-box">
                  <!--取得评论总数-->
                  <form id="commentForm" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </form>
                  <ul id="commentList" class="list-box">
                    <p style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                    <li>
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>匿名用户</span>
                          <span>2017/10/23 14:58:59</span>
                        </div>
                        <p>testtesttest</p>
                      </div>
                    </li>
                    <li>
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>匿名用户</span>
                          <span>2017/10/23 14:59:36</span>
                        </div>
                        <p>很清晰调动单很清晰调动单</p>
                      </div>
                    </li>
                  </ul>
                  <!--放置页码-->
                  <div class="page-box" style="margin:5px 0 0 62px">
                    <div id="pagination" class="digg">
                      <span class="disabled">« 上一页</span>
                      <span class="current">1</span>
                      <span class="disabled">下一页 »</span>
                    </div>
                  </div>
                  <!--/放置页码-->
                </div>

                <!--/网友评论-->
              </div>

            </div>

          </div>
          <!--/页面左边-->

          <!--页面右边-->
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="item in goods.hotgoodslist" :key="item.id">
                    <div class="img-box">
                      <img :src="item.img_url">
                    </div>
                    <div class="txt-box">
											<!-- 点击推荐商品后跳转首页 -->
											<router-link :to="{ name: 'goodsList', params: { id: item.id } }">
											{{item.title}}
											</router-link>
                      <span>{{item.add_time | date}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--/页面右边-->

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Comment from './common/Comment';
  import DatailInfo from './common/DatailInfo';
  import DatailView from './common/DatailView';

  export default {
		data(){
			return{
				goods:{
					goodsinfo:{},
					imglist:[],
					hotgoodslist:[],
				}
			}
		},
		methods:{
			//获取所有数据
			getData(){
				this.$axios.get(this.$api.goodsDetail + this.id).then(res=>{
          this.goods=res.data.message;
          console.log(res);
				})
			}
		},
		created () {
			//先拿到首页传过来的商品id，对应id才能生成对应的详细信息,注意$route,不是router、routes
			this.id=this.$route.params.id;
			this.getData();
		},
  }

</script>

<style scoped>


</style>

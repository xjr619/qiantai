<template>
  <div class="section">
    <div class="wrapper">
      <div class="wrap-box">
        <!--类别菜单-->
        <div class="left-220" style="margin:0;">
          <div class="banner-nav">
            <ul>
              <!--此处声明下面可重复循环-->

              <li v-for="item in all.catelist" :key="item.id">
                <h3>
                  <i class="iconfont icon-arrow-right"></i>
                  <span>{{item.title}}</span>
                  <p>
                    <span v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}</span>
                  </p>
                </h3>
                <div class="item-box">
                  <!--如有三级分类，此处可循环-->
                  <dl>
                    <dt>
                      <a href="/goods/40.html">{{item.title}}</a>
                    </dt>
                    <dd>

                      <!-- <a href="/goods/43.html" v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}</a> -->
                      <!-- 封装一个组件递归调用自己 -->
                      <app-category :list="item.subcates"></app-category>
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

            <el-carousel :interval="4000" type="card" height="200px">
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

            <li v-for="(item,index) in all.toplist" :key="item.id">
              <div class="img-box">
                <label>{{index + 1}}</label>
                <img :src="item.img_url">
              </div>
              <div class="txt-box">
                <a href="/goods/show-98.html">{{item.title}}</a>
                <span>{{item.add_time}}</span>
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
import AppCategory from "./Category.vue";
export default {
  components: {
    AppCategory
  },
  data() {
    return {
      all: {
        catelist: [], //分类列表数据
        sliderlist: [], //轮播图
        toplist: [] //置顶商品数据
      }
    };
  },
  methods: {
    getData() {
      // 请求商品数据
      this.$http.get(this.$api.goodsTop).then(res => {
        this.all = res.data.message;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>

</style>
<template>
    <div>
        <Row>
            <!--快捷分享-->
            <iCol span="24" style="padding:0 0 15px 15px">
                <div class="tool_user_child child">
                    <iCol span="18">
                        <Input v-model="content" type="textarea" :rows="8" placeholder="请输入字符串" class="w_input"></Input>
                    </iCol>
                    <iCol span="6">
                        <div  style="width: 250px;margin:0 auto;height: 178px;position: relative">
                            <Cascader v-if="plug_tags.length > 0" :data="plug_tags" v-model="type"
                                      @on-change="on_sel" placeholder="请选择插件分类" class="w_input"></Cascader>

                            <Button type="ghost" class="pull-right"
                                    style="margin-top:15px"
                                    @click="quick_share"
                            >快速分享</Button>
                            <div style="clear: both"></div>
                            <Button type="ghost"
                                    style="position:absolute;left: 0;bottom: 0"
                                    @click="quick_share_plug(1)"
                            >整合界面分享</Button>
                            <Button type="ghost"
                                    style="position:absolute;right: 0;bottom: 0"
                                    @click="quick_share_plug(2)"
                            >原创插件分享</Button>
                        </div>

                    </iCol>
                    <div style="clear: both"></div>
                </div>
            </iCol>

            <!--最新主题-->
            <iCol span="18">
                <div class="div_block my_card_hover">
                    <div class="tool_user title">
                        <strong>最新主题</strong>
                    </div>
                    <div class="tool_user_child child">
                        <ul>
                            <li v-for="v in recent_plugs">
                                <router-link :title="v.title"
                                             :to="{name:'plug.info' , params:{id: v.id}}">
                                    <Icon type="arrow-right-b"></Icon>
                                    <strong class="my_a_style normal_font_hover"
                                            :class="{'bl_hover_line_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                            style="padding-left: 10px;">{{v.title.substring(0, 60)}}</strong>
                                    <span class="pull-right">{{v.user.nickname}} - {{v.download_num}}次下载 - <span :style="todd_time === v.created_at ? 'color:#d13030' : ''">{{v.created_at}}</span></span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </iCol>
            <!--网站公告-->
            <iCol span="6">
                <div class="div_block my_card_hover" style="width: 250px;margin:0 auto">
                    <div class="tool_user title tool_title">
                        <strong class="hover_hand"
                                :class="{'title_hover': is_title_hover === 1,'bl_border_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                v-on:mouseenter="is_title_hover = 1"
                        >网站公告</strong>
                        <strong class="hover_hand"
                                :class="{'title_hover': is_title_hover === 2,'bl_border_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                v-on:mouseenter="is_title_hover = 2"
                        >网站统计</strong>
                    </div>
                    <div class="tool_user_child child" style="height: 100px">
                        <span v-if="is_title_hover === 1">{{tools.notice}}</span>
                        <ul v-else>
                            <div class="col-md-6">
                                <li>资源总数：{{census.plugs_count}}</li>
                                <li>WA资源：{{census.was_count}}</li>
                            </div>
                            <div class="col-md-6">
                                <li>游戏插件：{{census.youxi_count}}</li>
                                <li>TMW资源：{{census.tmws_count}}</li>
                            </div>
                            <div class="col-md-12">
                                <li>最近更新：{{census.last_time}}</li>
                            </div>
                            <div style="clear: both"></div>
                        </ul>
                    </div>
                </div>

                <div class="div_block my_card_hover" style="width: 250px;margin:15px auto;">
                    <div class="tool_user title tool_title">
                        <strong>用户统计</strong>
                    </div>
                    <div class="tool_user_child child">
                        <ul>
                            <div class="col-md-6">
                                <li>用户总数：{{census.user_count}}</li>
                                <li>联盟用户：{{census.lm_count}}</li>
                            </div>
                            <div class="col-md-6">
                                <li>今日访问：{{total_person}}</li>
                                <li>部落用户：{{census.bl_count}}</li>
                            </div>
                            <div class="col-md-12">
                                <li>欢迎新会员：{{new_user}}</li>
                            </div>
                            <div style="clear: both"></div>
                        </ul>
                    </div>
                </div>
                <div class="div_block zf_div hover_hand" @click="modal_zj = true" style="margin-left: 0">
                    <img src="/images/pay/paypal.png" alt="">
                </div>
            </iCol>
            <div style="clear: both"></div>
            <!--WeakAuras-->
            <iCol span="9">
                <div class="div_block my_card_hover">
                    <div class="tool_user title">
                        <strong>WeakAuras</strong>
                        <router-link to="/waTmw/wa" class="pull-right my_a_style"
                                     style="padding-right: 10px;font-size: 12px;width: 40px">更多
                        </router-link>
                    </div>
                    <div class="tool_user_child child">
                        <ul>
                            <li v-for="v in was">
                                <router-link :title="v.title"
                                             :to="{name:'plug.info' , params:{id: v.id}}">
                                    <Icon type="arrow-right-b"></Icon>
                                    <strong class="my_a_style normal_font_hover"
                                            :class="{'bl_hover_line_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                            style="padding-left: 10px;">{{v.title.substring(0, 20)}}</strong>
                                    <span class="pull-right">{{v.download_num}}次下载 -  <span :style="todd_time === v.created_at ? 'color:#d13030' : ''">{{v.created_at}}</span></span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </iCol>
            <!--TellMeWhen-->
            <iCol span="9">
                <div class="div_block my_card_hover">
                    <div class="tool_user title">
                        <strong>TellMeWhen</strong>
                        <router-link to="/waTmw/tmw" class="pull-right my_a_style"
                                     style="padding-right: 10px;font-size: 12px;width: 40px">更多
                        </router-link>
                    </div>
                    <div class="tool_user_child child">
                        <ul>
                            <li v-for="v in tmws">
                                <router-link :title="v.title"
                                             :to="{name:'plug.info' , params:{id: v.id}}">
                                    <Icon type="arrow-right-b"></Icon>
                                    <strong class="my_a_style normal_font_hover"
                                            :class="{'bl_hover_line_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                            style="padding-left: 10px;">{{v.title.substring(0, 20)}}</strong>
                                    <span class="pull-right">{{v.download_num}}次下载 -  <span :style="todd_time === v.created_at ? 'color:#d13030' : ''">{{v.created_at}}</span></span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </iCol>
            <!--总下载量排行-->
            <iCol span="6">
                <div class="div_block my_card_hover" style="width: 250px;margin:0 auto">
                    <div class="tool_user title">
                        <strong>总下载量排行</strong>
                    </div>
                    <div class="tool_user_child child">
                        <ul>
                            <li v-for="v in download_plugs">
                                <router-link :title="v.title"
                                             :to="{name:'plug.info' , params:{id: v.id}}">
                                    <Icon type="arrow-right-b"></Icon>
                                    <strong class="my_a_style normal_font_hover"
                                            :class="{'bl_hover_line_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                            style="padding-left: 10px;">{{v.title.substring(0, 20)}}</strong>
                                    <!--<span class="pull-right">{{v.created_at}}</span>-->
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </iCol>
            <div style="clear: both"></div>
            <!--魔兽插件-->
            <iCol span="9">
                <div class="div_block my_card_hover">
                    <div class="tool_user title">
                        <strong>游戏插件</strong>
                        <router-link to="/waTmw/plug" class="pull-right my_a_style"
                                     style="padding-right: 10px;font-size: 12px;width:40px">更多
                        </router-link>
                    </div>
                    <div class="tool_user_child child">
                        <ul>
                            <li v-for="v in plugs">
                                <router-link :title="v.title"
                                             :to="{name:'plug.info' , params:{id: v.id}}">
                                    <Icon type="arrow-right-b"></Icon>
                                    <strong class="my_a_style normal_font_hover"
                                            :class="{'bl_hover_line_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                            style="padding-left: 10px;">{{v.title.substring(0, 20)}}</strong>
                                    <span class="pull-right">{{v.download_num}}次下载 -  <span :style="todd_time === v.created_at ? 'color:#d13030' : ''">{{v.created_at}}</span></span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </iCol>
            <iCol span="9">
            <div class="div_block my_card_hover">
                <div class="tool_user title">
                    <strong>易游</strong>
                    <router-link to="/waTmw/plug" class="pull-right my_a_style"
                                 style="padding-right: 10px;font-size: 12px;width: 40px">更多
                    </router-link>
                </div>
                <div class="tool_user_child child">

                </div>
            </div>
            </iCol>
            <!--月下载量排行-->
            <iCol span="6">
                <div class="div_block my_card_hover" style="width: 250px;margin:0 auto">
                    <div class="tool_user title">
                        <strong>月下载量排行</strong>
                    </div>
                    <div class="tool_user_child child">
                        <ul>
                            <li v-for="v in download_plugs_this_mouth">
                                <router-link :title="v.title"
                                             :to="{name:'plug.info' , params:{id: v.id}}">
                                    <Icon type="arrow-right-b"></Icon>
                                    <strong class="my_a_style normal_font_hover"
                                            :class="{'bl_hover_line_color': (userInfo && userInfo.camp && userInfo.camp === 2 ) || (!userInfo &&choice_cmap === '2')}"
                                            style="padding-left: 10px;">{{v.title.substring(0, 20)}}</strong>
                                    <!--<span class="pull-right">{{v.created_at}}</span>-->
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </iCol>
            <div style="clear: both"></div>
        </Row>

        <div class="jz_div" v-show="modal_zj" @click="modal_zj = false">
            <img src="/images/pay/juanzeng.jpg"   class="jz_img" alt="">
        </div>
    </div>
</template>

<script>
    import Rank from '../common/Rank.vue'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                was: [],
                modal_zj: false,
                census: {},
                tmws: [],
                plugs: [],
                total_person: '',
                new_user: '',
                recent_plugs: [],
                download_plugs: [],
                download_plugs_this_mouth: [],
                plugs_count: 0,
                this_page: 1,
                content: '',
                plug_tags: [],
                type: [],
                is_title_hover: 1,
                todd_time: ''
            }
        },
        computed: mapState([
            'userInfo', 'choice_cmap' , 'tools'
        ]),
        watch: {
            content(){
                this.keyUp()
            },
            '$route'(to, from) {
                this._init()
                this.tag_active = 0
                this.tag_active_pid = 0
            }
        },
        mounted() {
            this._init()
        },
        methods: {
            keyUp() {
                this.content = this.content.replace(/[^\w\.\/]/ig,'')
            },
            quick_share() {
                if(!this.userInfo){
                    myDialog(`请先 <a href="/register" class="${(this.userInfo && this.userInfo.camp && this.userInfo.camp === 2 ) || (!this.userInfo && this.choice_cmap === '2') ? 'bl_font_color' : 'lm_font_color'}">注册</a>
                     <a href="/login"  class="${(this.userInfo && this.userInfo.camp && this.userInfo.camp === 2 ) || (!this.userInfo && this.choice_cmap === '2') ? 'bl_font_color' : 'lm_font_color'}">登录</a>`
                        , (this.userInfo && this.userInfo.camp && this.userInfo.camp === 2 ) || (!this.userInfo && this.choice_cmap === '2') ? 'bl_button_color' : '')
                    return false
                }
                if (this.content === '') {
                    myDialog('请先填写字符串(不能包含中文)')
                    return false
                }

                if (this.type.length === 0) {
                    myDialog('请选择分类')
                    return false
                }
                localStorage.setItem('quick_share_content', this.content)
                localStorage.setItem('quick_share_type', this.type)
                this.$router.push('/upload')
            },
            quick_share_plug(k){
                if(!this.userInfo){
                    myDialog(`请先 <a href="/register" class="${(this.userInfo && this.userInfo.camp && this.userInfo.camp === 2 ) || (!this.userInfo && this.choice_cmap === '2') ? 'bl_font_color' : 'lm_font_color'}">注册</a>
                     <a href="/login"  class="${(this.userInfo && this.userInfo.camp && this.userInfo.camp === 2 ) || (!this.userInfo && this.choice_cmap === '2') ? 'bl_font_color' : 'lm_font_color'}">登录</a>`
                        , (this.userInfo && this.userInfo.camp && this.userInfo.camp === 2 ) || (!this.userInfo && this.choice_cmap === '2') ? 'bl_button_color' : '')
                    return false
                }
                this.$router.push('/upload')
            },
            on_sel(v) {
                this.type = v
            },
            _init() {
                axios.get('plug_all_info_no_login').then(res => {
                    this.plug_tags = res.data.res
                })
                this.get_plugs()
            },
            change_tag(id, pid) {
                let old_tag_id = this.tag_active
                this.tag_active = id
                this.tag_active_pid = pid

                if (old_tag_id !== id) {
                    this.get_plugs();
                }
            },
            // 得到插件数据
            get_plugs() {
                axios.get(`plug_index`).then(res => {
                    this.plugs = res.data.plugs
                    this.was = res.data.was
                    this.tmws = res.data.tmws
                    this.recent_plugs = res.data.recent_plugs
                    this.download_plugs = res.data.download_plugs
                    this.download_plugs_this_mouth = res.data.download_plugs_this_mouth
                    this.census = res.data.census
                    this.total_person = res.data.total_person
                    this.new_user = res.data.new_user
                    this.todd_time = res.data.today_time
                })
            },

            login() {
                localStorage.setItem('redirect', this.$route.path)
                window.location.href = "/login"
            },
        },
        components: {
            'v-rank': Rank
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .div_block
        margin-left 15px
        margin-bottom 15px
        background-color #fff
        &.zf_div
            text-align center
            img
                margin 0 auto
        .title
            background-color #f5f5f5
            padding 5px 10px
            width 100%
            border 1px solid #ddd
            font-size 14px
            &.tool_zz
                background #266ec1
                color #fff
        .child
            padding 5px 10px
            width 100%
            border 1px solid #ddd
            border-top none
            ul
                li
                    padding 5px 0
        .tool_title
            .title_hover
                border-bottom: 1px solid #266ec1
                padding-bottom: 8px

    .jz_div
        width 100%
        height 100%
        background rgba(255,255,255,0.6)
        position fixed
        left 0
        top 0
        z-index 9999
        display flex
        justify-content center
        align-items center
        .jz_img
            position fixed
            z-index 99999

</style>

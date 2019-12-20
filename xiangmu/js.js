var router = new VueRouter({
    routes: [{
            path: '/',
            component: {
                template: '#shouye',
                data() {
                    return {
                        lunbo_arr: ["https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS83NjkwMTEyZDQyMjM3ZjlhODQ5ZWM2NzQ3Y2Y4YzFhZi5wbmc_p_p100_p_3D.png", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9mZWQ2MDIwMDJlNmI2NGRiNWFkODQyYTA3ZTliODk4Ni5wbmc_p_p100_p_3D.png", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84MGQyNjk2NjM0MmY1MzVmN2RiYTAyNjY5M2YyZDlmNy5wbmc_p_p100_p_3D.png"],
                        hov_arr: [{ txt1: "12000+", txt2: "成功案例" },
                            { txt1: "010+", txt2: "解决方案" },
                            { txt1: "200+", txt2: "合作伙伴" },
                            { txt1: "050+", txt2: "技术专利" }
                        ],
                        imgarr: [{ img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8wN2I3NjA1NGMyNDA5ZmY3ZjAzYzFlMWUyOWY5OThhNi0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", txtone: "THE PROJECT", txttwo: "NAME 01" }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85MDE3OWU5MzhmYWExODNmOGIwMWM4ODBmMDM3OTc2Ny0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", txtone: "THE PROJECT", txttwo: "NAME 01" }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8zYmUyZTI0MWQ1Mzg2MGZmZGQ3MzM2M2I5YmIyN2M1My0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", txtone: "THE PROJECT", txttwo: "NAME 01" }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy9mNmY4MjRjNmU0YmVlZDVkMjRmZGVkZGVkMGRmZjZkOS0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png", txtone: "THE PROJECT", txttwo: "NAME 01" }]

                    }
                }
            }
        },
        {
            path: '/chanpin/:uid',
            component: {
                template: '#chanpin',
                methods: {
                    show_img(index) {
                        var x = this.show_arr[index]
                        return x;
                    }
                },
                data() {
                    return {
                        getindex: null,
                        show_img2: 0,
                        lunbo_arr: ["https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS83NjkwMTEyZDQyMjM3ZjlhODQ5ZWM2NzQ3Y2Y4YzFhZi5wbmc_p_p100_p_3D.png", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9mZWQ2MDIwMDJlNmI2NGRiNWFkODQyYTA3ZTliODk4Ni5wbmc_p_p100_p_3D.png", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84MGQyNjk2NjM0MmY1MzVmN2RiYTAyNjY5M2YyZDlmNy5wbmc_p_p100_p_3D.png"],
                        show_arr: [
                            { tit: "全部设备", img: ["https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", ], tit2: ["仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i"] },
                            { tit: "设备分类一", img: ["https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", ], tit2: ["仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i"] },
                            { tit: "设备分类二", img: ["https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", ], tit2: ["仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i"] },
                            { tit: "设备分类三", img: ["https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84OWI5YTVlYjdiNmFiNmQ1ZmNmMWI2MTI0MDI5YWExZi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", ], tit2: ["仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i", "仪器设备Um390i"] }
                        ]
                    }
                }
            }
        },
        {
            path: '/xinwen/:uid',
            component: {
                template: '#xinwen',
                data() {
                    return {
                        newarr: [{ img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", tit: "  医疗PPP有望成后起之秀 概念股早盘活跃", time: "发布日期：2017年03月15日", cot: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..." }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iM2JhNzljNmFhZWY4ZGYyNDM2ZWY2M2ViNjU5YWI4Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", tit: "  医疗PPP有望成后起之秀 概念股早盘活跃", time: "发布日期：2017年03月15日", cot: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..." }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", tit: "  医疗PPP有望成后起之秀 概念股早盘活跃", time: "发布日期：2017年03月15日", cot: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..." }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", tit: "  医疗PPP有望成后起之秀 概念股早盘活跃", time: "发布日期：2017年03月15日", cot: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..." }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", tit: "  医疗PPP有望成后起之秀 概念股早盘活跃", time: "发布日期：2017年03月15日", cot: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..." }, { img: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg", tit: "  医疗PPP有望成后起之秀 概念股早盘活跃", time: "发布日期：2017年03月15日", cot: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..." }]
                    }
                }
            }
        },
        { path: '/joinwe/:uid', component: { template: '#joinwe' } },
        { path: '/callwe/:uid', component: { template: '#callwe' } }
    ]
})
// <!-- 首页组件 -->////////////////////////////
Vue.component('displaychanpin', {
    template: `
    <div class="displaychanpin">
            <h5><slot name="txt"></slot></h5>
            <div>
                <i class="displaychanpin2"></i>
                <span>
                    产品系列
                </span>
                <i class="displaychanpin3"></i>
            </div>
        </div>`,
})

Vue.component('showchanpin2_img', {
    template: `
    <div>
        <div class="showchanpin2-back-bottom-img">
            <slot name="img"></slot>
        </div>
        <div>
            <slot name="txtone"></slot>
            <slot name="txttwo"></slot>
        </div>
    </div>
    `
})

Vue.component('showchanpin', {
    template: `
    <div class="showchanpin" @mouseover="onmouse()" @mouseout="onleave" >
            <h5><slot name="tit"></slot></h5>
            <div class="showchanpin-xian"><span :style="{}"></span></div>
            <p>
                <slot name="cont"></slot>
            </p>
            <div class="but">
                <slot name="but"></slot>
            </div>
        </div>
    `,
    methods: {
        onmouse($event) {
            $('.showchanpin-xian span').width('100%')
            $('.showchanpin .but').css('borderColor', '#555')
            $('.showchanpin h5').css('color', '#e30190')
            $('.showchanpin').css('borderColor', '#555')
        },
        onleave() {
            $('.showchanpin-xian span').width('0')
            $('.showchanpin h5').css('color', '')
            $('.showchanpin .but').css('borderColor', '')
            $('.showchanpin').css('borderColor', '')
        }
    }



})
///////////////////////////////////////新闻/////////////////
Vue.component('newtxt', {
    template: `
        <div class="clearfix" style="padding:10px;">
            <div style="float:left;width:160px;height:100px;margin-right:20px;margin-top:10px;">
                <slot name="img" style="width:160px;height:100px;"></slot>
            </div>
            <div style="float:left;width:600px;">
                <h5 style="font-size:16px;line-height:2em;font-weight:normal;"><slot name="tit"></slot> </h5>
                <p style="font-size:12px;line-height:3em;color:#8c8c8c"><slot name="time"></slot></p>
                <div style="font-size:12px;line-height:16px;color:#8c8c8c">
                    <slot name="cot"></slot>
                </div>
            </div>
        </div>
    `
})

///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

Vue.component('join', {
    template: `
         <div class="clearfix" style="padding:20px; border:1px solid #ddd; width:888px; text-indent:2em;margin-left:150px;">
            <div>
                <h5 style="font-size: 18px; ">区域销售经理</h5>
                <p>发布日期：2016-08-10</p>
            </div>
            <div style="margin: 10px auto;width: 95%;border-top: 1px solid #ccc;">
                
            </div>
            <div>
                <div style="margin:20px auto;" class="clearfix">
                    <div style="float: left;width: 50%;">
                        <p>公司事业部:<span style="font-weight:bold;">某某公司</span></p>
                        <p>工作地点:<span style="font-weight: bold;">北京</span></p>
                    </div>
                    <div style="float: left;width: 50%;" class="clearfix">
                        <p>职位性质：<span style="font-weight: bold;">制造/生产/加工</span></p>
                        <p>招聘人数：<span style="font-weight: bold;">10人</span></p>
                    </div>
                </div>
                <div style="margin:20px auto;">
                    <p >职位概述：</p>
                    <p style="color:#808080">负责公司全产品华东区域分销工作。</p>
                </div>
                <div style="margin:20px auto;">
                    <p>职位描述：</p>
                    <p style="color:#808080">1. 负责指定地区设备的市场推广工作，完成各项销售目标；</p>
                    <p style="color:#808080">2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；</p>
                    <p style="color:#808080">3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；</p>
                    <p style="color:#808080">4. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；</p>
                    <p style="color:#808080">5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；</p>
                </div>
                <div style="margin:20px auto;">
                    <p>任职条件：</p>
                    <p style="color:#808080">1. 理工科相关专业，大学本科以上学历；</p>
                    <p style="color:#808080">2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；</p>
                    <p style="color:#808080">3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；</p>
                    <p style="color:#808080">3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；</p>
                    <p style="color:#808080">5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</p>
                </div>
                <div style="margin: 20px auto;width: 95%;border-top: 1px solid #ccc;"></div>
                <div style="width: 142px;height: 42px;background-color: rgb(277,0,131);text-align: center;line-height: 42px; color:#fff;margin-left:40px;">
                    申请职位
                </div>
            </div>
        </div>
    `
})



///


new Vue({
    el: '#doc',
    router,
    data: {
        ind: 0,
        href_arr: [{ href: "#/", title: "首页" }, { href: "#/chanpin/1", title: "产品系列" }, { href: "#/xinwen/1", title: "新闻中心" }, { href: "#/joinwe/1", title: "加入我们" }, { href: "#/callwe/1", title: "联系我们" }],

    },
    methods: {

    }
})
new Swiper('.swiper-container')

var mySwiper = new Swiper('.swiper-container', {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
})
var mySwiper = new Swiper('.banner2', {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    pagination: {
        el: '.swiper-pagination2',
    },
})
var mySwiper = new Swiper('.box', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    autoplay: {
        delay: 2000
    },
    speed: 3000
    // 如果需要分页器

    // 如果需要滚动条
})
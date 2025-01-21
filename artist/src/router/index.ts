import { createRouter, createWebHashHistory } from 'vue-router'
import UserStore from "../store/UserStore";
let router = createRouter({
    routes: [
        {
            path: "/",
            redirect: "/home"
        }, {
            path: "/login",
            component: () => import("../views/Login.vue")
        }, {
            path: "/home",
            component: () => import("../views/Home.vue"),
            children: [
                {
                    path: "",
                    component: () => import('../views/home/a.vue')
                },
                {
                    path: "/a",
                    component: () => import('../views/home/a.vue')
                }, {
                    path: "/b",
                    component: () => import('../views/home/b.vue')
                }
                , {
                    path: "/c",
                    component: () => import('../views/home/c.vue')
                }
            ]
        },

    ],   //组件与路由url的映射关系
    history: createWebHashHistory()
});

// router.beforeEach((to, from, next) => {
//     if (to.path == "/" || to.path == "/login") {
//         next();
//     } else {
//         const store = UserStore();
//         let account = store.getAccount;
//         if (account) {
//             next();
//         } else {
//             next("/");
//         }
//     }
// });

export default router;
import request from '/@/utils/request.ts'

/**
 * 后端控制菜单模拟json，路径在 https://gitee.com/lyt-top/vue-admin-wonderful-images/tree/master/next/menu
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 */
// 获取后端动态路由菜单(admin)
export function getMenuAdmin(params?: object) {
    return request({
        url: '/gitee/lyt-top/vue-admin-wonderful-images/raw/master/next/menu/adminMenu.json',
        method: 'get',
        params,
    });
}

// 获取后端动态路由菜单(test)
export function getMenuTest(params?: object) {
    return request({
        // url: '/gitee/lyt-top/vue-admin-wonderful-images/raw/master/next/menu/testMenu.json',
        url: '/src/api/menu/testMenu.json',
        method: 'get',
        params,
    });
}

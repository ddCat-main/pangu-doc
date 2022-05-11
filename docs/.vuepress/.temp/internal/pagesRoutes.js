import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8ad56906","/cloud.html",{"title":"微服务架构"},["/cloud","/cloud.md"]],
  ["v-31071e3e","/config.html",{"title":"开发环境准备"},["/config","/config.md"]],
  ["v-657a00ed","/plugin.html",{"title":"plugin"},["/plugin","/plugin.md"]],
  ["v-6f9a3970","/start.html",{"title":"启动项目"},["/start","/start.md"]],
  ["v-03d3f16c","/synopsis.html",{"title":"产品简介"},["/synopsis","/synopsis.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

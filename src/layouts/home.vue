<!--
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-12 16:40:49
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-03-14 16:12:29
 * @FilePath: /oiltrack-management/src/layouts/home.vue
 * @Description: home layout
 * Copyright (c) 2024 by mxj, All Rights Reserved.
-->
<template>
  <main text="gray-700 dark:gray-200">
    <RouterView />

    <div mx-auto mt-15 text-center text-14 opacity-50>
      <nav fixed bottom-0 w-100vw flex items-center justify-around bg-layout-navcolor p-3vw>
        <button shiny-text>
          Home
        </button>
        <button shiny-text-gray>
          monitor
        </button>
        <button shiny-text-black-red>
          premiss
        </button>
        <button shiny-text>
          mine
        </button>
      </nav>
    </div>
  </main>
</template>

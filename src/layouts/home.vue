<template>
  <main text="gray-700 dark:gray-200">
    <RouterView />

    <div mx-auto mt-15 text-center text-14 opacity-50>
      <nav fixed bottom-0 w-100vw flex items-center justify-around bg-layout-background>
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

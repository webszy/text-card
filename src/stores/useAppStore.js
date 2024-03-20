import { defineStore } from 'pinia'
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAppStore = defineStore('app', {
    state:()=>({
        isDev: import.meta.env.DEV,
        CardRefs:[]
    })
})

<template>
    <div class="w-full grow border-l border-l-neutral-200 px-3 py-5">
        <div class="flex flex-wrap items-center mb-2">
            <div class="w-1 h-6 rounded bg-emerald-700 shrink-0 m-1 mr-2"></div>
            <h1 class="text-xl font-bold sm:text-2xl">{{ postInfo.title }}</h1>
            <Router-link
                to="/"
                class="block group flex items-center text-neutral-600 bg-neutral-100 hover:bg-emerald-700 rounded p-2 ml-auto">
                <ChevronDoubleLeftIcon class="size-4 group-hover:text-neutral-100"></ChevronDoubleLeftIcon>
                <span class="text-xs group-hover:text-neutral-100">回列表</span>
            </Router-link>
        </div>
        <p class="text-sm pl-1 mb-1">{{ postInfo.date }}</p>
        <Router-link
            v-for="tag in postInfo.tags"
            :key="tag"
            :to="{
                name: 'tags',
                params: {
                    tag: tag
                }
            }"
            class="article-tag">#{{ tag }}
        </Router-link>
        <hr class="my-4">
        

        <!-- 文章內容 -->
        <VueMarkdown 
            v-if="postContent"
            :source="postContent" 
            :options="markdownOptions"
            class="markdown-body"/>
        <!-- 底部頁籤   -->
        <div class="flex justify-between items-center gap-3 py-3 mb-3">
            <router-link
                :to="{
                    name: 'post',
                    params: {
                        id: prevPost?.id || null
                    }
                }"
                class="group w-1/2 text-neutral-800 flex items-center py-2 rounded hover:text-emerald-700">
                <div class="shrink w-8 h-8 text-neutral-400 mr-2 group-hover:text-emerald-700">
                    <ArrowLeftIcon></ArrowLeftIcon>
                </div>
                <div class="flex flex-col text-left">
                    <span class="text-sm font-medium pl-1">PREV</span>
                    <p class="text-sm wrap-break-word">{{ prevPost?.title }}</p>
                </div>
            </Router-link>
            <div v-if="nextPost" class="w-1 h-10 bg-secondary"></div>
            <router-link
                v-if="nextPost"
                :to="{
                    name: 'post',
                    params: {
                        id: nextPost?.id || null
                    }
                }"
                class="group w-1/2 text-neutral-800 flex justify-end items-center py-2 rounded hover:text-emerald-700">
                
                <div class="flex flex-col text-right">
                    <span class="text-sm font-medium text-right pr-1">NEXT</span>
                    <p class="text-sm wrap-break-word">{{ nextPost?.title }}</p>
                </div>
                <div class="shrink w-8 h-8 text-neutral-400 ml-2 group-hover:text-emerald-700">
                    <ArrowRightIcon></ArrowRightIcon>
                </div>
            </Router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { createHighlighter } from 'shiki'
import { useRoute, useRouter } from 'vue-router'
import matter from 'gray-matter'
import VueMarkdown from 'vue-markdown-render'
import 'github-markdown-css/github-markdown-light.css'
import { ArrowLeftIcon, ArrowRightIcon ,CalendarDaysIcon, ArrowUturnLeftIcon, ChevronDoubleLeftIcon } from '@heroicons/vue/20/solid'

//文章格式選項
const markdownOptions = ref({});
//文章內容
const postContent = ref('');
//文章標題、日期等資訊
//所有文章資料
const postListData = ref([])
//當前路由顯示的文章id
const route = useRoute();
const currentPostId = computed(()=>{
    return route.params.id
})
//當前文章的前一篇id
const prevPost = ref(null);
//當前文章的下一篇id
const nextPost = ref(null);

const postInfo = ref({});

//編譯目前文章
const renderPost = () => {
    //找到當前的文章
    const currentFile = postListData.value.find((post)=>{
        return post.id === currentPostId.value;
    })
    
    if(currentFile){
        //把當前的文章內容顯示出來
        postContent.value = currentFile.content;
    }
    //把當前的標題資訊顯示出來
    postInfo.value = {
        title: currentFile.title,
        date: currentFile.date,
        tags: currentFile.tags
    }
    //找到當前的文章id
    const currentIndex = postListData.value.findIndex((post)=>{
        return post.id === currentPostId.value;
    })
    prevPost.value = postListData.value[currentIndex - 1] || null;
    nextPost.value = postListData.value[currentIndex + 1] || null;
}

//監聽路由id變化，重新渲染文章
watch(currentPostId,(newId)=>{
    if(newId){
        renderPost();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})

onMounted( async() => {
	const highlighter = await createHighlighter({
		themes: ['one-dark-pro'],
		langs: ['html','css','scss','sass','js','vue','json','toml','vue','bash','markdown']
	})
	markdownOptions.value = {
		html: true,
		linkify: true,
		typographer: true,
		highlight: (code, lang) => {
			return highlighter.codeToHtml(code,{
				lang: lang || 'text',
				theme: 'one-dark-pro'
			})
		}
	}

    //取得所有文章
    const postFiles = import.meta.glob('../posts/*.md',{ eager: true, query: 'raw' });
    //資料轉換
    const postData = Object.keys(postFiles).map((path)=>{
        const rawContent = postFiles[path].default;
        const { data, content } = matter(rawContent);
        const formattedDate = data.date instanceof Date
        ? data.date.toISOString().split('T')[0]
        : data.date;
        return{
            id: path.split('/').pop().replace('.md',''),
            title: data.title,
            date: formattedDate,
            content: content,
            tags: data.tags
        }
    })
    postListData.value = postData;
    renderPost();
})
</script>
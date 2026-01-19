<template>
    <div class="relative z-2 mt-3">
        <!-- 上層 -->
        <div class="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4">
            <!-- 左側分類 -->
            <div class="hidden sm:block">
                <div class="bg-white rounded p-3 py-5 mb-3">
                    <div class="flex">
                        <div class="w-1 h-5 rounded bg-emerald-700 shrink-0 m-1 mr-2"></div>
                        <div class="grow-1">
                            <div class="text-lg text-neutral-900 font-medium mb-5">Categories</div>
                            <ul>
                                <li v-for="tag in tagsList" :key="tag"
                                    class="flex justify-between items-center mb-2">
                                    <Router-link
                                        :to="{
                                            name: 'tags',
                                            params: {
                                                tag: tag.name
                                            }
                                        }"
                                        class="text-neutral-800 group flex justify-between w-full hover:text-emerald-700 py-1">{{ tag.name }}
                                        <span class="group-hover:bg-emerald-700 group-hover:text-white flex justify-center   items-center text-sm text-emerald-600 bg-neutral-200 rounded px-2 transition-all">{{ tag.count }}</span>
                                    </Router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右側列表 -->
            <ul class="min-w-0">
                <li
                    v-for="post in postList"
                    :key="post.id"
                    class="mb-3">
                    <article class="flex bg-white rounded p-3 py-5">
                        <div class="w-1 h-5 rounded bg-emerald-700 shrink-0 m-1 mr-2"></div>
                        <div class="text-left">
                            <Router-link
                                :to="{
                                    name: 'post',
                                    params: {
                                        id: post.id
                                    }
                                }"
                                class="group">
                                <h4 class="article-title">{{ post.title }}</h4>
                                <p class="text-sm text-neutral-600">{{ post.date }}</p>
                                <p class="article-content">{{ post.content }}</p>
                            </Router-link>
                            <Router-link
                                v-for="tag in post.tags"
                                :key="tag"
                                :to="{
                                    name: 'tags',
                                    params: {
                                        tag: tag
                                    }
                                }"
                                class="article-tag">
                                #{{ tag }}
                            </Router-link>
                        </div>
                    </article>
                </li>
            </ul>
        </div>
        <!-- 下層 -->
        <div class="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4">
            <div class="hidden sm:block"></div>
            <nav>
                <ul class="flex justify-center flex-wrap gap-1">
                    <li>
                        <Router-link
                            :to="{
                                name: 'list',
                                params: {
                                    id: currentRouteId - 1
                                }
                            }"
                            class="text-neutral-500 flex justify-center items-center w-8 aspect-square rounded-lg hover:bg-emerald-700 hover:text-white bg-neutral-800">
                            <ChevronLeftIcon class="w-5"></ChevronLeftIcon>
                        </Router-link>
                    </li>
                    <li v-for="page in pages" :key="page">
                        <Router-link
                            :to="{
                                name: 'list',
                                params: {
                                    id: page
                                }
                            }"
                            :class="['text-neutral-500 flex justify-center items-center w-8 aspect-square rounded-lg hover:bg-emerald-700 hover:text-white',page == currentRouteId ? 'bg-emerald-700 text-white':'bg-neutral-800']">
                            {{ page }}
                        </Router-link>
                    </li>
                    <li>
                        <Router-link
                            :to="{
                                name: 'list',
                                params: {
                                    id: currentRouteId + 1
                                }
                            }"
                            class="text-neutral-500 flex justify-center items-center w-8 aspect-square rounded-lg hover:bg-emerald-700 hover:text-white bg-neutral-800">
                            <ChevronRightIcon class="w-5"></ChevronRightIcon>
                        </Router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import matter from 'gray-matter'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const route = useRoute();
const router = useRouter();

const currentRouteId = computed(()=>{
    return Number(route.params.id)
});

//分類列表
const tagsList = ref();

//分頁總數量
const totalPage = ref(null);
//分頁顯示範圍
const pages = computed(()=>{
    return getNearbyRange(currentRouteId.value, 1, totalPage.value);
})
function getNearbyRange(current, min, max, size = 5) {
    const half = Math.floor(size / 2);
    let start = current - half;
    let end = current + half;
    if (start < min) {
        start = min;
        end = Math.min(min + size - 1, max);
    }
    if (end > max) {
        end = max;
        start = Math.max(max - size + 1, min);
    }
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
//一頁文章顯示數量
const pageSize = 5;
//文章列表
const postListData = ref([]);
const postList = computed(()=>{
    const startNum = (currentRouteId.value - 1) * pageSize; 
    const endNum = currentRouteId.value * pageSize;
    console.log(startNum,endNum)
    return postListData.value.slice(startNum, endNum);
});


onMounted(()=>{
    //取得所有文章
    const postFiles = import.meta.glob('../posts/*.md',{ eager: true ,query: 'raw'});
    //資料轉換
    const postData = Object.keys(postFiles).map((path)=>{
        //取得所有文章內容
        const rawContent = postFiles[path].default;
        //區分資訊和內容
        const { data, content } = matter(rawContent);
        //將資訊日期格式化
        const formattedDate = data.date instanceof Date
        ? data.date.toISOString().split('T')[0]
        : data.date;
        //將內容只取純文字
        const pureText = content
            .replace(/```[\s\S]*?```/g, '')  // 去除程式碼區塊
            .replace(/<[^>]*>/g, '')         // 去除 HTML 標籤
            .replace(/[#*`\-]/g, '')         // 去除 # * ` - 等符號
            .replace(/\n/g, ' ')             // 換行轉空格
            .trim();
        //取內容前150字元
        const sliceContent = pureText.slice(0,150) + '...';
        return{
            id: path.split('/').pop().replace('.md',''),
            title: data.title,
            date: formattedDate,
            content: sliceContent,
            tags: data.tags
        }
    })
    
    const tagCounts = {};
    postData.forEach((post) => {
        post.tags.forEach((tag) => {
            if (tagCounts[tag] === undefined) {
                tagCounts[tag] = 1;
            } else {
                tagCounts[tag] = tagCounts[tag] + 1;
            }
        });
    });
    tagsList.value = Object.entries(tagCounts).map(([key, value]) => {
			return{
				name: key,
				count: value
			}
		}
	);

    //文章以日期最新排序
    postData.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date);
    })

    //計算頁籤數量
    totalPage.value = Math.ceil( postData.length / pageSize )

    postListData.value = postData;
})
</script>
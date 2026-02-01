<template>
    <div class="grow border-l border-l-neutral-200">
        <ul>
            <li
                v-for="post in postList"
                :key="post.id">
                <article class="flex p-3 py-5 border-b border-b-neutral-200">
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
        <nav>
            <ul class="flex justify-center flex-wrap gap-1 py-5 text-neutral-500">
                <li>
                    <Router-link
                        :to="{
                            name: 'list',
                            params: {
                                id: currentRouteId - 1
                            }
                        }"
                        class="flex justify-center items-center w-8 aspect-square hover:text-emerald-700">
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
                        active-class="text-emerald-700"
                        class="flex justify-center items-center w-8 aspect-square"
                        >
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
                        class="flex justify-center items-center w-8 aspect-square hover:text-emerald-700">
                        <ChevronRightIcon class="w-5"></ChevronRightIcon>
                    </Router-link>
                </li>
            </ul>
        </nav>
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
console.log("現在頁謙",currentRouteId.value);

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
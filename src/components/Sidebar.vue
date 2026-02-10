<template>
    <div class="flex px-3 py-5 mb-3">
        <div class="w-1 h-5 rounded bg-emerald-700 shrink-0 m-1 mr-2"></div>
        <div class="grow">
            <div class="text-lg text-neutral-900 font-medium mb-5">Categories</div>
            <nav>
                <ul class="flex flex-col gap-1 min-w-0">
                    <li
                        v-for="tag in tagsData"
                        :key="tag.name"
                        class="mb-1">
                        <Disclosure
                            as="div">
                            <DisclosureButton
                                class="text-neutral-800 group flex justify-between w-full hover:text-emerald-700 py-1"
                                @click="toggleTag(tag.name)">
                                <span>{{ tag.name }}</span>
                                <span class="group-hover:bg-emerald-700 group-hover:text-white flex justify-center items-center text-sm text-emerald-600 bg-neutral-200 rounded px-2 transition-all">{{ tag.count }}</span>
                            </DisclosureButton>
                            <Transition
                                enter-active-class="transition-[grid-template-rows] duration-300 ease-out"
                                enter-from-class="grid-rows-[0fr]"
                                enter-to-class="grid-rows-[1fr]"
                                leave-active-class="transition-[grid-template-rows] duration-200 ease-in"
                                leave-from-class="grid-rows-[1fr]"
                                leave-to-class="grid-rows-[0fr]">
                                <div v-if="activeTag === tag.name" class="grid overflow-hidden">
                                    <div class="min-h-0">
                                        <DisclosurePanel
                                            static
                                            class="text-sm text-neutral-500">
                                            <ul class="flex flex-col gap-1">
                                                <li
                                                    v-for="post in tag.posts"
                                                    :key="post"
                                                    class="border-b border-b-neutral-300">
                                                    <Router-link
                                                        :to="{
                                                            name: 'post',
                                                            params: {
                                                                id: post
                                                            }
                                                        }"
                                                        class="py-2"
                                                        :class="currentRouteId === post?'text-emerald-700':'hover:text-emerald-700'">{{ post }}
                                                    </Router-link>
                                                </li>
                                            </ul>
                                        </DisclosurePanel>
                                    </div>
                                </div>
                            </Transition>
                        </Disclosure>
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
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';



const tagsData = ref([]);

//自動偵測目前的路由id
const route = useRoute();
const currentRouteId = computed(()=>{
    return Number(route.params.id)
});
console.log("目前陸游id",currentRouteId.value)


//判斷點擊的是否已經展開，如果已經展開就收合
const activeTag = ref(null)
const toggleTag = (tag)=> {
    if(activeTag.value === tag){
        activeTag.value = null
    }else{
        activeTag.value = tag
    }
}

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
    
    //統計文章數量
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
    const tagList = Object.entries(tagCounts).map(([key, value]) => {
			return{
				name: key,
				count: value,
			}
		}
	);
    const tagMap = new Map(
        tagList.map(tag => [
            tag.name,
            { ...tag, posts: [] }
        ])
    )
    postData.forEach(post => {
        post.tags.forEach(tagName => {
            const target = tagMap.get(tagName)
            if (target) {
                target.posts.push(post.id)
            }
        })
    })
    tagsData.value = [...tagMap.values()]
    //文章以日期最新排序
    postData.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date);
    })
})
</script>
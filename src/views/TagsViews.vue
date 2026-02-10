<template>
    <div class="grow px-3 py-5">
        <ul class="flex flex-col gap-1 min-w-0">
            <li
                v-for="tag in tagsData"
                :key="tag.name"
                class="rounded-lg bg-white">
                <Disclosure
                    as="div">
                    <DisclosureButton
                        class="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-neutral-900 hover:text-emerald-700"
                        @click="toggleTag(tag.name)">
                        <span>{{ tag.name }}</span>
                        <ChevronUpIcon
                            :class="activeTag === tag.name ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-emerald-700 transition-transform"/>
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
                                    class="p-3 text-sm text-neutral-500">
                                    <ul class="flex flex-col gap-1">
                                        <li
                                            v-for="post in tag.posts"
                                            :key="post">
                                            <Router-link
                                                :to="{
                                                    name: 'post',
                                                    params: {
                                                        id: post
                                                    }
                                                }"
                                                class="bg-neutral-100 p-2 hover:text-emerald-700 hover:bg-neutral-200 rounded-lg">{{ post }}
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
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import matter from 'gray-matter'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';

const route = useRoute();
const router = useRouter();

const tagsData = ref([]);

//目前點擊的tag
const activeTag = ref(null)

//判斷點擊的是否已經展開，如果已經展開就收合
const toggleTag = (tag)=> {
    if(activeTag.value === tag){
        activeTag.value = null
        router.replace(
            {
                name: 'tags'
            }
        )
    }else{
        activeTag.value = tag
        router.replace({
            name: 'tags',
            params: {
                tag: tag
            }
        })
    }
}

onMounted(()=>{
    //取得所有文章
    const postFiles = import.meta.glob('../posts/*.md',{ eager: true ,query: 'raw'});
    const postData = Object.keys(postFiles).map((path)=>{
        const rawContent = postFiles[path].default;
        const { data } = matter(rawContent);
        return{
            id: path.split('/').pop().replace('.md',''),
            title: data.title,
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

    activeTag.value = route.params.tag;
})

</script>

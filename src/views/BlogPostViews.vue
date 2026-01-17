<template>
    <div class="relative z-2">
        <div class="-mt-2">
            <div class="bg-white rounded-lg p-3 mb-3">
                <div class="text-left">
                    <VueMarkdown 
                        v-if="postContent"
                        :source="postContent" 
                        :options="markdownOptions"
                        class="markdown-body"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { createHighlighter } from 'shiki'
import { useRoute } from 'vue-router'
import matter from 'gray-matter'
import VueMarkdown from 'vue-markdown-render'
import 'github-markdown-css/github-markdown-light.css'
import { usePostStore } from '@/stores/post'

const postInfo = ref({});
const route = useRoute();
const postContent = ref('');
const markdownOptions = ref({});
const postStore = usePostStore()

onMounted( async() => {
    
	const highlighter = await createHighlighter({
		themes: ['one-dark-pro'],
		langs: ['html','css','scss','js','vue','json','toml','vue']
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

    const postId = route.params.id;

    const postFiles = import.meta.glob('../posts/*.md',{ eager: true, query: 'raw' });

    const fullPath = Object.keys(postFiles).find((path)=>{
		return path.endsWith(`${postId}.md`)
	})

    if(fullPath){

        const rawContent = postFiles[fullPath].default;
        const { data, content } = matter(rawContent);
		const formattedDate = data.date instanceof Date
		? data.date.toISOString().split('T')[0]
		: data.date;

        postStore.setPostInfo({
            title: data.title,
            date: formattedDate,
        })

        postContent.value = content;
    }
})

onUnmounted(()=>{
    postStore.resetPostInfo();
})
</script>

<style>
.markdown-body ol {
    list-style: decimal;
    padding-left: 1.5em;
}

</style>
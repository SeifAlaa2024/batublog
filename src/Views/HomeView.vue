<script setup>
import { auth } from "@/firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { ref } from "vue"


const userName = ref("")

onAuthStateChanged(auth, (user) => {
  if (user) {
    userName.value = user.displayName
  }
})
</script>


<template>
  <div class="min-h-screen bg-[#f4f9ff] text-gray-800">

    <!-- ================= NAVBAR ================= -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">TextBlog</h1>
        <ul class="flex gap-8 font-medium text-gray-600">
          <li class="hover:text-blue-600 cursor-pointer">Home</li>
          <li class="text-blue-600 font-semibold">Blog</li>
          <li class="hover:text-blue-600 cursor-pointer">Topics</li>
          <li class="hover:text-blue-600 cursor-pointer">About</li>
          <li class="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>

    <!-- ================= HERO ================= -->
    <header class="bg-gradient-to-r from-blue-100 to-blue-50 py-24">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-5xl font-bold text-blue-700 leading-tight">
         Welcome {{ auth.currentUser.email }}
        </h2>

        <h2 class="text-5xl font-bold text-blue-700 leading-tight">
          Articles & Knowledge Hub
        </h2>
        <p class="mt-8 text-gray-600 text-lg">
          Deep articles, tutorials, and technical insights written in a clean and readable format.
        </p>
      </div>
    </header>

    <!-- ================= MAIN CONTENT ================= -->
    <main class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-12">

      <!-- ========== ARTICLES ========== -->
      <section class="lg:col-span-3 space-y-16">

        <article
          v-for="post in posts"
          :key="post.id"
          class="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition"
        >
          <div class="flex items-center gap-4 text-sm text-blue-600 font-semibold">
            <span>{{ post.category }}</span>
            <span class="text-gray-400">•</span>
            <span>{{ post.date }}</span>
          </div>

          <h3 class="mt-6 text-3xl font-bold text-gray-900 leading-snug">
            {{ post.title }}
          </h3>

          <p
            v-for="(para, index) in post.content"
            :key="index"
            class="mt-6 text-gray-600 leading-relaxed text-base"
          >
            {{ para }}
          </p>

          <div class="mt-8 flex gap-6 text-sm font-semibold text-blue-600">
            <span class="cursor-pointer hover:underline">Read more</span>
            <span class="cursor-pointer hover:underline">Comments</span>
          </div>
        </article>

      </section>

      <!-- ========== SIDEBAR ========== -->
      <aside class="space-y-10">

        <!-- About -->
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <h4 class="text-xl font-bold text-blue-600 mb-4">About This Blog</h4>
          <p class="text-gray-600 leading-relaxed text-sm">
            This blog focuses on software development, cyber security, and modern technologies.
            All articles are written with clarity and simplicity in mind.
          </p>
        </div>

        <!-- Topics -->
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <h4 class="text-xl font-bold text-blue-600 mb-4">Topics</h4>
          <ul class="space-y-3 text-gray-600 font-medium">
            <li class="hover:text-blue-600 cursor-pointer">Web Development</li>
            <li class="hover:text-blue-600 cursor-pointer">Backend Engineering</li>
            <li class="hover:text-blue-600 cursor-pointer">Cyber Security</li>
            <li class="hover:text-blue-600 cursor-pointer">Artificial Intelligence</li>
            <li class="hover:text-blue-600 cursor-pointer">Computer Science</li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="bg-blue-600 p-8 rounded-2xl shadow-lg text-white">
          <h4 class="text-xl font-bold mb-4">Newsletter</h4>
          <p class="text-blue-100 text-sm">
            Get new articles directly in your inbox.
          </p>
          <input
            type="email"
            placeholder="Email address"
            class="mt-4 w-full rounded-lg px-4 py-3 text-gray-800 focus:outline-none"
          />
          <button
            class="mt-4 w-full bg-white text-blue-600 py-2.5 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Subscribe
          </button>
        </div>

      </aside>
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="bg-white border-t py-10">
      <div class="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
        © 2026 TextBlog — Clean content. Zero distractions.
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "How to Think Like a Software Engineer",
          category: "Software Engineering",
          date: "Jan 2026",
          content: [
            "Software engineering is not just about writing code. It is about problem-solving, system design, and thinking logically.",
            "A good engineer focuses on readability, maintainability, and scalability rather than quick solutions.",
            "Understanding fundamentals such as data structures, algorithms, and design patterns is essential."
          ]
        },
        {
          id: 2,
          title: "Cyber Security Fundamentals Everyone Should Know",
          category: "Cyber Security",
          date: "Feb 2026",
          content: [
            "Cyber security is no longer optional. Every developer must understand basic security principles.",
            "Topics like authentication, authorization, encryption, and secure coding practices are critical.",
            "Ignoring security can lead to serious vulnerabilities and data breaches."
          ]
        },
        {
          id: 3,
          title: "Why Clean Code Matters in Large Projects",
          category: "Programming",
          date: "Mar 2026",
          content: [
            "Clean code makes collaboration easier and reduces long-term maintenance costs.",
            "Readable code helps teams understand and extend systems faster.",
            "Writing clean code is a skill that improves with practice and discipline."
          ]
        }
      ]
    };
  }
};
</script>



<style scoped>

</style>

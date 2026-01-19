<script setup>
import { auth } from "@/firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { ref } from "vue"

const userEmail = ref("Guest")

onAuthStateChanged(auth, (user) => {
  if (user && user.email) {
    userEmail.value = user.email
  } else {
    userEmail.value = "Guest"
  }
})
</script>

<template>
  <div class="min-h-screen bg-[#f4f9ff] text-gray-800">

    <!-- ================= NAVBAR ================= -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">
          TextBlog - Welcome {{ userEmail }}
        </h1>
        <ul class="flex gap-8 font-medium text-gray-600">
          <li class="hover:text-blue-600 cursor-pointer">Home</li>
          <li class="hover:text-blue-600 cursor-pointer">Blog</li>
          <li class="hover:text-blue-600 cursor-pointer">Topics</li>
          <li class="hover:text-blue-600 cursor-pointer">About</li>
          <li class="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>

    <!-- ================= HERO ================= -->
    <header class="bg-gradient-to-r from-blue-100 to-blue-50 py-28">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-5xl font-bold text-blue-700 leading-tight">
          Explore Knowledge, Learn & Grow
        </h2>
        <p class="mt-6 text-gray-600 text-lg">
          A place for deep articles, practical tutorials, and insightful guides on software, cyber security, and modern tech.
        </p>
      </div>
    </header>

    <!-- ================= FEATURES / SERVICES ================= -->
    <section class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
      <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-blue-600 mb-4">Software Engineering</h3>
        <p class="text-gray-600">
          Learn coding best practices, system design, clean code principles, and problem-solving skills.
        </p>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-blue-600 mb-4">Cyber Security</h3>
        <p class="text-gray-600">
          Explore authentication, encryption, penetration testing, secure coding, and protecting data online.
        </p>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-blue-600 mb-4">AI & Machine Learning</h3>
        <p class="text-gray-600">
          Dive into machine learning, neural networks, AI algorithms, and modern technologies shaping the future.
        </p>
      </div>
    </section>

    <!-- ================= LATEST ARTICLES ================= -->
    <section class="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <h2 class="text-4xl font-bold text-blue-700 text-center">Latest Articles</h2>

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

    <!-- ================= TIPS / GUIDES ================= -->
    <section class="bg-blue-50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-blue-700 text-center mb-12">Tips & Guides</h2>
        <div class="grid md:grid-cols-3 gap-12">
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h4 class="text-xl font-bold text-blue-600 mb-4">Productivity Tips</h4>
            <p class="text-gray-600">
              Learn how to manage your time, write clean code, and stay focused on learning.
            </p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h4 class="text-xl font-bold text-blue-600 mb-4">Security Practices</h4>
            <p class="text-gray-600">
              Follow security best practices, avoid vulnerabilities, and protect your projects online.
            </p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h4 class="text-xl font-bold text-blue-600 mb-4">Coding Challenges</h4>
            <p class="text-gray-600">
              Sharpen your skills with practical coding exercises, algorithms, and problem-solving challenges.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FAQ ================= -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-blue-700 text-center mb-12">FAQ</h2>
      <div class="space-y-8">
        <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 class="text-xl font-bold text-blue-600 mb-2">How do I start learning software development?</h4>
          <p class="text-gray-600">
            Begin with HTML, CSS, JavaScript, and gradually explore backend technologies, frameworks, and databases.
          </p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 class="text-xl font-bold text-blue-600 mb-2">Is cyber security important for developers?</h4>
          <p class="text-gray-600">
            Absolutely! Every developer should understand basic security principles to protect their apps and users.
          </p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 class="text-xl font-bold text-blue-600 mb-2">How can AI help in software development?</h4>
          <p class="text-gray-600">
            AI can assist in code suggestions, bug detection, automation, and intelligent decision-making in projects.
          </p>
        </div>
      </div>
    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="bg-white border-t py-10">
      <div class="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
        © 2026 TextBlog — Learn, Code & Secure.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
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
    }
  }
}
</script>

<style scoped>
</style>

<script setup>
import { auth } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const login = async () => {
  errorMessage.value = ''

  if (!name.value) {
    errorMessage.value = 'name is required'
    return
  }

  if (!email.value) {
    errorMessage.value = 'email is required'
    return
  }

  if (!password.value) {
    errorMessage.value = 'password is required'
    return
  }

  if (password.value.length < 6) {
    errorMessage.value = 'password must be at least 6 characters'
    return
  }

  try {
    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )

    router.push('/home')
  } catch (error) {
    errorMessage.value = error.message
    console.log(error)
  }
}
</script>


<template>
  <div class="flex min-h-screen items-center justify-center bg-[#f4f9ff] px-6">

    <!-- Card -->
    <div
      class="w-full max-w-sm rounded-2xl bg-white p-8
             shadow-[0_20px_40px_rgba(59,130,246,0.15)]"
    >
      <!-- Logo -->
      <!-- <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=500"
        alt="Your Company"
      /> -->

      <!-- Title -->
      <h2 class="mt-8 text-center text-2xl font-bold text-blue-600">
        Sign in to your account
      </h2>

      <!-- Form -->
      <form @submit.prevent="login" class="mt-8 space-y-6">
        <!-- Name -->
        <div>
          <label class="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text" v-model="name"
            class="mt-2 block w-full rounded-lg bg-[#f8fbff] px-3 py-2
                   text-gray-800 border border-blue-100
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-600">
            Email address
          </label>
          <input
            type="email"
            v-model="email"
            class="mt-2 block w-full rounded-lg bg-[#f8fbff] px-3 py-2
                   text-gray-800 border border-blue-100
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label class="block text-sm font-medium text-gray-600">
              Password
            </label>
            <a href="#" class="text-sm text-blue-500 hover:text-blue-600">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            v-model="password"
            class="mt-2 block w-full rounded-lg bg-[#f8fbff] px-3 py-2
                   text-gray-800 border border-blue-100
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <p class="text-red-700">{{ errorMessage }}</p>
        </div>
        <!-- Button -->
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-500 py-2.5
                 font-semibold text-white
                 hover:bg-blue-600 transition shadow-md"
        >
          Sign in
        </button>
      </form>

      <!-- Footer -->
      <p class="mt-8 text-center text-sm text-gray-500">
        Not a member?
        <a href="register" class="font-semibold text-blue-500 hover:underline">
          Create account
        </a>
      </p>
    </div>
  </div>
</template>


<style scoped>

</style>

<script setup>
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


const router = useRouter()

const name = ref(null)
const email = ref(null)
const password = ref(null)
const confirm_password = ref(null)
const errorMessage = ref("")
const register = async () => {

  if (name.value == null){
    errorMessage.value = "name is required"
    return
  }
  if (email.value == null){
    errorMessage.value = "email is required"
    return
  }
  if (password.value == null){
    errorMessage.value = "password is required"
    return
  }
  if (password.value.length <= 6){
    errorMessage.value = "password is too short"
    return
  }
  if (confirm_password.value == null){
    errorMessage.value = "confirm password is required"
    return
  }
  if (confirm_password.value.length !== password.value.length){
    errorMessage.value = "passwords do not match"
    return
  }

  await createUserWithEmailAndPassword(auth, email.value,password.value)
    router.push('/home')
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
        Sign up to your account
      </h2>

      <!-- Form -->
      <form @submit.prevent="register" class="mt-8 space-y-6">
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
            type="email" v-model="email"
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
          </div>
          <input
            type="password" v-model="password"
            class="mt-2 block w-full rounded-lg bg-[#f8fbff] px-3 py-2
                   text-gray-800 border border-blue-100
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <!-- Confige Password -->
        <div>
          <div class="flex items-center justify-between">
            <label class="block text-sm font-medium text-gray-600">
              Confige Password
            </label>
          </div>
          <input
            type="password" v-model="confirm_password"
            class="mt-2 block w-full rounded-lg bg-[#f8fbff] px-3 py-2
                   text-gray-800 border border-blue-100
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div class="text-red-700">
        {{ errorMessage }}
        </div>
        <!-- Button -->
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-500 py-2.5
                 font-semibold text-white
                 hover:bg-blue-600 transition shadow-md"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>


<style scoped>

</style>

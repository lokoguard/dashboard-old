<script setup>

import { Button } from '@/components/ui/button/index.js'
import { Input } from '@/components/ui/input/index.js'
import { Label } from '@/components/ui/label/index.js'
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 mx-auto w-full max-w-sm">
      <form class="space-y-4" action="#" method="POST">
        <div>
          <Label>E-mail Address</Label>
          <Input type="email" class="mt-1" required />
        </div>
        <div>
            <Label>Password</Label>
            <Input type="password" class="mt-1" required />
        </div>
         <Button type="submit" class="w-full">Sign in</Button>
      </form>
    </div>
  </div>

</template>

<style scoped>

</style>
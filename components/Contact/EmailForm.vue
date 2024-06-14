<script setup lang='ts'>
const mail = useMail();

const sender = ref<string>("");
const message = ref<string>("");

const isErrorSender = ref<boolean>(false);
const errorSender = ref<string>("");

const isErrorMessage = ref<boolean>(false);
const errorMessage = ref<string>("");

const loader = ref<boolean>(false);
const isEmailSent = ref<boolean>(false);

onMounted(() => {
  if (localStorage.getItem("emailSentAt")) {
    const emailSentAt = Number(localStorage.getItem("emailSentAt"));
    const now = new Date();
    const diff = now.getTime() - emailSentAt;
    if (diff < 3600000) {
      isEmailSent.value = true;
    } else {
      localStorage.removeItem("emailSentAt");
    }
  }
})

const template1 = "Hello, my name is XYZ and I would like to hire you. I am interested in working with you. I am looking for an entry level position. Thank you in advance."
const template2 = "Hello2, my name is XYZ and I would like to hire you. I am interested in working with you. I am looking for an entry level position. Thank you in advance."
const template3 = "Hello3, my name is XYZ and I would like to hire you. I am interested in working with you. I am looking for an entry level position. Thank you in advance."

const sendMail = async () => {
  loader.value = true;
  const isEmailValid = isValidEmail(sender.value);
  const isMessageValid = isValidMessage(message.value);

  if (isEmailValid && isMessageValid) {
    await mail.send({
      sender: sender.value,
      subject: 'Contract - ' + sender.value,
      text: message.value,
    });

    console.log("Email sent");
    isEmailSent.value = true;
    localStorage.setItem('emailSentAt', Date.now().toString());
    message.value = "";
    sender.value = "";


    loader.value = false;
  }
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    isErrorSender.value = true;
    errorSender.value = "Invalid email";
    return false;
  }

  isErrorSender.value = false;
  errorSender.value = "";
  return true;
}

const isValidMessage = (message: string): boolean => {
  const errorHelper = (error: string) => {
    isErrorMessage.value = true;
    errorMessage.value = error;
    return false;
  }

  if (message.length < 50) {
    return errorHelper("Message too short");
  }
  else if (message.length > 500) {
    return errorHelper("Message too long");
  }

  isErrorMessage.value = false;
  errorMessage.value = "";
  return true;
}

</script>

<template>
  <form class="flex text-md flex-col justify-center gap-y-6" action="POST">
    <div class="relative">
      <input name="email"
        class="text-secondary w-full border-b-2 hover:border-cyan-600 shadow-inner outline-none bg-gray-50 py-1.5 px-2 hover:shadow-[inset_0_9px_20px_-14px_rgba(0,0,0,0.45)] duration-500 rounded-sm"
        @keydown="isErrorSender = false"
        :class="{ 'border-red-500 hover:border-red-500 hover:bg-red-500/10': isErrorSender, '!bg-slate-600/25 hover:border-transparent': isEmailSent }"
        type="text" placeholder="email" v-model="sender" :disabled="isEmailSent">
      <p v-if="isErrorSender" class="text-red-500 text-sm font-bold absolute bottom-1 right-2"> {{ errorSender }} </p>
    </div>

    <div class="relative">
      <textarea name="message"
        class="text-secondary text-md w-full pt-1.5 pb-80 px-2 shadow-[inset_0_9px_20px_-15px_rgba(0,0,0,0.3)] outline-none hover:shadow-[inset_0_9px_20px_-14px_rgba(0,0,0,0.45)] duration-500 bg-gray-50 text-md rounded-sm"
        :class="{ 'outline-red-500 outline-2 hover:border-red-500 hover:bg-red-600/15': isErrorMessage, '  !bg-slate-600/25': isEmailSent }"
        v-model="message" @keydown="isErrorMessage = false" placeholder="content" :disabled="isEmailSent"> </textarea>

      <p v-if="isErrorMessage" class="text-red-500 text-sm font-bold absolute bottom-96 right-2"> {{ errorMessage }}
      </p>
      
      

      <div class="flex justify-between mx-4 gap-x-2 relative bottom-12">

        <div class="flex gap-x-3" :class="{ 'invisible': isEmailSent }">
          <UButton @click="message = template1" variant="soft" color="emerald">
            Template 1
          </UButton>
          <UButton @click="message = template2" variant="soft" color="emerald">
            Template 2
          </UButton>
          <UButton @click="message = template3" variant="soft" color="emerald">
            Template 3
          </UButton>
        </div>

        <UButton @click="message = ''" class="text-md relative left-2 xl:left-2" :class="{'invisible': isEmailSent}" variant="ghost"
          color="cyan">
          <Icon class="" name="jam:rubber" />
        </UButton>

        <UButton @click="sendMail" class="text-md"
          :class="{ 'text-slate-50 bg-emerald-700 cursor-not-allowed duration-1000 pointer-events-none': isEmailSent }"
          variant="soft" color="violet"> {{ isEmailSent ? "Sent" : "Send" }}
          <Icon v-if="isEmailSent" class="ml-2" name="mdi:check" />
          <Icon v-else-if="loader" class="ml-2 animate-spin" name="mdi:loading" />
          <Icon v-else class="ml-2" name="mdi:send" />
        </UButton>
      </div>
    </div>
  </form>
</template>

<style scoped>
.textarea-container {
  position: relative;
}

* {
  outline-offset: 0 !important;
}
</style>
<script setup lang='ts'>
const { t } = useI18n();
const mail = useMail();
let isMobile = false;
const sender = ref<string>("");
const message = ref<string>("");

const isErrorSender = ref<boolean>(false);
const errorSender = ref<string>("");

const isErrorMessage = ref<boolean>(false);
const errorMessage = ref<string>("");

const loader = ref<boolean>(false);
const isEmailSent = ref<boolean>(false);

onMounted(() => {
  isMobile = window.screen.width < 768;
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
const templates = [t("contact.templates.template1"), t("contact.templates.template2"), t("contact.templates.template3")];
const sendMail = async () => {
  loader.value = true;
  const isEmailValid = isValidEmail(sender.value);
  const isMessageValid = isValidMessage(message.value);

  if (isEmailValid && isMessageValid) {
    await mail.send({
      sender: sender.value,
      subject: 'Potencjalne zlecenie - ' + sender.value,
      text: message.value,
    });

    isEmailSent.value = true;
    localStorage.setItem('emailSentAt', Date.now().toString());
    message.value = "";
    sender.value = "";
  }
  loader.value = false;
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    isErrorSender.value = true;
    errorSender.value = t("contact.invalidEmail");
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
    return errorHelper(t("contact.messageTooShort"));
  }
  else if (message.length > 500) {
    return errorHelper(t("contact.messageTooLong"));
  }

  isErrorMessage.value = false;
  errorMessage.value = "";
  return true;
}

</script>

<template>
  <form class="flex text-md flex-col justify-center gap-y-6 xl:scale-125 mx-10 relative sm:sticky bottom-12 sm:bottom-0 sm:mx-0" action="POST">
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

      <div class="flex flex-col sm:flex-row justify-between mx-0 sm:mx-4 gap-x-2 gap-y-7 sm:gap-y-0 static mt-5 sm:mt-0 sm:relative bottom-12">
        <div class="flex gap-x-3" :class="{ 'invisible': isEmailSent }">
          <UButton @click="message = templates[0]" variant="soft" color="emerald">
            Template 1
          </UButton>
          <UButton @click="message = templates[1]" variant="soft" color="emerald">
            Template 2
          </UButton>
          <UButton @click="message = templates[2]" variant="soft" color="emerald">
            Template 3
          </UButton>
        </div>

        <UButton @click="message = ''" :block="isMobile" class="text-md relative left-0 sm:left-2 xl:left-2" :class="{'invisible': isEmailSent}" :variant="isMobile ? 'soft' : 'ghost'"
          color="cyan">
          <Icon class="" name="jam:rubber" />
        </UButton>

        <UButton @click="sendMail" class="text-md" :block="isMobile"
          :class="{ 'text-slate-50 bg-emerald-700 cursor-not-allowed duration-1000 pointer-events-none': isEmailSent }"
          variant="soft" color="violet"> {{ isEmailSent ? t('contact.submitButton.sent') : t('contact.submitButton.send') }}
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
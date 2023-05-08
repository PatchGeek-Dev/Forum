<template>
  <q-layout>
    <div class="absolute-center">
      <img src="../assets/Forum.png" alt="Logo" class="logo" id="circle" />
    </div>
  </q-layout>
</template>
<script>
import { QLayout } from "quasar";

export default {
  name: "Splash",
  components: {
    QLayout,
  },
  created() {
    var self = this;

    setTimeout(() => {
      this.$router.push({ path: "login" });
    }, 4500);
  },
};
</script>

<style lang="css">
body {
  background: rgb(173, 0, 255);
  background: linear-gradient(
    45deg,
    rgba(173, 0, 255, 1) 0%,
    rgba(51, 0, 255, 1) 50%,
    rgba(0, 148, 255, 1) 100%
  );
  background-size: 400% 400%;
  animation: cambiar 3s ease-in-out infinite;
}

.logo {
  width: 250px;
  height: 250px;
  animation: myAnim 3s cubic-bezier(0.55, 0, 1, 0.45) 0.5s 1 alternate both;
}

#circle {
  border-radius: 50%;
}

@keyframes cambiar {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes myAnim {
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
    transform: translateY(-250px);
  }

  38% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0);
  }

  55% {
    animation-timing-function: ease-in;
    transform: translateY(-65px);
  }

  72% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  81% {
    animation-timing-function: ease-in;
    transform: translateY(-28px);
  }

  90% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  95% {
    animation-timing-function: ease-in;
    transform: translateY(-8px);
  }

  100% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }
}
</style>

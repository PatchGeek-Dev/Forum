<template>
  <q-layout>
    <div
      class="row absolute-center q-py-sm q-my-sm form rounded-borders justify-center"
    >
      <q-form @submit="onSubmit" @reset="onReset" class="q-pa-sm items-center">
        <div class="col items-center">
          <q-img
            class="q-ma-a"
            src="../assets/Logo5.png"
            spinner-color="white"
            style="
              height: 140px;
              max-width: 150px;
              margin-left: 22%;
              margin-bottom: 15px;
            "
          />
        </div>
        <div class="col-12 col-sm-12">
          <q-input
            filled
            v-model="name"
            label="Usuario"
            hint="Ej. Juan4312"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Usario invalido']"
          />
        </div>

        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          hint="Ej. *******"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Contraseña invalidad']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <!--

             <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
           -->

        <div class="col-12 col-sm-12 items-center" style="margin-left: 30%">
          <div>
            <q-btn
              label="Ingresar"
              type="submit"
              color="primary"
              to="/app"
              exact
            />
          </div>
        </div>
        <div style="margin-top: 10px">
          <span>Aun no formas parte de nosotros? </span>
          <a href="#/register" style="color: purple"> Registrate</a>
        </div>
      </q-form>
    </div>
  </q-layout>
</template>

<script>
import useQuasar from "quasar/src/composables/use-quasar.js";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const password = ref(null);
    const username = "Juan";

    return {
      password,
      name,
      age,
      isPwd: ref(true),
      accept,
      /*
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Necesita aceptar los terminos y condiciones primero.",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: `Bienvenido de nuevo ${name.value}`,
          });
        }
      },
*/
      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
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

.form {
  background-color: aliceblue;
  min-width: 300px;
  max-width: 600px;
  border-radius: 20px;
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
</style>

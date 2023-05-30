<template>
  <div class="q-ma-md main row justify-center items-center">
    <div class="row col-12 items-center">
      <div class="col-lg-4 col-xs-12">
        <div class="row">
          <div class="col-lg-12 col-xs-12">
            <q-card
              class="my-card text-white"
              style="
                background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
              "
            >
              <q-toggle size="150px" v-model="user" />
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-xs-12 separator"></div>
      <div class="col-lg-6 col-xs-12">
        <q-carousel
          v-if="user"
          v-model="slide"
          rounded-borders
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          :navigation="false"
          control-color="purple"
          padding
          arrows
          height="90vh"
          class="text-deep-purple-10 shadow-24 rounded-borders carousel"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="lg"
              :icon="btnProps.icon"
              color="primary"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="sm"
              :icon="btnProps.icon"
              color="primary"
              flat
              round
              dense
              @click="onClick"
            />
          </template>

          <q-carousel-slide
            name="personal_data"
            class="row items-center q-ma-none"
          >
            <q-banner
              inline-actions
              class="text-white bg-deep-purple col-lg-12 col-xs-12 items-center q-mb-md"
            >
              <template v-slot:avatar>
                <q-icon name="assignment_ind" color="white" size="64px" />
              </template>
              <span class="text-h5 text-weight-bold">Datos Personales</span>
            </q-banner>

            <div class="text-center col-lg-12 col-xs-12 self-center q-ma-none">
              <q-form 
              @submit="onSubmit" 
              @reset="onReset" 
              class="q-ma-none"
              ref="myForm">
                <q-input
                  maxlength="10"
                  :input-style="{ color: black }"
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  filled
                  v-model="name"
                  label="Nombre"
                  hint="Nombre y apellido"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Porfavor escribe un nombre correcto',
                  ]"
                />

                <q-input
                  filled
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  type="number"
                  v-model="age"
                  label="Edad"
                  lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || 'Ingresa tu edad',
                    (val) => (val > 0 && val < 100) || 'Ingresa una edad real',
                  ]"
                />

                <q-input
                  maxlength="5"
                  filled
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  type="tel"
                  v-model="cp"
                  label="Codigo Postal"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Ingrese un codigo postal',
                    (val) => val.length == 5 || 'Ingrese un C.P correcto.',
                  ]"
                />

                <q-input
                  filled
                  type="tel"
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  v-model="tel"
                  label="Telefono"
                  mask="(###) ### - ####"
                  fill-mask
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val.length !== '(###) ### - ####') ||
                      'Porfavor no deje este campo vacio',
                  ]"
                />

                <div class="">
                  <span class="q-mr-xl">Sexo</span>
                  <q-radio v-model="sexo" val="Masculino" label="Masculino" />
                  <q-radio v-model="sexo" val="Femenino" label="Femenino" />
                  <q-radio v-model="sexo" val="Otro" label="Otro" />
                </div>

                <q-input
                  filled
                  color="primary"
                  standout="bg-deep-purple-1 text-black"
                  label-color="deep-purple-10"
                  label="Fecha de nacimiento"
                  v-model="agedate"
                  mask="date"
                  :rules="['agedate']"
                  class="q-mt-md"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="agedate">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>

                <q-input
                  :input-style="{ color: black }"
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  filled
                  type="email"
                  v-model="mail"
                  label="E-mail"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0 && val.includes('@')) ||
                      'Porfavor escribe un email valido',
                  ]"
                />
              </q-form>
            </div>
          </q-carousel-slide>

          <q-carousel-slide
            name="documentation"
            class="row items-center q-ma-none"
          >
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="assignment" color="white" size="50px" />
                </template>
                <span class="text-h5 text-weight-bold">
                  Documentos Oficiales</span
                >
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit" 
                @reset="onReset" 
                class="q-ma-none"
                ref="myForm">
                  <q-input
                    maxlength="18"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    v-model="curp"
                    label="CURP"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '' && val.length == 18) ||
                        'Porfavor escribe una clave CURP valida',
                    ]"
                  />

                  <q-file
                    color="deep-purple-10"
                    filled
                    v-model="curpatachment"
                    label="CURP"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>

                  <q-input
                    class="q-mt-md"
                    maxlength="13"
                    filled
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    v-model="rfc"
                    label="RFC"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '' && val.length == 13) ||
                        'Porfavor ingresa una lave RFC.',
                    ]"
                  />

                  <q-file
                    color="deep-purple-10"
                    filled
                    v-model="rfcpatachment"
                    label="RFC"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                </q-form>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="education" class="row items-center q-ma-none">
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="school" color="white" size="50px" />
                </template>
                <span class="text-h5 text-weight-bold">
                  Formacion Educativa</span
                >
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit" 
                @reset="onReset" 
                class="q-ma-none"
                ref="myForm">
                  <q-input
                    maxlength="64"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    v-model="institucion"
                    label="Institucion Educativa"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-input
                    maxlength="60"
                    filled
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    v-model="titulo"
                    label="Título"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '' ) ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-input
                    filled
                    color="primary"
                    standout="bg-deep-purple-1 text-black"
                    label-color="deep-purple-10"
                    label="Fecha de inicio"
                    v-model="educationi_date"
                    mask="date"
                    :rules="['educationi_date']"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="educationi_date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>

                  <q-input
                    filled
                    color="primary"
                    standout="bg-deep-purple-1 text-black"
                    label-color="deep-purple-10"
                    label="Fecha de finalizacion"
                    v-model="educationf_date"
                    mask="date"
                    :rules="['educationf_date']"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="educationf_date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-form>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="emplee" class="row items-center q-ma-none">
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="work" color="white" size="50px" />
                </template>
                <span class="text-h5 text-weight-bold">
                  Empleo Actual o Ultimo</span
                >
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit" 
                @reset="onReset" 
                class="q-ma-none"
                ref="myForm">
                  <q-input
                    maxlength="30"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    v-model="cargo"
                    label="Cargo"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-input
                    maxlength="40"
                    filled
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    v-model="empresa"
                    label="Empresa"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-input
                    filled
                    color="primary"
                    standout="bg-deep-purple-1 text-black"
                    label-color="deep-purple-10"
                    label="Fecha de inicio"
                    v-model="empleei_date"
                    mask="date"
                    :rules="['empleei_date']"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="empleei_date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>

                  <q-input
                    filled
                    color="primary"
                    standout="bg-deep-purple-1 text-black"
                    label-color="deep-purple-10"
                    label="Fecha de finalizacion"
                    v-model="empleef_date"
                    mask="date"
                    :rules="['empleef_date']"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="empleef_date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-form>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide
            name="personalref"
            class="row items-center q-ma-none"
          >
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="contact_phone" color="white" size="50px" />
                </template>
                <span class="text-h5 text-weight-bold">
                  Referencias Personales</span
                >
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit"
                 @reset="onReset" 
                 class="q-ma-none"
                 ref="myForm">
                  <q-input
                    maxlength="42"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    v-model="nameref"
                    label="Nombre"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-input
                    filled
                    type="tel"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    v-model="telref"
                    label="Telefono"
                    mask="(###) ### - ####"
                    fill-mask
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val.length !== '(###) ### - ####') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />
                </q-form>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide
            name="generalinfo"
            class="row items-center q-ma-none"
          >
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="lightbulb" color="white" size="56px" />
                </template>
                <span class="text-h5 text-weight-bold"> Datos Generales</span>
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit"
                 @reset="onReset" 
                 class="q-ma-none"
                 ref="myForm">
                  <q-input
                    maxlength="300"
                    :input-style="{ color: black }"
                    color="primary"
                    type="textarea"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    v-model="about"
                    label="Acerca de ti"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-input
                    maxlength="50"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    hint="(Idioma,otro idioma)"
                    v-model="lenguage"
                    label="Idiomas que domina"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-file
                    color="deep-purple-10"
                    filled
                    v-model="img_perfil"
                    label="Imagen del perfil"
                    hint="Seleccione una imagen desde su ordenador."
                  >
                    <template v-slot:prepend>
                      <q-icon name="image" />
                    </template>
                  </q-file>
                </q-form>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="license" class="row items-center q-ma-none">
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="badge" color="white" size="56px" />
                </template>
                <span class="text-h5 text-weight-bold">
                  Certificado o Licenciass</span
                >
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit" 
                @reset="onReset" 
                class="q-ma-none"
                ref="myForm">
                  <q-input
                    maxlength="50"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    hint="(nombre de la certificacion)"
                    v-model="name_certificacion"
                    label="Nombre"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />
                  <q-input
                    maxlength="50"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    hint="(nombre de la empresa)"
                    v-model="name_empresa"
                    label="Empresa"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />

                  <q-input
                    filled
                    color="primary"
                    standout="bg-deep-purple-1 text-black"
                    label-color="deep-purple-10"
                    label="Fecha de expedicion"
                    v-model="empleei_date"
                    mask="date"
                    :rules="['empleei_date']"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="empleei_date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>

                  <q-input
                    filled
                    color="primary"
                    standout="bg-deep-purple-1 text-black"
                    label-color="deep-purple-10"
                    label="Fecha de caducidad"
                    v-model="empleef_date"
                    mask="date"
                    :rules="['empleei_date']"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="empleei_date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>

                  <q-input
                    maxlength="50"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    v-model="id_credencial"
                    label="ID de la credencial"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />
                  <q-input
                    maxlength="50"
                    :input-style="{ color: black }"
                    color="primary"
                    standout="bg-deep-purple-1"
                    label-color="deep-purple-10"
                    filled
                    v-model="url_credencial"
                    label="URL de la credencial"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Porfavor no deje este campo vacio',
                    ]"
                  />
                </q-form>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="terms" class="row items-center q-ma-none">
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="badge" color="white" size="56px" />
                </template>
                <span class="text-h5 text-weight-bold">
                  Certificado o Licencias</span
                >
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit"
                 @reset="onReset" 
                 class="q-ma-none"
                 ref="myForm">
                  <q-btn
                    align="around"
                    class="btn-fixed-width"
                    color="primary"
                    @click="basic = true"
                    label="Terminos y Condiciones"
                    icon="lightbulb_outline"
                  />

                  <q-dialog
                    v-model="basic"
                    transition-show="rotate"
                    transition-hide="rotate"
                  >
                    <q-card>
                      <q-card-section>
                        <div class="text-h6">Terminos y condiciones</div>
                      </q-card-section>

                      <q-card-section class="q-pt-none text-justify">
                        <p>
                          Bienvenido/a a la aplicación "Forum", desarrollada por
                          ForumTeam. A continuación, se detallan los términos y
                          condiciones que se aplican al uso de la aplicación:
                        </p>
                        <ol>
                          <li>
                            <p>
                              Propósito de la aplicación: Forum es una
                              plataforma que tiene como objetivo ayudar a los
                              usuarios a encontrar ofertas de trabajo que se
                              adapten a sus habilidades y experiencia. La
                              aplicación actúa como un intermediario entre los
                              usuarios y las empresas que publican las ofertas
                              de trabajo.
                            </p>
                          </li>
                          <li>
                            <p>
                              Reglas de uso: Al utilizar la aplicación, el
                              usuario se compromete a cumplir con las reglas de
                              uso que se detallan a continuación:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  La información proporcionada en el perfil del
                                  usuario debe ser precisa y actualizada.
                                </p>
                              </li>
                              <li>
                                <p>
                                  El usuario no debe proporcionar información
                                  falsa o engañosa en su perfil o en su
                                  solicitud de empleo.
                                </p>
                              </li>
                              <li>
                                <p>
                                  El usuario debe cumplir con las políticas de
                                  privacidad y protección de datos de la
                                  aplicación.
                                </p>
                              </li>
                              <li>
                                <p>
                                  El usuario no debe utilizar la aplicación con
                                  fines fraudulentos o ilegales.
                                </p>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <p>
                              Ofertas de trabajo: La aplicación muestra ofertas
                              de trabajo publicadas por empresas. Forum no
                              garantiza la disponibilidad o la calidad de estas
                              ofertas. El usuario es responsable de revisar
                              cuidadosamente los detalles de las ofertas antes
                              de aplicar.
                            </p>
                          </li>
                          <li>
                            <p>
                              Responsabilidad del usuario: El usuario es
                              responsable de su propio uso de la aplicación. La
                              aplicación no será responsable de ninguna pérdida
                              o daño que resulte del uso de la aplicación o de
                              la imposibilidad de utilizarla.
                            </p>
                          </li>
                          <li>
                            <p>
                              Propiedad intelectual: Todos los derechos de
                              propiedad intelectual relacionados con la
                              aplicación y su contenido son propiedad de la
                              compañía. El usuario no tiene derecho a copiar,
                              modificar, distribuir o utilizar el contenido de
                              la aplicación sin el consentimiento expreso de la
                              compañía.
                            </p>
                          </li>
                          <li>
                            <p>
                              Modificaciones y cancelación: La compañía se
                              reserva el derecho de modificar o cancelar la
                              aplicación en cualquier momento, sin previo aviso.
                              La compañía no será responsable de ninguna pérdida
                              o daño que resulte de la modificación o
                              cancelación de la aplicación.
                            </p>
                          </li>
                          <li>
                            <p>
                              Jurisdicción y ley aplicable: Estos términos y
                              condiciones se regirán e interpretarán de acuerdo
                              con las leyes del país donde se encuentra la
                              compañía. Cualquier disputa relacionada con estos
                              términos y condiciones estará sujeta a la
                              jurisdicción de los tribunales competentes de ese
                              país.
                            </p>
                          </li>
                        </ol>
                        <p>
                          Al utilizar la aplicación, el usuario acepta estos
                          términos y condiciones en su totalidad. Si el usuario
                          no está de acuerdo con alguno de estos términos y
                          condiciones, debe dejar de usar la aplicación de
                          inmediato.
                        </p>
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Decline"
                          color="primary"
                          v-close-popup
                        />
                        <q-btn
                          flat
                          label="Accept"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>

                  <q-toggle
                    v-model="accept"
                    label="I accept the license and terms"
                  />
                  <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                  </div>
                </q-form>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <q-carousel
          v-if="!user"
          v-model="slide"
          rounded-borders
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          :navigation="false"
          control-color="purple"
          padding
          arrows
          height="90vh"
          class="text-deep-purple-10 shadow-24 rounded-borders carousel"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="lg"
              :icon="btnProps.icon"
              color="primary"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="sm"
              :icon="btnProps.icon"
              color="primary"
              flat
              round
              dense
              @click="onClick"
            />
          </template>

          <q-carousel-slide
            name="personal_data"
            class="row items-center q-ma-none"
          >
            <q-banner
              inline-actions
              class="text-white bg-deep-purple col-lg-12 col-xs-12 items-center q-mb-md"
            >
              <template v-slot:avatar>
                <q-icon name="assignment_ind" color="white" size="64px" />
              </template>
              <span class="text-h5 text-weight-bold">Documentación</span>
            </q-banner>

            <div class="text-center col-lg-12 col-xs-12 self-center q-ma-none">
              <q-form 
              @submit="onSubmit" 
              @reset="onReset" 
              class="q-ma-none"
              ref="myForm">
                <q-input
                  maxlength="10"
                  :input-style="{ color: black }"
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  filled
                  v-model="name"
                  label="Nombre Comercial"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Porfavor escribe un nombre valido',
                  ]"
                />

                

                <q-input
                  maxlength="12"
                  filled
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  type="RFC"
                  v-model="rfc"
                  label="RFC"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'No deje este campo vacio',
                    (val) =>
                      val.length == 12 || 'Ingrese un RFC de longitud correcta',
                  ]"
                />

                <q-input
                  :input-style="{ color: black }"
                  color="primary"
                  standout="bg-deep-purple-1"
                  label-color="deep-purple-10"
                  filled
                  type="email"
                  v-model="mail"
                  label="E-mail"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0 && val.includes('@')) ||
                      'Porfavor escribe un email valido',
                  ]"
                />

                <q-select
                  standout="bg-teal text-white"
                  v-model="model2"
                  :options="options2"
                  label="Custom standout"
                />
              </q-form>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="terms" class="row items-center q-ma-none">
            <div class="col-lg-12 col-xs-12">
              <q-banner
                inline-actions
                class="text-justify text-white bg-deep-purple col-lg-12 col-xs-12 items-center items-justify q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="badge" color="white" size="56px" />
                </template>
                <span class="text-h5 text-weight-bold">
                  Certificado o Licencias</span
                >
              </q-banner>

              <div
                class="text-center col-lg-12 col-xs-12 self-center q-ma-none"
              >
                <q-form 
                @submit="onSubmit"
                 @reset="onReset" 
                 class="q-ma-none"
                 ref="myForm">
                  <q-btn
                    align="around"
                    class="btn-fixed-width"
                    color="primary"
                    @click="basic = true"
                    label="Terminos y Condiciones"
                    icon="lightbulb_outline"
                  />

                  <q-dialog
                    v-model="basic"
                    transition-show="rotate"
                    transition-hide="rotate"
                  >
                    <q-card>
                      <q-card-section>
                        <div class="text-h6">Terminos y condiciones</div>
                      </q-card-section>

                      <q-card-section class="q-pt-none text-justify">
                        <p>
                          Bienvenido/a a la aplicación "Forum", desarrollada por
                          ForumTeam. A continuación, se detallan los términos y
                          condiciones que se aplican al uso de la aplicación:
                        </p>
                        <ol>
                          <li>
                            <p>
                              Propósito de la aplicación: Forum es una
                              plataforma que tiene como objetivo ayudar a los
                              usuarios a encontrar ofertas de trabajo que se
                              adapten a sus habilidades y experiencia. La
                              aplicación actúa como un intermediario entre los
                              usuarios y las empresas que publican las ofertas
                              de trabajo.
                            </p>
                          </li>
                          <li>
                            <p>
                              Reglas de uso: Al utilizar la aplicación, el
                              usuario se compromete a cumplir con las reglas de
                              uso que se detallan a continuación:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  La información proporcionada en el perfil del
                                  usuario debe ser precisa y actualizada.
                                </p>
                              </li>
                              <li>
                                <p>
                                  El usuario no debe proporcionar información
                                  falsa o engañosa en su perfil o en su
                                  solicitud de empleo.
                                </p>
                              </li>
                              <li>
                                <p>
                                  El usuario debe cumplir con las políticas de
                                  privacidad y protección de datos de la
                                  aplicación.
                                </p>
                              </li>
                              <li>
                                <p>
                                  El usuario no debe utilizar la aplicación con
                                  fines fraudulentos o ilegales.
                                </p>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <p>
                              Ofertas de trabajo: La aplicación muestra ofertas
                              de trabajo publicadas por empresas. Forum no
                              garantiza la disponibilidad o la calidad de estas
                              ofertas. El usuario es responsable de revisar
                              cuidadosamente los detalles de las ofertas antes
                              de aplicar.
                            </p>
                          </li>
                          <li>
                            <p>
                              Responsabilidad del usuario: El usuario es
                              responsable de su propio uso de la aplicación. La
                              aplicación no será responsable de ninguna pérdida
                              o daño que resulte del uso de la aplicación o de
                              la imposibilidad de utilizarla.
                            </p>
                          </li>
                          <li>
                            <p>
                              Propiedad intelectual: Todos los derechos de
                              propiedad intelectual relacionados con la
                              aplicación y su contenido son propiedad de la
                              compañía. El usuario no tiene derecho a copiar,
                              modificar, distribuir o utilizar el contenido de
                              la aplicación sin el consentimiento expreso de la
                              compañía.
                            </p>
                          </li>
                          <li>
                            <p>
                              Modificaciones y cancelación: La compañía se
                              reserva el derecho de modificar o cancelar la
                              aplicación en cualquier momento, sin previo aviso.
                              La compañía no será responsable de ninguna pérdida
                              o daño que resulte de la modificación o
                              cancelación de la aplicación.
                            </p>
                          </li>
                          <li>
                            <p>
                              Jurisdicción y ley aplicable: Estos términos y
                              condiciones se regirán e interpretarán de acuerdo
                              con las leyes del país donde se encuentra la
                              compañía. Cualquier disputa relacionada con estos
                              términos y condiciones estará sujeta a la
                              jurisdicción de los tribunales competentes de ese
                              país.
                            </p>
                          </li>
                        </ol>
                        <p>
                          Al utilizar la aplicación, el usuario acepta estos
                          términos y condiciones en su totalidad. Si el usuario
                          no está de acuerdo con alguno de estos términos y
                          condiciones, debe dejar de usar la aplicación de
                          inmediato.
                        </p>
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Decline"
                          color="primary"
                          v-close-popup
                        />
                        <q-btn
                          flat
                          label="Accept"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>

                  <q-toggle
                    v-model="accept"
                    label="I accept the license and terms"
                  />
                  <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                  </div>
                </q-form>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.separator {
  margin-top: 20px;
  background: transparent;
}

.main {
  height: 90vh;
}

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

<script>
import { data } from "autoprefixer";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const user = ref(true);
    const user1 = ref(false);
    const about = ref(null);
    const lenguage = ref(null);
    const cargo = ref(null);
    const empresa = ref(null);
    const telref = ref(null);
    const tel = ref(null);
    const institucion = ref(null);
    const titulo = ref(null);
    const curpatachment = ref(null);
    const rfcpatachment = ref(null);
    const $q = useQuasar();
    const curp = ref(null);
    const rfc = ref(null);
    const img_perfil = ref(null);
    const cp = ref(null);
    const name = ref(null);
    const nameref = ref(null);
    const mail = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const myForm = ref(null)
    const registro_json= ref({});
    const registro=ref([]);
    const validacion_json= ref({});
    const validacion=ref([]);
    const name_empresa=ref(null);
    const id_credencial=ref(null);
    const url_credencial=ref(null);
    const name_certificacion=ref(null);
    const agedate=ref(null);
    const sexo=ref(null);
    const educationi_date=ref(null);
    const educationf_date=ref(null);
    const empleei_date=ref(null);
    const empleef_date=ref(null);
    const model2=ref(null);
   const min = Math.ceil(1000);
   const max = Math.floor(10000);
const contraseña=ref( Math.floor(Math.random()* (max - min) + min));
const prueba=ref(null)
    return {
      model2,
  contraseña,
      name_certificacion,
      name_empresa,
      id_credencial,
      url_credencial,
      myForm,
      registro,
      registro_json,
      user1,
      user,
      img_perfil,
      about,
      lenguage,
      telref,
      tel,
      nameref,
      empresa,
      cargo,
      titulo,
      institucion,
      curpatachment,
      rfcpatachment,
      rfc,
      curp,
      
      options2: ["Farmacia", "Software", "Optica", "Restaurante", "Médico"],
      basic: ref(false),
      sexo: ref("Masculino"),
      mail,
      name,
      age,
      cp,
      accept,
      model: ref(null),
      agedate: ref("2019/02/01"),
      educationi_date: ref("2019/02/02"),
      educationf_date: ref("2019/02/03"),
      empleei_date: ref("2020/02/02"),
      empleef_date: ref("2021/02/03"),
      options: ["Femenino", "Masculino"],
      slide: ref("personal_data"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
      onSubmit() {
       
        
       if(user.value){
        if (accept.value !== true || name.value == null || name.value.length <= 0 || age.value == null || age.value.length <= 0||
         cp.value == null || cp.value.length <= 0|| tel.value == null || tel.value.length <= 0
        || mail.value == null || mail.value.length <= 0 || curp.value == null || curp.value.length <= 0 || rfc.value == null || rfc.value.length <= 0
        || institucion.value == null || institucion.value.length <= 0 || titulo.value == null  || titulo.value.length <= 0 
         || cargo.value == null   || cargo.value.length <= 0 || empresa.value == null  || empresa.value.length <= 0 ||
          nameref.value == null  || nameref.value.length <= 0 || telref.value == null || telref.value.length <= 0
          || about.value == null  || about.value.length <= 0 || lenguage.value == null || lenguage.value.length <= 0 
          || name_empresa.value == null  || name_empresa.value.length <= 0 || id_credencial.value == null || id_credencial.value.length <= 0
          || url_credencial.value == null || url_credencial.value.length <= 0
        ){
          
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "LLena todos los datos",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });

          registro.value =[...registro.value,{
          name: name.value,
          age: age.value,
          cp: cp.value,
          tel: tel.value,
          sexo: sexo.value,
          agedate : agedate.value, 
          curp: curp.value,
          rfc: rfc.value,
          institucion: institucion.value,
          titulo: titulo.value,
          educationi_date: educationi_date.value,
          educationf_date: educationf_date.value,
          cargo: cargo.value,
          empresa: empresa.value,
          empleei_date: empleei_date.value,
          empleef_date: empleef_date.value,
          nameref: nameref.value,
          telref: telref.value,
          about: about.value,
          lenguage: lenguage.value,
          name_empresa: name_empresa.value,
          empleei_date: empleei_date.value,
          empleef_date: empleef_date.value,
          id_credencial: id_credencial.value,
          url_credencial: url_credencial.value,   

          }]




          validacion.value =[...validacion.value,{
       mail:mail.value,
       contraseña:name.value+ contraseña.value + age.value
          }]

          registro_json.value=JSON.stringify(registro.value)
          console.log(registro_json)

          validacion_json.value=JSON.stringify(validacion.value)
          console.log(validacion_json)

          
        }

      } 
     

      if(!user.value){
        if (accept.value !== true || name.value == null || name.value.length <= 0  || rfc.value == null || rfc.value.length <= 0
        || mail.value == null || mail.value.length <= 0 || model2.value == null ){
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "llena todos los datos",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });

          registro.value =[...registro.value,{
          name: name.value,
          age: age.value,
          cp: cp.value,
          tel: tel.value,
          sexo: sexo.value,
          agedate : agedate.value, 
          curp: curp.value,
          rfc: rfc.value,
          institucion: institucion.value,
          titulo: titulo.value,
          educationi_date: educationi_date.value,
          educationf_date: educationf_date.value,
          cargo: cargo.value,
          empresa: empresa.value,
          empleei_date: empleei_date.value,
          empleef_date: empleef_date.value,
          nameref: nameref.value,
          telref: telref.value,
          about: about.value,
          lenguage: lenguage.value,
          name_empresa: name_empresa.value,
          empleei_date: empleei_date.value,
          empleef_date: empleef_date.value,
          id_credencial: id_credencial.value,
          url_credencial: url_credencial.value,   

          }]




          validacion.value =[...validacion.value,{
       mail:mail.value,
       contraseña:name.value+ contraseña.value + age.value
          }]

          registro_json.value=JSON.stringify(registro.value)
          console.log(registro_json)

          validacion_json.value=JSON.stringify(validacion.value)
          console.log(validacion_json)

          
        }

      } 
     

      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

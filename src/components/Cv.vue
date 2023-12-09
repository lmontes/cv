<template>
  <div class="grid justify-items-center bg-white">
    <div class="cv flex flex-col bg-white font-sans border-x">
      <CvHeader :data="data" :print="print"/>

      <div id="content" class="px-16">
        <section id="jobs" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            Experiencia laboral
          </h2>
          <Job v-for="j in jobs" v-bind:key="j.name" :data="j" />
        </section>

        <p class="page-break mb-24">&nbsp;</p>

        <section id="titulations" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">Formación</h2>
          <Titulation v-for="t in titulations" v-bind:key="t.name" :title="t" />
        </section>

        <section id="languages" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">Idiomas</h2>
          <LanguageTable
            :languages="languages"
            :nativeLanguage="nativeLanguage"
          />
        </section>

        <section id="skills" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            Conocimientos destacados
          </h2>
          <SkillTable :skills="skills" />
        </section>

        <section id="achievements" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            Reconocimientos y premios
          </h2>
          <Achievement
            v-for="a in achievements"
            v-bind:key="a.name"
            :data="a"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Job from "./Job.vue";
import Titulation from "./Titulation.vue";
import Achievement from "./Achievement.vue";
import CvHeader from "./CvHeader.vue";
import LanguageTable from "./LanguageTable.vue";
import SkillTable from "./SkillTable.vue";

export default {
  name: "Cv",
  components: {
    Job,
    Titulation,
    Achievement,
    CvHeader,
    LanguageTable,
    SkillTable,
  },
  data() {
    return {
      dev: import.meta.env.DEV,
      data: {
        name: "Luis Miguel Montes Novella",
        image: "images/lmontes.jpg",
        email: import.meta.env.VITE_EMAIL,
        phone: import.meta.env.VITE_PHONE,
        linkedin: "https://linkedin.com/in/luismiguelmontesnovella",
        github: "https://github.com/lmontes",
        webpage: "https://lmont.es",
      },
      jobs: [
        {
          company: "Instituto Tecnológico de Informática (ITI)",
          name: "Desarrollador Big Data",
          startDate: "Mar 2017",
          endDate: "Actualidad",
          url: "https://www.iti.es",
          tasks: [
            "Participación en los inicios del proyecto Radiatus, consistente en el despliegue y configuración automática de servicios Big Data en la nube.",
            "Sistema para recolectar datos procedentes de Twitter y generar informes integrando tecnologías como Spark, Kafka, Elasticsearch, PostgreSQL y Neo4j sobre Kubernetes.",
            "Desarrollo y despliegue de diferentes microservicios en dispositivos IoT para el control remoto de máquinas industriales.",
            "Desarrollo de prototipos integrando tecnologías como Spark, Neo4j, Elasticsearch, Kibana y Grafana. Creación de interfaces web sencillas en algunos de ellos.",
            "Realización de análisis exploratorios de datos a pequeña y gran escala en varios proyectos.",
            "Empaquetado y despliegue de modelos de Machine Learning como APIs REST usando Docker.",
            "Realización de informes, presentaciones y documentación de proyectos mediante Markdown, Word, Power Point o Latex.",
          ],
          tags: [
            "Docker",
            "Big Data",
            "Jupyter",
            "Spark",
            "Cassandra",
            "Kafka",
            "Python",
            "TypeScript",
            "Node.js",
            "Elasticsearch",
            "FastAPI",
            "Markdown",
            "Latex",
            "Azure",
            "GCP",
            "Kubernetes",
            "Machine Learning",
            "Neo4j",
            "Linux",
            "Git",
            "SQL",
            "MongoDb",
            "Vue.js",
            "Bootstrap",
            "API REST",
            "AWS",
          ],
        },
        {
          company: "Dialapplet",
          name: "Desarrollador de software",
          startDate: "Jul 2013",
          endDate: "Feb 2017",
          url: "https://www.dialapplet.com",
          tasks: [
            "Desarrollo de un sistema para la detección de contestadores automáticos (PFC).",
            "Participación en el desarrollo de funcionalidades y corrección de errores en la plataforma de gestión de call centers Dialapplet, tanto en backend como en frontend.",
            "Proxy para la comunicación con Asterisk mediante la interfaz AMI.",
            "Desarrollo de un nuevo sistema para facilitar la generación de informes.",
            "Automatización de diferentes tareas mediante scripts.",
            "Resolución de incidencias relacionadas con la base de datos, servidores Linux y redes.",
          ],
          tags: [
            "C++",
            "Qt",
            "PHP",
            "HTML",
            "JavaScript",
            "PostgreSQL",
            "Asterisk",
            "Linux",
            "Subversion",
            "SQL",
            "Bash",
            "API REST",
          ],
        },
      ],
      titulations: [
        {
          name: "Máster en Big Data Analytics",
          url: "https://bigdata.webs.upv.es",
          startDate: "Sep 2015",
          endDate: "Jul 2016",
          institution: "Universidad Politécnica de Valencia",
        },
        {
          name: "Ingeniería informática",
          url: "#",
          startDate: "Sep 2009",
          endDate: "Sep 2014",
          institution: "Universidad Politécnica de Valencia",
        },
      ],
      languages: [
        {
          name: "Valenciano",
          reading: "C1",
          writing: "B2",
          listening: "C1",
          speaking: "B2",
        },
        {
          name: "Inglés",
          reading: "C1",
          writing: "B2",
          listening: "B2",
          speaking: "B1",
        },
      ],
      nativeLanguage: "Castellano",
      skills: [
        { name: "Spark", level: 60 },
        { name: "Docker", level: 90 },
        { name: "Elasticsearch", level: 60 },
        { name: "Git", level: 70 },
        { name: "Kubernetes", level: 50 },
        { name: "Linux", level: 70 },
        { name: "Machine Learning", level: 50 },
        { name: "Neo4j", level: 70 },
        { name: "PostgreSQL", level: 60 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 90 },
        { name: "API REST", level: 80 },
      ],
      achievements: [
        {
          name: "Premio al titulado con mejor expediente en Ing. Informática",
          date: "Oct 2015",
        },
        {
          name: "7º puesto en la SWERC 2013",
          date: "Nov 2013",
        },
        {
          name: "Premio al mejor expediente académico de 3º en Ing. Informática",
          date: "Dic 2012",
        },
        {
          name: "Premio al mejor expediente académico de 2º en Ing. Informática",
          date: "Feb 2012",
        },
      ],
    };
  },
  methods:{
    print() {
      window.print();
    }
  }
};
</script>

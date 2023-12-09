<template>
  <div class="grid justify-items-center bg-white">
    <div class="cv flex flex-col bg-white font-sans border-x">
      <Header :data="data" :print="print"/>

      <div id="content" class="px-16">
        <section id="jobs" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            {{ $t("experience_title") }}
          </h2>
          <Job v-for="j in jobs" v-bind:key="j.name" :data="j" />
        </section>

        <p class="page-break mb-24">&nbsp;</p>

        <section id="titulations" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            {{ $t("studies_title") }}
          </h2>
          <Titulation v-for="t in titulations" v-bind:key="t.name" :title="t" />
        </section>

        <section id="languages" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            {{ $t("lang_title") }}
          </h2>
          <LanguageTable
            :languages="languages"
            :nativeLanguage="nativeLanguage"
          />
        </section>

        <section id="skills" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            {{ $t("technologies_title") }}
          </h2>
          <SkillTable :skills="skills" />
        </section>

        <section id="achievements" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-3">
            {{ $t("achievements_title") }}
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
import Job from "./components/Job.vue";
import Titulation from "./components/Titulation.vue";
import Achievement from "./components/Achievement.vue";
import Header from "./components/Header.vue";
import LanguageTable from "./components/LanguageTable.vue";
import SkillTable from "./components/SkillTable.vue";

export default {
  components: {
    Job,
    Titulation,
    Achievement,
    Header,
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
          name: "job_iti_name",
          startDate: "2017-03",
          endDate: null,
          url: "https://www.iti.es",
          tasks: [
            "task_iti_radiatus",
            "task_iti_twitter",
            "task_iti_iot",
            "task_iti_prototypes",
            "task_iti_eda",
            "task_iti_mlops",
            "task_iti_reports"
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
            "Testing"
          ],
        },
        {
          company: "Dialapplet",
          name: "job_dialapplet_name",
          startDate: "2013-07",
          endDate: "2017-02",
          url: "https://www.dialapplet.com",
          tasks: [
            "task_dialapplet_pfc",
            "task_dialapplet_development",
            "task_dialapplet_proxy",
            "task_dialapplet_reports",
            "task_dialapplet_scripts",
            "task_dialapplet_support"
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
          name: "title_master_bigdata",
          url: "https://bigdata.webs.upv.es",
          startDate: "2015-09",
          endDate: "2016-07",
          institution: "Universidad Politécnica de Valencia",
        },
        {
          name: "title_computer_science",
          url: "#",
          startDate: "2009-09",
          endDate: "2014-09",
          institution: "Universidad Politécnica de Valencia",
        },
      ],
      languages: [
        {
          name: "lang_ca",
          reading: "C1",
          writing: "B2",
          listening: "C1",
          speaking: "B2",
        },
        {
          name: "lang_en",
          reading: "C1",
          writing: "B2",
          listening: "B2",
          speaking: "B1",
        },
      ],
      nativeLanguage: "lang_es",
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
          name: "achievement_exp_ii",
          date: "2015-10",
        },
        {
          name: "achievement_swerc",
          date: "2013-11",
        },
        {
          name: "achievement_exp_ii3",
          date: "2012-12",
        },
        {
          name: "achievement_exp_ii2",
          date: "2012-02",
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

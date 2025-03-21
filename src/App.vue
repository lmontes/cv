<template>
  <div class="grid justify-items-center bg-white">
    <div class="cv flex flex-col bg-white font-sans border-x">
      <Header :data="data" :print="print"/>

      <div id="content" class="px-14">
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
            {{ $t("skills_title") }}
          </h2>
          <!--SkillTable :skills="skills" /-->
          <SkillCards :skills="skills" />
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
      <Footer class="print-hidden"></Footer>
    </div>
  </div>
</template>

<script>

import Achievement from "./components/Achievement.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Job from "./components/Job.vue";
import LanguageTable from "./components/LanguageTable.vue";
// import SkillTable from "./components/SkillTable.vue";
import SkillCards from "./components/SkillCards.vue";
import Titulation from "./components/Titulation.vue";

export default {
  components: {
    Achievement,
    Footer,
    Header,
    Job,
    LanguageTable,
    SkillCards,
    // SkillTable,
    Titulation,
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
            "task_iti_forecasting",
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
            "Elastic",
            "FastAPI",
            "Markdown",
            "Mkdocs",
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
            "Testing",
            "AzureML",
          ],
        },
        {
          company: "Dialapplet",
          name: "job_dialapplet_name",
          startDate: "2013-07",
          endDate: "2017-02",
          url: "https://www.dialapplet.com",
          tasks: [
            "task_dialapplet_development",
            "task_dialapplet_pfc",
            "task_dialapplet_reports",
            "task_dialapplet_support",
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
          url: null,
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
        "skill_problem_solving",
        "skill_teamwork",
        "skill_software_development",
        "skill_documentation",
        "Python",
        "Docker",
        "Linux",
        "Git",
        "SQL",
        "PostgreSQL",
        "Neo4j",
        "skill_apis",
        "Machine Learning",
        "Spark",
        "Elasticsearch",
      ],
      achievements: [
        {
          name: "achievement_exp_ii",
          url: null,
          date: "2015-10",
        },
        {
          name: "achievement_swerc",
          url: "https://www.inf.upv.es/www/etsinf/es/balance-de-swerc-2013-y-audiovisuales",
          date: "2013-11",
        },
        {
          name: "achievement_exp_ii3",
          url: null,
          date: "2012-12",
        },
        {
          name: "achievement_exp_ii2",
          url: null,
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

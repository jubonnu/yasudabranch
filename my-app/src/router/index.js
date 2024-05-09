import { createRouter, createWebHashHistory } from "vue-router";
import Top from "../views/Top.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import SelfAnalysis from "../views/SelfAnalysis.vue";
import OccupationalDiagnosis from "../views/OccupationalDiagnosis.vue";
import InterviewPreparation from "../views/InterviewPreparation.vue";
import CareerGoalSetting from "../views/CareerGoalSetting.vue";
import CorporateResearch from "../views/CorporateResearch.vue";
import ProgressManagement from "../views/ProgressManagement.vue";
import SelfManagement from "../views/SelfManagement.vue";
import InterviewPreparationReport from "../views/InterviewPreparationReport.vue";
import AfterSalesSupport from "../views/AfterSalesSupport.vue";

const routes = [
  {
    path: "/",
    name: "top",
    component: Top,
  },
  {
    path: "/SignUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/Home",
    name: "home",
    component: Home,
  },
  {
    path: "/self-analysis",
    name: "self-analysis",
    component: SelfAnalysis,
  },
  {
    path: "/occupational-diagnosis",
    name: "occupational-diagnosis",
    component: OccupationalDiagnosis,
  },
  {
    path: "/interview-preparation",
    name: "interview-preparation",
    component: InterviewPreparation,
  },
  {
    path: "/career-goal-setting",
    name: "career-goal-setting",
    component: CareerGoalSetting,
  },
  {
    path: "/corporate-research",
    name: "corporate-research",
    component: CorporateResearch,
  },
  {
    path: "/progress-management",
    name: "progress-management",
    component: ProgressManagement,
  },
  {
    path: "/self-management",
    name: "self-management",
    component: SelfManagement,
  },
  {
    path: "/interview-preparation-report",
    name: "interview-preparation-report",
    component: InterviewPreparationReport,
  },
  {
    path: "/after-sales-support",
    name: "after-sales-support",
    component: AfterSalesSupport,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

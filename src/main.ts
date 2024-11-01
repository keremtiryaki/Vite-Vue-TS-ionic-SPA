import { createApp } from "vue"
import {
  IonApp,
  IonSplitPane,
  IonRouterOutlet,
  IonPage,
  IonContent,
  IonicVue,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonMenu,
  IonMenuButton,
  IonListHeader,
  IonItem,
} from "@ionic/vue";
import App from "./App.vue";
import router from "./router";


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';


// import '@ionic/vue/css/palettes/dark.system.css';


const app = createApp(App).use(IonicVue, {
  mode: "ios"
}).use(router);

app.component('ion-app', IonApp);
app.component('ion-split-pane', IonSplitPane);
app.component('ion-router-outlet', IonRouterOutlet);
app.component('ion-page', IonPage);
app.component('ion-content', IonContent);
app.component('ion-list', IonList);
app.component('ion-fab', IonFab);
app.component('ion-fab-button', IonFabButton);
app.component('ion-icon', IonIcon);
app.component('ion-header', IonHeader);
app.component('ion-toolbar', IonToolbar);
app.component('ion-buttons', IonButtons);
app.component('ion-back-button', IonBackButton);
app.component('ion-title', IonTitle);
app.component('ion-button', IonButton);
app.component('ion-menu', IonMenu);
app.component('ion-menu-button', IonMenuButton);
app.component('ion-list-header', IonListHeader);
app.component('ion-item', IonItem);

router.isReady().then(() => {
  app.mount('#app');
});
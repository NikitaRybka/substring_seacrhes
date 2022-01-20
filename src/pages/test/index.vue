<template>
  <div class="container">
    <h2>Пройди тест - получишь в левый глаз</h2>
    <results v-if="isResults" @restart="restartSurvey"/>
    <survey :survey="survey" v-else></survey>
  </div>
</template>

<script>
import * as SurveyVue from 'survey-vue';
import Results from './results.vue';
import store from './store'
import 'survey-core/modern.min.css';
let Survey = SurveyVue.Survey;
SurveyVue.StylesManager.applyTheme('modern');

import * as widgets from 'surveyjs-widgets'

import { init as customWidget } from '../../components/custom-widget'


widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);
customWidget(SurveyVue);

SurveyVue.Serializer.addProperty('question', 'tag:number');
let model = new SurveyVue.Model(store.survey);

model.onComplete.add((e) => {
  store.isResults = true;
  for (let variable in e.data) {
    if (e.data[variable] === store.answers[variable]){
      store.correctAnswers++;
    }
  }
});

export default {
  components: {
    Survey,
    Results,
  },

  data() {
    return {
      survey: model
    };
  },

  computed: {
    isResults: {
      get() {
        return store.isResults
      }
    }
  },

  methods: {
    restartSurvey() {
      store.isResults = false;
      store.correctAnswers = 0;
      model.clear();
      model.render();
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>Пройди тест - получишь в левый глаз</h2>
    <survey :survey="survey"></survey>
  </div>
</template>

<script>
import * as SurveyVue from 'survey-vue';
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

export default {
  components: {
    Survey,
  },

  data() {
    let model = new SurveyVue.Model(store.survey);
    return {
      survey: model
    };
  }   
}
</script>

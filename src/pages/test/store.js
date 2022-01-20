import Vue from 'vue'

export default Vue.observable({
  isResults: false,
  correctAnswers: 0,
  answers: [
    'O(n)',
    'O(n^2)',
    'Массив',
    'ускорения расчетов',
    'одном'
  ],
  survey: {
    title: "Тест по алгоритмам и структурам данных",
    showProgressBar: "top",
    pages: [
      {
        questions: [
          {
            type: 'radiogroup',
            name: '0',
            title: 'Сложность алгоритма поиска в свзном списке:',
            choices: [
              'O(n^2)',
              'O(n * log(n))',
              'O(n)',
            ],
          }
        ]
      },
      {
        questions: [
          {
            type: 'radiogroup',
            name: '1',
            title: 'Алгоритмическая сложность пузырьковой сортировки:',
            choices: [
              'O(n^2)',
              'O(n)',
              'O(1)'
            ],
          }
        ]   
      },
      {
        questions: [
          {
            type: 'radiogroup',
            name: '2',
            title: 'Если мы хотим иметь возможность сортировать данные, то какую структуру данных лучше использовать для их обработки?',
            choices: [
              'Массив',
              'Хэш таблицу'
            ],  
          } 
        ]
      },
      {
        questions: [
          {
            type: 'radiogroup',
            name: '3',
            title: 'Хэширование не используется для',
            choices: [
              'ускорения доступа к данным',
              'организации ассоциативных массивов',
              'ускорения расчетов'
            ],
          }  
        ]
      },
      {
        questions: [
          {
            type: 'radiogroup',
            name: '4',
            title: 'В скольких направлениях можно перемещаться в односвязном списке?',
            choices: [
              'одном',
              'двух'
            ],
          }
        ]
      }
    ]
  }
})

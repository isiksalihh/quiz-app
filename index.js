const questions = [{
        questionNumber: 1,
        question: "Hangisi daha asidiktir?",
        questionAnswers: {
            answerA: "Tuz Ruhu",
            answerB: "Amonyak",
            answerC: "Sodyum Klorür"
     
        },

        correctAnswer: "a"
    },
     {
         questionNumber: 2,
         question: "Hangileri periyodik tabloda aynı grupta yer alır?",
         questionAnswers: {
             answerA: "Cr/Tc/Hs",
             answerB: "Si/Br/Po",
             answerC: "Li/Na/K"
           
         },

         correctAnswer: "c"
     }
     ,
     {
         questionNumber: 3,
         question: "Hangi element soygazdır?",
         questionAnswers: {
             answerA: "Xe (Ksenon)",
             answerB: "Rf (Rutherfordiyum)",
             answerC: "W (Wolfram)"
         
         },

         correctAnswer: "a"
     }
     ,
     {
         questionNumber: 4,
         question: "Organik kimyanın diğer adı nedir?",
         questionAnswers: {
             answerA: "Analitik Kimya",
             answerB: "Fiziko Kimya",
             answerC: "Karbon Kimyası"
        
         },

         correctAnswer: "c"
     }
     ,
     {
         questionNumber: 5,
         question: "Aşağıdakilerden hangisi demir metalinin kimyasal özelliğidir?",
         questionAnswers: {
             answerA: "Paslanması",
             answerB: "Erimesi",
             answerC: "Isıyı iyi iletmesi"
     
         },

         correctAnswer: "a"
     }
     ,
     {
         questionNumber: 6,
         question: "Aşağıdakilerden hangisi sülfirik asit formülüdür?",
         questionAnswers: {
             answerA: "NaSO4",
             answerB: "Si/Br/Po",
             answerC: "Si/Br/Po"
      
         },

         correctAnswer: "c"
     }
     ,
     {
         questionNumber: 7,
         question: "Hangisi turnusol kağıdını kırmızı renge çevirir?",
         questionAnswers: {
             answerA: "Alüminyum Sülfat",
             answerB: "Potasyum Nitrat",
             answerC: "Hidrobromik Asit"
      
         },

         correctAnswer: "c"
     }
     ,
     {
         questionNumber: 8,
         question: "Yangın tüpünün içinde ne bulunur?",
         questionAnswers: {
             answerA: "Tazyikli Su",
             answerB: "Karbondioksit",
             answerC: "Hidrojen Gazı"
     
         },

         correctAnswer: "b"
     }
     ,
     {
         questionNumber: 9,
         question: "10. Son olarak hangisi kolloit'e örnektir?",
         questionAnswers: {
             answerA: "Zeytinyağı - Su",
             answerB: "Süt",
             answerC: "Tebeşir Tozu - Su"
         
         },

         correctAnswer: "b"
     }
];



const questionCount = questions.length;
var whichQuestion = 0;
const button = document.querySelector(".button");

var correct=0;
var notCorrect=0;


var changeHandler = (function initChangeHandler() {
    var previousCheckedRadio = null;

    var result = function (event) {
        var currentCheckedRadio = event.target;
        var name = currentCheckedRadio.name;

       
            if(currentCheckedRadio.className==questions[whichQuestion-1].correctAnswer)
            {
                console.log(currentCheckedRadio.className);
                correct++;
                console.log("dogru sayisi "+correct);
            }
            else{
                notCorrect++;
            }

        if (name !== 'myRadios') return;

        previousCheckedRadio = currentCheckedRadio;
    };

    return result;
})();

document.addEventListener('change', changeHandler, false);


document.getElementById("quiz-body").innerHTML=`<div class="ready"> 9 Soruluk kimya sorusuna hazir misin?</div>`;


button.addEventListener('click', () => {

    if(whichQuestion>=questionCount)
    {
        let finish= `<div class="question">
        <h3>BİTTİ</h3>
        <p>Doğru Sayısı = ${correct}</p>
        <p>Doğru Sayısı = ${notCorrect}</p>
        </div>
    `;
    document.querySelector(".button").style.display = 'none';
    document.getElementById("quiz-body").innerHTML = finish;
    }


    var question = questions[whichQuestion];

    let html = `<div class="question">
<h3>${question.question}</h3>

</div>
<div class="answers">
    <span><input  value="1" class="a" type="radio" name="myRadios" id="">  ${question.questionAnswers.answerA}</span>
    <span><input  value="2"  class="b" type="radio" name="myRadios" id="">  ${question.questionAnswers.answerB}</span>
    <span><input  value="3" class="c" type="radio" name="myRadios" id="">  ${question.questionAnswers.answerC}</span>
   
</div>`;

    document.getElementById("quiz-body").innerHTML = html;
    console.log(whichQuestion);
    whichQuestion++;
  
});





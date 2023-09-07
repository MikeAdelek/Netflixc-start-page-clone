//Question and answer node list
const faqList = document.querySelectorAll('.question');
const answerList = document.querySelectorAll('.answer-paragraph');

faqList.forEach((question, i) => {
  question.addEventListener('click', () => {
    let iof = 0;
    let activeI = 0;
    let permission = 0;

    for ( const questionOf of faqList) {
      if(questionOf.classList.contains('active-q')) {
         questionOf.classList.toggle('active-q');
         answerList[iof].classList.toggle('active-a');
         activeI = iof;
         permission = false;
      }
      iof++;
    }
    if(activeI == i || permission) {
      question.classList.toggle('active-q');
      answerList[i].classList.toggle('active-q');
    }
  });
});
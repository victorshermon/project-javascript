
//
//
// for(let index = 0; index < $cardColors.length; index++){
//   $cardColors[index].addEventListener('click', function(){
//     let $card = this.parentNode.parentNode.parentNode;
//
//     $card.dataset.color = this.dataset.color;
//     for (var i = 0; i < $cardColors.length; i++) {
//       $cardColors[i].classList.remove('card--border');
//     }
//     this.classList.add('card--border');
//   });
// }
let $ = document.querySelectorAll.bind(document);
let  $cardColors =  $('.card__colors');
let  $cards = $('.section__card');
for (let index = 0; index < $cards.length; index++) {
  $cards[index].addEventListener('click', function(event){
   let $this = event.target;
   let $card = this;
   let  $cardContent = $card.querySelector('.card__content');


   if($this.classList.contains('card__colors') && $this.dataset.color){
     $card.dataset.color = $this.dataset.color;
     for (var position = 0; position < $cardColors.length; position++) {
       $cardColors[position].classList.remove('card--border');
     }
     $this.classList.add('card--border');
   }

   if($this.classList.contains('card--edit')){
      if($cardContent.getAttribute('contenteditable') == 'true'){
        $cardContent.setAttribute('contenteditable', 'false');
        $cardContent.blur();
      }else{
        $cardContent.setAttribute('contenteditable', 'true');
        $this.classList.add('card--border');
        $cardContent.focus();
      }

   };

   if($this.classList.contains('card--del')){
      $card.remove();
   };

  });
}

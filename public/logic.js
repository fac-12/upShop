var categoryBtn = document.getElementsByClassName('categoryBtn');
var categoryBtnArr = Array.from(categoryBtn);


categoryBtnArr.forEach(button => {
  button.addEventListener('click', function(e){
    var catObj = {
    	Clothes: 1,
    	'Bars and Restaurants': 2,
    	Cafés: 3, 
    	Groceries: 4, 
    	Entertainment: 5, 
    	Other: 6
    }
    window.location.href='/search/'+ catObj[e.target.textContent];
 })
});

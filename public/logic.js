var categoryBtn = document.getElementsByClassName('categoryBtn');
var categoryBtnArr = Array.from(categoryBtn);


categoryBtnArr.forEach(button => {
  button.addEventListener('click', function(e){
    var category = e.target.textContent.replace(' ', '_');
    var catObj = {
    	Clothes: 1,
    	Bars_and_Restaurants: 2,
    	Cafés: 3, 
    	Groceries: 4, 
    	Entertainment: 5, 
    	Other: 6
    }
    console.log('category object: ', catObj[category])
    window.location.href='/search/'+ catObj[category];
})
})
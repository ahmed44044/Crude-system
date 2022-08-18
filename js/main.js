
var productNameInput = document.getElementById('productNameInput');//Input kolo
var productPriceInput = document.getElementById('productPriceInput');//Input kolo
var productCategoryInput = document.getElementById('productCategoryInput');//Input kolo
var productDescInput = document.getElementById('productDescInput');//Input kolo
var addBtn = document.getElementById('addBtn');
var updateBtn =document.getElementById('updateBtn');

var productsContainer;

var productsContainer ;
if(localStorage.getItem('myProject') !=null)
{
productsContainer = JSON.parse(localStorage.getItem('myProject'));
displayProducts(productsContainer);
}
else
{
    productsContainer = [];
}

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    productsContainer.push(product);//1000
    localStorage.setItem('myProject',JSON.stringify(productsContainer))
    clearForm();
    displayProducts(productsContainer);
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";


}

function displayProducts(list) {

    var cartoona = ``;
    for (var i = 0; i < list.length; i++) {
        cartoona += ` <tr>
        <td>${i}</td>
        <td>${list[i].name }</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].desc}</td>
        <td> <button  onclick="setFormForUpdate (${i})"  class="btn  btn-outline-warning"> update</button></td>
        <td> <button  onclick="deleteProducts(${i})"class="btn  btn-outline-danger"> delete</button></td>
    </tr>`;
    }
    document.getElementById('tableBody').innerHTML = cartoona;
}

function searchProducts(searchTerm){
    var searchResult =[];
    for(var i =0 ; i <productsContainer.length ;i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ==true) 
        {
            
        searchResult.push(productsContainer[i]);
        // searchResult[i].name = productsContainer[i].name.replace(searchTerm)
            

        }
    }
    
    displayProducts(searchResult);
}

function deleteProducts(deletedIndex) {
    productsContainer.splice(deletedIndex,1)
    localStorage.setItem('myProject',JSON.stringify(productsContainer))

    displayProducts(productsContainer);

}


function setFormForUpdate(updatedIndex){
    productNameInput.value = productsContainer[updatedIndex].name;
    productPriceInput.value = productsContainer[updatedIndex].price;
   productCategoryInput.value = productsContainer[updatedIndex].category;
   productDescInput.value = productsContainer[updatedIndex].desc;
   updateBtn.classList.replace('d-none' , 'd-inline-block');
   addBtn.classList.add('d-none');
}

// // JSON
// //   var productsContainer = [
// //       {name:'toshiba'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'nokia'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'samsung'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'toshiba'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'toshiba'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'toshiba'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'toshiba'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'toshiba'  , price:3000 , category:'tv' , desc:'great' },
// //       {name:'toshiba'  , price:3000 , category:'tv' , desc:'great' },

var bookmarkNameInput = document.getElementById('bookmarkName');
var urlNameInput = document.getElementById('urlName');
var incorrectInput=document.getElementById('notRight');


var urlContainer = []
if(localStorage.getItem('site')!=null){
    urlContainer=JSON.parse(localStorage.getItem('site'))
}
displayData();
function addUrl() {
    var siteobj = 
    {
        name: bookmarkNameInput.value,
        urlName: urlNameInput.value,
    }
    if(siteobj==' '){

    }
    urlContainer.push(siteobj);
    localStorage.setItem('site',JSON.stringify(urlContainer));
    displayData();
    clearData()
}
function displayData(){
    cartona=``
    for (var i=0;i<urlContainer.length;i++)
    {
        cartona+=`<tr>
        <td>${urlContainer[i].name}</td>
        <td>${urlContainer[i].urlName}</td>
       <td> <button class='btn btn-sm btn-outline-info'><a href='${urlContainer[i].urlName}'>Visit</a></button></td>
        <td><button onclick="deleteItem(${i})" class='btn btn-sm btn-outline-danger'>Delete</button></td>
    </tr>`
    }
document.getElementById('tbody').innerHTML=cartona;
}

function clearData(){
    bookmarkNameInput.value="";
    urlNameInput.value="";
}
function deleteItem(index)
{
urlContainer.splice(index,1);
localStorage.setItem('site',JSON.stringify(urlContainer));
displayData();
}

function validateBookmarkInput() {
    var website=/^[a-zA-Z0-9]{5,}.com$/
    var regex=/^[a-z]{2,10}$/
   return  regex.test(bookmarkNameInput.value);
    
}
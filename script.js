let names = ['James', 'Steve', 'John', 'Zoro', 'Mark', 'Acosta', 'Blake'];
 
 
function searchName(){
	const search=document.getElementById('search').value.toLowerCase();
	const parent=document.getElementById("result");
	const children=parent.getElementsByTagName('tr');
 
	for(var i=0; i<children.length; i++){
		let keyword=children[i].innerText;
		if(keyword.toLowerCase().indexOf(search)>-1){
			children[i].style.display="";
		}else{
			children[i].style.display = "none";
		}
	}
 
}
 
 
function displayList(){
	names.sort(function(a,b){
		if(a < b){
			return -1;
		}
 
		if(a > b){
			return 1;
		}
 
		return 0;
	});
 
	data = "";
 
	for(var i=0; i < names.length; i++){
		data += "<tr><td>"+names[i]+"</td></tr>";
	}
 
	document.getElementById('result').innerHTML = data;
}
 
 
displayList();
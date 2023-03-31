document.getElementById('news').addEventListener('click', function(){
  document.querySelector('.newsletter').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.newsletter').style.display = 'none';
});
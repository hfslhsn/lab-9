function init(){

  var b1=document.getElementById('entrybutton');
  function showMeText () {
      var textbox=document.getElementById('entryinput');
      document.getElementById('textoutput').innerHTML=textbox.value;
      alert ("hfslhsn: " +textbox.value);
  }
  b1.addEventListener('click', showMeText);
}
window.addEventListener('load', init);
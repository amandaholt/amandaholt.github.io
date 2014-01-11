// Your Javascript will go here!

  function replaceName() {
    var myNewName = window.prompt('Pick a new name!');
    document.getElementById('user-name').innerHTML = myNewName;
  }

  document.onclick = replaceName;



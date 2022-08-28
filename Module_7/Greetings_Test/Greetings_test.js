
function greet(name){
     if (name === Null) return 'Hello, there!'; //Null
     if (name.toUpperCase() === name) //Shout
        return 'HELLO ' + name + '!';
    if (typeof name === typeof []) //Array
        if (name.length > 0) {
          let names = '';
          name.forEach((elm) => {
            names += ', ' + elm;
          });
          return 'Hello' + names;
    } return 'Hello, ' + name+ '!';
};



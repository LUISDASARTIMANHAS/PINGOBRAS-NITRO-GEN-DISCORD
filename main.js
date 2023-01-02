
function gerarNitro() {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 16; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
  
  for(var abrir = 0; abrir < 5; abrir++){
    code += '\n'
    window.open("https://discord.gift/" + code);
  }
} //generates codes


function gerarNitro() {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  for(var abrir = 0; abrir < 5; abrir++){
    for(var i = 0; i < 16; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));}
    code += '\n'
    window.open("https://discord.gift/" + code);
    code = ""
  }
  
  
} //generates codes

//Declaración de objeto cipher
const cipher = {
  //función de cifrado
  encode: function(offset, string){
		let stringEncode="";
		for (let i = 0; i < string.length; i++) {
			let text = string[i];
      let chartCiphered = String.fromCharCode((text.charCodeAt(0) - 65 + offset) % 26 + 65); stringEncode += chartCiphered;
		} 
		 return stringEncode;
	},
  //función de descifrado
  decode: function(offset, string) {
		let stringDecode=""
		for (let i = 0; i < string.length; i++){
			let text = string[i];
      let chartDecodered = String.fromCharCode(((text.charCodeAt(0) + 65 - (offset)% 26) %26) + 65); stringDecode += chartDecodered;
		}
		return stringDecode;
  }
}

export default cipher;

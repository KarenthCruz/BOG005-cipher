//Declaración de objeto cipher
const cipher = {
  
  encode: function(offset, string){
		let stringEncode="";
		for (let i = 0; i < string.length; i++) {
			let text = string[i];
      let ch = String.fromCharCode((text.charCodeAt(0) - 65 + offset) % 26 + 65); stringEncode += ch;
		}
		return stringEncode;
	},

  decode: function(offset, string) {
		let stringDecode=""
		for (let i = 0; i < string.length; i++) {
			let text = string[i];
      let ch = String.fromCharCode(((text.charCodeAt(0) + 65 - (offset)% 26) %26) + 65); stringDecode += ch;
		}
		return stringDecode;
	}
}

export default cipher;

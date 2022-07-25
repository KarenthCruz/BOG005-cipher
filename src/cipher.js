//Declaración de objeto cipher
const cipher = {
	//función de cifrado
	encode: function (offset, string) {
		let stringEncode = "";
		// test de validación
		if (offset == null || string == [])
			throw new TypeError("No ingreso texto valido");
		// loop y fórmula para cifrado en mayusculas
		for (let i = 0; i < string.length; i++) {
			let text = string[i];
			let chartCiphered = String.fromCharCode((text.charCodeAt(0) - 65 + offset) % 26 + 65); stringEncode += chartCiphered;
		}
		return stringEncode;
		// Cierre de función cifrado
	},
	//función de descifrado
	decode: function (offset, string) {
		let stringDecode = "";
		// test de validación
		if (offset == null || string == [])
			throw new TypeError("No ingreso texto valido");
		// loop y fórmula para cifrado en mayusculas
		for (let i = 0; i < string.length; i++) {
			let text = string[i];
			let chartDecodered = String.fromCharCode(((text.charCodeAt(0) + 65 - (offset) % 26) % 26) + 65); stringDecode += chartDecodered;
		}
		return stringDecode;
		// Cierre de función descifrado
	}
}

export default cipher;

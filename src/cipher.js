//objeto recibe dos funciones
const cipher = {
	//función recibe (clave de cifrado y texto)
	encode: function (offset, string) {
		let stringEncode = ""; // test de validación
		if (offset == null || string == [])
			throw new TypeError("No ingreso texto valido");
			for (let i = 0; i < string.length; i++) {
			let text = string[i];
			let chartCiphered = String.fromCharCode((text.charCodeAt(0) - 65 + offset) % 26 + 65); stringEncode += chartCiphered;
		}
		return stringEncode;
	},
		//función recibe (clave de descifrado y texto)
	decode: function (offset, string) {
		let stringDecode = "";// test de validación
			if (offset == null || string == [])
			throw new TypeError("No ingreso texto valido");
			for (let i = 0; i < string.length; i++) {
			let text = string[i];
			let chartDecodered = String.fromCharCode(((text.charCodeAt(0) + 65 - (offset) % 26) % 26) + 65); stringDecode += chartDecodered;
		}
		return stringDecode;
	}
}
export default cipher;

function volume_sphere() {
    //Write your code here
	    event.preventDefault();

	let rad = parseFloat(document.getElementById('radius').value);
	let vol = document.getElementById('volume');

	if(isNaN(rad) || rad<0){
		vol.value = 'NaN';
		return;
	}
	let v = (4/3) * Math.PI * Math.pow(rad , 3);
	vol.value = v.toFixed(4);
} 


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

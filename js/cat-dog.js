const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

const cat_rslt = document.getElementById('cat_rslt');
const dog_rslt = document.getElementById('dog_rslt');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);


function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_rslt.innerHTML = `<img src=${data.file} alt="cat" />`;
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_rslt.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
	}
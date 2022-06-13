const capitals_btn = document.getElementById('capitals_btn');
const capitals_rslt1 = document.getElementById('capitals_rslt1');
const capitals_rslt2 = document.getElementById('capitals_rslt2');

capitals_btn.addEventListener('click', getCapitals);

function getCapitals(){
	fetch("https://restcountries.com/v3.1/region/europe")
				.then(res => res.json())
                .then(data => {
                    let list = '';
                    data.forEach(country => {
                        list += `<li>${ country.capital[0] }</li>`;  
                        const half = Math.ceil((list.length+1) / 2);    
                        const firstHalf = list.slice(0, half)
                        const secondHalf = list.slice(-half)

                        capitals_rslt1.innerHTML = firstHalf;  
                        capitals_rslt2.innerHTML = secondHalf;  
                    });
                });
}
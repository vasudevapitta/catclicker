let fragment = document.createDocumentFragment();
let allCats = [];
class Cat {
	constructor(name, url, altTxt, id){
		this.name = name;
		this.url = url;
		this.count = 0;
		this.id = id;
		allCats.push(this);
	}

	buildTemplate(){
		let template = `<div class="cat">
<p class="name">${this.name}</p>
<p class="num">${this.count}</p>
<img src="${this.url}" alt="${this.altTxt}" class="img" data-id="${this.id}">
</div>`
		$(fragment).append(template);
	}

	updateCount(ind){
		this.count++;
		let num = $(".num");
		$(num[ind]).html(this.count);
	}
}

/*
let catHolder = {

	cat1: {
		name: "Cindy",
		url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
		altTxt: "picture of a cat",
		id: 0,
	},

	cat2: {
		name: "Eddy",
		url: "https://kittentoob.com/wp-content/uploads/2018/06/Cat-Growling.jpg",
		altTxt: "picture of a cat",
		id: 1,
	}
};
*/

const cat1 = new Cat("Cindy",
	"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
	"picture of a cat",
	0);

cat1.buildTemplate();

const cat2 = new Cat("Eddy",
	"https://kittentoob.com/wp-content/uploads/2018/06/Cat-Growling.jpg",
	"picture of a cat",
	1);

cat2.buildTemplate();

//final appending the documentFragment to the DOM
const body = $("body");
body.append(fragment);

$(".cat").each((ind,arrVal)=>{
	$(arrVal).click((e)=>{
	const index = $(e.target).data("id");
	allCats[index].updateCount(index);
});

});
var app = new Vue({
    el: '.items, .item, .contactUs',
    data: {
        products:[
            {id:1, title:"Ashley", short_text:"This heirloom cultivar is a prolific producer of dark green, six to eight-inch fruits, with a slight taper on the stem end.", image:"1.jpg", desc:" A vining variety, Ashley was bred at the South Carolina Truck Experimental Station in Charleston in 1956 for the southern fresh produce market. "},
            {id:2, title:"Burpless #26", short_text:"This hybrid vining variety produces thin fruits up to 12 inches long, but they are usually best picked at eight or 10 inches.", image:"2.jpg", desc:" With thin, dark green skin and mild flesh with no hint of bitterness, this variety is resistant to downy mildew and mosaic virus. "},
            {id:3, title:"Bush Champion", short_text:"Bush Champion is a prolific producer of eight to 11-inch fruit on compact plants. This hybrid bush type green cucumbers in just 60 days.", image:"3.jpg", desc:" Ideal for container growing or raised bed gardening, this Burpee exclusive is resistant to mosaic virus. "},
            {id:4, title:"Dasher II", short_text:"Dasher II is a dark green hybrid cultivar with excellent disease resistance. Vigorous vines produce white-spined fruit in 55-60 days.", image:"4.jpg", desc:" Best grown on a fence or trellis for easy harvest., straight, uniform fruits have high resistance to scab. "},
            {id:5, title:"Diva", short_text:"A winner of the All-America Selections award in 2002, Diva is a hybrid cultivar that produces fruits of six to eight inches long.", image:"5.jpg", desc:" This cultivar is resistant to scab, and tolerant of downy and powdery mildew. "}
        ],
        product:[],
        cart:[],
        cartIds:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    mounted:function() {
        this.getProducts();
        this.checkInCart();
        this.getCart();
        console.log(this.cartIds);
        console.log(this.contactFields);
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },
        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length > 0) {
                   for(i in this.products) {
                       if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                   } 
                }
            }
        },
        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !=-1 ) this.btnVisible=1;
        },
        getCart:function() {
            for(i in localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartIds.push(this.products[p].id);
                    }
                }
            }
        },
        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartIds.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartIds.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartIds = [];
            window.localStorage.removeItem('cart');
        }
    }
});

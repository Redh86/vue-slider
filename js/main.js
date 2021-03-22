var app = new Vue({
    el: "#root",
    data: {
        counterPhoto: 0,
        photos: [
            "img/img1.jpg",
            "img/img2.jpg",
            "img/img3.png",
            "img/img4.jpg"
        ]
    },
    methods: {
        prevPhoto: function() {
            this.counterPhoto --;
            if(this.counterPhoto < 0) {
                this.counterPhoto = (this.photos.length -1);
            }      
        },
        nextPhoto: function() {
            this.counterPhoto ++;   
            if(this.counterPhoto > this.photos.length -1) {
                this.counterPhoto = 0;
            } 
        },
    }
});
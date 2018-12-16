class Carousel {
    constructor(wrapperElement) {
        this.wrapperElement = document.querySelector(wrapperElement);
        this.children = this.wrapperElement.children;
        this.wrapperElementWidth = this.wrapperElement.offsetWidth;
        // this.wrapperElement.style.width = (this.wrapperElementWidth / this.children.length) + "px"

        this.currentIndex = 0;
        Array.from(this.children).forEach(image => image.style.display = "none");
        this.children[this.currentIndex].style.display = "block";
        setInterval(() => this.slide(), 3000);
    }

    slide() {
        this.children[this.currentIndex].style.display = "none";
        this.currentIndex++;
        if (this.currentIndex > this.children.length-1) {
            this.currentIndex = 0;
        }
        this.children[this.currentIndex].style.display = "block";
    }
}

window.addEventListener("load", function (){
    new Carousel(".carousel");
    
})
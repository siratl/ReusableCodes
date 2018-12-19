class Carousel {
    // create a constructor that accepts the ".carousel" container as a parameter
    constructor(wrapperElement) {
        // Reference and assign the parameter/container to a constructor variable
        this.wrapperElement = document.querySelector(wrapperElement);
        // Reference every child/element within the container and assign them as children
        this.children = this.wrapperElement.children;
        //** this.wrapperElementWidth = this.wrapperElement.offsetWidth; **/

        // assign and index counter
        this.currentIndex = 0;
        // Create an array from the aray-like children element to inherit methods available to Arrays (.forEach)
        // For each child element, set the display to none
        Array.from(this.children).forEach(image => image.style.display = "none");
        // Make the child element at the current index visible
        this.children[this.currentIndex].style.display = "block";
        // Created a variable to store time
        let timeLoop = 1000;
        // Assigned the setInterval method to a variable "timer" that runs the method "slide"
        var timer = setInterval(() => this.slide(), timeLoop);
        // Added an event listener on the carousel container to pause the "slide" on mouse enter
        this.wrapperElement.addEventListener("mouseenter", () => clearInterval(timer))

        // Added an event listener on the carousel container to continue the "slide" method on mouse leave
        this.wrapperElement.addEventListener("mouseleave", () => timer = setInterval(() => this.slide(), timeLoop))
    }

    // Methods
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


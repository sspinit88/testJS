function $(inpSelector) {
    let element;
    if (inpSelector instanceof HTMLElement){
        element = [inpSelector];
    }
    else {
        element = document.querySelectorAll(inpSelector);
    }
    return new JQ(element);
}

function JQ(element) {

    this.elements = element;

    this.on = function (name, handler) {
        for(let i = 0; i < this.elements.length; i++){
            this.elements[i].addEventListener(name, handler);
        }
        return this;
    };

    this.addClass = function (className) {
        for(let i = 0; i < this.elements.length; i++){
            this.elements[i].classList.add(className)
        }
        return this;
    };

    this.toggleClass = function (className) {
        for(let i = 0; i < this.elements.length; i++){
            this.elements[i].classList.toggle(className)
        }
        return this;
    };

    this.html = function (content) {
        if(content === undefined ){
            return this.elements.length > 0 ?
                   this.elements[0].innerHtml :
                   null;
            }
        else {
            for(let i = 0; i < this.elements.length; i++) {
                this.elements[i].innerHTML = content;
            }
        }
        return this;
    };

    this.attr = function (attrName, value) {
        if(value === undefined){
            return this.elements.length > 0 ?
                   this.elements[0].getAttribute(attrName) :
                   null;
        }
        else{
            for(let i = 0; i < this.elements.length; i++){
                this.elements[i].setAttribute(attrName, value);
            }
        }
        return this;
    };
}
/*функция $ позволяет сделать массив из объектов,
где каждый элемент - это узел DOM, которые будут переданы в function JQ()*/
function $(some) {
    let elem;
    if(some instanceof HTMLElement){
        elem = [some];
    }
    else{
        /*получаем элемент*/
        elem = document.querySelectorAll(some);
    }
    /*создаем новый  элемент и возвращаем его*/
    return new JQ(elem);
} // $

/*конструктор JQ принимает набор элементов*/
function JQ(elem) {
    /*сохраняем переданный эелемент в поле elements*/
    this.elements = elem;
    /*создаем функцию, в которую будем передавать имя события и обработчик*/
    this.setShadowTo = function (eventName) {
        /*пройдем по всем переданным элементам и повесим на каждый элемент переданное событие и обработчик.*/
            for(let i = 0; i < this.elements.length; i++){
                this.elements[i].addEventListener(eventName, shadow);
            }
            function shadow() {
                this.classList.toggle('shadow');
            }
            /*возвращаем текущий объект, позволяет делать цепочки без создавания переменных*/
            return this;
    };
    /*'эта функция будет добавлять класс через указанное время*/
    this.addClassTime = function (className, setTime) {
        for(let i = 0; i < this.elements.length; i++){
            let arr = this.elements[i];
            let time = parseInt(setTime);
            if (setTime == undefined){
                setTimeout(function () {
                    arr.classList.add(className);
                }, 100)
            }
            else{
                setTimeout(function () {
                    arr.classList.add(className);
                }, time)
            }

        }
        return this;
    };
    /*функция html*/
    this.html = function (nama) {
        for(let i = 0; i < this.elements.length; i++){
            if(content === undefined){
                 /*если ничего не переданно,
                 то возвращаем первый элемент набора,
                 иначе null*/
                 return this.elements.length > 0 ?
                        this.elements[0].innerHTML :
                        null;
            }
            else{
                this.elements[i].innerHTML = content;
            }

        }
    };
    /*функция для сss*/
    this.css = function () {
        
    }
} // JQ()
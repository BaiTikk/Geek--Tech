class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}


class Traffic1 extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = options.size1 + 'px'
        this.$element.style.height = options.size2 + 'px'
        this.$element.style.backgroundColor = options.color
    }
}
class Traffic extends Traffic1 {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = options.radius + 'px'

    }
}
const traffic = new Traffic({
    selector: '.traffic',
    size1: 120,
    size2: 320,
    color: 'black',
    radius: 20,
})
///////////////////////////////////
class Block extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
        this.$element.style.margin = options.margin + 'px'
        this.$element.style.textAlign = options.align
        this.$element.style.paddingTop = options.top + 'px'

    }
}

class Block1 extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}
const block1 = new Block1({
    selector: '.block1',
    size: 90,
    color: 'gray',
    margin: 15,

})

class Stop extends Block {
    constructor(options) {
        super(options);
    }
}

const stop = new Stop ({
    selector: '.stop',
    align: 'center',
    top: 35
})

class Block2 extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}
const block2 = new Block2({
    selector: '.block2',
    size: 90,
    color: 'gray',
    margin: 15,
})
class Wait extends Block {
    constructor(options) {
        super(options);
    }
}

const wait = new Wait ({
    selector: '.wait',
    align: 'center',
    top: 35
})

class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '.circle',
    size: 90,
    color: 'gray',
    margin: 15,
})
class Go extends Block {
    constructor(options) {
        super(options);
    }
}

const go = new Go ({
    selector: '.go',
    align: 'center',
    top: 35
})

let cout = Number(prompt("Выберите 1.красный 2.жёлтый 3.зелёный"));
const traffic_one = document.querySelector(".block1");
const traffic_one_inside = document.querySelector(".stop");
const traffic_two = document.querySelector(".block2");
const traffic_two_inside = document.querySelector(".wait");
const traffic_tree = document.querySelector(".circle");
const traffic_tree_inside = document.querySelector(".go");

if (cout === 1) {
    traffic_one.style.background = "red";
    traffic_one_inside.style.color = "black";
    traffic_one_inside.innerText = "STOP!";
} else if (cout === 2) {
    traffic_two.style.background = "yellow";
    traffic_two_inside.style.color = "black";
    traffic_two_inside.innerText = "WAIT!";
} else if (cout === 3) {
    traffic_tree.style.background = "green";
    traffic_tree_inside.style.color = "black";
    traffic_tree_inside.innerText = "GO!";
} else {
    alert("error");
}


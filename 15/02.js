class Cart{
    constructor(){
        this.x=1;
    }
    say(){

    }
    show(){
        alert(this.x);
    }
}
var obj=new Cart();
obj.show();

class Cart_child extends Cart{
    constructor(){
        super();
    }
    sta(){
        alert(this.x);
    }
}
var obj2=new Cart_child();
obj2.sta();

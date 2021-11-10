//this function takes an integer array and uses them to decide the movements.
function trackRobot(){
    var args=arguments;
    let pos=[0,0];
    let subcount=0;
    for(let i=0;i<args.length;i++){
        subcount++;
        switch(subcount){
            case 1:pos[1]+=args[i];break;
            case 2:pos[0]+=args[i];break;
            case 3:pos[1]-=args[i];break;
            case 4:pos[0]-=args[i];break;
            default:break;
        }
        if(subcount>=4)subcount=0;
    }
    return pos;
}

console.log(trackRobot(20,30,10,40));
console.log(trackRobot());
console.log(trackRobot(-10,20,10));

//takes an array of {string name, int cost} objects products, an int money, and an int product number
function vendingMachine(products, money, productNumber){
    if(productNumber>products.length||productNumber<=0)return "Enter a valid product number.";
    if(products[productNumber-1].cost>money)return "Not enough money for this product.";
    let out={
        product:products[productNumber-1].name,
        change:[]
    };
    let diff=money-products[productNumber-1].cost;
    if(diff==0)return out;
    while(diff>=10){
        if(diff/500>=1){
            diff-=500;
            out.change.push(500);
        }
        else if(diff/200>=1){
            diff-=200;
            out.change.push(200);
        }
        else if(diff/100>=1){
            diff-=100;
            out.change.push(100);
        }
        else if(diff/50>=1){
            diff-=50;
            out.change.push(50);
        }
        else if(diff/20>=1){
            diff-=20;
            out.change.push(20);
        }
        else if(diff/10>=1){
            diff-=10;
            out.change.push(10);
        }
    }
    return out;
}


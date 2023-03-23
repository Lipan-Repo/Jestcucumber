export class CalculateSum{
    num1:number = 0;
    num2:number = 0;
    sum:number  = 0;
    public setNumber(num1:number,num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }

    public calSum(){
        this.sum = this.num1 + this.num2;
    }

    public getCalSum() : number{
        return this.sum
    }
}
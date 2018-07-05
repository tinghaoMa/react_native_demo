

export  default class Student{

    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    toString(){

        return "姓名 ： " + this.name + "年龄 ： " + this.age + "性别 ： " + this.sex;
    }
}
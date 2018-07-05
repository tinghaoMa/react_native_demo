import Student from './Student'

export default class MingStudent extends Student {

    constructor() {
        super("小明", '33', '男')
    }


    toString() {
        return "我是小明 ：" + super.toString();
    }
}
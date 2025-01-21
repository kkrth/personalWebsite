export class emp {
    empid: number;
    ename: string;
    hiredate: string;
    sex: number;

    constructor(empid: number, ename: string, hiredate: string, sex: number) {
        this.empid = empid;
        this.ename = ename;
        this.hiredate = hiredate;
        this.sex = sex;
    }
}

export class todo {
    type: string;
    title: string;
    link: string;

    constructor(type: string, title: string, link: string) {
        this.type = type;
        this.title = title;
        this.link = link;
    }

}

export class warn {
    type: string;
    title: string;
    link: string;

    constructor(type: string, title: string, link: string) {
        this.type = type;
        this.title = title;
        this.link = link;
    }


}
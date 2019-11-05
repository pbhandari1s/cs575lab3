export class Blog {
    id: number;
    title: string;
    intro: string;
    content: string;

    constructor(id: number, title: string, intro: string, content: string) {
        this.id = id;
        this.title = title;
        this.intro = intro;
        this.content = content;
    }
} 

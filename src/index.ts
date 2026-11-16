// // 1. Base Class – User
// class User{
//     notebooks:NoteBook[]=[]

//     constructor(
//     private id:number,
//     public name:string,
//     public email:string,
//     private password:string,
//     public phone:string,
//     private age:number){
//         if (this.age < 18 || this.age > 60) {
//                 throw new Error("Age must be between 18 and 60");    
//         }
//     }
//     addNoteBook(notebook: NoteBook): void {
//         this.notebooks.push(notebook);
//     }
    
//     displayInfo(): void {
//         console.log(`id:${this.id} Name:${this.name} Email:${this.email} Password:${this.password} Phone:${this.phone} Age:${this.age}`);
//         console.log("NoteBook:" ,this.notebooks);
//     }
// }
// const user1 = new User(123,"Harby","harby@gmail.com","123456789","+01126902013",21)
// // user1.displayInfo()

// // 2. Inheritance – Admin User
// class Admin extends User{
//     constructor(    
//     id:number,
//     name:string,
//     email:string,
//     password:string,
//     phone:string,
//     age:number){
//         super(id,name,email,password,phone,age)
//         }
//     manageNotes():void{
//         console.log("Admin is managing notes");
//     }
// }
// const admin = new Admin(111,"mohamed","mohamed@gmail","aaaaaa","011126902013",22)
// // admin.displayInfo()
// // admin.manageNotes()

// //3. Class - Note
// class Note{
//     constructor(public id:number , public title:string , public content:string , private author:User){
//     }
//     preview():string{
//         return this.content.slice(0,15)
//     }
// }
// const userNote = new Note(222,"My Tasks","Learn TypeScript OOP",user1)
// // console.log(userNote.preview());

// // 4. Composition– NoteBook and Notes
// class NoteBook {
//     private notes: Note[] = [];
//     addNote(id: number, title: string, content: string ,author:User):void{
//         const newNote = new Note(id, title, content ,author);
//         this.notes.push(newNote);
//     }
//     deleteNote(id:number):void{
//         this.notes = this.notes.filter(note => note.id !== id); 
//     }
//     getNote():Note[]{
//         return this.notes
//     }
// }
// const note = new NoteBook()
// note.addNote(33333,"My Tasks","Learn TypeScript OOP",user1)
// note.addNote(4444444444444,"2222222222","Learn TypeScript OOP",user1)
// // note.deleteNote(33333)

// user1.addNoteBook(note)
// user1.displayInfo()
// // 6.Association – Note and User
// console.log(note.getNote());

// 7. Generics– Data Storage(
class Storage<T> {
    private items: T[] = [];
    addItem(item: T){
        this.items.push(item)
    }
    removeItem(item: T){
    const index = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
    }
    getAllItems(): T[]{
        return this.items
    }
}
const item1 = new Storage<string | number | boolean>()
item1.addItem("Harby")
item1.addItem(111)
item1.addItem(true)
item1.addItem(false)
item1.removeItem(111)
console.log(item1.getAllItems());


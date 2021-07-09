// ES5
// function Student(name,age){
//     this.name = name;
//     this.age = age;
// }

// var st = new Student("hào",18);

// ES6
// khai báo bằng từ khóa class
class Student{
    // hàm khởi tạo class
    // đưuocj gọi khi tạo 1 thể hiện của class
    // có hai loại: có tham số hoặc không có tham số
    // không có return
    constructor(name,age){
        // thuộc tính
        this.name = name;
        this.age = age;
    }
// phương thức
    showInfo(){
        console.log("tên: " + this.name + " tuổi: " + this.age);
    }
}

export default Student;
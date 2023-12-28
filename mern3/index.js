let subject = "Math";
let experience = 7;

let teacherDetails =
  subject === "Math"
    ? experience <= 5
      ? "Junior Math Teacher"
      : experience <= 10
        ? "Intermediate Math Teacher"
        : "Senior Math Teacher"
    : subject === "English"
      ? experience <= 5
        ? "Junior English Teacher"
        : experience <= 10
          ? "Intermediate English Teacher"
          : "Senior English Teacher"
      : "Unknown Subject";

console.log(teacherDetails);
let Names = "Alice";
let period = "1";
let time = "8 A.M";
let subjects;



switch(Names) {
  case "Jack":
      case time = "8 A.M":
      case period = "1":
        subjects = "Its Physics period"; 
        break;
      
    

  case "Alice":
      case time = "9 A.M":
      case period = 2:
        subjects= " Its English period"; 
        break;
      default:
        subjects = "period not define";
break;
    
}

console.log(subjects);




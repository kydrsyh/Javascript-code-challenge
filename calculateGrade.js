const marks = [80, 80, 50]

function calculateGrade(marks){
    let total = 0
    
    for (let i = 0; i < marks.length; i++) {
       total += marks[i]
    }
    let grade =  total / marks.length
    if(grade > 89 && grade <= 100){
        return 'A'
    } else if (grade > 79){
        return 'B'
    } else if (grade > 69){
        return 'C'
    } else if (grade > 59){
        return 'D'
    } else if (grade > 0){
        return 'F'
    }
}

console.log(calculateGrade(marks))
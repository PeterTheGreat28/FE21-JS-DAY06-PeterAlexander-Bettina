var employeeInfo = JSON.parse(employees);
console.log(employees);

for(let employees in employeeInfo) {
    document.getElementById("myTable").innerHTML += 

 ` <tr>
        <td>${employeeInfo[employees].userID}</td>
        <td>${employeeInfo[employees].firstName}</td>
        <td>${employeeInfo[employees].lastName}</td>
        <td>${employeeInfo[employees].email}</td>
        <td>${employeeInfo[employees].jobTitle}</td>
        <td>${employeeInfo[employees].salary}</td>
    </tr>` 
}
                   
        


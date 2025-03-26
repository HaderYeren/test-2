
function getStudents() {
  fetch("/students")
    .then(response => response.json())
    .then(data => renderStudents(data.students))
    .catch(error => console.error('Error fetching students:', error));
}

function renderStudents(students) {
  const tableBody = document.querySelector("#students-table tbody");
  tableBody.innerHTML = "";

  students.forEach(student => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills.join(", ")}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled ? "Так" : "Ні"}</td>
      <td>
        <button onclick="updateStudent(${student.id})">Оновити</button>
        <button onclick="deleteStudent(${student.id})">Видалити</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function addStudent(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const course = document.querySelector("#course").value;
  const skills = document.querySelector("#skills").value.split(",");
  const email = document.querySelector("#email").value;
  const isEnrolled = document.querySelector("#isEnrolled").checked;

  const newStudent = {
    name,
    age,
    course,
    skills,
    email,
    isEnrolled
  };

  fetch("/students", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newStudent)
  })
  .then(response => response.json())
  .then(data => {
    getStudents();
    document.querySelector("#add-student-form").reset();
  })
  .catch(error => console.error('Error adding student:', error));
}

function updateStudent(id) {

  console.log(`Оновлення студента з ID: ${id}`);
}

function deleteStudent(id) {
  fetch(`/students/${id}`, {
    method: "DELETE"
  })
  .then(() => getStudents())
  .catch(error => console.error('Error deleting student:', error));
}

document.querySelector("#get-students-btn").addEventListener("click", getStudents);

document.querySelector("#add-student-form").addEventListener("submit", addStudent);

let students = [];
const studentForm = document.getElementById('student-form');
const studentTableBody = document.getElementById('student-table-body');
const searchInput = document.getElementById('searchInput');

studentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const course = document.getElementById('course').value;
  const faculty = document.getElementById('faculty').value;
  const subjects = document.getElementById('subjects').value.split(',');

  const student = {
    firstName,
    lastName,
    age,
    course,
    faculty,
    subjects,
  };

  students.push(student);
  renderTable(students);
  studentForm.reset();
});

function renderTable(students) {
  studentTableBody.innerHTML = '';
  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.faculty}</td>
      <td>${student.subjects.join(', ')}</td>
      <td>
        <button onclick="editStudent(${index})">Редагувати</button>
        <button onclick="deleteStudent(${index})">Видалити</button>
      </td>
    `;
    studentTableBody.appendChild(row);
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable(students);
}

function editStudent(index) {
  const student = students[index];
  document.getElementById('firstName').value = student.firstName;
  document.getElementById('lastName').value = student.lastName;
  document.getElementById('age').value = student.age;
  document.getElementById('course').value = student.course;
  document.getElementById('faculty').value = student.faculty;
  document.getElementById('subjects').value = student.subjects.join(',');
  students.splice(index, 1);
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = students.filter(student =>
    student.lastName.toLowerCase().includes(query) ||
    student.course.toString().includes(query)
  );
  renderTable(filtered);
});

renderTable(students);

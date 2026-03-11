import React, { useEffect, useState } from 'react'
import StudentCard from "./StudentCard"
import View from './view'

const StudentSection = () => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const [formLive, setFormLive] = useState(false)

  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)


  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [batch, setBatch] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")  
  const [editId, setEditId] = useState(null)


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {

        const formattedStudents = data.map((user) => ({
          id: user.id,
          name: user.name,
          course: "react",
          batch: "2025",
          email: `${user.username.toLowerCase().replace(/\s/g, "")}@gmail.com`,
          phone: user.phone,
          address: user.address.city
        }))

        setStudents(formattedStudents)
      })
  }, [])

  const handleDelete = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    )

    setStudents(updatedStudents)
  }
  const handleView = (student) => {
    setSelectedStudent(student)
  }

  const fetchStudent = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respond) => respond.json())
      .then((data) => {

        const formattedStudent = data.map((user) => ({
          id: user.id,
          name: user.name,
          course: "react",
          batch: "2025",
          email: `${user.username.toLowerCase().replace(/\s/g, "")}@gmail.com`,
          phone: user.phone,
          address: user.address.city
        }))

        setStudents(formattedStudent)
      })
      .catch(() => {
        setError("Failed to fetch students")
        setLoading(false)
      })
  }
  const handleStudents = () => {

    if (editId !== null) {

      const updatedStudents = students.map((student) =>
        student.id === editId
          ? { ...student, name, course, batch,email,phone,address }
          : student
      )

      setStudents(updatedStudents)
      setEditId(null)

    } else {

      const newStudent = {
        id: Date.now(),
        name,
        course,
        batch,
        email,
        phone,
        address
      }

      setStudents([...students, newStudent])

    }

    setName("")
    setCourse("")
    setBatch("")
    setEmail("")
    setPhone("")
    setAddress("")
    setFormLive(false)

  }

  const handleEdit = (student) => {
    setName(student.name)
    setCourse(student.course)
    setBatch(student.batch)
    setEmail(student.email)
    setPhone(student.phone)
    setAddress(student.address)

    setEditId(student.id)

    setFormLive(true)
  }
  return (
    <div className="container my-5">

      <h2 className="text-center mb-4 fw-bold">Our Students</h2>

      {
        students.length === 0
          ? <h2 className='text-danger text-center'>No students found</h2>
          : <h5>Total students : {students.length}</h5>
      }

      <div className="row">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            course={student.course}
            batch={student.batch}
            onDelete={() => handleDelete(student.id)}
            onView={() => handleView(student)}
            onEdit={() => handleEdit(student)}
          />
        ))}
      </div>

      <button
        className='btn btn-primary mb-2'
        onClick={() => {
          setEditId(null)
          setName("")
          setCourse("")
          setBatch("")
          setFormLive(true)
        }}
      >
        Add student
      </button>

      <button
        className='btn btn-warning'
        onClick={() => setStudents([])}
      >
        Clear all
      </button>

      {
        formLive &&
        (
          <div className="popup-form">
            <h4>{editId ? "Edit Student" : "Add New Student"}</h4>
            <input type="text" placeholder="Name" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Course" className="form-control mb-2" value={course} onChange={(e) => setCourse(e.target.value)} />
            <input type="text" placeholder="Batch" className="form-control mb-2" value={batch} onChange={(e) => setBatch(e.target.value)} />
            <input type="email" placeholder="Email" className="form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Phone" className="form-control mb-2" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Address" className="form-control mb-2" value={address} onChange={(e) => setAddress(e.target.value)} />

            <button
              className="btn btn-success me-2"
              onClick={handleStudents}
            >
              {editId ? "Update Student" : "Add Student"}
            </button>

            <button
              className="btn btn-secondary mt-2"
              onClick={() => setFormLive(false)}>
              Cancel
            </button>
          </div>
        )
      }




      <button
        className='btn btn-info mt-2'
        onClick={fetchStudent}
      >
        Fetch Students
      </button>
      {selectedStudent && (
        <View
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}

    </div>
  )
}

export default StudentSection
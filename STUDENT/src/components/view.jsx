import React from 'react'

const View = ({ student,onClose }) => {

  return (
    <div className="popup-form">

      <h3 className="text-center">Student Details</h3>

      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Course:</b> {student.course}</p>
      <p><b>Batch:</b> {student.batch}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Phone:</b> {student.phone}</p>
      <p><b>Address:</b> {student.address}</p>
      <button className="btn btn-secondary mt-2" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default View

import view from './view'
import React from 'react'

const StudentCard = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card student-card shadow-sm">
        <div className="card-body">
          <p>ID: {props.id}</p>
          <h5 className="card-title fw-bold ">{props.name}</h5>
          <p className="card-text">Course:{props.course}</p>
          <p className="card-text">Batch: {props.batch}</p>

          <button className="btn btn-primary btn-sm me-2 mb-2" onClick={props.onView}>
            View
          </button>
          <button
            className="btn btn-warning btn-sm mb-2 me-2"
            onClick={props.onEdit}
          >
            Edit
          </button>

          <button className="btn btn-danger btn-sm" onClick={props.onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
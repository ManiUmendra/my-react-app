import React from 'react'

export default function Alert(props) {
  return (
    props.mode && <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
         <strong>{props.mode.type}</strong>:{props.mode.msg}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}

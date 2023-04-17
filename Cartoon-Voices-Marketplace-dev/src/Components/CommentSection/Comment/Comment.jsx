import React from 'react'

function Comment({item}) {
    return (
        <div className="row align-items-md-center mb-4">
            <div className="d-flex justify-content-center">
                <div class="card" style={{ width: "180rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.email}</h6>
                        <p class="card-text">{item.comment}</p>
                        <a href="#" class="card-link">Report</a>
                        <a href="#" class="card-link">Reply</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
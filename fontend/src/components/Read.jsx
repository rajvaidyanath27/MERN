import React, { useState, useEffect } from "react";

const Read = () => {
  const [data, setData] = useState([]); // Store multiple users as an array
  const [error, setError] = useState("");

  async function getData() {
    const response = await fetch("http://localhost:5000");

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    } else {
      setData(result); // Assuming result is an array of user objects
    }
  }

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    } else {
      setError("Deleted successfully");

      setTimeout(() => {
        setError("");
        getData(); // Refresh the list after deletion
      }, 2000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      <h2 className="text-center">All Data</h2>

      {error && <p className="text-danger">{error}</p>} {/* Show error if any */}

      <div className="row">
        {data.length > 0 ? (
          data.map((user) => (
            <div className="col-md-3" key={user._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                  <p className="text-muted">Age: {user.age}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary">Edit</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No data available</p>
        )}
      </div>
    </div>
  );
};

export default Read;

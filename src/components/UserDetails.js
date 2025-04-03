import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ users, isLoading }) => {
  const [user, setUser] = useState(null);
  const params = useParams();

  useEffect(() => {
    const findUser = users.find((items) => items.id == params.id);
    if (findUser) {
        setUser(findUser);
      }
  }, [users, params.id]);

  if (!user) {
    return <h1>User not found</h1>; // Handles case where user is undefined
  }

  return (
    <div style={{ width: "50%", margin: "5px auto" }}>
      <h1>User Details</h1>  

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <label
              style={{
                display: "inline",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              Name:
            </label>
            <p style={{ display: "inline" }}>{user.name}</p>
          </div>
          <div>
            <label
              style={{
                display: "inline",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              UserName:
            </label>
            <p style={{ display: "inline" }}>{user.username}</p>
          </div>
          <div>
            <label
              style={{
                display: "inline",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              Email:
            </label>
            <p style={{ display: "inline" }}>{user.email}</p>
          </div>
          <div>
            <label
              style={{
                display: "inline",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              Phone:
            </label>
            <p style={{ display: "inline" }}>{user.phone}</p>
          </div>
          <div>
            <label
              style={{
                display: "inline",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              Website:
            </label>
            <p style={{ display: "inline" }}>{user.website}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;

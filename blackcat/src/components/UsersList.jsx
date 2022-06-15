import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsersRequest, getUsersRequest } from "../redux/getUsers";
import { VscTrash } from "react-icons/vsc";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  if (localStorage.getItem("user")) {
  }
  const me = JSON.parse(localStorage.getItem("user")) || undefined;

  const handleDelete = (userId) => {
    dispatch(deleteUsersRequest(userId));
    //setTimeout(() => window.location.reload(), 500);
  };

  useEffect(() => {
    dispatch(getUsersRequest(me.id));
  }, []);
  return (
    <div>
      <div class="py-6"></div>
      <div class="columns is-centered is-multiline">
        <div class="column is-full">
          <p class="title has-text-centered">Usuarios</p>
        </div>
        <div class="column is-6 is-offset-3">
          <table class="table is-hoverable has-background-color2">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th>BORRAR</th>
              </tr>
            </thead>
            {users.length !== 0
              ? users.map((user, index) => (
                  <tbody>
                    <tr>
                      <th>{user.id}</th>
                      <th>{user.name}</th>
                      <th>{user.surname}</th>
                      <th>{user.email}</th>
                      <th>
                        <p class="has-text-centered">
                          <label class="checkbox">
                            <input type="checkbox" />
                          </label>
                        </p>
                      </th>
                      <th>
                        <p class="has-text-centered">
                          <VscTrash
                            class="is-clickable"
                            size={20}
                            onClick={() => handleDelete(user.id)}
                          />
                        </p>
                      </th>
                    </tr>
                  </tbody>
                ))
              : "NO HAY USERS"}
          </table>
        </div>
      </div>
      <div class="py-6"></div>
      <div class="py-6"></div>
      <div class="py-6"></div>
    </div>
  );
}

export default UsersList;

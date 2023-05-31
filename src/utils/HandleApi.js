import axios from "axios";

const baseUrl = "https://todo-api-466e.onrender.com";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
});

const getAllToDo = (setToDo) => {
  api
    .get("/")
    .then(({ data }) => {
      console.log("data ---> ", data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const addToDo = (text, setText, setToDo) => {
  api
    .post("/save", { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  api
    .post("/update", { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  api
    .post("/delete", { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };

import './UserForm'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const initialState = {
        username: "",
        email: "",
        text:"",
      };
  const [data, setData] = useState({
    username: "",
    email: "",
    text:""
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (e) => {
    if ( data.username.length < 3 ) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se lanza el formulario", data);
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        value={data.username}
        name="username"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        value={data.email}
        name="email"
      />
       <input
        type="textarea"
        placeholder="pon aquí tu texto"
        onChange={handleInputChange}
        value={data.text}
        name="text"
      />
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
      {message}
    </form>
  );
};


export default UserForm
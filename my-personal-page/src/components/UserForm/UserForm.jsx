import './UserForm'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserForm.css'



const UserForm = () => {
  let contactInfo = JSON.parse(localStorage.getItem("USERS")) || [];
 const saveData=() =>{
      contactInfo.push(data);
      localStorage.setItem("USERS", JSON.stringify(contactInfo));
    }

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
    saveData()
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
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
       <textarea name="text" cols='30' rows='10'
        placeholder="pon aquí tu texto"
        onChange={handleInputChange}
        value={data.text}
      />
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
      {message}
      </div>
    </form>
  );
};


export default UserForm
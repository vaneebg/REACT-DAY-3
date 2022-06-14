import './Reserve'
import './Reserve.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Reserve = () => {
  let contactReserve = JSON.parse(localStorage.getItem("RESERVES")) || [];
 const saveData=() =>{
      contactReserve.push(data);
      localStorage.setItem("RESERVES", JSON.stringify(contactReserve));
    }

const initialState = {
        name: "",
        day_reserve: "",
        number:"",
      };
  const [data, setData] = useState({
    name: "",
    day_reserve: "",
    number:""
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (e) => {
    if ( data.name===" " && data.day_reserve===" " && data.number=== " ") {
      // NO VAAA
      setMessage("Debes rellenar los tres campos");
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
      <h3>Rellena aquí tu reserva</h3>
      <input
        type="text"
        placeholder="nombre"
        onChange={handleInputChange}
        value={data.name}
        name="name"
      /><br/>
      <input
        type="date"
        onChange={handleInputChange}
        value={data.day_reserve}
        name="day_reserve"
      /><br/>
       <input
        type="number"
        placeholder="cuántos sois en la reserva"
        onChange={handleInputChange}
        value={data.number}
        name="number"
      /><br/>
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
      {message}
      </div>
    </form>
  );
};


export default Reserve
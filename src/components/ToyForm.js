import React, {useState} from "react";

function ToyForm({renderNewToy}) {
  const [formValue, setFormValue] = useState({
    name:"",
    image:""
    })

    function onFormChange(event){
      setFormValue({...formValue, 
      [event.target.name]: event.target.value
      })

      console.log(formValue)
    }

    function handleSubmit(){
      const newToy={
        name: formValue.name, 
        image: formValue.image, 
        likes:0
      }

      fetch('http://localhost:3001/toys', {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(newToy)
      })
      .then(res => res.json())
      .then(renderNewToy)
      

    }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          onChange={onFormChange}
          value={formValue.name}
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          onChange={onFormChange}
          value={formValue.image}
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

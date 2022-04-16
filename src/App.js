import React from "react"; 

function App() {

  /*const [nome, setNome] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');*/

  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  });

  function handleSubmit(event){

    event.preventDefault();

  
  }

  function handleChange({target}){
    const {id, value} = target;
    console.log(id, value);

    setForm({...form, [id]:value})
  }

  return (
 
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">nome</label><br></br>
      <input id="nome" type={'text'} value={form.nome} name="nome" onChange={handleChange}></input>
      <br></br>
      <label htmlFor="email">email</label><br></br>
      <input id="email" type={'email'} value={form.email} name="email" onChange={handleChange}></input>


      <p>{form.nome}</p>
      <p>{form.email}</p>

      <button>Enviar</button>
    </form>
  
  );
}

export default App;

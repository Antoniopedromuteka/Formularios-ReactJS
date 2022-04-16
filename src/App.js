import React from "react"; 


const formFields = [
  {
    id:'nome',
    label:'Nome',
    type:'text'
  },
  {
    id:'email',
    label:'Email',
    type:'email'
  },

  {
    id:'senha',
    label:'Senha',
    type:'password'
  },


  {
    id:'cep',
    label:'Cep',
    type:'text'
  },
  
  {
    id:'rua',
    label:'Rua',
    type:'text'
  },

  {
    id:'numero',
    label:'Numero',
    type:'text'
  },

  {
    id:'bairro',
    label:'Bairro',
    type:'text'
  },

  {
    id:'cidade',
    label:'Cidade',
    type:'text'
  },

  {
    id:'estado',
    label:'Estado',
    type:'text'
  },

]


function App() {

  /*const [nome, setNome] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');*/

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field)=>{
      return{
        ...acc,
        [field.id]:'',
      }
    },{}),
 
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event){

    event.preventDefault();

    fetch("https://ranekapi.origamid.dev/json/api/usuario",{
      method: 'POST',

      headers:{
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(form),

    }).then(response => setResponse(response))
    .catch(error => console.log(error))
  
  }

  function handleChange({target}){
    const {id, value} = target;
    console.log(id, value);

    setForm({...form, [id]:value})
  }

  return (
 
    <form onSubmit={handleSubmit}>
  
      {formFields.map(({id, label, type})=>
      <div key={id}>
        <label htmlFor={id}>{label}</label><br></br>
        <input id={id} type={type} value={form[id]} onChange={handleChange}></input>
      </div>)}

       {response && response.ok && <p>Formulario enviado</p>}
 

      <button>Enviar</button>
    </form>
  
  );
}

export default App;

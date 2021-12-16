import React from 'react'
import Header from '../headerComponents/headerComponents'
import './style.css'
import API from "../../services/api"
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CardComponent from "../cardComponents/cardComponents";


export default function Home() {

  const [post, setPost] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [answer, setAnswer] = React.useState(false);
  const [state] = React.useState();

  const handleClickOpen = (param) => {
    setOpen(true);
    setMessage(param);
    setAnswer("Tente Novamente!");
  };

  const handleClickOpenButton = () => {
    setOpen(true);
    setMessage("Não é possível criar um novo card no momento!");
    setAnswer("Funcionalidade em Manutenção.");
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  function SimpleDialog(props) {
    const { onClose, open, message, answer } = props;
    const handleClose = () => { onClose(); };
    return (
      <Dialog onClose={handleClose} open={open}>
        <div classNome="tituloDialogo">
          <Typography className="tipografia" align="center" color="red" border-radius="80%">
            <DialogTitle>Atenção</DialogTitle>
            {message}
            <br></br>
            <br></br>
            {answer}
          </Typography>
        </div>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let str = event.target[0].value;
    if (Boolean(str)) {
      API.get(`pokemon/` + event.target[0].value).then((res) => {
        console.log(res);
        console.log(res.data);
        setPost(res.data);
      }).catch((error) => {
        // your error handling goes here}
        handleClickOpen("Erro ao fazer a consulta, verifique se o valor digitado está correto.");
      });
    } else {
      handleClickOpen("Para fazer a pesquisa é necessário entrar com um valor");
    }
  };

  return (
    <div>
      <Header></Header>
      <div>
        <section>
          <form onSubmit={handleSubmit}>
            <div id="divBusca" className="icon">
              <input type="text" id="txtBusca" value={state} placeholder=" Digite aqui sua busca..." />
              <button id="btnBusca"></button>
            </div>
            <p>Resultados da Busca</p>
            <br></br>
          </form>
        </section>
        <main>
          <span>
            <button className="button" type="button" onClick={handleClickOpenButton}>Novo Card</button>
          </span>
          {post ? null : <p>Não há registro</p>}
          <ul id="fundo">
            {post ? <li id="personName"> <CardComponent
              name={post.species.name}></CardComponent></li>
              : null}
            {post ? post.stats.map((item, index) => {
              return <li id="propsPerson"> <CardComponent className="person" name={item.stat.name}></CardComponent></li>
            }) : null}
          </ul>
        </main>
        <SimpleDialog open={open} message={message} onClose={handleClose} answer={answer} />
      </div>
    </div>
  );
}



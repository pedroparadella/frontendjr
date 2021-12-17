import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "../homeComponents/style.css";
import icone from "../../assets/images/Icon-trash.svg";
import iconeEdit from "../../assets/images/Icon-edit.svg";

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div classNome="titulo">
        <Typography className="tipog" align="center" color="red" >
          <DialogTitle>Em progresso...</DialogTitle>
          Funcionalidade não foi implementada.
        </Typography>
      </div>

    </Dialog>

  );
}

export default function Home(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Card className="Card" sx={{ minWidth: 275 }}>
        <CardContent>
          <i className='imgHand'>

          </i>
          <Typography align='center' sx={{ mb: 1.5 }} color="text.secondary">
            <p className='atribute'>{props.name}</p>
          </Typography>
        </CardContent>
        <hr></hr>
        <CardActions>
          <Typography align="center">
            <ul>
              <li id="trash">
                <img src={icone} alt=" " onClick={handleClickOpen} />
              </li>
              <li>
                <Button className="btn" onClick={handleClickOpen} size="small">
                  Excluir
                </Button>
              </li>
              <li id="iconeEdit">
                <img src={iconeEdit} alt=" " onClick={handleClickOpen} />
              </li>
              <li>
                <Button className="btn" onClick={handleClickOpen} size="small">
                  Editar
                </Button>
              </li>
            </ul>
          </Typography>

        </CardActions>
      </Card>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  );
}
import React from "react";
import icone from "../../assets/images/icone.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Em progresso</DialogTitle>
      funcionalidade não foi implementada.
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
            <img src={icone} alt="" width="30" />
          </i>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClickOpen} size="small">
            Excluir
          </Button>
          <Button onClick={handleClickOpen} size="small">
            Editar
          </Button>
        </CardActions>
      </Card>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  );
}
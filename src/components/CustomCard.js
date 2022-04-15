import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const CustomCard = ({ pokemon }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.7em',
      }}
    >
      <CardMedia
        component='img'
        image={pokemon.sprites.front_default}
        // alt={pokemon.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography align='center'>{pokemon.name}</Typography>
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Button style={{ flex: 1 }}>Excluir</Button>
        <Button style={{ flex: 1 }}>Editar</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;

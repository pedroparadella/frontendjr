import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.7em',
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  flex: 1,
}));

const firstLetterUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CustomCard = ({ pokemon, setSnackbarOpen }) => {
  return (
    <StyledCard>
      <CardMedia
        component='img'
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography align='center'>
          {firstLetterUppercase(pokemon.name)}
        </Typography>
      </CardContent>

      <StyledCardActions>
        <StyledButton onClick={() => setSnackbarOpen(true)}>
          Excluir
        </StyledButton>
        <StyledButton onClick={() => setSnackbarOpen(true)}>
          Editar
        </StyledButton>
      </StyledCardActions>
    </StyledCard>
  );
};

export default CustomCard;

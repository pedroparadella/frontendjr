import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomCard from '../components/CustomCard';
import axios from 'axios';
import CustomSearchBar from '../components/CustomSearchBar';
import { Alert, Snackbar } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A82670',
    },
    secondary: {
      main: '#5F1478',
    },
  },
});

const iconImpar = require('../assets/impar-removebg-preview.png');
const pokemonWallpaper = require('../assets/pokemon3.jpg');

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonUrls, setPokemonUrls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const getPokemonUrls = async () => {
      const response = await axios.get(POKEAPI_URL);
      setPokemonUrls(response.data.results);
    };

    getPokemonUrls();
  }, []);

  useEffect(() => {
    setPokemons([]);

    const getPokemon = async (url) => {
      try {
        const response = await axios.get(url);
        setPokemons((pokemons) => [...pokemons, response.data]);
      } catch (error) {
        if (error.response.status === 404) {
          console.log('Pokemon not found');
        }
      }
    };

    if (searchTerm !== '') {
      setPokemons([]);
      getPokemon(`${POKEAPI_URL}/${searchTerm}`);
    } else {
      Promise.all(
        pokemonUrls.map(async (pokemon) => {
          getPokemon(pokemon.url);
        })
      );
    }
  }, [searchTerm, pokemonUrls]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position='relative'
        sx={{
          backgroundImage: `linear-gradient(to right,#5F1478,#A82670)`,
        }}
      >
        <Toolbar>
          <img
            src={iconImpar}
            alt='Impar'
            height='40px'
            style={{ marginRight: '1em' }}
          />
          <Typography variant='h6' color='inherit' noWrap>
            Teste Ímpar
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <main style={{ backgroundColor: '#F6F4F6' }}>
        {/* Image and search bar */}
        <Box>
          <Box position='absolute' width='100%' height='17em'>
            <img
              src={pokemonWallpaper}
              alt='Pokemon Wallpaper'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            ></img>
          </Box>
          <Container maxWidth='lg'>
            <Box
              sx={{
                pb: '3em',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              width='100%'
              height='17em'
            >
              <CustomSearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </Box>
          </Container>
        </Box>

        {/* Cards */}
        <Container sx={{ py: 1 }} maxWidth='lg'>
          <Box
            maxWidth='lg'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
            m='2em 0em'
          >
            <Typography variant='h4' width='fit-content' color='secondary'>
              Resultado de busca
            </Typography>
            <Button
              variant='contained'
              size='large'
              sx={{ borderRadius: '0.7em', width: '12em', height: '4em' }}
              onClick={() => setSnackbarOpen(true)}
            >
              Novo Card
            </Button>
          </Box>

          <Grid container spacing={4}>
            {pokemons.map((pokemon) => (
              <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                <CustomCard
                  pokemon={pokemon}
                  setSnackbarOpen={setSnackbarOpen}
                />
              </Grid>
            ))}
          </Grid>

          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={isSnackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            onClick={() => setSnackbarOpen(false)}
          >
            <Alert severity='error' sx={{ width: '100%' }}>
              Funcionalidade ainda não implementada!
            </Alert>
          </Snackbar>
        </Container>
      </main>
    </ThemeProvider>
  );
}

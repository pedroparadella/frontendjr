import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomCard from '../components/CustomCard';
import axios from 'axios';
import { Search } from '@mui/icons-material';
import CustomSearchBar from '../components/CustomSearchBar';
import zIndex from '@mui/material/styles/zIndex';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E76316',
    },
    secondary: {
      main: '#5F1478',
    },
  },
});

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonUrls, setPokemonUrls] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemonUrls(response.data.results);
    };

    getPokemonList();
  }, []);

  useEffect(() => {
    const getPokemon = async (url) => {
      const response = await axios.get(url);
      setPokemons((pokemons) => [...pokemons, response.data]);
    };

    Promise.all(
      pokemonUrls.map(async (pokemon) => {
        getPokemon(pokemon.url);
      })
    );
  }, [pokemonUrls]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Header */}
      <AppBar
        position='relative'
        sx={{ backgroundImage: 'linear-gradient(to right,#601478,#A82670)' }}
      >
        <Toolbar>
          <img
            src={require('../assets/impar-removebg-preview.png')}
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
              src={require('../assets/pokemon2.jpg')}
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
              <CustomSearchBar />
            </Box>
          </Container>
        </Box>

        {/* Cards */}
        <Container sx={{ py: 1 }} maxWidth='lg'>
          <Box
            maxWidth='lg'
            display='flex'
            justifyContent='space-between'
            m='2em 0em'
          >
            <Typography variant='h4' width='fit-content' color='secondary'>
              Resultado de busca
            </Typography>
            <Button
              variant='contained'
              size='large'
              sx={{ borderRadius: '0.7em', width: '12em', height: '4em' }}
            >
              Novo Card
            </Button>
          </Box>

          <Grid container spacing={4}>
            {pokemons.map((pokemon) => (
              <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                <CustomCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

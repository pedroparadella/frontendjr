import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
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

const theme = createTheme();

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
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            Teste Ímpar
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <main style={{ backgroundColor: '#F6F4F6' }}>
        {/* Image and search bar */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='text.secondary'
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Button variant='contained'>Main call to action</Button>
              <Button variant='outlined'>Secondary action</Button>
            </Stack>
          </Container>
        </Box>

        {/* Cards */}
        <Container sx={{ py: 8 }} maxWidth='lg'>
          {/* End hero unit */}
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

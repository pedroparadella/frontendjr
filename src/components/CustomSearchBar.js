import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { InputBase } from '@mui/material';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontSize: theme.typography.h5.fontSize,
  border: `1px solid ${theme.palette.grey[200]}`,
  width: '100%',
  height: '40%',
  borderRadius: '0.7em',
  backgroundColor: '#FFFFFF',
  padding: '0 2em',
  '& .MuiInputBase-input': {
    width: '100%',
    transition: theme.transitions.create('width'),
  },
}));

export default function CustomSearchBar() {
  return (
    <StyledInputBase
      placeholder='Digite aqui sua busca...'
      inputProps={{ 'aria-label': 'search' }}
      endAdornment={<SearchIcon color='action' fontSize='large' />}
    />
  );
}

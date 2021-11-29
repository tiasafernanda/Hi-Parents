import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '99px',
  backgroundColor: 'white',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#787885',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#787885',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'black',
    [theme.breakpoints.up('md')]: {
      width: '38ch',
    },
  },
}));

const SearchInput = () => {
  return (
    <>
      <Search sx={{ display: 'flex', alignItems: 'center' }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search something here..." inputProps={{ 'aria-label': 'search' }} />
      </Search>
    </>
  );
};

export default SearchInput;

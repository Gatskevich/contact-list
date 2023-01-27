import Input from '@mui/material/Input';

interface SearchProps {
  onChange: (value: string) => void;
}

function Search({ onChange }: SearchProps) {
  return (
    <div className='search'>
      <Input
        className='search__input'
        fullWidth
        onChange={(value) => onChange(value.target.value)}
      />
    </div>
  );
}

export default Search;

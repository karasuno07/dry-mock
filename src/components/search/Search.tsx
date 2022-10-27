import react from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import styles from '~/components/search/Search.module.scss';

function Search() {
   return (
      <div className={styles.spanSearch}>
       <IconButton>
         <SearchIcon/>
       </IconButton>
        <Input 
            fullWidth
            placeholder='Search here..'
            disableUnderline={true}
        />        
      </div>
   );
}

export default Search;

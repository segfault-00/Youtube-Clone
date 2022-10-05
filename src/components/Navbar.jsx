import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import YTLogo from '../assets/yt_logo.svg';
import { SearchBar } from './';

const Navbar = () => (
	<Stack
		direction='row'
		alignItems='center'
		p={2}
		sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'center', gap: '10px' }}
	>
		<Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
			<img src={YTLogo} alt='logo' height={45} />
		</Link>
		<SearchBar />
	</Stack>
);

export default Navbar;

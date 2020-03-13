import axios from 'axios';
import { FETCH_USER } from './type';
const fetchUser = async () => {
	axios.get('/api/current_user');
};

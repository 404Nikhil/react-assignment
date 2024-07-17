import axios from 'axios';

export const fetchQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data.content;
  } catch (error) {
    console.error('Failed to fetch quote', error);
    return 'Failed to fetch quote';
  }
};
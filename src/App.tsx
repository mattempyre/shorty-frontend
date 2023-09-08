import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { setLongUrl, setShortUrl, setStatus } from './redux/urlsSlice';
import UrlInput from './components/UrlInput';
import ShortenButton from './components/ShortenButton';

function App() {
  const dispatch = useAppDispatch();
  const shortUrl = useAppSelector((state) => state.urls.shortUrl);

  const [inputUrl, setInputUrl] = useState('');

  const handleSubmit = async () => {
    dispatch(setStatus('loading'));
    // Assuming the backend provides an API endpoint /shorten
    const response = await fetch('/shorten', {
      method: 'POST',
      body: JSON.stringify({ url: inputUrl }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    dispatch(setShortUrl(data.shortUrl));
    dispatch(setStatus('succeeded'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl mb-4">Shorty URL Shortener</h2>
        <UrlInput value={inputUrl} onChange={setInputUrl} />
        <ShortenButton onClick={handleSubmit} />
        {shortUrl && <div className="mt-4">Short URL: {shortUrl}</div>}
      </div>
    </div>
  );
}

export default App;

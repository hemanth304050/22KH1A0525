import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import axios from 'axios';

const UrlForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [expiry, setExpiry] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {

        customSlug,
        expiry,
      });

      setShortUrl(response.data.shortUrl);

      await axios.post('https://log.ing.url/api/log', {
        action: 'shorten_url',
        timestamp: new Date(),
        url: longUrl,
      }, {
        headers: { Authorization: `Bearer YOUR_ACCESS_TOKEN` }
      });

    } catch (error) {
      console.error("Shorten failed", error);
    }
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Enter Long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <TextField
          label="Custom Slug (optional)"
          value={customSlug}
          onChange={(e) => setCustomSlug(e.target.value)}
        />
        <TextField
          label="Expiry Time (minutes)"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <Button variant="contained" onClick={handleShorten}>Shorten URL</Button>
        {shortUrl && (
          <p>
            Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </p>
        )}
      </Box>
    </Container>
  );
};

export default UrlForm;

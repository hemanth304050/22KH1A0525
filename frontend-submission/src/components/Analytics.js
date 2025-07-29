import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableRow, TableCell, TableHead, TableBody } from '@mui/material';

const Analytics = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {

        headers: { Authorization: `Bearer YOUR_ACCESS_TOKEN` }
      });
      setStats(res.data);
    };

    fetchStats();
  }, []);

  return (
    <Container>
      <h3>Analytics</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Last Access</TableCell>
            <TableCell>Source</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.shortUrl}</TableCell>
              <TableCell>{item.clicks}</TableCell>
              <TableCell>{item.lastAccess}</TableCell>
              <TableCell>{item.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Analytics;

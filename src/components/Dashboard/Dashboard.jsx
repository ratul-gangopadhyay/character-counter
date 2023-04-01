import React, { useEffect, useState } from 'react';
import { calculate } from '../../utils/commonUtils';
import Card from '../styled/Card/Card';
import Grid from '../styled/Grid/Grid';

const Dashboard = ({ entry }) => {
  const [status, setStatus] = useState({
    nonRepeating: '',
    repeating: '',
  });
  useEffect(() => {
    setStatus(calculate(entry));
  }, [entry]);

  return (
    entry && (
      <Grid>
        <Card>
          <table>
            <thead>
              <th>Repeating</th>
              <th>Non Repeating</th>
            </thead>
            <tbody>
              <tr>
                <td>{status?.repeating}</td>
                <td>{status?.nonRepeating}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Grid>
    )
  );
};

export default Dashboard;

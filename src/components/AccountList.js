import React, { useEffect, useState } from 'react';
import endpoints from '../config';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoints.getAllAccounts)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAccounts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.accountHolderName} - Q.{account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;

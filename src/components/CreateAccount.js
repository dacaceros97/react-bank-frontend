import React, { useState } from 'react';
import endpoints from '../config';

function CreateAccount() {
  const [accountData, setAccountData] = useState({
    accountHolderName: '',
    type: '',
    balance: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(endpoints.createAccount, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(accountData)
    })
      .then(response => response.json())
      .then(data => {
        setMessage('Account created successfully!');
        setMessageType('success');
        setAccountData({ accountHolderName: '', type: '', balance: '' });
        setTimeout(() => setMessage(''), 2000);
      })
      .catch(error => {
        setMessage('Error creating account.');
        setMessageType('error');
        setTimeout(() => setMessage(''), 2000);
      });
  };

  return (
    <div className="create-account">
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="accountHolderName">Name:</label>
          <input
            type="text"
            id="accountHolderName"
            name="accountHolderName"
            value={accountData.accountHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Account Type:</label>
          <select
            id="type"
            name="type"
            value={accountData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
        <div>
          <label htmlFor="balance">Initial Balance:</label>
          <input
            type="number"
            id="balance"
            name="balance"
            value={accountData.balance}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      {message && (
        <div className={`alert ${messageType}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default CreateAccount;

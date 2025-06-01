import { useState, useCallback } from 'react';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export const useItems = (token) => {
  const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    if (!token) return;
    
    try {
      const res = await fetch(`${API_URL}/items/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }, [token]);

  const delItem = async (id) => {
    try {
      await fetch(`${API_URL}/items/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const addItem = async (item) => {
    try {
      const result = await fetch(`${API_URL}/items/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(item),
      });
      const data = await result.json();
      setItems([...items, data.item]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return { items, getItems, addItem, delItem };
};
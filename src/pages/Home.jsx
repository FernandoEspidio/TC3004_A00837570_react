import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActionAreaCard from '../components/Card';
import { Box, Grid2, Typography } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  const cardsData = [
    {
      title: "Agregar al Inventario",
      description: "Añade nuevos productos que tengas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshYXxRHBEuXuAd5ye3T9eocmb_TLOOBAJpqj6xKFhq3wIW4_ZpDYYDdfs8DM8crz5alM&usqp=CAU",
      path: "/add",
    },
    {
      title: "Ver Inventario",
      description: "Revisa y administra tu inventario y ve los productos que has añadido",
      image: "https://www.xamai.com/hubfs/Miniaturas%20junio%20%282%29-3.webp",
      path: "/items",
    },
  ];

  return (
    <Box sx={{ py: 5, px: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          color: '#1976d2',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        ¡Comienza a administrar tus cosas!
      </Typography>

      <Grid2 container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid2
            key={index}
            size={{ xs: 4, sm: 4, md: 4 }}
            display="flex"
            justifyContent="center"
          >
            <Box sx={{ p: 2 }}>
              <ActionAreaCard
                title={card.title}
                description={card.description}
                image={card.image}
                onClick={() => navigate(card.path)}
              />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

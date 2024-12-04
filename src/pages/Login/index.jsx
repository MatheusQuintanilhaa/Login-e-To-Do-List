import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";

const Login = () => {
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.trim()) {
      setError("");
      alert(`Login realizado com o nome: ${login}`);
      navigate("/tarefas");
    } else {
      setError("Por favor, insira um nome de login.");
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="login_nome"
            label="Nome de Login"
            name="login"
            autoComplete="off"
            autoFocus
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

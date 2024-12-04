# Projeto: Login e To-Do List

Este projeto é um **Login** simples com **To-Do List** integrado, criado com **React**, utilizando **Material-UI** para o design e **React Router** para navegação entre páginas. O sistema permite que o usuário faça login e acesse uma tela de tarefas (To-Do List), onde pode adicionar, visualizar e gerenciar suas tarefas.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material-UI (MUI)**: Framework de componentes para estilização.
- **React Router**: Biblioteca para navegação entre páginas.
- **JavaScript/ES6+**: Para a lógica e interatividade.
- **CSS (Inline e Styled Components)**: Para estilos customizados.

---

## 💡 Funcionalidades

- **Tela de Login**:
  - O usuário deve inserir seu nome de login para acessar a lista de tarefas.
  - Validação simples para garantir que o campo de login não esteja vazio.

- **Tela de Tarefas (To-Do List)**:
  - Após o login, o usuário é redirecionado para a página de tarefas.
  - O usuário pode adicionar novas tarefas à lista.
  - Tarefas podem ser marcadas como concluídas.
  - A lista de tarefas é atualizada em tempo real.

---

## 📦 Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até a pasta do projeto:
    ```bash
    cd template-materialui
    ```
    
3. Instale as dependências:
    ```bash
    npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
    npm start
   ```

## 🔄 Navegação

- **Tela de Login**: O usuário insere seu nome de login e, ao clicar em "Entrar", é redirecionado para a tela de tarefas.
- **Tela de Tarefas**: Após o login, a página de tarefas é exibida, onde o usuário pode adicionar, remover e marcar tarefas como concluídas.

---

## 🎨 Estrutura de Componentes

- **Login**: Componente de login, onde o usuário insere seu nome de login.
- **ToDoList**: Componente que exibe a lista de tarefas, com a funcionalidade de adicionar e marcar tarefas como concluídas.
- **App**: Componente principal que gerencia as rotas e renderiza as páginas.



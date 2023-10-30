# Desafio-De-Carreira-Modulo-2

O projeto é uma API simples de uma Lista de tarefas com apenas 3 rotas simples: 

- Uma rota GET, para gerar a lista de tarefas que nela possui, o id do morador da casa, a seu nome, a sua tarefa  os dias que deve cumprir a tarefa.
- Uma rota POST,  para adicionar um novo morador com um id novo e com sua devida tarefa e dia para ser feita.
- E uma rota DELETE para excluir um morador caso ele saia da casa.

Para executar o projeto basta utilizar o insomnia de acordo com as fotos abaixo:

![image](https://github.com/Joaovictorfo/Desafio-De-Carreira-Modulo-2/assets/122824516/58a345c7-8f8f-43e7-8c1d-2ccc2f3de1a6)

Para que a lista seja mostrada basta digitar na barra de pesquisa localhost:3000/tarefasDaCasa

![image](https://github.com/Joaovictorfo/Desafio-De-Carreira-Modulo-2/assets/122824516/efe87dd3-313e-44d2-915a-31cfb9a0e6dc)

![image](https://github.com/Joaovictorfo/Desafio-De-Carreira-Modulo-2/assets/122824516/eb28551a-708f-44d0-b1f5-f9afe7cc49ec)

Para que seja cadastrado outro morador, na parte da rota POST se deve escrever na barra de pesquisa localhost:3000/tarefasDaCasa e para confimar que o morador foi adicionado basta ir na rota GET e iniciar a aplicação de novo.

![image](https://github.com/Joaovictorfo/Desafio-De-Carreira-Modulo-2/assets/122824516/82de4517-efec-4f0a-9487-f963b8ed1829)

![image](https://github.com/Joaovictorfo/Desafio-De-Carreira-Modulo-2/assets/122824516/0baf378b-cf35-4a25-942b-81c5c052a5e1)

Para que seja excluido outro morador, na parte da rota DELETE se deve escrever na barra de pesquisa localhost:3000/tarefasDaCasa/:idMorador e para confimar que o morador foi excluido basta ir na rota GET e iniciar a aplicação de novo.

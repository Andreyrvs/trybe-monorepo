# MongoDB Commerce

## Contexto

Eu [Andrey R. Visniewski](https://github.com/Andreyrvs) criei os arquivos contidos no diretório `challenges`.

Todos os arquivos, exceto esses citados acima, foram desenvolvidos pela [Trybe](https://www.betrybe.com/)

---

Este projeto se trata de um banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas. É realizado inserções, atualizações e deleções no banco de dados, utilizando MQL (MongoDB Query Language).

## Técnologias usadas

Back-end:
> Desenvolvido usando: MongoDB.

## Habilidades

Adquiri essas habilidades ao desenvolver esse projeto:

- As queries deverão retornar exatamente os atributos e a quantidade de documentos esperados, dentro do que foi pedido;

- A organização do código. Mesmo sem schema, é importante padronizarmos as coisas. Em especial, é importante utilizar o conceito de Camel Case, em que a primeira letra em um nome deve ser minúscula, e a primeira letra de cada palavra concatenada deve ser maiúscula. Você já viu isso em nossos exemplos ao longo do módulo, mas aqui vai um exemplo: essaFraseEstaEmCamelCase.

## Instalando Dependências

- clone o projeto:

  ```bash
  git clone git@github.com:Andreyrvs/31-mongoDB-commerce.git
  cd 31-mongoDB-commerce
  ```

## Executando aplicação

  > Docker

- Para rodar o back-end utilize: **MongoDB Compass**, **mongosh** ou instale **MongoDB for VS Code** para executar as queries

- Para usar o MongoDB com Docker

  ```bash
  docker run -d --name=mongodb_commerce -v "$PWD:/app" -p 27017:27017 mongo:5.0
  ```

  > Back-end

    ```bash
    docker exec -it mongodb_commerce bash
    cd app/
    ```

  > Banco de dados

    ```bash
    DBNAME=commerce ./scripts/resetdb.sh assets/produtos
    ```

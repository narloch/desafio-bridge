# Desafio Bridge
Esse projeto implementa a resolução do desafio para a vaga de bolsista FullStack no laboratório Bridge. Consiste em uma aplicação web capaz de realizar encontrar e apresentar a lista de divisores de um número, bem como se esse é ou não primo. Para o desenvolvimento do backend, foi utilizado o framework Django e para o front, React.

## Tecnologias utilizadas
Foi utilizado o framework Django para a criação do backend, criei um app calculation para realizar as tarefas pedidas. Utilizei um model para salvar em banco de dados os números enviados, além de seus divisores e um booleano para identificar se tal número é ou não primo. No views.py do app calculation, recebi e tratei os requests enviados pelo frontend. Para que não houvesse problema com o CORS, utilizei a biblioteca 'django-cors-headers', permitindo assim requests de outro domínio. 

Já para o frontend, utilizei o framework React e criei componentes para a home, formulário e também para o repositório que apresenta os números que estão contidos no BD. A principal biblioteca utilizada foi a axios, que me permitiu criar requests para o backend. Além disso, para o roteamento utilizei a biblioteca 'react-router-dom'.

## Requisitos
+ Python 3.6.8
+ Django 3.0.4
+ Node JS 8.10.0
+ NPM 6.14.3

## Instalação de dependências
Os pacotes necessários para a execução do código podem ser instalados utilizando um gerenciador de pacotes, como o [pip3](https://pip.pypa.io/en/stable/installing/). Os pacotes estão presentes no arquivo de dependências requirements.txt e portanto uma execução do comando `pip3 install -r requirements.txt`, do diretório [/desafio_bridge/backend](./desafio_bridge/backend) é o suficiente para instalá-los.

Já as dependências do frontend, são instaladas através do comando `yarn install` de dentro do diretório [/desafio_bridge/frontend](./desafio_bridge/frontend).

O usuário também pode, se quiser evitar possíveis problemas quanto às dependências, utilizar um ambiente isolado do Python, como o virtualenv. Recomenda-se a sua utilização.

## Execução

Após a instalaço de dependências, para rodar servidor web o usuário apenas precisa executar o comando dentro da pasta [/desafio_bridge/backend](./desafio_bridge/backend):

```
  python3 manage.py runserver
```
Já para o frontend, abre-se outra aba do terminal e executa-se no diretório [/desafio_bridge/frontend](./desafio_bridge/frontend):

```
  npm start
```

Após o servidor estar em execução, a aplicação estará presente em localhost:3000. Enquanto o backend estará sendo executado na porta 8000.

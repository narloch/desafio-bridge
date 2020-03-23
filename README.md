# desafio-bridge
Esse projeto implementa a resolução do desafio para a vaga de bolsista FullStack no laboratório Bridge. Consiste em uma aplicação web capaz de realizar encontrar e apresentar a lista de divisores de um número, bem como se esse é ou não primo. Para o desenvolvimento do backend, foi utilizado o framework Django e para o front, React.

## Requisitos
+ Python 3.6.8
+ Django 3.0.4
+ React

## Instalação de dependências
Os pacotes necessários para a execução do código podem ser instalados utilizando um gerenciador de pacotes, como o [pip3](https://pip.pypa.io/en/stable/installing/). Os pacotes estão presentes no arquivo de dependências [requirements.txt]("") e portanto uma execução do comando `pip3 install -r requirements.txt`, do diretório raiz do repositório é o suficiente para instalá-los.

O usuário também pode, se quiser evitar possíveis problemas quanto às dependências, utilizar um ambiente isolado do Python, como o virtualenv. Recomenda-se a sua utilização.

## Execução

Após a instalaço de dependências, para rodar servidor web o usuário apenas precisa executar o comando dentro da pasta /backend:

```
  python3 manage.py runserver
```
Já para o frontend, abre-se outra aba do terminal e executa-se:

```
  npm start
```

Após o servidor estar em execução, a aplicação estará presente em localhost:3000. Enquanto o backend estará sendo executado na porta 8000.

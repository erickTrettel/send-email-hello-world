## Enviando e-mail com nodemailer e gmail utilizando OAuth2

A seguir você verá o passo a passo para criar uma feature de envio de e-mail utilizando nodemailer e gmail com OAuth2

### 1. Criando o e-mail

O primeiro passo é criar um novo endereço de e-mail pessoal que será utilizado para fazer o envio dos nossos e-mails. Para isso, acesse o [Gmail](https://mail.google.com).

### 2. Criando o projeto no Google Cloud

Para criar seu projeto no [Google Cloud](https://console.developers.google.com), clique em criar novo projeto e preencha o formulário mostrado.

* Criando projeto
![Criar novo projeto](img/img-1.PNG)

### 3. Criando credenciais

Acesse o item **Credenciais** no menu a direita e configure **Tela de consentimento**.

* Menu credenciais
![Acessando menu credenciais](img/img-2.PNG)

* Tela de consentimento
![Acessando tela de consentimento](img/img-3.PNG)

Informe o nome do seu aplicativo e adicione o domínio autorizado a fazer requisições para seu projeto do Console Google.

![Informando domnínios autorizados](img/img-4.PNG)

Clique em salvar.

* Criando ID do cliente OAuth

Volte ao menu **Credenciais** e clique em acesso a página para criar um novo ID do cliente OAuth.

![Acessando a página criação de ID do cliente OAuth](img/img-5.PNG)

Selecione **Aplicativo da web**, preencha o formulário mostrado com o nome da sua aplicação, e informe as URIs de redirecionamento autorizadas. Dentre elas informe o endereço: *https://developers.google.com/oauthplayground/* e a URL onde está hospedada a sua aplicação que irá fazer a requisição para o projeto do console google.



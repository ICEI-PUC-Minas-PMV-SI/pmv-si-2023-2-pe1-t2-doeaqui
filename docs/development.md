# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |

## Descrição das estruturas:

## LOGIN ONGS
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome         | Texto             | Nome para acessar o portal e perfil da ONG                         | Corações Bondosos                                   |
| Senha       | Texto             | Identificador único para cada ONG                       | 00000                            |

## CADASTRO ONGS
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome         | Texto             | Nome para acessar o portal e perfil da ONG                         | CampanhaLopes                                   |
| CNPJ       | Numero (Inteiro)             | Número de CNPJ da ONG                       | 65948129000167                            |
| CEP       | Numero (Inteiro)             | Código de Endereçamento Postal (CEP)                       | 30285560                            |
| Logradouro       | Texto             | Endereço de onde está localizado a ONG                       | Rua Sergipe                            |
| Camplemento       | Numero (Inteiro)             | Número da rua da ONG                       | 836                            |
| Bairro       | Texto             | Bairro da ONG                       | Funcionários                            |
| Cidade       | Texto             | Cidade situada da ONG                       | Belo Horizonte                            |
| Estado       | Seletor             | Seletor do Estado                       | Minas Gerais                             |
| E-mail       | Texto             | e-mail da ONG                       | doare@gmail.com                            |
| Telefone       | Texto             | Número de contado da ONG                       | (31)983937546                            |
| Facebook       | Texto             | Facebook da ONG                       | @doare.oficial                            |
| Instagram       | Texto             | Instagram da ONG                       | @doeaqui                            |



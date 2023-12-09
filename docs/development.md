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
|RF-001| O sistema deve ter uma página inicial que contenha com conteúdo explicativo sobre doações, botões de "Quero doar" e de "Quero arrecadar". | ALTA | index.html |
|RF-002| O sistema deve ter uma página de login que é exibida após o usuário clicar em "Quero arrecadar" forneceça as opções de inserir login e senha e a opção de se cadastrar. | ALTA | login/index.html |
|RF-003| O sistema deve ter uma página de cadastro que é exibida após o usuário clicar em "Cadastrar" e coloque em seu cadastro os dados: Nome/Razão social, CNPJ (opcional), localização/endereço, e-mail, senha, telefone, redes sociais, causas que apoiam, dados bancários para doação. | ALTA | Cadastro/FormUsuario.html |
|RF-004| O sistema deve ter uma interface que permita ao usuário que contém uma conta registrada poder acessar a ferramenta "Editar perfil". | MÉDIA | wireframe7/index.html |
|RF-005| O sistema deve ter uma interface que permita ao usuário que contém uma conta registrada poder acessar a ferramenta "Gerenciamento de Campanhas". | MÉDIA | wireframe8/index.html |
|RF-006| O sistema deve redirecionar o usuário que clicar em "Gerenciamento de Campanhas" para uma tela em que seja permitido acessar os botões "Criar campanha", "Editar campanha", "Excluir campanha". | MÉDIA | login/index.html |
|RF-007| O sistema deve ter uma ferramenta que é acessada ao clicar em "Criar campanha", que permita que o usuário insira os dados: Nome da Campanha (Campo de Texto), Causa apoiada (Campo de Texto), Vigência (seleção entre contínua ou temporária), Itens a serem arrecadados (Campo de palavras chaves múltiplas). | MÉDIA | CriaçãodeCampanhas/index.html |
|RF-008| O sistema deve permitir que o usuário ao clicar em "quero doar" informe seu CEP para que a aplicação retorne as instituições/campanhas mais próximas do CEP informado. Após o usuário visitante inserir um CEP válido, exibir uma interface em formato de mapa, centralizada no CEP informado, e que exiba todas as instituições cadastradas num raio de 40km do ponto escolhido. As instituições devem ser clicláveis e ao serem clicadas, devem exibir as informações: Nome/Razão social, CNPJ (se houver), localização/endereço, e-mail, telefone, redes sociais, causas que apoiam, dados bancários para doação e campanhas ativas. | MÉDIA | CEP/cep.html |
|RF-009|  O sistema deve, na mesma página da interface de mapa, exibir uma lista que contenha todas as instituições exibidas no mapa dentro do raio. As instituições devem ser clicláveis e ao serem clicadas, devem exibir as informações: Nome/Razão social, CNPJ (se houver), localização/endereço, e-mail, telefone, redes sociais, causas que apoiam, dados bancários para doação e campanhas ativas. | MÉDIA | Mapa/index.html |

## Descrição das estruturas:

## LOGIN ONGS
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome         | Texto             | Nome para acessar o portal e perfil da ONG                         | pessoasdobem                                   |
| Senha       | Texto             | Senha de acesso à conta da ONG                      | 123Abc!@#                            |

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
| Telefone       | Texto             | Número de contado da ONG                       | (31) 983937546                            |
| Facebook       | Texto             | Facebook da ONG                       | @doare.oficial                            |
| Instagram       | Texto             | Instagram da ONG                       | @doeaqui                            |

## CRIAÇÃO DE CAMPANHA
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome da Campanha    | Texto             | Nome de campanha                         | CampanhaLopes                                   |
| Causa(s) apoiada(s)       | Texto             | Causa que a campanha apoia                      | Meio ambiente                          |
| Vigência       | Seletor             | Seletor de vigencia                       | Continua                           | 
| Itens a serem arrecadados       | Texto             | Itens a serem arrecadados                        | Items de limpeza                             |


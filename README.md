# 🚧 WIP - Marketplace

Como projeto para Sprint 1 do Módulo 5 da **Resilia**, foi dado o desafio de desenvolver o layout de uma landing page com uma grade de produtos e um formulário de newsletter. 

Ofoco principal do projeto deverá ser transformar este layout em uma página funcional. 



## Design do projeto

Com design pré determinado, disponível [aqui](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614/specs/), o mock disponibilizado contém a estrutura do layout e todo o estilo da página. O layout deverá ser implementado de acordo com esse mock


![image](https://user-images.githubusercontent.com/102565368/186549455-5668ef57-b24c-4d45-9513-d21c1671a10c.png)
![image](https://user-images.githubusercontent.com/102565368/186549681-ebca8dc5-b939-4ed2-986b-140aa7645921.png)
![image](https://user-images.githubusercontent.com/102565368/186549698-3b82fbf1-b576-4172-bd3c-c613081be206.png)

---

### Comportamento

Para preencher a página com as informações dos produtos, você terá que consultar esta API de forma paginada, sendo que cada página consultada retornará as informações de 8 produtos e um link para a próxima página.

Assim que obter os dados, você deverá implementar os seguintes pontos:

- Para cada produto retornado pela API, um card de produto com as respectivas informações deve ser criado na grade de produtos;
- Ao clicar no botão Ainda mais produtos aqui! a próxima página da API deve ser consultada, gerando mais 8 produtos na grade existente, abaixo dos produtos já carregados pela primeira requisição;

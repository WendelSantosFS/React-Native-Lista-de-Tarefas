# React Native - Lista de Tarefas

Lista de tarefas feita em React Native que salva as tarefas na memória do próprio celular utilizando o recurso AsyncStorage( npm install @react-native-async-storage/async-storage). 
<br>

Etapas:<br>
    1- Tela de autenticação(Login) fake - OK   CREDENCIAIS= "admin & 1234"<br>
    2- Salvar as tarefas no próprio celular - OK<br>
    3- Botões de "Concluir" e "Remover" tarefa - OK<br>
    4- Menu(Drawer) que permite configurar o Banco de Dados escolhido para Salvar as TAREFAS, salva a URL do BD na memória do CELULAR- OK<br>
    5- Salvar/Remover/Atualizar as tarefas no "Bando de Dados" - OK<br>
    6- Fazer um Back-end que busque o usuário no Banco de Dados comparando as Senhas  -  Pendente<br>



*** Para trabalhar com ROTAS manualmente, foi preciso:<br>
    - Modificar o arquivo "package.json" no campo de "main": "expo-router/entry"  PARA "main": "index.js"<br>
    - Dentro do arquivo "index.js", importar "registerRootComponent" e o COMPONENTE que contém o <NavigationContainer>(contém as configurações das ROTAS). <br>
    - E registrar este COMPONENTE com:   ex.:  registerRootComponent(COMPONENTE)<br>
<br>
Próximo passo: 5-Salvar/remover/atualizar as tarefas no BD;<br>

<br>
<br>
<br>
<br>
## COMO USAR O APP - Demonstração com IMAGENS: 
<br>
    1- Fazer o LOGIN:  usuário: "admin",   senha: 1234 <br>
    <img src="./assets/passos-usar/passo1.png" width="300">  <br><br>
    2- Escreva a TAREFA que deseja fazer e Aperte o botão de Adicionar, botão que tem + ( "+" )<br>  
    <img src="./assets/passos-usar/passo2.png" width="300">
    3- Você pode CONCLUIR uma Tarefa e assim o Fundo dela ficará todo Verde.<br>
    4- E por fim, pode EXCLUIR a Tarefa clicando no botão VERMELHO<br>
<br>
<br>
<br>
<br>
<br>
Query's no Banco de Dados:<br>
&emsp;&emsp; 1- CREATE DATABASE app_todo_list;<br>   // Cria o Banco de Dados
&emsp;&emsp;2- CREATE TABLE IF NOT EXISTS tarefas ( // Cria uma TABELA se não existir <br>
	&emsp;&emsp;&emsp;id SERIAL PRIMARY KEY,<br>
	&emsp;&emsp;&emsp;tarefa VARCHAR(255) NOT NULL,<br>
	&emsp;&emsp;&emsp;status VARCHAR(10) NOT NULL<br>
&emsp;&emsp;);<br>
&emsp;&emsp;3- INSET INTO tarefa (id, tarefa, status) VALUES (${1}, ${2}, ${3}); //Usado para inserir cada TAREFA individualmente.<br>
&emsp;&emsp;4- DELETE FROM tarefas WHERE id=${1};   // Deleta uma tarefa usando como parâmetro o ID<br>
&emsp;&emsp;5- UPDATE tarefas SET status=${1} WHERE id=${2};  // Atualiza o STATUS de uma TAREFA, recebe 2 parâmetros: [novoStatus, id]
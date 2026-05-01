# React Native - Lista de Tarefas

Lista de tarefas feita em React Native que salva as tarefas na memória do próprio celular utilizando o recurso AsyncStorage( npm install @react-native-async-storage/async-storage). 
<br>

Etapas:<br>
    1- Tela de autenticação(Login) fake - OK   CREDENCIAIS= "admin & 1234"<br>
    2- Salvar as tarefas no próprio celular - OK<br>
    3- Botões de "Concluir" e "Remover" tarefa - OK<br>
    4- Menu que permite configurar o Banco de Dados escolhido para Salvar as TAREFAS- Pendente<br>
    5- Salvar as tarefas no "Bando de Dados" - Pendente<br>
    6- Fazer um Back-end que busque o usuário no Banco de Dados comparando as Senhas  -  Pendente<br>



*** Para trabalhar com ROTAS manualmente, foi preciso:<br>
    - Modificar o arquivo "package.json" no campo de "main": "expo-router/entry"  PARA "main": "index.js"<br>
    - Dentro do arquivo "index.js", importar "registerRootComponent" e o COMPONENTE que contém o <NavigationContainer>(contém as configurações das ROTAS). <br>
    - E registrar este COMPONENTE com:   ex.:  registerRootComponent(COMPONENTE)<br>
<br>
Próximo passo: Mostrar como o USUÁRIO usar o APP;<br>

<br>
<br>
<br>
<br>
## COMO USAR O APP - Demonstração com IMAGENS: 
<br>
    1- Fazer o LOGIN:  usuário: "admin",   senha: 1234 <br>
    <img href="/assets/passos-usar/passo1.png" width="300">  <br><br>
    2- Escreva a TAREFA que deseja fazer e Aperte o botão de Adicionar, botão que tem + ( "+" )<br>  
    <img href="/assets/passos-usar/passo2.png" width="300">
    3- Você pode CONCLUIR uma Tarefa e assim o Fundo dela ficará todo Verde.<br>
    4- E por fim, pode EXCLUIR a Tarefa clicando no botão VERMELHO

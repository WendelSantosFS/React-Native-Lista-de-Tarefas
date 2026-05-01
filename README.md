# React Native - Lista de Tarefas

Lista de tarefas feita em React Native que salva as tarefas na memória do próprio celular utilizando o recurso AsyncStorage( npm install @react-native-async-storage/async-storage). 
<br>

Etapas:<br>
    1- Tela de autenticação(Login) fake - OK   CREDENCIAIS= "admin & 1234"<br>
    2- Salvar as tarefas no próprio celular - OK<br>
    3- Botões de "Concluir" e "Remover" tarefa - OK<br>
    4- Salvar as tarefas no "Bando de Dados" - Pendente<br>
    5- Fazer um Back-end que busque o usuário no Banco de Dados comparando as Senhas  -  Pendente<br>



*** Para trabalhar com ROTAS manualmente, foi preciso:<br>
    - Modificar o arquivo "package.json" no campo de "main": "expo-router/entry"  PARA "main": "index.js"<br>
    - Dentro do arquivo "index.js", importar "registerRootComponent" e o COMPONENTE que contém o <NavigationContainer>(contém as configurações das ROTAS). <br>
    - E registrar este COMPONENTE com:   ex.:  registerRootComponent(COMPONENTE)<br>
<br>
Próximo passo: Mostrar como o USUÁRIO usar o APP;<br>
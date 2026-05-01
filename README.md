# React Native - Lista de Tarefas

Lista de tarefas feita em React Native que salva as tarefas na memória do próprio celular utilizando o recurso AsyncStorage( npm install @react-native-async-storage/async-storage). 


Etapas:
    - Tela de autenticação(Login) fake - OK   CREDENCIAIS= "admin & 1234"
    - Salvar as tarefas no próprio celular - OK
    - Botões de "Concluir" e "Remover" tarefa - OK
    - Salvar as tarefas no "Bando de Dados" - Pendente
    - Fazer um Back-end que busque o usuário no Banco de Dados comparando as Senhas  -  Pendente



*** Para trabalhar com ROTAS manualmente, foi preciso:
    - Modificar o arquivo "package.json" no campo de "main": "expo-router/entry"  PARA "main": "index.js"
    - Dentro do arquivo "index.js", importar "registerRootComponent" e o COMPONENTE que contém o <NavigationContainer>(contém as configurações das ROTAS). 
    - E registrar este COMPONENTE com:   ex.:  registerRootComponent(COMPONENTE)

Próximo passo: Mostrar como o USUÁRIO usar o APP;
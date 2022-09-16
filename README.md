# Brasileirão

Projeto desenvolvido para o ensino do FrameWork Reac Native no IFAL. As telas abaixo devem ser implementadas pelos alunos ao decorer do curso. Caso surjam dúvidas o aluno deve consultar o código disponibilizado acima.
Ao persistirem as dúvidas o aluno deve entrar em contato com os monitores ou professor nas plataformas de comunicação disponibilizadas.

### Home

<h1 align="center">
 <img src="https://github.com/ViniciusCortez0202/brasileirao/blob/main/assets/home.png" width="250px" alt="Tela Home" height="500px" style="align: center"/>
</h1>

Recomendações 

* Não é necessário o aluno adicionar o ícone do drawer que se encontra no lado superior esquerdo!
* As cores podem ser encontradas no código!


#### Componentes utilizados
 1. [Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
 2. [View](https://reactnative.dev/docs/view)
 3. [Text](https://reactnative.dev/docs/text)
 4. [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
 5. [Image](https://reactnative.dev/docs/image)


### Drawer

<h1 align="center">
 <img src="https://github.com/ViniciusCortez0202/brasileirao/blob/main/assets/drawer.png" width="250px" alt="Tela Drawer" height="500px" style="align: center"/>
</h1>

Para criar a transição entre as páginas vamos utilizar um [drawer](https://reactnavigation.org/docs/drawer-navigator) disponibilizado pelo [React Navigation](https://reactnavigation.org/docs/hello-react-navigation/). Cada componente do menu será uma página do aplicativo e o cabeçalho será feito utilizar a propriedade drawer content.

Recomendações

* A imagem do cabeçalho está na pasta [assets](https://github.com/ViniciusCortez0202/brasileirao/tree/main/assets) do código do projeto.

#### Componentes
Cabeçalho

1. [View](https://reactnative.dev/docs/view)
2. [Text](https://reactnative.dev/docs/text)
3. [Image](https://reactnative.dev/docs/image)
4. [DrawerContentScrollView](https://reactnavigation.org/docs/drawer-navigator#drawercontent)
5. [DrawerItemList](https://reactnavigation.org/docs/drawer-navigator#drawercontent)

Menu

1. [Drawer.Navigator](https://reactnavigation.org/docs/drawer-navigator#api-definition)
   - [screenOptions](https://reactnavigation.org/docs/drawer-navigator/#screenoptions)
       - [drawerStyle](https://reactnavigation.org/docs/drawer-navigator/#drawerstyle)
       - [drawerLabelStyle](https://reactnavigation.org/docs/drawer-navigator/#drawerlabelstyle)
       - [drawerActiveBackgroundColor](https://reactnavigation.org/docs/drawer-navigator/#draweractivebackgroundcolor)
       - [drawerActiveTintColor](https://reactnavigation.org/docs/drawer-navigator/#draweractivetintcolor)
       - [drawerInactiveTintColor](https://reactnavigation.org/docs/drawer-navigator/#drawerinactivetintcolor)
       - [headerLeft](https://reactnavigation.org/docs/elements#headerleft)
   - [drawerContent](https://reactnavigation.org/docs/drawer-navigator#drawercontent)
2. [Drawer.Screen](https://reactnavigation.org/docs/drawer-navigator#api-definition)
   - [name](https://reactnavigation.org/docs/screen#name)
   - [component](https://reactnavigation.org/docs/screen#component)
   - [options](https://reactnavigation.org/docs/drawer-navigator#options)
      - [drawerLabel](https://reactnavigation.org/docs/drawer-navigator#drawerlabel)
      - [headerTitle](https://reactnavigation.org/docs/elements#headertitle)
      - [headerTransparent](https://reactnavigation.org/docs/elements#headertransparent)
      - [drawerIcon](https://reactnavigation.org/docs/drawer-navigator#drawericon)
      - [headerStyle](https://reactnavigation.org/docs/elements#headerstyle)
 3. [Ionicons]()
    - name
    - size
    - color

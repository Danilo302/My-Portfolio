import ToDoList from '../assets/images/projects/to-do-list-.png'
import SistemaTcc from '../assets/images/projects/image-sistema-tcc.png'
import CloneDisney from '../assets/images/projects/clone-disney.png'
import GestaoUsuario from '../assets/images/projects/gestao-cliente.png'
import Restaurante from '../assets/images/projects/projeto-site-restaurante.png'
import ApiSign from '../assets/images/projects/API-signin-signup.png'
import efood from '../assets/images/projects/efood.png'
import eplay from '../assets/images/projects/eplay.png'

export const projects = [
  {
    titulo: 'to-do-list',
    urlimage: ToDoList,
    descricao:
      'Lista de tarefas com busca e filtro por categoria(normal, importante e urgente) e status. CRUD complete, o usuario pode adicionar, editar e remover tarefas.',
    tags: ['HTML', 'CSS', 'Typescript', 'React', 'Redux'],
    link: 'https://to-do-list-react-red-seven.vercel.app/',
    git: 'https://github.com/Danilo302/To-do-list-React'
  },
  {
    titulo: 'Sistema-TCC',
    urlimage: SistemaTcc,
    descricao:
      'O Sistema-TCC é uma aplicação web desenvolvida para automatizar uma parte do fluxo de pedidos de Trabalhos de Conclusão de Curso (TCCs). Tem como funcionalidades: autentificação de usuario, gerenciamento das informações com banco de dados, validação da secretaria e geração Automática de Ficha Catalográfica',
    tags: [
      'Python',
      'Flask',
      'HTML5',
      'CSS',
      'Javascript',
      'Bootstrap',
      'Jinja',
      'Supabase'
    ],
    link: 'https://sistema-tcc-six.vercel.app/auth/login',
    git: 'https://github.com/Danilo302/Sistema-TCC'
  },
  {
    titulo: 'Clone Disney Plus',
    urlimage: CloneDisney,
    descricao: 'Desenvolvi um clone da pagina da Disney+',
    tags: ['HTML', 'SCSS', 'Javascript', 'Gulp'],
    link: 'https://clone-disney-plus-nine-pi.vercel.app/',
    git: 'https://github.com/Danilo302/clone-disney-plus'
  },
  {
    titulo: 'Gestão de cliente',
    urlimage: GestaoUsuario,
    descricao:
      'Este projeto demonstra uma aplicação simples CRUD (Create, Read, Update, Delete) usando Flask, onde você pode gerenciar dados de clientes.',
    tags: ['Python', 'Flask', 'Bootstrap', 'Cru.js'],
    link: 'https://gestao-cliente-server.vercel.app/',
    git: 'https://github.com/Danilo302/gestao-cliente-server'
  },
  {
    titulo: 'Site de restaurante',
    urlimage: Restaurante,
    descricao:
      'Desenvolvi um site completo para um restaurante, Design responsivo (mobile e desktop) ,Carrossel de imagens para exibir pratos e ambiente, Seção de eventos (aniversários, casamentos, confraternizações), Cardápio interativo por categorias (bebidas, entradas, pratos principais, sobremesas), Formulário de contato e integração com redes sociais',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    link: 'https://projeto-site-restaurante-one.vercel.app/',
    git: 'https://github.com/Danilo302/projeto-site-restaurante'
  },
  {
    titulo: 'API-auth-signin-signup',
    urlimage: ApiSign,
    descricao:
      'Este projeto consiste em um sistema de autenticação de usuários utilizando Node.js, Express e MongoDB, que permite o cadastro, autenticação e gerenciamento de usuários através de endpoints RESTful.',
    tags: ['Javascript', 'Nodejs', 'Express', 'MongoDB', 'API'],
    link: 'https://github.com/Danilo302/API-auth-signin-signup',
    git: 'https://github.com/Danilo302/API-auth-signin-signup'
  },
  {
    titulo: 'Efood - Site de delivery de comida',
    urlimage: efood,
    descricao:
      'O Efood é um site de delivery de comida (estilo iFood) desenvolvido em React.js + TypeScript. Nele pode acessar a pagina de cada restaurante e adicionar a comida ao carrinho.',
    tags: [
      'React',
      'Redux',
      'TypeScript ',
      'Styled Components',
      'API',
      'React Router'
    ],
    link: 'https://efood-inky-alpha.vercel.app/',
    git: 'https://github.com/Danilo302/Efood'
  },
  {
    titulo: 'EPLAY - Loja de jogos',
    urlimage: eplay,
    descricao:
      'O Eplay Loja Gamer é um projeto de e-commerce de uma loja de produtos gamers, oferecendo uma interface moderna e responsiva. o site inclui funcionalidades como filtragem de produtos, carrinho de compras e integração com APIs para uma experiência de usuário dinâmica e interativa. O design é focado em usabilidade, com navegação intuitiva e visual atraente para o público gamer.',
    tags: [
      'React',
      'Redux',
      'TypeScript ',
      'Styled Components',
      'API',
      'React Router',
      'Formik',
      'ESLint + Prettier'
    ],
    link: 'https://eplay-loja-gamer.vercel.app/',
    git: 'https://github.com/Danilo302/Eplay-Loja-Gamer'
  }
]

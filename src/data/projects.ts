import ToDoList from '../assets/images/projects/to-do-list-.png'
import SistemaTcc from '../assets/images/projects/image-sistema-tcc.png'
import CloneDisney from '../assets/images/projects/clone-disney.png'
import GestaoUsuario from '../assets/images/projects/gestao-cliente.png'
import Restaurante from '../assets/images/projects/projeto-site-restaurante.png'

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
  }
]

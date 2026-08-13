export const pacientes = [
  {
    id: '1',
    nome: 'Antônio Ferreira',
    idade: 78,
    statusDia: 'normal', 
    score: 86,
    scoreDescricao:
      'Os padrões de hoje estão dentro do esperado, comparado aos últimos 30 dias.',
    metricas: [
      { id: 'resposta', icone: 'Clock', valor: '1.8s', label: 'Resposta a notificações', estado: 'estavel' },
      { id: 'digitacao', icone: 'Keyboard', valor: '42 ppm', label: 'Velocidade de digitação', estado: 'estavel' },
      { id: 'achar', icone: 'Smartphone', valor: '6.2s', label: 'Tempo p/ achar app', estado: 'alta', delta: '+18%' },
      { id: 'buscas', icone: 'Search', valor: '2x', label: 'Buscas repetidas', estado: 'estavel' },
    ],
    tendencia: [72, 78, 80, 79, 84, 81, 86],
  },
  {
    id: '2',
    nome: 'Maria Aparecida',
    idade: 82,
    statusDia: 'atencao',
    score: 61,
    scoreDescricao:
      'Alguns padrões de hoje ficaram fora da faixa esperada nos últimos 30 dias.',
    metricas: [
      { id: 'resposta', icone: 'Clock', valor: '3.1s', label: 'Resposta a notificações', estado: 'alta', delta: '+34%' },
      { id: 'digitacao', icone: 'Keyboard', valor: '28 ppm', label: 'Velocidade de digitação', estado: 'estavel' },
      { id: 'achar', icone: 'Smartphone', valor: '9.4s', label: 'Tempo p/ achar app', estado: 'alta', delta: '+52%' },
      { id: 'buscas', icone: 'Search', valor: '5x', label: 'Buscas repetidas', estado: 'alta', delta: '+3x' },
    ],
    tendencia: [80, 76, 74, 70, 66, 63, 61],
  },
  {
    id: '3',
    nome: 'José Carlos',
    idade: 75,
    statusDia: 'normal',
    score: 91,
    scoreDescricao:
      'Os padrões de hoje estão dentro do esperado, comparado aos últimos 30 dias.',
    metricas: [
      { id: 'resposta', icone: 'Clock', valor: '1.5s', label: 'Resposta a notificações', estado: 'estavel' },
      { id: 'digitacao', icone: 'Keyboard', valor: '47 ppm', label: 'Velocidade de digitação', estado: 'estavel' },
      { id: 'achar', icone: 'Smartphone', valor: '4.8s', label: 'Tempo p/ achar app', estado: 'estavel' },
      { id: 'buscas', icone: 'Search', valor: '1x', label: 'Buscas repetidas', estado: 'estavel' },
    ],
    tendencia: [85, 87, 86, 88, 90, 89, 91],
  },
]
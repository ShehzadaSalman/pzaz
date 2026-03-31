import { KBArticle } from "./knowledgeBaseData";

export const kbArticlesPt: KBArticle[] = [
  // Para Começar
  {
    id: "gs-1",
    slug: "book-a-personalised-product-demonstration",
    title: "Reserve uma demonstração personalizada do produto",
    category: "getting-started",
    content: `## Reserve uma demonstração personalizada do produto

### Ajudamo-lo a tirar o máximo partido da nossa ferramenta.

Somos uma equipa de apaixonados por cinema e profissionais de produção criativa. Se há algo que adoramos mais do que filmes, é ajudar outros cineastas a ter sucesso e a concretizar as suas ambições criativas!

É por isso que estamos disponíveis todos os dias para videochamadas, se quiser explicar-nos as suas necessidades ou descobrir mais sobre o que a app tem para oferecer.

## Contacte-nos hoje!

Para reservar uma demonstração personalizada e aprofundada connosco, clique no seguinte link Calendly e siga as instruções: [RESERVE UMA CHAMADA](https://calendly.com/filmmaking-app/30min)`,
    relatedSlugs: ["writing-your-script-with-pzaz", "getting-started-with-workflows", "pzaz-101"],
  },
  {
    id: "gs-2",
    slug: "writing-your-script-with-pzaz",
    title: "Escrever o seu guião com Pzaz",
    category: "getting-started",
    content: `## Escrever o seu guião com Pzaz

### Introdução

Com a ferramenta de guião pode transformar as suas ideias num guião completamente estruturado — quer comece do zero ou importe um projeto existente. A ferramenta simplifica cada passo e permite-lhe personalizar a página de título, adicionar atos, cenas, personagens, diálogos e transições, e construir um fluxo narrativo fluido.

## Para começar

Comece o seu guião importando-o ou criando um novo de raiz. O primeiro guião que criar será marcado como **"Guião Principal"** — isto significa que apenas este guião poderá ser utilizado para o desdobramento de cena, storyboarding, organização das folhas de serviço e criação automática de elementos, equipamentos, equipa e elenco, bem como objetos de localização na secção produção do menu principal. Todos os outros guiões importados, criados ou duplicados serão considerados rascunhos.

Se tiver múltiplos guiões no seu projeto, o primeiro da lista será marcado como "Guião Principal" por defeito.

## Importar/Exportar o guião

Ao pressionar o botão **"Novo Guião"**, terá 2 opções — "Iniciar um novo guião" ou "Importar existente". A app suporta a importação de ficheiros .PDF e Final Draft (.FDX).

Para exportar o seu guião, clique no menu de 3 pontos no canto superior direito da ferramenta e pressione a opção **"Exportar Guião"**. Aqui pode escolher o formato — .FDX ou .PDF — e incluir ou excluir a página de título.

> Note que para ficheiros grandes poderá ter de aguardar alguns segundos antes de o documento estar pronto para impressão.

## Navegação

A navegação é intuitiva graças à barra lateral, que lhe permite reordenar rapidamente as cenas, editar diálogos ou saltar para secções específicas com a função de pesquisa. Cada atualização acontece em tempo real.

## O Assistente IA

Precisa de apoio criativo? O assistente IA integrado fornece sugestões inteligentes e ideias para refinar o seu guião e tornar o processo de escrita mais rápido e intuitivo.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "ai-security-and-privacy-at-pzaz", "getting-started-with-workflows"],
  },
  {
    id: "gs-3",
    slug: "ai-security-and-privacy-at-pzaz",
    title: "IA, Segurança e Privacidade",
    category: "getting-started",
    content: `## IA, Segurança e Privacidade

Levamos a segurança e a privacidade a sério, garantindo que o seu trabalho criativo permanece protegido.

**Nunca utilizamos os seus guiões, notas ou dados para treino de IA. O seu trabalho é privado e acessível apenas a si e aos colaboradores que escolher.**

## Segurança dos dados

Para manter os seus dados seguros, a app utiliza encriptação de ponta a ponta com **TLS** para dados em trânsito e encriptação **AES-256** para ficheiros armazenados. A nossa infraestrutura segue os mais altos padrões de segurança do setor.

## Controlos de acesso

Oferecemos controlos de acesso rigorosos para lhe permitir gerir quem pode visualizar e editar os seus conteúdos. Os seus projetos permanecem num workspace privado.

## Perspetivas futuras

Estamos a ampliar as nossas medidas de segurança com:

- **Autenticação de dois fatores (2FA)** — uma camada adicional de proteção no login
- **Permissões de ficheiros avançadas** — controlo mais fino sobre quem pode aceder a quê
- **Partilha de link segura** — controlo melhorado sobre os conteúdos partilhados

Com a nossa app pode concentrar-se no seu trabalho criativo sem se preocupar com a segurança. Questões? Contacte-nos através do chat ao vivo na secção **OBTER AJUDA**.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "writing-your-script-with-pzaz", "pzaz-101"],
  },
  {
    id: "gs-4",
    slug: "getting-started-with-workflows",
    title: "Começar com os Workflows",
    category: "getting-started",
    content: `## Começar com os Workflows

### O que são Workflows?

Os workflows representam processos internos — uma série de passos repetíveis necessários para alcançar um resultado. Um workflow pode ser simples como "A fazer > Em curso > Concluído" ou mais complexo, como os passos de um ciclo de vendas.

Os workflows são visualizados em boards. Pode criar todos os boards necessários, cada um representando um processo diferente (ex. Desenvolvimento, Marketing, Casting). Cria um workflow adicionando colunas a um board. Os cartões são arrastados de uma coluna para outra à medida que progridem. Este formato é conhecido como **board Kanban**.

## Criar o seu primeiro workflow

No arranque, é carregado um board Kanban com uma única coluna que representa o início do seu workflow — não pode ser eliminada nem renomeada. Para adicionar colunas, clique nos três pontos verticais e selecione **Adicionar cabeçalho**.

Por exemplo, um workflow de content marketing pode incluir: Não atribuído, Prioritário, Rascunho, Revisão e Publicado.

## Adicionar um workflow adicional

Apenas o proprietário do Filmspace pode adicionar um novo workspace. Selecione a secção **'Gerir'** no menu lateral, depois **'+ Novo Workflow'**.

## Adicionar elementos de trabalho

Para criar cartões, clique nos três pontos verticais de qualquer coluna e selecione **Adicionar cartão**. Cada cartão deve ter um título claro e descritivo. Pode documentar os cartões com:

- Descrições
- Datas de vencimento
- Anexos (documentos ou links)
- Tarefas e subtarefas
- Atribuição dos membros da equipa`,
    relatedSlugs: ["pzaz-101", "writing-your-script-with-pzaz", "book-a-personalised-product-demonstration"],
  },
  {
    id: "gs-5",
    slug: "pzaz-101",
    title: "O Princípio",
    category: "getting-started",
    content: `## O Princípio

## Introdução ao "Princípio"

Bem-vindo à nossa plataforma, onde a simplicidade encontra a potência. Acreditamos que as ferramentas devem adaptar-se a si — não o contrário. É por isso que construímos a nossa plataforma sobre o **Princípio**, uma filosofia UX que permite a qualquer pessoa começar facilmente, desenvolver competências, colaborar e desbloquear funcionalidades avançadas ao seu ritmo.

### O que é o Princípio?

O Princípio baseia-se em três ideias fundamentais:

1. **A plataforma cresce consigo:** É como uma tela em branco, pronta para qualquer tarefa ou projeto. As bases vêm naturalmente e a mestria alcança-se de forma intuitiva.
2. **Flexibilidade Lego:** Cada funcionalidade é composta por blocos modulares simples. Como peças de Lego, montam-se facilmente e permitem-lhe construir o que quiser.
3. **Suporte onde importa:** A IA não está aqui para substituir a sua criatividade, mas para a inspirar, estimular e apoiar.

## A sua tela: Objetos e Cartões

Comece com uma tela em branco onde pode criar **Objetos** para acompanhar tarefas, projetos, guiões, ficheiros, orçamentos e mais.

Cada objeto mostra detalhes importantes (como prazos e prioridades). Abra-o para aceder a um **Cartão** — um espaço personalizável para gerir todos os detalhes.

## Blocos: Construir o seu workflow

Os cartões são compostos por blocos, que representam segmentos lógicos de informações ou funcionalidades.

## Organizar o seu trabalho

Cada objeto é agrupado numa **Categoria**, começando com a **Caixa de Entrada** como predefinida. Pode criar todas as categorias necessárias.

Gira o seu trabalho com:

- **Vista Lista** — Ideal para ordenar por temas
- **Vista Board** — Monitorize os progressos por fases`,
    relatedSlugs: ["getting-started-with-workflows", "writing-your-script-with-pzaz", "ai-security-and-privacy-at-pzaz"],
  },

  // Funções
  {
    id: "fn-1",
    slug: "pzaz-security-features",
    title: "As nossas funcionalidades de segurança: proteção dos seus dados",
    category: "functions",
    content: `## As nossas funcionalidades de segurança: proteção dos seus dados

Sabemos que a segurança é uma prioridade absoluta para os nossos utilizadores. Quer esteja a colaborar num guião, a partilhar planos de produção ou a armazenar detalhes sensíveis do projeto — os seus dados merecem o mais alto nível de proteção.

## Encriptação: proteção dos seus dados em todo o lado

Sempre que carrega ou acede a um ficheiro, este é protegido por encriptação. Durante a transferência, os seus ficheiros são protegidos com **TLS**. Uma vez armazenados nos nossos servidores, os seus dados são protegidos com encriptação **AES-256**.

## Controlos de acesso: gestão simplificada

Permitimos aos administradores conceder ou limitar o acesso ao armazenamento e garantir que apenas os utilizadores autorizados possam utilizar esta funcionalidade. Estamos a trabalhar para oferecer um controlo ainda mais granular.

## Perspetivas: melhorias futuras

- **Autenticação de dois fatores (2FA)** — camada adicional de proteção no login
- **Controlos de acesso avançados** — permissões ao nível do ficheiro
- **Opções de partilha de link avançadas** — proteção por palavra-passe e definições de expiração

Não somos apenas uma ferramenta para cineastas — somos um parceiro de confiança na sua jornada criativa.`,
    relatedSlugs: ["card-anatomy", "delete-your-account", "get-support"],
  },
  {
    id: "fn-2",
    slug: "card-anatomy",
    title: "Anatomia de um cartão",
    category: "functions",
    content: `## Anatomia de um cartão

### De que são compostos os cartões?

Com os cartões da ferramenta pode criar workflows adaptados às necessidades únicas da produção cinematográfica. Os cartões são a base desta plataforma — capturam ideias, documentam tarefas e implementam iniciativas.

## Gerir os cartões

O contentor do cartão mostra informações de alto nível: título, data de vencimento, membros da equipa atribuídos, estado do workflow, dimensão da tarefa e anexos. Um clique num cartão abre os seus detalhes.

Pode gerir múltiplos cartões selecionando as caixas de verificação. Mantenha premido **CTRL** e clique num cartão para ativar a caixa — uma vez selecionada, pode filtrar, mover, rejeitar ou eliminar através da toolbar do board.

## #BomSaber

Os blocos dos cartões oferecem flexibilidade ao permitir personalizar os cartões para necessidades específicas. Alguns blocos são carregados por defeito e o bloco descrição não pode ser removido.`,
    relatedSlugs: ["add-or-remove-blocks", "pzaz-security-features", "your-pzaz-profile"],
  },
  {
    id: "fn-3",
    slug: "delete-your-account",
    title: "Eliminar a sua conta",
    category: "functions",
    content: `## Eliminar a sua conta

Para eliminar definitivamente a sua conta, contacte a nossa equipa através da página **Chat ao Vivo** da app na secção **Obter Ajuda**. A nossa equipa processará o seu pedido e removerá a sua conta do nosso banco de dados de forma segura.

Tenha em atenção que somos obrigados por lei a conservar as informações financeiras, mas todos os outros dados serão eliminados definitivamente — esta ação é irreversível.

Antes de prosseguir, encorajamo-lo a partilhar as suas preocupações ou feedback connosco. Estamos aqui para garantir que a sua experiência corresponda às suas expectativas.

> **Aviso:** A eliminação da conta é permanente e irreversível. Todos os seus projetos e dados serão eliminados.`,
    relatedSlugs: ["cancelling-or-closing-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-4",
    slug: "cancelling-or-closing-your-account",
    title: "Cancelar ou encerrar a sua conta",
    category: "functions",
    content: `## Cancelar ou encerrar a sua conta

Se deseja encerrar a sua conta, contacte a nossa equipa através da página **Chat ao Vivo** da app na secção **Obter Ajuda**. Vamos ajudá-lo no processo.

## Antes de ir

Gostaríamos de compreender a sua experiência e saber como podemos melhorar. Se algo não está a funcionar para si, a nossa equipa de suporte está pronta para ajudar — não hesite em contactar-nos antes de tomar esta decisão.

> **Nota:** Se deseja apenas cancelar uma subscrição e não eliminar toda a conta, a nossa equipa pode ajudá-lo através do mesmo canal de chat ao vivo.`,
    relatedSlugs: ["delete-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-5",
    slug: "your-pzaz-profile",
    title: "O seu perfil Pzaz",
    category: "functions",
    content: `## O seu perfil Pzaz

O seu perfil é a sua identidade — dedique um momento para o personalizar. Atualizar os seus dados ou adicionar um avatar criativo garante que a sua conta reflete o seu estilo.

## Editar o seu perfil

Para editar o seu perfil, clique no ícone do menu no canto inferior esquerdo. A partir daí pode:

- **Alterar o seu nome de utilizador** — Como o seu nome aparece aos colaboradores
- **Atualizar o seu endereço de email** — Mantenha os seus contactos atualizados
- **Redefinir a sua palavra-passe** — Garanta a segurança da sua conta
- **Carregar uma nova foto de perfil** — Adicione um avatar que o represente`,
    relatedSlugs: ["card-anatomy", "pzaz-security-features", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-6",
    slug: "add-or-remove-blocks",
    title: "Adicionar ou remover blocos",
    category: "functions",
    content: `## Adicionar ou remover blocos

**Personalize os cartões para máxima flexibilidade**

Pode personalizar os cartões para enriquecer o seu workflow de produção adicionando ou removendo funcionalidades.

## Como funciona

Nem todos os blocos são compatíveis com cada tipo de cartão. Alguns são carregados por defeito, outros devem ser adicionados manualmente. Título e descrição não são blocos e portanto não podem ser removidos.

Clique no **ícone 'Blocos'** no cabeçalho do cartão para adicionar ou remover um bloco.

## Pontos importantes

- **Blocos predefinidos** são carregados automaticamente na criação do cartão
- **Blocos opcionais** podem ser adicionados manualmente
- **Título e descrição** são permanentes e não podem ser removidos
- A disponibilidade dos blocos varia conforme o tipo de cartão`,
    relatedSlugs: ["card-anatomy", "your-pzaz-profile", "pzaz-security-features"],
  },
  {
    id: "fn-7",
    slug: "leave-feedback",
    title: "Deixe feedback",
    category: "functions",
    content: `## Deixe feedback

**Ajude-nos a moldar o futuro**

Acolhemos com prazer o seu feedback! Partilhe as suas impressões — o que gosta, o que pode ser melhorado e que novas funcionalidades deseja.

## Como deixar feedback

As suas ideias desempenham um papel crucial em ajudar-nos a dar prioridade às funcionalidades e a alinhar melhor a plataforma com a comunidade do cinema e da criatividade.

Partilhe a sua opinião através da página **Chat ao Vivo** da app na secção **Obter Ajuda**.

Obrigado por nos ajudar a crescer!`,
    relatedSlugs: ["get-support", "reporting-a-bug", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-8",
    slug: "helpful-tools-for-capturing-screenshots-and-videos",
    title: "Ferramentas úteis para capturar screenshots e vídeos",
    category: "functions",
    content: `## Ferramentas úteis para capturar screenshots e vídeos

Se usa Google Chrome, recomendamos a extensão **Nimbus Screen Shot and Video Recorder**. Esta ferramenta permite-lhe:

- Capturar screenshots completos ou parciais
- Gravar o ecrã para mostrar o problema
- Editar, anotar e guardar as suas gravações

Pode anexar estes ficheiros à sua mensagem de suporte para uma comunicação mais precisa e uma resolução mais rápida.

## Porque é útil

Fornecer contexto visual — screenshots ou gravações de ecrã — acelera significativamente a nossa capacidade de diagnosticar e resolver problemas.

A nossa equipa compromete-se a proporcionar-lhe a melhor experiência possível.`,
    relatedSlugs: ["reporting-a-bug", "get-support", "leave-feedback"],
  },
  {
    id: "fn-9",
    slug: "reporting-a-bug",
    title: "Reportar um bug",
    category: "functions",
    content: `## Reportar um bug

Se encontrar um bug, forneça o máximo de detalhes possível para nos ajudar a diagnosticá-lo e resolvê-lo de forma eficiente.

## O que incluir

- **Uma descrição detalhada** do bug
- **Comportamento esperado vs. real** — o que esperava vs. o que aconteceu
- **Passos para reprodução** — os passos específicos que causaram o bug
- **O seu ambiente** — dispositivo, sistema operativo e navegador
- **Screenshots ou vídeos** — qualquer gravação relevante

## Como reportar um bug

Contacte a nossa equipa através da página **Chat ao Vivo** da app na secção **Obter Ajuda**.

> Sugestão: Use a extensão Chrome Nimbus Screen Shot & Video Recorder para capturar e anotar facilmente.`,
    relatedSlugs: ["helpful-tools-for-capturing-screenshots-and-videos", "get-support", "leave-feedback"],
  },
  {
    id: "fn-10",
    slug: "get-support",
    title: "Obter suporte",
    category: "functions",
    content: `## Obter suporte

### Estamos aqui para si!

Tem um problema ou precisa de orientação? A nossa equipa está pronta para ajudar.

## Como contactar-nos

Contacte a nossa equipa através da página **Chat ao Vivo** da app na secção **Obter Ajuda**. Um membro da equipa responderá rapidamente.

## Como podemos ajudar

- Problemas técnicos e bugs
- Questões sobre conta e faturação
- Orientação sobre funcionalidades
- Feedback e pedidos de funcionalidades
- Questões gerais sobre o produto`,
    relatedSlugs: ["reporting-a-bug", "leave-feedback", "helpful-tools-for-capturing-screenshots-and-videos"],
  },

  // Ferramentas e Funcionalidades
  {
    id: "tf-1",
    slug: "script-breakdown",
    title: "Desdobramento de Cena",
    category: "tools-and-features",
    content: `## Desdobramento de Cena

## Introdução

Temos o prazer de apresentar a funcionalidade **Desdobramento de Cena** — uma ferramenta poderosa que o ajuda a preparar e planear a sua produção cinematográfica ou televisiva com maior detalhe do que nunca.

Esta funcionalidade permite-lhe usar o seu guião como base para organizar tudo o que precisa para a produção — desde adereços e figurinos a localizações e elenco.

## Para começar

Crie ou carregue primeiro o seu guião. Uma vez carregado, o seu guião será tratado como **Guião Principal** — apenas este será utilizado para o desdobramento.

A app gera automaticamente uma lista de todas as cenas. Selecione **Desdobramento** no menu de navegação.

## Funcionalidades

- **Gera automaticamente uma lista de cenas** a partir do guião principal
- **Visualize os metadados das cenas** — presença de personagens e cobertura
- **Marque os elementos essenciais** — elenco, adereços, veículos, figurinos, stunts, efeitos especiais, etc.
- **Organize com destaque colorido** por categoria
- **Pesquise e filtre os elementos marcados**
- **Crie ou elimine categorias personalizadas**

## Marcar os elementos no seu guião

1. Vá à secção **Desdobramento** e selecione a cena
2. Na vista focada, destaque a palavra ou frase
3. Aparece um popup — selecione a área e a categoria
4. Clique em **Marcar** — o elemento será destacado com uma cor

## O que acontece a seguir?

Após a marcação, todos os elementos relevantes aparecerão automaticamente nas respetivas secções da app.`,
    relatedSlugs: ["scenes", "storyboard", "stripboard"],
  },
  {
    id: "tf-2",
    slug: "documents-section",
    title: "Secção Documentos",
    category: "tools-and-features",
    content: `## Secção Documentos

### Introdução

Reintroduzimos a secção Documentos graças ao feedback dos nossos utilizadores!

## Para começar

A secção Documentos permite-lhe criar um número ilimitado de livros e páginas. Cada página deve estar contida num livro. Clique no campo de texto no topo do ecrã, insira um título e pressione Enter.

## Funcionalidades

- Crie um número ilimitado de páginas num número ilimitado de livros
- Formate com títulos (H1–H6), listas com marcadores, listas numeradas e hiperligações
- Organize todos os documentos do projeto num único lugar
- Crie qualquer tipo de documento — dos tratamentos aos procedimentos no set

Para assistência, contacte a equipa de suporte através do chat ao vivo.`,
    relatedSlugs: ["your-filmspace", "manage-section", "card-blocks"],
  },
  {
    id: "tf-3",
    slug: "manage-section",
    title: "Secção Gestão",
    category: "tools-and-features",
    content: `## Secção Gestão

### O seu painel pessoal

O painel pessoal é o seu espaço para ver o trabalho e as tarefas que dizem respeito apenas a si. Verá dois tipos de elementos:

1. **Todos** — Tarefas visíveis apenas para si.
2. **Cartões Workflow** — se é proprietário de um cartão workflow ou foi adicionado a ele, aparecerá aqui também.

O painel está dividido em duas áreas — a caixa de entrada (lista à esquerda) e as colunas do board (à direita). Pode arrastar todos ou cartões da lista para as colunas.

Para adicionar colunas adicionais, clique no ícone **"+"** no topo de qualquer coluna.

## Board Workflow

O proprietário do Filmspace pode criar todos os boards workflow necessários com o botão **"+ Novo Workflow"**.

Apenas os cartões são visíveis num board workflow, não os todos pessoais.`,
    relatedSlugs: ["board-views", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-4",
    slug: "shots",
    title: "Planos",
    category: "tools-and-features",
    content: `## Planos

### Planeie e monitorize todos os planos individuais do seu filme.

A funcionalidade Planos permite-lhe decompor cada cena em planos de câmara específicos e organizá-los de acordo com o seu plano de rodagem.

## Como pode a funcionalidade Planos ajudar-me?

Como produtor, realizador ou outra figura envolvida numa produção, pode ter a certeza de que a funcionalidade Planos lhe permite capturar todas as informações relevantes — ângulos de câmara, movimentos necessários, objetivos específicos, etc.

Além disso, a ferramenta inclui um **assistente IA** integrado que pode gerar automaticamente imagens de pré-visualização para cada um dos seus planos, com base nas descrições fornecidas.

Pode inserir descrições 'positivas' e 'negativas'. A IA pode gerar as suas imagens em diversos estilos — fotográfico, futurista, anime e muito mais!`,
    relatedSlugs: ["scenes", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-5",
    slug: "scenes",
    title: "Cenas",
    category: "tools-and-features",
    content: `## Cenas

### Organize e gira a estrutura narrativa do seu filme; decomponha o guião em cenas e monitorize o seu progresso durante a produção.

A funcionalidade Cenas permite-lhe dividir o guião em unidades geríveis e monitorizar o estado de cada cena durante todo o processo produtivo.

## Como funciona?

- No primeiro acesso à secção Cenas, selecione um guião no menu à esquerda
- Uma vez selecionado o guião, é gerado um painel para cada cena
- A nossa ferramenta permite-lhe usar o **assistente IA** para gerar uma imagem de pré-visualização para cada cena
- Tem grande flexibilidade — pode gerar imagens em muitos estilos e fornecer descrições muito diversas. Pode também carregar as suas próprias imagens!`,
    relatedSlugs: ["shots", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-6",
    slug: "storyboard",
    title: "Storyboard",
    category: "tools-and-features",
    content: `## Storyboard

### Organize e visualize os momentos-chave e os planos do seu filme

A funcionalidade Storyboard ajuda-o a planear visualmente e organizar as cenas-chave do seu filme — decomponha cada cena em planos individuais e represente-os com imagens, desenhos ou notas.

## Onde encontrar

Encontra o **Storyboard** na secção **"Pré-produção"** do menu de navegação à esquerda.

## Duas formas de criar o seu storyboard

### 1. Geração automática a partir do guião principal

Carregue o seu guião e a app extrairá automaticamente as suas cenas. Cada cena torna-se o seu próprio storyboard — pronto para adicionar planos, ângulos de câmara e detalhes.

### 2. Criação de raiz

Crie um storyboard personalizado e adicione cenas manualmente — ideal para projetos experimentais ou documentários.

## Adicionar planos detalhados a cada cena

- Ambientação e momento da cena
- Diálogos dos personagens
- Detalhes do plano (ângulo, movimento, dimensão)
- Informações sobre a câmara
- Temporização
- Comentários e notas`,
    relatedSlugs: ["scenes", "shots", "stripboard"],
  },
  {
    id: "tf-7",
    slug: "stripboard",
    title: "Stripboard",
    category: "tools-and-features",
    content: `## Stripboard

### Organize e otimize o seu plano de produção

A funcionalidade Stripboard é concebida para o ajudar a gerir o seu plano de rodagem. Permite-lhe decompor o guião em cenas e organizá-las visualmente para planear cada dia de rodagem.

## Como usar o Stripboard de forma eficiente?

Crie primeiro um guião. Abra a secção Stripboard e selecione um guião existente no menu à esquerda — verá uma decomposição clara de cada cena. Depois atribua dias de rodagem e recursos.

Pode:

- Mover as cenas se o plano mudar
- Monitorizar a disponibilidade de equipa e localizações
- Acompanhar quais cenas estão prontas, em curso ou concluídas
- Visualizar todo o fluxo produtivo do início ao fim`,
    relatedSlugs: ["call-sheets", "scenes", "storyboard"],
  },
  {
    id: "tf-8",
    slug: "call-sheets",
    title: "Folhas de Serviço",
    category: "tools-and-features",
    content: `## Folhas de Serviço

### Coordene e comunique a logística das suas rodagens

A funcionalidade Folhas de Serviço permite-lhe organizar e distribuir os programas diários para a sua equipa — cada pessoa sabe onde deve estar e quando.

## Como usar as Folhas de Serviço?

Comece por planear os dias de rodagem e insira os detalhes relevantes:

- Horário de início para cada membro da equipa
- Informações sobre a localização
- Requisitos especiais do dia

Pode distribuir as folhas de serviço por email diretamente a partir da plataforma.

A app permite acompanhar a disponibilidade da equipa e gerir as alterações. Atualizações em tempo real e notificações imediatas estão disponíveis.`,
    relatedSlugs: ["stripboard", "department", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-9",
    slug: "department",
    title: "Secção Produção",
    category: "tools-and-features",
    content: `## Secção Produção

### Gira todos os aspetos do seu processo produtivo num hub centralizado.

A secção Produção da app fornece ferramentas para acompanhar tudo o que precisa para um fluxo produtivo fluido.

## O que contém esta secção?

A secção Produção inclui: **Elenco, Equipa, Localizações, Elementos e Equipamentos**.

## Como pode a secção Produção ajudar-me?

Da coordenação de tarefas entre equipas à monitorização do estado dos elementos de produção — a funcionalidade Produção oferece todas as ferramentas para manter tudo sincronizado.

Pode adicionar todas as informações relevantes:

- Dados financeiros
- Detalhes da empresa ou agência
- Detalhes de recolha e moradas
- Comentários ilimitados`,
    relatedSlugs: ["call-sheets", "script-breakdown", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-10",
    slug: "moodboard",
    title: "Moodboard",
    category: "tools-and-features",
    content: `## Moodboard

### Capture as suas ideias para o tom e o estilo do seu projeto

A funcionalidade **Moodboard** permite aos cineastas conceber e comunicar visualmente a estética e o tom dos seus projetos — uma ferramenta criativa para reunir imagens, paletas de cores e elementos de design.

## O que pode fazer?

- **Composição visual** — Reúna e organize elementos para criar uma representação visual coerente
- **Diferentes tipos de elementos** — Adicione imagens, cores específicas (formato RGBA) e fontes (formato TTF)
- **Edição colaborativa** — Partilhe os moodboards com os membros da equipa para um alinhamento visual uniforme`,
    relatedSlugs: ["scenes", "storyboard", "documents-section"],
  },
  {
    id: "tf-11",
    slug: "team-chats",
    title: "Chats de Equipa",
    category: "tools-and-features",
    content: `## Chats de Equipa

### Melhore a comunicação do projeto com os Chats de Equipa

Uma comunicação eficaz é essencial na produção cinematográfica e de vídeo. A funcionalidade de mensagens oferece capacidades de mensagens em tempo real para uma colaboração sem interrupções entre os membros da equipa.

## O que oferece a funcionalidade Chats de Equipa?

- **Mensagens em tempo real** — Conversas instantâneas para uma rápida resolução de problemas
- **Versatilidade** — Mensagens de voz, emojis e anexos
- **Chats de grupo** — Discussões entre vários membros, departamentos ou grupos de projeto
- **Integração com outras ferramentas** — Hub de comunicação centralizado que complementa a gestão de tarefas`,
    relatedSlugs: ["file-sharing-media-storage", "add-and-remove-team-members-filmspace", "your-filmspace"],
  },
  {
    id: "tf-12",
    slug: "file-sharing-media-storage",
    title: "Partilha de Ficheiros e Armazenamento de Media",
    category: "tools-and-features",
    content: `## Partilha de Ficheiros e Armazenamento de Media

### Simplifique a gestão e a troca dos seus ficheiros e media

A nossa funcionalidade **Drive** oferece um repositório centralizado para todos os documentos e media relacionados com a produção.

## Funcionalidades detalhadas

- **Armazenamento centralizado** — Armazene guiões, storyboards, programas e documentos importantes num local seguro
- **Integrações seamless** — A app integra-se com Google Drive, Slack e Adobe Suite
- **Controlo de versões** — Acompanhe as alterações e mantenha o histórico de versões`,
    relatedSlugs: ["team-chats", "documents-section", "your-filmspace"],
  },
  {
    id: "tf-13",
    slug: "budgeting",
    title: "Orçamentação",
    category: "tools-and-features",
    content: `## Orçamentação

**Como funciona a orçamentação na app?**

A nossa app oferece uma ferramenta de orçamentação automatizada que simplifica o planeamento financeiro para produções cinematográficas e de vídeo. Ao integrar a orçamentação diretamente com a escrita do guião, o desdobramento e o planeamento.

## O que significa 'Above' e 'Below the Line'?

- **Custos Above the Line (ATL)** — Custos fixos e iniciais para funções criativas e de decisão (guionistas, realizadores, produtores)
- **Custos Below the Line (BTL)** — Custos variáveis de produção (salários da equipa, aluguer de equipamentos, taxas de localização)

A app permite-lhe visualizar os custos ATL ou BTL separadamente ou combinados.

## Funcionalidades-chave da ferramenta de orçamentação

- **Menu à esquerda** — Categorias: Above the Line, Below the Line e Vista de Orçamento Combinada
- **Painel à direita** — Todas as rubricas de orçamento com seleção flexível de moeda (Euro, Libra, Dólar)
- **Montante total** exibido no canto superior direito

## Adicionar e gerir rubricas de orçamento

Clique no botão roxo, selecione o tipo, insira o nome e pressione Enter.

## Exportar o seu orçamento

Exporte em formato **PDF** ou **Excel (.xls)**.`,
    relatedSlugs: ["department", "script-breakdown", "your-filmspace"],
  },
  {
    id: "tf-14",
    slug: "board-views",
    title: "Vistas de Board",
    category: "tools-and-features",
    content: `## Vistas de Board

### O que são os Boards?

Os boards workflow oferecem uma vista híbrida — uma lista de elementos à esquerda e uma vista por colunas à direita. Pode mover facilmente todos e cartões entre estas duas áreas.

## Gestão flexível dos workflows

A vista por colunas é organizada em colunas verticais que representam as fases do workflow. Os cartões podem ser movidos entre colunas à medida que progridem. Pode adicionar, remover e renomear facilmente estas colunas.

Por exemplo, pode chamar às colunas "Pré-produção" ou "Revisão" — ou simplesmente "A fazer", "Em curso" e "Concluído".`,
    relatedSlugs: ["manage-section", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-15",
    slug: "add-and-remove-team-members-filmspace",
    title: "Adicionar e remover membros da equipa – Filmspace",
    category: "tools-and-features",
    content: `## Adicionar e remover membros da equipa – Filmspace

Convide pessoas a juntarem-se à sua equipa ou adicione colaboradores ao seu Filmspace para trabalhar em conjunto nos seus projetos criativos.

## Adicionar membros da equipa

Vá a **Perfil e Definições** e clique em **Convidar Membros**. Insira nome e endereço de email, adicione opcionalmente uma nota pessoal e clique em **Enviar Convite**. Após a aceitação, a pessoa terá acesso ao seu Filmspace.

## Remover membros da equipa

Abra **Definições**. Clique no **ícone Mais opções (três pontos)** junto ao membro e confirme.

## #BomSaber

Apenas os **proprietários do Filmspace** podem adicionar ou remover membros da equipa.`,
    relatedSlugs: ["roles-permissions-in-pzaz", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-16",
    slug: "roles-permissions-in-pzaz",
    title: "Funções e permissões no Pzaz",
    category: "tools-and-features",
    content: `## Funções e permissões no Pzaz

### Funções e permissões atualizadas

Cada membro do Filmspace tem uma função com permissões específicas. Existem cinco funções principais:

1. **Proprietário do Filmspace** — Controlo total sobre o Filmspace, faturação e todas as definições
2. **Administrador do Filmspace** — Pode partilhar tarefas administrativas
3. **Direção Criativa** — Focada na direção criativa e nas decisões editoriais
4. **Membro da Equipa** — Acesso completo ao trabalho; pode criar o seu próprio Filmspace
5. **Colaborador** — Acesso mínimo, específico para tarefas atribuídas, sem lugar pago

## Personalizar as funções

Pode personalizar as permissões de todas as funções exceto a de proprietário do Filmspace.

Os colaboradores são únicos — as suas permissões são sempre mínimas e específicas.

## Lugares e acesso

As primeiras quatro funções têm **lugares pagos**. Os colaboradores não ocupam lugares pagos.

## #BomSaber

Funções e permissões são concebidas para promover a colaboração mantendo limites claros.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-17",
    slug: "personal-to-dos",
    title: "Todos Pessoais",
    category: "tools-and-features",
    content: `## Todos Pessoais

### Qual é a diferença entre um cartão e um todo?

Um **todo** é visível apenas para o utilizador que o criou. Um **cartão**, por sua vez, é visível para todos os membros do board.

## O que são os todos pessoais?

Mantenha o controlo sobre as suas prioridades com os todos pessoais. São elementos privados, visíveis apenas para si e acessíveis a partir da caixa de entrada.

## A caixa de entrada — A sua ferramenta poderosa

Independentemente de quantos projetos cinematográficos gira — tudo está consolidado na sua caixa de entrada.

Mostra uma vista híbrida — uma lista à esquerda e um número ilimitado de colunas à direita. Os elementos arquivados são guardados numa área de arquivo dedicada.

## Gerir os todos pessoais

- Adicione notas, datas de vencimento ou anexos a cada tarefa
- Dê prioridade através de marcação ou movimentação entre fases
- Converta os todos em cartões partilhados

## #BomSaber

Os seus todos são mais do que lembretes — fazem parte de um conjunto de ferramentas otimizado para apoiar o seu processo criativo.`,
    relatedSlugs: ["manage-section", "board-views", "card-blocks"],
  },
  {
    id: "tf-18",
    slug: "card-blocks",
    title: "Blocos de Cartão",
    category: "tools-and-features",
    content: `## Blocos de Cartão

### O que são os blocos?

Os blocos são componentes modulares que pode adicionar ou remover dos cartões para os adaptar às suas necessidades. Cada bloco oferece uma funcionalidade única — tornando os cartões adaptáveis a diversas tarefas e workflows.

Por exemplo, o bloco descrição permite adicionar informações detalhadas, enquanto outros como checklists ou datas de vencimento permitem o acompanhamento de tarefas e a gestão de prazos.

## Porquê os blocos são importantes

Os blocos oferecem flexibilidade para todo o ciclo de vida de um projeto cinematográfico. Da ideação à aprovação final, mantenha o controlo sobre as informações de que precisa — sem complexidade desnecessária.`,
    relatedSlugs: ["card-anatomy", "add-or-remove-blocks", "personal-to-dos"],
  },
  {
    id: "tf-19",
    slug: "your-filmspace",
    title: "O seu Filmspace",
    category: "tools-and-features",
    content: `## O seu Filmspace

### O que é um Filmspace?

Um Filmspace é o seu workspace centralizado. Mantém tudo junto — equipa, projetos, comunicação e ferramentas de produção. Cada Filmspace é criado e gerido pelo seu proprietário.

## Criar um Filmspace

Registe-se e crie o seu primeiro Filmspace. Será classificado como **Proprietário** deste Filmspace e terá controlo total sobre definições e gestão de membros.

## Convidar membros da equipa

Convide membros e atribua-lhes funções — do administrador ao colaborador. Cada membro vê apenas as áreas relevantes para a sua função.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "roles-permissions-in-pzaz", "manage-section"],
  },
];

export const kbCategoriesPt = [
  {
    id: "getting-started",
    title: "Para Começar",
    description: "Tudo o que precisa de saber para começar com o Pzaz.",
    icon: "🚀",
  },
  {
    id: "functions",
    title: "Funções",
    description: "Descubra as funções IA do Pzaz e como utilizá-las.",
    icon: "⚡",
  },
  {
    id: "tools-and-features",
    title: "Ferramentas e Funcionalidades",
    description: "Guias aprofundados sobre cada ferramenta de produção no seu workspace.",
    icon: "🛠️",
  },
] as const;

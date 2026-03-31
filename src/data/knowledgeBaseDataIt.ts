import { KBArticle } from "./knowledgeBaseData";

export const kbArticlesIt: KBArticle[] = [
  // Per Iniziare
  {
    id: "gs-1",
    slug: "book-a-personalised-product-demonstration",
    title: "Prenota una demo personalizzata del prodotto",
    category: "getting-started",
    content: `## Prenota una demo personalizzata del prodotto

### Ti aiutiamo a ottenere il massimo dal nostro strumento.

Siamo un team di appassionati di cinema e professionisti della produzione creativa. Se c'è qualcosa che amiamo più dei film, è aiutare altri filmmaker ad avere successo e a realizzare le loro ambizioni creative!

Ecco perché siamo disponibili ogni giorno per videochiamate, se vuoi spiegarci le tue esigenze o scoprire di più su ciò che l'app ha da offrire.

## Contattaci oggi!

Per prenotare una demo personalizzata e approfondita con noi, clicca sul seguente link Calendly e segui le istruzioni: [PRENOTA UNA CHIAMATA](https://calendly.com/filmmaking-app/30min)`,
    relatedSlugs: ["writing-your-script-with-pzaz", "getting-started-with-workflows", "pzaz-101"],
  },
  {
    id: "gs-2",
    slug: "writing-your-script-with-pzaz",
    title: "Scrivere la tua sceneggiatura con Pzaz",
    category: "getting-started",
    content: `## Scrivere la tua sceneggiatura con Pzaz

### Introduzione

Con lo strumento di sceneggiatura puoi trasformare le tue idee in una sceneggiatura completamente strutturata — che tu parta da zero o importi un progetto esistente. Lo strumento semplifica ogni passaggio e ti permette di personalizzare la pagina del titolo, aggiungere atti, scene, personaggi, dialoghi e transizioni, e costruire un flusso narrativo fluido.

## Per iniziare

Inizia la tua sceneggiatura importandola o creandone una nuova da zero. La prima sceneggiatura che crei verrà contrassegnata come **"Sceneggiatura Principale"** — ciò significa che solo questa sceneggiatura potrà essere utilizzata per lo spoglio scena, lo storyboarding, l'organizzazione dei fogli di servizio e la creazione automatica di elementi, attrezzature, troupe e cast nonché oggetti location nella sezione produzione del menu principale. Tutte le altre sceneggiature importate, create o duplicate saranno considerate bozze.

Se hai più sceneggiature nel tuo progetto, la prima della lista sarà contrassegnata come "Sceneggiatura Principale" per impostazione predefinita.

## Importare/Esportare la sceneggiatura

Premendo il pulsante **"Nuova Sceneggiatura"**, avrai 2 opzioni — "Inizia una nuova sceneggiatura" o "Importa esistente". L'app supporta l'importazione di file .PDF e Final Draft (.FDX).

Per esportare la tua sceneggiatura, clicca sul menu a 3 punti nell'angolo in alto a destra dello strumento e premi l'opzione **"Esporta Sceneggiatura"**. Qui puoi scegliere il formato — .FDX o .PDF — e includere o escludere la pagina del titolo.

> Nota che per file di grandi dimensioni potresti dover attendere qualche secondo prima che il documento sia pronto per la stampa.

## Navigazione

La navigazione è intuitiva grazie alla barra laterale, che ti permette di riordinare rapidamente le scene, modificare i dialoghi o saltare a sezioni specifiche con la funzione di ricerca. Ogni aggiornamento avviene in tempo reale.

## L'Assistente IA

Hai bisogno di supporto creativo? L'assistente IA integrato fornisce suggerimenti intelligenti e idee per affinare la tua sceneggiatura e rendere il processo di scrittura più veloce e intuitivo.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "ai-security-and-privacy-at-pzaz", "getting-started-with-workflows"],
  },
  {
    id: "gs-3",
    slug: "ai-security-and-privacy-at-pzaz",
    title: "IA, Sicurezza e Privacy",
    category: "getting-started",
    content: `## IA, Sicurezza e Privacy

Prendiamo sul serio la sicurezza e la privacy, assicurando che il tuo lavoro creativo rimanga protetto.

**Non utilizziamo mai le tue sceneggiature, note o dati per l'addestramento dell'IA. Il tuo lavoro è privato e accessibile solo a te e ai collaboratori da te scelti.**

## Sicurezza dei dati

Per mantenere i tuoi dati al sicuro, l'app utilizza la crittografia end-to-end con **TLS** per i dati in transito e la crittografia **AES-256** per i file archiviati. La nostra infrastruttura segue i più alti standard di sicurezza del settore.

## Controlli di accesso

Offriamo rigidi controlli di accesso per consentirti di gestire chi può visualizzare e modificare i tuoi contenuti. I tuoi progetti rimangono in un workspace privato.

## Prospettive future

Stiamo ampliando le nostre misure di sicurezza con:

- **Autenticazione a due fattori (2FA)** — un ulteriore livello di protezione al login
- **Permessi file avanzati** — controllo più fine su chi può accedere a cosa
- **Condivisione link sicura** — controllo migliorato sui contenuti condivisi

Con la nostra app puoi concentrarti sul tuo lavoro creativo senza preoccuparti della sicurezza. Domande? Contattaci tramite la live chat nella sezione **OTTIENI AIUTO**.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "writing-your-script-with-pzaz", "pzaz-101"],
  },
  {
    id: "gs-4",
    slug: "getting-started-with-workflows",
    title: "Iniziare con i Workflow",
    category: "getting-started",
    content: `## Iniziare con i Workflow

### Cosa sono i Workflow?

I workflow rappresentano processi interni — una serie di passaggi ripetibili necessari per raggiungere un risultato. Un workflow può essere semplice come "Da fare > In corso > Completato" o più complesso, come i passaggi di un ciclo di vendita.

I workflow vengono visualizzati su board. Puoi creare tutti i board necessari, ciascuno rappresentante un processo diverso (es. Sviluppo, Marketing, Casting). Crei un workflow aggiungendo colonne a un board. Le schede vengono trascinate da una colonna all'altra man mano che progrediscono. Questo formato è noto come **board Kanban**.

## Creare il tuo primo workflow

All'avvio, viene caricato un board Kanban con una singola colonna che rappresenta l'inizio del tuo workflow — non può essere eliminata né rinominata. Per aggiungere colonne, clicca sui tre punti verticali e seleziona **Aggiungi intestazione**.

Ad esempio, un workflow di content marketing potrebbe includere: Non assegnato, Prioritario, Bozza, Revisione e Pubblicato.

## Aggiungere un workflow aggiuntivo

Solo il proprietario del Filmspace può aggiungere un nuovo workspace. Seleziona la sezione **'Gestisci'** nel menu laterale, poi **'+ Nuovo Workflow'**.

## Aggiungere elementi di lavoro

Per creare schede, clicca sui tre punti verticali di qualsiasi colonna e seleziona **Aggiungi scheda**. Ogni scheda dovrebbe avere un titolo chiaro e descrittivo. Puoi documentare le schede con:

- Descrizioni
- Date di scadenza
- Allegati (documenti o link)
- Attività e sotto-attività
- Assegnazione dei membri del team`,
    relatedSlugs: ["pzaz-101", "writing-your-script-with-pzaz", "book-a-personalised-product-demonstration"],
  },
  {
    id: "gs-5",
    slug: "pzaz-101",
    title: "Il Principio",
    category: "getting-started",
    content: `## Il Principio

## Introduzione a "Il Principio"

Benvenuto sulla nostra piattaforma, dove la semplicità incontra la potenza. Crediamo che gli strumenti debbano adattarsi a te — non il contrario. Ecco perché abbiamo costruito la nostra piattaforma sul **Principio**, una filosofia UX che permette a chiunque di iniziare facilmente, sviluppare competenze, collaborare e sbloccare funzionalità avanzate al proprio ritmo.

### Cos'è il Principio?

Il Principio si basa su tre idee fondamentali:

1. **La piattaforma cresce con te:** È come una tela bianca, pronta per qualsiasi attività o progetto. Le basi vengono naturalmente e la padronanza si raggiunge in modo intuitivo.
2. **Flessibilità Lego:** Ogni funzionalità è composta da semplici blocchi modulari. Come i mattoncini Lego, si assemblano facilmente e ti permettono di costruire qualsiasi cosa.
3. **Supporto dove conta:** L'IA non è qui per sostituire la tua creatività, ma per ispirarla, stimolarla e supportarla.

## La tua tela: Oggetti e Schede

Inizia con una tela bianca dove puoi creare **Oggetti** per tracciare attività, progetti, sceneggiature, file, budget e altro.

Ogni oggetto mostra dettagli importanti (come scadenze e priorità). Aprilo per accedere a una **Scheda** — uno spazio personalizzabile per gestire tutti i dettagli.

## Blocchi: Costruire il tuo workflow

Le schede sono composte da blocchi, che rappresentano segmenti logici di informazioni o funzionalità.

## Organizzare il tuo lavoro

Ogni oggetto è raggruppato in una **Categoria**, iniziando con la **Posta in Arrivo** come predefinita. Puoi creare tutte le categorie necessarie.

Gestisci il tuo lavoro con:

- **Vista Lista** — Ideale per ordinare per argomenti
- **Vista Board** — Monitora i progressi per fasi`,
    relatedSlugs: ["getting-started-with-workflows", "writing-your-script-with-pzaz", "ai-security-and-privacy-at-pzaz"],
  },

  // Funzioni
  {
    id: "fn-1",
    slug: "pzaz-security-features",
    title: "Le nostre funzionalità di sicurezza: protezione dei tuoi dati",
    category: "functions",
    content: `## Le nostre funzionalità di sicurezza: protezione dei tuoi dati

Sappiamo che la sicurezza è una priorità assoluta per i nostri utenti. Che tu stia collaborando a una sceneggiatura, condividendo piani di produzione o archiviando dettagli sensibili del progetto — i tuoi dati meritano il massimo livello di protezione.

## Crittografia: protezione dei tuoi dati ovunque

Ogni volta che carichi o accedi a un file, è protetto dalla crittografia. Durante il trasferimento, i tuoi file sono protetti con **TLS**. Una volta archiviati sui nostri server, i tuoi dati sono protetti con crittografia **AES-256**.

## Controlli di accesso: gestione semplificata

Permettiamo agli amministratori di concedere o limitare l'accesso allo storage e di assicurare che solo gli utenti autorizzati possano utilizzare questa funzionalità. Stiamo lavorando per offrire un controllo ancora più granulare.

## Prospettive: miglioramenti futuri

- **Autenticazione a due fattori (2FA)** — ulteriore livello di protezione al login
- **Controlli di accesso avanzati** — permessi a livello di file
- **Opzioni di condivisione link avanzate** — protezione con password e impostazioni di scadenza

Non siamo solo uno strumento per filmmaker — siamo un partner di fiducia nel tuo percorso creativo.`,
    relatedSlugs: ["card-anatomy", "delete-your-account", "get-support"],
  },
  {
    id: "fn-2",
    slug: "card-anatomy",
    title: "Anatomia di una scheda",
    category: "functions",
    content: `## Anatomia di una scheda

### Di cosa sono composte le schede?

Con le schede dello strumento puoi creare workflow adattati alle esigenze uniche della produzione cinematografica. Le schede sono il fondamento di questa piattaforma — catturano idee, documentano attività e implementano iniziative.

## Gestire le schede

Il contenitore della scheda mostra informazioni di alto livello: titolo, data di scadenza, membri del team assegnati, stato del workflow, dimensione dell'attività e allegati. Un clic su una scheda ne apre i dettagli.

Puoi gestire più schede selezionando le caselle di controllo. Tieni premuto **CTRL** e clicca su una scheda per attivare la casella — una volta selezionata, puoi filtrare, spostare, rifiutare o eliminare tramite la toolbar del board.

## #BuonoASapersi

I blocchi delle schede offrono flessibilità permettendoti di personalizzare le schede per esigenze specifiche. Alcuni blocchi vengono caricati per impostazione predefinita e il blocco descrizione non può essere rimosso.`,
    relatedSlugs: ["add-or-remove-blocks", "pzaz-security-features", "your-pzaz-profile"],
  },
  {
    id: "fn-3",
    slug: "delete-your-account",
    title: "Eliminare il tuo account",
    category: "functions",
    content: `## Eliminare il tuo account

Per eliminare definitivamente il tuo account, contatta il nostro team tramite la pagina **Live Chat** dell'app nella sezione **Ottieni Aiuto**. Il nostro team elaborerà la tua richiesta e rimuoverà in modo sicuro il tuo account dal nostro database.

Tieni presente che siamo tenuti per legge a conservare le informazioni finanziarie, ma tutti gli altri dati verranno eliminati definitivamente — questa azione è irreversibile.

Prima di procedere, ti incoraggiamo a condividere le tue preoccupazioni o il tuo feedback con noi. Siamo qui per assicurarci che la tua esperienza corrisponda alle tue aspettative.

> **Avvertenza:** L'eliminazione dell'account è permanente e irreversibile. Tutti i tuoi progetti e dati verranno eliminati.`,
    relatedSlugs: ["cancelling-or-closing-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-4",
    slug: "cancelling-or-closing-your-account",
    title: "Cancellare o chiudere il tuo account",
    category: "functions",
    content: `## Cancellare o chiudere il tuo account

Se desideri chiudere il tuo account, contatta il nostro team tramite la pagina **Live Chat** dell'app nella sezione **Ottieni Aiuto**. Ti assisteremo nel processo.

## Prima di andare

Vorremmo capire la tua esperienza e sapere come possiamo migliorare. Se qualcosa non funziona per te, il nostro team di supporto è pronto ad aiutarti — non esitare a contattarci prima di prendere questa decisione.

> **Nota:** Se desideri solo cancellare un abbonamento e non eliminare l'intero account, il nostro team può assisterti tramite lo stesso canale di live chat.`,
    relatedSlugs: ["delete-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-5",
    slug: "your-pzaz-profile",
    title: "Il tuo profilo Pzaz",
    category: "functions",
    content: `## Il tuo profilo Pzaz

Il tuo profilo è la tua identità — prenditi un momento per personalizzarlo. Aggiornare i tuoi dati o aggiungere un avatar creativo assicura che il tuo account rifletta il tuo stile.

## Modificare il tuo profilo

Per modificare il tuo profilo, clicca sull'icona del menu nell'angolo in basso a sinistra. Da lì puoi:

- **Cambiare il tuo nome utente** — Come appare il tuo nome ai collaboratori
- **Aggiornare il tuo indirizzo email** — Mantieni aggiornati i tuoi contatti
- **Reimpostare la tua password** — Garantisci la sicurezza del tuo account
- **Caricare una nuova foto profilo** — Aggiungi un avatar che ti rappresenti`,
    relatedSlugs: ["card-anatomy", "pzaz-security-features", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-6",
    slug: "add-or-remove-blocks",
    title: "Aggiungere o rimuovere blocchi",
    category: "functions",
    content: `## Aggiungere o rimuovere blocchi

**Personalizza le schede per la massima flessibilità**

Puoi personalizzare le schede per arricchire il tuo workflow di produzione aggiungendo o rimuovendo funzionalità.

## Come funziona

Non tutti i blocchi sono compatibili con ogni tipo di scheda. Alcuni vengono caricati per impostazione predefinita, altri devono essere aggiunti manualmente. Titolo e descrizione non sono blocchi e quindi non possono essere rimossi.

Clicca sull'**icona 'Blocchi'** nell'intestazione della scheda per aggiungere o rimuovere un blocco.

## Punti importanti

- **Blocchi predefiniti** vengono caricati automaticamente alla creazione della scheda
- **Blocchi opzionali** possono essere aggiunti manualmente
- **Titolo e descrizione** sono permanenti e non possono essere rimossi
- La disponibilità dei blocchi varia in base al tipo di scheda`,
    relatedSlugs: ["card-anatomy", "your-pzaz-profile", "pzaz-security-features"],
  },
  {
    id: "fn-7",
    slug: "leave-feedback",
    title: "Lascia un feedback",
    category: "functions",
    content: `## Lascia un feedback

**Aiutaci a plasmare il futuro**

Accogliamo con piacere il tuo feedback! Condividi le tue impressioni — cosa ti piace, cosa potrebbe essere migliorato e quali nuove funzionalità desideri.

## Come lasciare un feedback

Le tue idee giocano un ruolo cruciale nell'aiutarci a dare priorità alle funzionalità e ad allineare meglio la piattaforma alla community del cinema e della creatività.

Condividi la tua opinione tramite la pagina **Live Chat** dell'app nella sezione **Ottieni Aiuto**.

Grazie per aiutarci a crescere!`,
    relatedSlugs: ["get-support", "reporting-a-bug", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-8",
    slug: "helpful-tools-for-capturing-screenshots-and-videos",
    title: "Strumenti utili per catturare screenshot e video",
    category: "functions",
    content: `## Strumenti utili per catturare screenshot e video

Se usi Google Chrome, consigliamo l'estensione **Nimbus Screen Shot and Video Recorder**. Questo strumento ti permette di:

- Catturare screenshot completi o parziali
- Registrare lo schermo per mostrare il problema
- Modificare, annotare e salvare le tue registrazioni

Puoi allegare questi file al tuo messaggio di supporto per una comunicazione più precisa e una risoluzione più rapida.

## Perché è utile

Fornire contesto visivo — screenshot o registrazioni dello schermo — accelera notevolmente la nostra capacità di diagnosticare e risolvere i problemi.

Il nostro team si impegna a fornirti la migliore esperienza possibile.`,
    relatedSlugs: ["reporting-a-bug", "get-support", "leave-feedback"],
  },
  {
    id: "fn-9",
    slug: "reporting-a-bug",
    title: "Segnalare un bug",
    category: "functions",
    content: `## Segnalare un bug

Se trovi un bug, fornisci quanti più dettagli possibili per aiutarci a diagnosticarlo e risolverlo in modo efficiente.

## Cosa includere

- **Una descrizione dettagliata** del bug
- **Comportamento atteso vs. effettivo** — cosa ti aspettavi vs. cosa è successo
- **Passaggi per la riproduzione** — i passaggi specifici che hanno causato il bug
- **Il tuo ambiente** — dispositivo, sistema operativo e browser
- **Screenshot o video** — qualsiasi registrazione rilevante

## Come segnalare un bug

Contatta il nostro team tramite la pagina **Live Chat** dell'app nella sezione **Ottieni Aiuto**.

> Suggerimento: Usa l'estensione Chrome Nimbus Screen Shot & Video Recorder per catturare e annotare facilmente.`,
    relatedSlugs: ["helpful-tools-for-capturing-screenshots-and-videos", "get-support", "leave-feedback"],
  },
  {
    id: "fn-10",
    slug: "get-support",
    title: "Ottenere supporto",
    category: "functions",
    content: `## Ottenere supporto

### Siamo qui per te!

Hai un problema o hai bisogno di orientamento? Il nostro team è pronto ad aiutarti.

## Come contattarci

Contatta il nostro team tramite la pagina **Live Chat** dell'app nella sezione **Ottieni Aiuto**. Un membro del team risponderà rapidamente.

## Come possiamo aiutarti

- Problemi tecnici e bug
- Domande su account e fatturazione
- Guida alle funzionalità
- Feedback e richieste di funzionalità
- Domande generali sul prodotto`,
    relatedSlugs: ["reporting-a-bug", "leave-feedback", "helpful-tools-for-capturing-screenshots-and-videos"],
  },

  // Strumenti e Funzionalità
  {
    id: "tf-1",
    slug: "script-breakdown",
    title: "Spoglio Scena",
    category: "tools-and-features",
    content: `## Spoglio Scena

## Introduzione

Siamo lieti di presentare la funzionalità **Spoglio Scena** — uno strumento potente che ti aiuta a preparare e pianificare la tua produzione cinematografica o televisiva con maggiore dettaglio che mai.

Questa funzionalità ti permette di usare la tua sceneggiatura come base per organizzare tutto ciò di cui hai bisogno per la produzione — dai props e costumi alle location e al cast.

## Per iniziare

Crea o carica prima la tua sceneggiatura. Una volta caricata, la tua sceneggiatura verrà trattata come **Sceneggiatura Principale** — solo questa verrà utilizzata per lo spoglio.

L'app genera automaticamente un elenco di tutte le scene. Seleziona **Spoglio** nel menu di navigazione.

## Funzionalità

- **Genera automaticamente un elenco scene** dalla sceneggiatura principale
- **Visualizza i metadati delle scene** — presenza dei personaggi e copertura
- **Contrassegna gli elementi essenziali** — cast, props, veicoli, costumi, stunt, effetti speciali ecc.
- **Organizza con evidenziazione colorata** per categoria
- **Cerca e filtra gli elementi contrassegnati**
- **Crea o elimina categorie personalizzate**

## Contrassegnare gli elementi nella tua sceneggiatura

1. Vai alla sezione **Spoglio** e seleziona la scena
2. Nella vista focalizzata, evidenzia la parola o la frase
3. Appare un popup — seleziona l'area e la categoria
4. Clicca su **Contrassegna** — l'elemento verrà evidenziato con un colore

## Cosa succede dopo?

Dopo la contrassegnazione, tutti gli elementi rilevanti appariranno automaticamente nelle rispettive sezioni dell'app.`,
    relatedSlugs: ["scenes", "storyboard", "stripboard"],
  },
  {
    id: "tf-2",
    slug: "documents-section",
    title: "Sezione Documenti",
    category: "tools-and-features",
    content: `## Sezione Documenti

### Introduzione

Abbiamo reintrodotto la sezione Documenti grazie al feedback dei nostri utenti!

## Per iniziare

La sezione Documenti ti permette di creare un numero illimitato di libri e pagine. Ogni pagina deve essere contenuta in un libro. Clicca sul campo di testo in cima allo schermo, inserisci un titolo e premi Invio.

## Funzionalità

- Crea un numero illimitato di pagine in un numero illimitato di libri
- Formatta con titoli (H1–H6), elenchi puntati, elenchi numerati e hyperlink
- Organizza tutti i documenti del progetto in un unico posto
- Crea qualsiasi tipo di documento — dai trattamenti alle procedure sul set

Per assistenza, contatta il team di supporto tramite la live chat.`,
    relatedSlugs: ["your-filmspace", "manage-section", "card-blocks"],
  },
  {
    id: "tf-3",
    slug: "manage-section",
    title: "Sezione Gestione",
    category: "tools-and-features",
    content: `## Sezione Gestione

### La tua dashboard personale

La dashboard personale è il tuo spazio per vedere il lavoro e le attività che riguardano solo te. Vedrai due tipi di elementi:

1. **Tutti** — Attività visibili solo a te.
2. **Schede Workflow** — se sei proprietario di una scheda workflow o sei stato aggiunto ad essa, apparirà anche qui.

La dashboard è divisa in due aree — la posta in arrivo (lista a sinistra) e le colonne del board (a destra). Puoi trascinare todo o schede dalla lista alle colonne.

Per aggiungere colonne aggiuntive, clicca sull'icona **"+"** in cima a qualsiasi colonna.

## Board Workflow

Il proprietario del Filmspace può creare tutti i board workflow necessari con il pulsante **"+ Nuovo Workflow"**.

Solo le schede sono visibili in un board workflow, non i todo personali.`,
    relatedSlugs: ["board-views", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-4",
    slug: "shots",
    title: "Inquadrature",
    category: "tools-and-features",
    content: `## Inquadrature

### Pianifica e monitora tutte le singole inquadrature del tuo film.

La funzionalità Inquadrature ti permette di scomporre ogni scena in specifiche inquadrature della telecamera e organizzarle secondo il tuo piano di riprese.

## Come può aiutarmi la funzionalità Inquadrature?

Come produttore, regista o altra figura coinvolta in una produzione, puoi essere certo che la funzionalità Inquadrature ti permetta di catturare tutte le informazioni rilevanti — angoli della telecamera, movimenti necessari, obiettivi specifici ecc.

Inoltre, lo strumento include un **assistente IA** integrato che può generare automaticamente immagini di anteprima per ciascuna delle tue inquadrature, basandosi sulle descrizioni da te fornite.

Puoi inserire descrizioni 'positive' e 'negative'. L'IA può generare le tue immagini in diversi stili — fotografico, futuristico, anime e molto altro!`,
    relatedSlugs: ["scenes", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-5",
    slug: "scenes",
    title: "Scene",
    category: "tools-and-features",
    content: `## Scene

### Organizza e gestisci la struttura narrativa del tuo film; scomponi la sceneggiatura in scene e monitora il loro avanzamento durante la produzione.

La funzionalità Scene ti permette di suddividere la sceneggiatura in unità gestibili e monitorare lo stato di ogni scena durante l'intero processo produttivo.

## Come funziona?

- Al primo accesso alla sezione Scene, seleziona una sceneggiatura dal menu a sinistra
- Una volta selezionata la sceneggiatura, viene generato un pannello per ogni scena
- Il nostro strumento ti permette di usare l'**assistente IA** per generare un'immagine di anteprima per ogni scena
- Hai grande flessibilità — puoi generare immagini in molti stili e fornire descrizioni molto diverse. Puoi anche caricare le tue immagini!`,
    relatedSlugs: ["shots", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-6",
    slug: "storyboard",
    title: "Storyboard",
    category: "tools-and-features",
    content: `## Storyboard

### Organizza e visualizza i momenti chiave e le inquadrature del tuo film

La funzionalità Storyboard ti aiuta a pianificare visivamente e organizzare le scene chiave del tuo film — scomponi ogni scena in singole inquadrature e rappresentale con immagini, disegni o note.

## Dove trovarlo

Trovi lo **Storyboard** nella sezione **"Pre-produzione"** del menu di navigazione a sinistra.

## Due modi per creare il tuo storyboard

### 1. Generazione automatica dalla sceneggiatura principale

Carica la tua sceneggiatura e l'app estrarrà automaticamente le tue scene. Ogni scena diventa il proprio storyboard — pronto per aggiungere inquadrature, angoli della telecamera e dettagli.

### 2. Creazione da zero

Crea uno storyboard personalizzato e aggiungi scene manualmente — ideale per progetti sperimentali o documentari.

## Aggiungere inquadrature dettagliate a ogni scena

- Ambientazione e momento della scena
- Dialoghi dei personaggi
- Dettagli dell'inquadratura (angolo, movimento, dimensione)
- Informazioni sulla telecamera
- Tempistica
- Commenti e note`,
    relatedSlugs: ["scenes", "shots", "stripboard"],
  },
  {
    id: "tf-7",
    slug: "stripboard",
    title: "Stripboard",
    category: "tools-and-features",
    content: `## Stripboard

### Organizza e ottimizza il tuo piano di produzione

La funzionalità Stripboard è progettata per aiutarti a gestire il tuo piano di riprese. Ti permette di scomporre la sceneggiatura in scene e organizzarle visivamente per pianificare ogni giornata di ripresa.

## Come usare lo Stripboard in modo efficiente?

Crea prima una sceneggiatura. Apri la sezione Stripboard e seleziona una sceneggiatura esistente dal menu a sinistra — vedrai una chiara scomposizione di ogni scena. Poi assegna giorni di ripresa e risorse.

Puoi:

- Spostare le scene se il piano cambia
- Monitorare la disponibilità di troupe e location
- Tracciare quali scene sono pronte, in corso o completate
- Visualizzare l'intero flusso produttivo dall'inizio alla fine`,
    relatedSlugs: ["call-sheets", "scenes", "storyboard"],
  },
  {
    id: "tf-8",
    slug: "call-sheets",
    title: "Fogli di Servizio",
    category: "tools-and-features",
    content: `## Fogli di Servizio

### Coordina e comunica la logistica delle tue riprese

La funzionalità Fogli di Servizio ti permette di organizzare e distribuire i programmi giornalieri per il tuo team — ognuno sa dove deve essere e quando.

## Come usare i Fogli di Servizio?

Inizia pianificando le giornate di ripresa e inserisci i dettagli rilevanti:

- Orario di inizio per ogni membro del team
- Informazioni sulla location
- Requisiti speciali della giornata

Puoi distribuire i fogli di servizio via email direttamente dalla piattaforma.

L'app permette di tracciare la disponibilità della troupe e gestire i cambiamenti. Aggiornamenti in tempo reale e notifiche immediate sono disponibili.`,
    relatedSlugs: ["stripboard", "department", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-9",
    slug: "department",
    title: "Sezione Produzione",
    category: "tools-and-features",
    content: `## Sezione Produzione

### Gestisci tutti gli aspetti del tuo processo produttivo in un hub centralizzato.

La sezione Produzione dell'app fornisce strumenti per tracciare tutto ciò di cui hai bisogno per un flusso produttivo fluido.

## Cosa contiene questa sezione?

La sezione Produzione include: **Cast, Troupe, Location, Elementi e Attrezzature**.

## Come può aiutarmi la sezione Produzione?

Dal coordinamento delle attività tra i team al monitoraggio dello stato degli elementi di produzione — la funzionalità Produzione offre tutti gli strumenti per mantenere tutto sincronizzato.

Puoi aggiungere tutte le informazioni rilevanti:

- Dati finanziari
- Dettagli dell'azienda o dell'agenzia
- Dettagli di ritiro e indirizzi
- Commenti illimitati`,
    relatedSlugs: ["call-sheets", "script-breakdown", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-10",
    slug: "moodboard",
    title: "Moodboard",
    category: "tools-and-features",
    content: `## Moodboard

### Cattura le tue idee per il tono e lo stile del tuo progetto

La funzionalità **Moodboard** permette ai filmmaker di concepire e comunicare visivamente l'estetica e il tono dei loro progetti — uno strumento creativo per assemblare immagini, palette di colori ed elementi di design.

## Cosa puoi fare?

- **Composizione visiva** — Raccogli e organizza elementi per creare una rappresentazione visiva coerente
- **Diversi tipi di elementi** — Aggiungi immagini, colori specifici (formato RGBA) e font (formato TTF)
- **Modifica collaborativa** — Condividi i moodboard con i membri del team per un allineamento visivo uniforme`,
    relatedSlugs: ["scenes", "storyboard", "documents-section"],
  },
  {
    id: "tf-11",
    slug: "team-chats",
    title: "Chat di Team",
    category: "tools-and-features",
    content: `## Chat di Team

### Migliora la comunicazione di progetto con le Chat di Team

Una comunicazione efficace è essenziale nella produzione cinematografica e video. La funzionalità di messaggistica offre capacità di messaggistica in tempo reale per una collaborazione senza interruzioni tra i membri del team.

## Cosa offre la funzionalità Chat di Team?

- **Messaggi in tempo reale** — Conversazioni istantanee per una rapida risoluzione dei problemi
- **Versatilità** — Messaggi vocali, emoji e allegati
- **Chat di gruppo** — Discussioni tra più membri, dipartimenti o gruppi di progetto
- **Integrazione con altri strumenti** — Hub di comunicazione centralizzato a complemento della gestione attività`,
    relatedSlugs: ["file-sharing-media-storage", "add-and-remove-team-members-filmspace", "your-filmspace"],
  },
  {
    id: "tf-12",
    slug: "file-sharing-media-storage",
    title: "Condivisione File e Archiviazione Media",
    category: "tools-and-features",
    content: `## Condivisione File e Archiviazione Media

### Semplifica la gestione e lo scambio dei tuoi file e media

La nostra funzionalità **Drive** offre un repository centralizzato per tutti i documenti e media relativi alla produzione.

## Funzionalità dettagliate

- **Archiviazione centralizzata** — Archivia sceneggiature, storyboard, programmi e documenti importanti in un luogo sicuro
- **Integrazioni seamless** — L'app si integra con Google Drive, Slack e Adobe Suite
- **Controllo versioni** — Traccia le modifiche e mantieni lo storico delle versioni`,
    relatedSlugs: ["team-chats", "documents-section", "your-filmspace"],
  },
  {
    id: "tf-13",
    slug: "budgeting",
    title: "Budgeting",
    category: "tools-and-features",
    content: `## Budgeting

**Come funziona il budgeting nell'app?**

La nostra app offre uno strumento di budgeting automatizzato che semplifica la pianificazione finanziaria per le produzioni cinematografiche e video. Integrando il budgeting direttamente con la scrittura della sceneggiatura, lo spoglio e la pianificazione.

## Cosa significa 'Above' e 'Below the Line'?

- **Costi Above the Line (ATL)** — Costi fissi e iniziali per ruoli creativi e decisionali (sceneggiatori, registi, produttori)
- **Costi Below the Line (BTL)** — Costi variabili di produzione (stipendi troupe, noleggio attrezzature, tariffe location)

L'app ti permette di visualizzare i costi ATL o BTL separatamente o combinati.

## Funzionalità chiave dello strumento di budgeting

- **Menu a sinistra** — Categorie: Above the Line, Below the Line e Vista Budget Combinata
- **Pannello a destra** — Tutte le voci di budget con selezione flessibile della valuta (Euro, Sterlina, Dollaro)
- **Importo totale** visualizzato nell'angolo in alto a destra

## Aggiungere e gestire le voci di budget

Clicca sul pulsante viola, seleziona il tipo, inserisci il nome e premi Invio.

## Esportare il tuo budget

Esporta in formato **PDF** o **Excel (.xls)**.`,
    relatedSlugs: ["department", "script-breakdown", "your-filmspace"],
  },
  {
    id: "tf-14",
    slug: "board-views",
    title: "Viste Board",
    category: "tools-and-features",
    content: `## Viste Board

### Cosa sono i Board?

I board workflow offrono una vista ibrida — un elenco di elementi a sinistra e una vista a colonne a destra. Puoi spostare facilmente todo e schede tra queste due aree.

## Gestione flessibile dei workflow

La vista a colonne è organizzata in colonne verticali che rappresentano le fasi del workflow. Le schede possono essere spostate tra le colonne man mano che progrediscono. Puoi aggiungere, rimuovere e rinominare facilmente queste colonne.

Ad esempio, potresti chiamare le colonne "Pre-produzione" o "Revisione" — o semplicemente "Da fare", "In corso" e "Completato".`,
    relatedSlugs: ["manage-section", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-15",
    slug: "add-and-remove-team-members-filmspace",
    title: "Aggiungere e rimuovere membri del team – Filmspace",
    category: "tools-and-features",
    content: `## Aggiungere e rimuovere membri del team – Filmspace

Invita persone a unirsi al tuo team o aggiungi collaboratori al tuo Filmspace per lavorare insieme ai tuoi progetti creativi.

## Aggiungere membri del team

Vai a **Profilo e Impostazioni** e clicca su **Invita Membri**. Inserisci nome e indirizzo email, aggiungi opzionalmente una nota personale e clicca su **Invia Invito**. Dopo l'accettazione, la persona avrà accesso al tuo Filmspace.

## Rimuovere membri del team

Apri **Impostazioni**. Clicca sull'**icona Altre opzioni (tre punti)** accanto al membro e conferma.

## #BuonoASapersi

Solo i **proprietari del Filmspace** possono aggiungere o rimuovere membri del team.`,
    relatedSlugs: ["roles-permissions-in-pzaz", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-16",
    slug: "roles-permissions-in-pzaz",
    title: "Ruoli e permessi in Pzaz",
    category: "tools-and-features",
    content: `## Ruoli e permessi in Pzaz

### Ruoli e permessi aggiornati

Ogni membro del Filmspace ha un ruolo con permessi specifici. Ci sono cinque ruoli principali:

1. **Proprietario del Filmspace** — Controllo completo sul Filmspace, fatturazione e tutte le impostazioni
2. **Amministratore del Filmspace** — Può condividere attività amministrative
3. **Direzione Creativa** — Focalizzata sulla direzione creativa e le decisioni editoriali
4. **Membro del Team** — Accesso completo al lavoro; può creare il proprio Filmspace
5. **Collaboratore** — Accesso minimo, specifico per attività assegnate, nessun posto a pagamento

## Personalizzare i ruoli

Puoi personalizzare i permessi di tutti i ruoli tranne il proprietario del Filmspace.

I collaboratori sono unici — i loro permessi sono sempre minimi e specifici.

## Posti e accesso

I primi quattro ruoli hanno **posti a pagamento**. I collaboratori non occupano posti a pagamento.

## #BuonoASapersi

Ruoli e permessi sono progettati per promuovere la collaborazione mantenendo confini chiari.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-17",
    slug: "personal-to-dos",
    title: "Todo Personali",
    category: "tools-and-features",
    content: `## Todo Personali

### Qual è la differenza tra una scheda e un todo?

Un **todo** è visibile solo all'utente che lo ha creato. Una **scheda** invece è visibile a tutti i membri del board.

## Cosa sono i todo personali?

Mantieni il controllo sulle tue priorità con i todo personali. Sono elementi privati, visibili solo a te e accessibili dalla posta in arrivo.

## La posta in arrivo — Il tuo strumento potente

Indipendentemente da quanti progetti cinematografici gestisci — tutto è consolidato nella tua posta in arrivo.

Mostra una vista ibrida — un elenco a sinistra e un numero illimitato di colonne a destra. Gli elementi archiviati vengono salvati in un'area archivio dedicata.

## Gestire i todo personali

- Aggiungi note, date di scadenza o allegati a ogni attività
- Dai priorità tramite contrassegno o spostamento tra le fasi
- Converti i todo in schede condivise

## #BuonoASapersi

I tuoi todo sono più che promemoria — sono parte di un set di strumenti ottimizzato per supportare il tuo processo creativo.`,
    relatedSlugs: ["manage-section", "board-views", "card-blocks"],
  },
  {
    id: "tf-18",
    slug: "card-blocks",
    title: "Blocchi Scheda",
    category: "tools-and-features",
    content: `## Blocchi Scheda

### Cosa sono i blocchi?

I blocchi sono componenti modulari che puoi aggiungere o rimuovere dalle schede per adattarle alle tue esigenze. Ogni blocco offre una funzionalità unica — rendendo così le schede adattabili a diverse attività e workflow.

Ad esempio, il blocco descrizione permette di aggiungere informazioni dettagliate, mentre altri come checklist o date di scadenza permettono il tracciamento delle attività e la gestione delle scadenze.

## Perché i blocchi sono importanti

I blocchi offrono flessibilità per l'intero ciclo di vita di un progetto cinematografico. Dall'ideazione all'approvazione finale, mantieni il controllo sulle informazioni di cui hai bisogno — senza complessità inutile.`,
    relatedSlugs: ["card-anatomy", "add-or-remove-blocks", "personal-to-dos"],
  },
  {
    id: "tf-19",
    slug: "your-filmspace",
    title: "Il tuo Filmspace",
    category: "tools-and-features",
    content: `## Il tuo Filmspace

### Cos'è un Filmspace?

Un Filmspace è il tuo workspace centralizzato. Tiene tutto insieme — team, progetti, comunicazione e strumenti di produzione. Ogni Filmspace viene creato e gestito dal suo proprietario.

## Creare un Filmspace

Registrati e crea il tuo primo Filmspace. Sarai classificato come **Proprietario** di questo Filmspace e avrai il pieno controllo su impostazioni e gestione dei membri.

## Invitare i membri del team

Invita i membri e assegna loro ruoli — dall'amministratore al collaboratore. Ogni membro vede solo le aree rilevanti per il suo ruolo.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "roles-permissions-in-pzaz", "manage-section"],
  },
];

export const kbCategoriesIt = [
  {
    id: "getting-started",
    title: "Per Iniziare",
    description: "Tutto ciò che devi sapere per iniziare con Pzaz.",
    icon: "🚀",
  },
  {
    id: "functions",
    title: "Funzioni",
    description: "Scopri le funzioni IA di Pzaz e come usarle.",
    icon: "⚡",
  },
  {
    id: "tools-and-features",
    title: "Strumenti e Funzionalità",
    description: "Guide approfondite su ogni strumento di produzione nel tuo workspace.",
    icon: "🛠️",
  },
] as const;

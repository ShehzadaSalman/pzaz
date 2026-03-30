import { KBArticle } from "./knowledgeBaseData";

export const kbArticlesEs: KBArticle[] = [
  // Primeros Pasos
  {
    id: "gs-1",
    slug: "book-a-personalised-product-demonstration",
    title: "Reservar una Demostración Personalizada del Producto",
    category: "getting-started",
    content: `## Reservar una Demostración Personalizada del Producto

### Estamos aquí para ayudarte a sacar el máximo provecho de nuestra herramienta.

Somos un equipo de amantes del cine y profesionales creativos de la producción cinematográfica. Si hay algo que nos gusta más que las películas, ¡es ayudar a otros cineastas a tener éxito y cumplir sus ambiciones creativas!

Por eso estamos disponibles todos los días para hablar por videollamada si quieres contarnos tus necesidades o aprender más sobre lo que la aplicación tiene para ofrecer.

## ¡Contáctanos hoy!

Para organizar una demostración personalizada y detallada con nosotros, simplemente haz clic en el siguiente enlace de Calendly y sigue las instrucciones: [RESERVAR UNA LLAMADA](https://calendly.com/filmmaking-app/30min)`,
    relatedSlugs: ["writing-your-script-with-pzaz", "getting-started-with-workflows", "pzaz-101"],
  },
  {
    id: "gs-2",
    slug: "writing-your-script-with-pzaz",
    title: "Escribir Tu Guion con Pzaz",
    category: "getting-started",
    content: `## Escribir Tu Guion con Pzaz

### Introducción

Con la herramienta de escritura de guiones, puedes transformar tus ideas en un guion completamente estructurado — ya sea que empieces desde cero o importes un proyecto existente. La herramienta simplifica cada paso, permitiéndote personalizar tu página de título, agregar actos, escenas, personajes, diálogos y transiciones, y construir un flujo narrativo fluido.

## Para Empezar

Comienza tu guion importándolo o creando uno nuevo desde cero. El primer guion que crees será marcado como el **"Guion principal"** — esto significa que solo este guion puede usarse para el desglose de guion, storyboarding, organización de hojas de llamado y para crear automáticamente elementos, equipamiento, equipo y reparto, y objetos de locación en la sección de Producción del menú principal. Todos los demás guiones importados, creados o duplicados se contarán como borradores.

Si tienes múltiples guiones en tu proyecto, el primero de la lista será marcado como "Guion Principal" por defecto.

## Importar/Exportar Guion

Cuando presiones el botón **"Nuevo Guion"**, tendrás 2 opciones — "Comenzar nuevo guion" o "Importar existente". La aplicación soporta importación de .PDF y archivos de Final Draft (.FDX).

Para exportar tu guion, haz clic en el menú de 3 puntos en la esquina superior derecha de la herramienta y presiona la opción **"Exportar Guion"**. Aquí puedes elegir el formato — .FDX o .PDF — e incluir o excluir la página de título.

> Ten en cuenta que si el archivo es grande, puede que necesites esperar unos segundos hasta que el documento esté listo para imprimir.

## Navegación

La navegación es intuitiva gracias a la barra lateral, permitiéndote reorganizar escenas rápidamente, editar diálogos o saltar a secciones específicas usando la función de búsqueda. Cada actualización ocurre en tiempo real.

## El Asistente de IA

¿Necesitas apoyo creativo? El asistente de IA integrado proporciona sugerencias e ideas inteligentes para refinar tu guion, haciendo el proceso de escritura más rápido e intuitivo.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "ai-security-and-privacy-at-pzaz", "getting-started-with-workflows"],
  },
  {
    id: "gs-3",
    slug: "ai-security-and-privacy-at-pzaz",
    title: "IA, Seguridad y Privacidad",
    category: "getting-started",
    content: `## IA, Seguridad y Privacidad

Nos tomamos la seguridad y la privacidad en serio, garantizando que tu trabajo creativo permanezca protegido.

**Nunca usamos tus guiones, notas o datos para el entrenamiento de IA. Tu trabajo es privado y accesible solo para ti y los colaboradores que elijas.**

## Seguridad de Datos

Para mantener tus datos seguros, la aplicación utiliza cifrado de extremo a extremo con **TLS** para datos en tránsito y cifrado **AES-256** para archivos almacenados. Nuestra infraestructura sigue los estándares de seguridad más altos de la industria.

## Controles de Acceso

Proporcionamos controles de acceso estrictos para que puedas gestionar quién ve y edita tu contenido. Tus proyectos permanecen en un espacio de trabajo privado.

## Perspectivas

Estamos ampliando nuestras medidas de seguridad con:

- **Autenticación de dos factores (2FA)** — una capa adicional de protección de inicio de sesión
- **Permisos avanzados de archivos** — control más granular sobre quién puede acceder a qué
- **Compartir enlaces seguros** — control mejorado sobre el contenido compartido

Con nuestra aplicación, puedes concentrarte en tu trabajo creativo sin preocupaciones de seguridad. ¿Tienes preguntas? Contáctanos a través del Chat en Vivo en la sección **OBTENER AYUDA**.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "writing-your-script-with-pzaz", "pzaz-101"],
  },
  {
    id: "gs-4",
    slug: "getting-started-with-workflows",
    title: "Primeros Pasos con los Workflows",
    category: "getting-started",
    content: `## Primeros Pasos con los Workflows

### ¿Qué son los Workflows?

Los workflows representan procesos internos — una serie de pasos repetibles necesarios para lograr un resultado. Un workflow puede ser tan simple como "Por hacer > Haciendo > Hecho" o más complejo, como los pasos de un ciclo de ventas.

Los workflows se visualizan en tableros. Puedes crear tantos tableros como necesites, cada uno representando un proceso diferente (ej: Desarrollo, Marketing, Contratación). Creas un workflow agregando columnas a un tablero. Las tarjetas se arrastran de una columna a otra a medida que avanzan. Este formato se conoce como un **tablero Kanban**.

## Crear Tu Primer Workflow

Al comenzar, un tablero Kanban se cargará con una sola columna, representando el inicio de tu workflow — no puede ser eliminada ni renombrada. Para agregar columnas, haz clic en los tres puntos verticales y selecciona **Agregar Encabezado**.

Por ejemplo, un workflow de marketing de contenido podría incluir: Sin asignar, Priorizado, Redacción, Edición y Publicado.

## Agregar un Workflow Adicional

Solo el propietario del Filmspace puede agregar un nuevo espacio de trabajo. Selecciona la sección **'Gestionar'** en el menú lateral, luego **'+ Nuevo Workflow'**.

## Agregar Elementos de Trabajo

Para crear tarjetas, haz clic en los tres puntos verticales de cualquier columna y selecciona **Agregar Tarjeta**. Cada tarjeta debe tener un título claro y descriptivo. Puedes documentar las tarjetas con:

- Descripciones
- Fechas de vencimiento
- Adjuntos (documentos o enlaces)
- Tareas y subtareas
- Asignación de miembros del equipo`,
    relatedSlugs: ["pzaz-101", "writing-your-script-with-pzaz", "book-a-personalised-product-demonstration"],
  },
  {
    id: "gs-5",
    slug: "pzaz-101",
    title: "El Principio",
    category: "getting-started",
    content: `## El Principio

## Introducción a "El Principio"

Bienvenido a nuestra plataforma, donde la simplicidad se encuentra con el poder. Creemos que las herramientas deben adaptarse a ti — no al revés. Por eso construimos nuestra plataforma sobre el **Principio**, una filosofía UX diseñada para que cualquiera pueda empezar fácilmente, desarrollar sus capacidades, colaborar y desbloquear funciones poderosas a su propio ritmo.

### ¿Qué es el Principio?

El Principio se basa en tres ideas fundamentales:

1. **La plataforma crece contigo:** Es como un lienzo en blanco, listo para cualquier tarea o proyecto. Lo básico viene de forma natural y el dominio se logra de manera intuitiva.
2. **Flexibilidad tipo Lego:** Cada funcionalidad está construida con bloques simples y modulares. Como las piezas de Lego, se ensamblan fácilmente y te permiten construir cualquier cosa.
3. **Apoyo donde importa:** La IA no está para reemplazar tu creatividad sino para inspirarla, estimularla y apoyarla.

## Tu Lienzo: Objetos y Tarjetas

Comienza con un lienzo en blanco donde puedes crear **objetos** para rastrear tareas, proyectos, guiones, archivos, presupuestos y más.

Cada objeto muestra detalles clave (como plazos y prioridades). Ábrelo para acceder a una **tarjeta** — un espacio personalizable para gestionar todos los detalles.

## Bloques: Construir Tu Workflow

Las tarjetas están compuestas de bloques que representan segmentos lógicos de información o funcionalidades.

## Organizar Tu Trabajo

Cada objeto se agrupa en una **categoría**, comenzando con la **Bandeja de entrada** por defecto. Puedes crear tantas categorías como necesites.

Gestiona tu trabajo con:

- **Vista de Lista** — Ideal para ordenar por temas
- **Vista de Tablero** — Seguir el progreso por etapas`,
    relatedSlugs: ["getting-started-with-workflows", "writing-your-script-with-pzaz", "ai-security-and-privacy-at-pzaz"],
  },

  // Funciones
  {
    id: "fn-1",
    slug: "pzaz-security-features",
    title: "Nuestras Funciones de Seguridad: Protegiendo Tus Datos",
    category: "functions",
    content: `## Nuestras Funciones de Seguridad: Protegiendo Tus Datos

Entendemos que la seguridad es una prioridad máxima para nuestros usuarios. Ya sea que estés colaborando en un guion, compartiendo planes de producción o almacenando detalles sensibles de proyecto, tus datos merecen el más alto nivel de protección.

## Cifrado: Protegiendo Tus Datos en Todas Partes

Cada vez que subes o accedes a un archivo, está protegido por cifrado. Durante el tránsito, tus archivos están asegurados con **TLS**. Una vez almacenados en nuestros servidores, tus datos están protegidos con cifrado **AES-256**.

## Controles de Acceso: Simplicidad Gestionada

Permitimos a los administradores otorgar o restringir el acceso al almacenamiento, garantizando que solo los usuarios autorizados puedan utilizar esta funcionalidad. Estamos trabajando para proporcionar un control aún más granular.

## Perspectivas: Mejoras Futuras

- **Autenticación de dos factores (2FA)** — capa adicional de protección de inicio de sesión
- **Controles de acceso mejorados** — permisos a nivel de archivo
- **Opciones avanzadas para compartir enlaces** — protección con contraseña y configuración de expiración

No somos solo una herramienta para cineastas — somos un socio de confianza en tu viaje creativo.`,
    relatedSlugs: ["card-anatomy", "delete-your-account", "get-support"],
  },
  {
    id: "fn-2",
    slug: "card-anatomy",
    title: "Anatomía de una Tarjeta",
    category: "functions",
    content: `## Anatomía de una Tarjeta

### ¿De qué están compuestas las tarjetas?

Con las tarjetas en la herramienta, puedes crear workflows adaptados a las exigencias únicas de la producción cinematográfica. Las tarjetas son la base de esta plataforma — capturan ideas, documentan tareas y ejecutan iniciativas.

## Gestionar Tarjetas

El contenedor de tarjeta muestra información de alto nivel: título, fecha de vencimiento, miembros del equipo asignados, estado del workflow, tamaño de tarea y adjuntos. Hacer clic en una tarjeta abre sus detalles.

Puedes gestionar múltiples tarjetas marcando las casillas de verificación. Mantén **CTRL** y haz clic en una tarjeta para activar la casilla — una vez seleccionadas, puedes filtrar, mover, rechazar o eliminar a través de la barra de herramientas del tablero.

## #BuenoSaberlo

Los bloques de tarjetas ofrecen flexibilidad permitiéndote personalizar las tarjetas para necesidades específicas. Algunos bloques se cargan por defecto y el bloque de descripción no puede ser eliminado.`,
    relatedSlugs: ["add-or-remove-blocks", "pzaz-security-features", "your-pzaz-profile"],
  },
  {
    id: "fn-3",
    slug: "delete-your-account",
    title: "Eliminar Tu Cuenta",
    category: "functions",
    content: `## Eliminar Tu Cuenta

Para eliminar permanentemente tu cuenta, contacta a nuestro equipo a través de la página de **Chat en Vivo** de la aplicación, ubicada en la sección **Obtener Ayuda**. Nuestro equipo procesará tu solicitud y eliminará tu cuenta de nuestra base de datos de forma segura.

Ten en cuenta que estamos legalmente obligados a retener la información financiera, pero todos los demás datos serán eliminados permanentemente — esta acción es irreversible.

Antes de proceder, te animamos a compartir tus preocupaciones o comentarios. Estamos aquí para garantizar que tu experiencia cumpla con tus expectativas.

> **Advertencia:** La eliminación de la cuenta es permanente e irreversible. Todos tus proyectos y datos serán borrados.`,
    relatedSlugs: ["cancelling-or-closing-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-4",
    slug: "cancelling-or-closing-your-account",
    title: "Cancelar o Cerrar Tu Cuenta",
    category: "functions",
    content: `## Cancelar o Cerrar Tu Cuenta

Si deseas cerrar tu cuenta, contacta a nuestro equipo a través de la página de **Chat en Vivo** de la aplicación, ubicada en la sección **Obtener Ayuda**. Te asistiremos en el proceso.

## Antes de Irte

Nos encantaría entender tu experiencia y cómo podemos mejorar. Si algo no funciona para ti, nuestro equipo de soporte está listo para ayudar — no dudes en contactarnos antes de tomar esta decisión.

> **Nota:** Si solo necesitas cancelar una suscripción en lugar de eliminar completamente tu cuenta, nuestro equipo puede asistirte a través del mismo canal de Chat en Vivo.`,
    relatedSlugs: ["delete-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-5",
    slug: "your-pzaz-profile",
    title: "Tu Perfil de Pzaz",
    category: "functions",
    content: `## Tu Perfil de Pzaz

Tu perfil es tu identidad — tómate un momento para personalizarlo. Actualizar tus datos o agregar un avatar creativo asegura que tu cuenta refleje tu estilo.

## Editar Tu Perfil

Para editar tu perfil, haz clic en el icono del menú en la esquina inferior izquierda. Desde ahí puedes:

- **Cambiar tu nombre de usuario** — Cómo aparece tu nombre para los colaboradores
- **Actualizar tu dirección de correo electrónico** — Mantén tus datos de contacto actualizados
- **Restablecer tu contraseña** — Mantén la seguridad de la cuenta
- **Subir una nueva foto de perfil** — Agrega un avatar que te represente`,
    relatedSlugs: ["card-anatomy", "pzaz-security-features", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-6",
    slug: "add-or-remove-blocks",
    title: "Agregar o Eliminar Bloques",
    category: "functions",
    content: `## Agregar o Eliminar Bloques

**Personaliza las Tarjetas para Máxima Flexibilidad**

Puedes personalizar las tarjetas para enriquecer tu workflow de producción agregando o eliminando funcionalidades.

## Cómo Funciona

No todos los bloques son compatibles con cada tipo de tarjeta. Algunos se cargan por defecto, otros deben agregarse manualmente. El título y la descripción no son bloques y por lo tanto no pueden ser eliminados.

Haz clic en el **icono 'Bloques'** en el encabezado de la tarjeta para agregar o eliminar un bloque.

## Puntos Clave

- **Bloques por defecto** se cargan automáticamente al crear una tarjeta
- **Bloques opcionales** pueden agregarse manualmente
- **El título y la descripción** son permanentes y no pueden ser eliminados
- La disponibilidad de bloques varía según el tipo de tarjeta`,
    relatedSlugs: ["card-anatomy", "your-pzaz-profile", "pzaz-security-features"],
  },
  {
    id: "fn-7",
    slug: "leave-feedback",
    title: "Dejar Comentarios",
    category: "functions",
    content: `## Dejar Comentarios

**Ayuda a Dar Forma al Futuro**

¡Nos encantaría escucharte! Comparte tus impresiones — lo que te gusta, lo que podría mejorar y las nuevas funciones que te gustaría ver.

## Cómo Dar Tu Opinión

Tus ideas juegan un papel crucial para ayudarnos a priorizar funciones y refinar la plataforma para servir mejor a la comunidad cinematográfica y creativa.

Comparte tus opiniones a través de la página de **Chat en Vivo** de la aplicación, en la sección **Obtener Ayuda**.

¡Gracias por ayudarnos a crecer!`,
    relatedSlugs: ["get-support", "reporting-a-bug", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-8",
    slug: "helpful-tools-for-capturing-screenshots-and-videos",
    title: "Herramientas Útiles para Capturar Capturas de Pantalla y Videos",
    category: "functions",
    content: `## Herramientas Útiles para Capturar Capturas de Pantalla y Videos

Si usas Google Chrome, recomendamos la extensión **Nimbus Screen Shot and Video Recorder**. Esta herramienta te permite:

- Capturar capturas de pantalla completas o parciales
- Grabar tu pantalla para mostrar el problema
- Editar, anotar y guardar tus capturas o grabaciones

Puedes adjuntar estos archivos a tu mensaje de soporte para una comunicación más precisa y una resolución más rápida.

## Por Qué es Útil

Proporcionar contexto visual — capturas de pantalla o grabaciones de pantalla — acelera enormemente nuestra capacidad para diagnosticar y resolver problemas.

Nuestro equipo se compromete a brindarte la mejor experiencia posible.`,
    relatedSlugs: ["reporting-a-bug", "get-support", "leave-feedback"],
  },
  {
    id: "fn-9",
    slug: "reporting-a-bug",
    title: "Reportar un Error",
    category: "functions",
    content: `## Reportar un Error

Si encuentras un error, proporciona todos los detalles posibles para ayudarnos a diagnosticar y resolver el problema eficientemente.

## Qué Incluir

- **Una descripción detallada** del error
- **Comportamiento esperado vs real** — lo que esperabas vs lo que ocurrió
- **Pasos para reproducir** — los pasos específicos que provocaron el error
- **Tu entorno** — el dispositivo, sistema operativo y navegador
- **Capturas de pantalla o videos** — cualquier captura relevante

## Cómo Reportar

Contacta a nuestro equipo a través de la página de **Chat en Vivo** de la aplicación, en la sección **Obtener Ayuda**.

> Consejo: Usa la extensión de Chrome Nimbus Screen Shot & Video Recorder para capturar y anotar fácilmente.`,
    relatedSlugs: ["helpful-tools-for-capturing-screenshots-and-videos", "get-support", "leave-feedback"],
  },
  {
    id: "fn-10",
    slug: "get-support",
    title: "Obtener Soporte",
    category: "functions",
    content: `## Obtener Soporte

### ¡Estamos Aquí para Ayudarte!

¿Tienes un problema o necesitas orientación? Nuestro equipo está listo para asistirte.

## Cómo Contactarnos

Contacta a nuestro equipo a través de la página de **Chat en Vivo** de la aplicación, en la sección **Obtener Ayuda**. Un miembro del equipo responderá rápidamente.

## Cómo Podemos Ayudarte

- Problemas técnicos y errores
- Consultas de cuenta y facturación
- Orientación sobre funciones
- Comentarios y solicitudes de funciones
- Preguntas generales sobre el producto`,
    relatedSlugs: ["reporting-a-bug", "leave-feedback", "helpful-tools-for-capturing-screenshots-and-videos"],
  },

  // Herramientas y Funcionalidades
  {
    id: "tf-1",
    slug: "script-breakdown",
    title: "Desglose de Guion",
    category: "tools-and-features",
    content: `## Desglose de Guion

## Introducción

Nos complace presentar la función de **Desglose de Guion** — una herramienta poderosa diseñada para ayudarte a preparar y planificar tu producción cinematográfica o televisiva con más detalle que nunca.

Esta función te permite usar tu guion como base para organizar todo lo que necesitarás para la producción — desde utilería y vestuario hasta locaciones y reparto.

## Para Empezar

Primero, crea o sube tu guion. Una vez subido, tu guion será tratado como el **guion maestro** — solo este será analizado para el desglose.

La aplicación generará automáticamente una lista de todas las escenas. Selecciona **Desglose** en el menú de navegación.

## Funcionalidades

- **Generar automáticamente una lista de escenas** a partir del guion maestro
- **Ver metadatos de escena** — presencia de personajes y cobertura
- **Etiquetar elementos esenciales** — reparto, utilería, vehículos, vestuario, acrobacias, efectos especiales, etc.
- **Organizar con resaltados de colores** por categoría
- **Buscar y filtrar elementos etiquetados**
- **Crear o eliminar categorías personalizadas**

## Etiquetar Elementos en Tu Guion

1. Navega a la sección **Desglose** y selecciona la escena
2. En la vista enfocada, resalta la palabra o frase a etiquetar
3. Aparecerá un popup — elige la sección y categoría
4. Haz clic en **Etiquetar** — el elemento se resaltará con un código de color

## ¿Qué Sigue?

Después del etiquetado, todos los elementos relevantes aparecerán automáticamente en sus respectivas secciones de la aplicación.`,
    relatedSlugs: ["scenes", "storyboard", "stripboard"],
  },
  {
    id: "tf-2",
    slug: "documents-section",
    title: "Sección de Documentos",
    category: "tools-and-features",
    content: `## Sección de Documentos

### Introducción

¡Hemos reintroducido la sección de Documentos gracias a los comentarios de nuestros usuarios!

## Para Empezar

La sección de Documentos te permite crear un número ilimitado de libros y páginas. Cada página debe estar contenida dentro de un libro. Haz clic en el campo de texto en la parte superior de la pantalla, ingresa un título y presiona Enter.

## Funcionalidades

- Crea un número ilimitado de páginas en un número ilimitado de libros
- Formatea con encabezados (H1–H6), viñetas, listas numeradas e hipervínculos
- Organiza toda la documentación de tu proyecto en un solo lugar
- Crea cualquier tipo de documento — desde tratamientos hasta procedimientos en el set

Para cualquier asistencia, contacta al equipo de soporte a través del Chat en Vivo.`,
    relatedSlugs: ["your-filmspace", "manage-section", "card-blocks"],
  },
  {
    id: "tf-3",
    slug: "manage-section",
    title: "Sección Gestionar",
    category: "tools-and-features",
    content: `## Sección Gestionar

### Tu Tablero Personal

El tablero personal es tu espacio para ver el trabajo y las tareas que solo te conciernen. Verás dos tipos de elementos:

1. **Todos** — tareas visibles solo para ti.
2. **Tarjetas de workflow** — si eres propietario de una tarjeta de workflow o has sido agregado a ella, también aparecerá aquí.

El tablero se divide en dos secciones — la bandeja de entrada (lista a la izquierda) y las columnas del tablero (a la derecha). Puedes arrastrar y soltar los todos o tarjetas de la lista a las columnas.

Para agregar columnas adicionales, haz clic en el icono **"+"** en la parte superior de cualquier columna.

## Tablero de Workflow

El propietario del Filmspace puede crear tantos tableros de workflow como desee con el botón **"+ Nuevo Workflow"**.

Solo las tarjetas serán visibles en un tablero de workflow, no los todos personales.`,
    relatedSlugs: ["board-views", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-4",
    slug: "shots",
    title: "Planos",
    category: "tools-and-features",
    content: `## Planos

### Planifica y rastrea todos los planos individuales de tu película.

La función de Planos te permite desglosar cada escena en planos de cámara específicos y organizarlos según tu cronograma de rodaje.

## ¿Cómo Puede Ayudarme la Función de Planos?

Como productor, director u otra persona involucrada en una producción, puedes estar seguro de que la función de Planos te permite registrar toda la información relevante — ángulos de cámara, movimientos requeridos, lentes específicos, etc.

Además, la herramienta contiene un **asistente de IA** integrado que puede generar automáticamente imágenes de vista previa para cada uno de tus planos, basándose en las indicaciones que proporciones.

Puedes enviar indicaciones 'positivas' y 'negativas'. La IA puede generar tus imágenes en diferentes estilos — fotográfico, futurista, anime, ¡etc.!`,
    relatedSlugs: ["scenes", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-5",
    slug: "scenes",
    title: "Escenas",
    category: "tools-and-features",
    content: `## Escenas

### Organiza y gestiona la estructura narrativa de tu película; desglosa tu guion en escenas y rastrea su progreso durante la producción.

La función de Escenas te permite dividir tu guion en unidades manejables y rastrear el estado de cada escena a lo largo del proceso de producción.

## ¿Cómo Funciona?

- Al entrar en la sección de Escenas por primera vez, selecciona un guion del menú de la izquierda
- Una vez seleccionado el guion, cada escena generará un panel
- Nuestra herramienta te permite usar el **Asistente de IA** para generar una imagen de vista previa para cada escena
- Tienes gran flexibilidad — puedes generar imágenes en muchos estilos y proporcionar indicaciones muy variadas. ¡También puedes subir tus propias imágenes!`,
    relatedSlugs: ["shots", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-6",
    slug: "storyboard",
    title: "Storyboard",
    category: "tools-and-features",
    content: `## Storyboard

### Organiza y visualiza los momentos clave y planos de tu película

La función de Storyboard te ayuda a planificar visualmente y organizar las escenas clave de tu película — desglosa cada escena en planos individuales y represéntalos con imágenes, dibujos o notas.

## Dónde Encontrarlo

Encontrarás el **Storyboard** en la sección **"Preproducción"** del menú de navegación izquierdo.

## Dos Formas de Crear Tu Storyboard

### 1. Auto-Generación desde el Guion Maestro

Sube tu guion y la aplicación extraerá automáticamente tus escenas. Cada escena se convierte en su propio storyboard — listo para agregar planos, ángulos de cámara y detalles.

### 2. Construir desde Cero

Crea un storyboard personalizado y agrega escenas manualmente — ideal para proyectos experimentales o documentales.

## Agrega Planos Detallados a Cada Escena

- Ubicación y momento de la escena
- Diálogos de los personajes
- Detalles del plano (ángulo, movimiento, tamaño)
- Información de cámara
- Temporización
- Comentarios y notas`,
    relatedSlugs: ["scenes", "shots", "stripboard"],
  },
  {
    id: "tf-7",
    slug: "stripboard",
    title: "Stripboard",
    category: "tools-and-features",
    content: `## Stripboard

### Organiza y agiliza tu cronograma de producción

La función Stripboard está diseñada para ayudarte a gestionar tu cronograma de rodaje. Te permite desglosar tu guion en escenas y organizarlas visualmente para planificar cada día de rodaje.

## ¿Cómo Usar el Stripboard Eficientemente?

Primero crea un guion. Abre la sección Stripboard, selecciona un guion existente del menú izquierdo — verás un desglose claro de cada escena. Luego asigna días de rodaje y recursos.

Puedes:

- Mover escenas cuando cambie el cronograma
- Monitorear la disponibilidad del equipo y locaciones
- Rastrear qué escenas están listas, en progreso o completadas
- Visualizar todo el flujo de producción de principio a fin`,
    relatedSlugs: ["call-sheets", "scenes", "storyboard"],
  },
  {
    id: "tf-8",
    slug: "call-sheets",
    title: "Hojas de Llamado",
    category: "tools-and-features",
    content: `## Hojas de Llamado

### Coordina y comunica la logística de tu rodaje

La función de Hojas de Llamado te permite organizar y distribuir los cronogramas diarios a tu equipo — todos saben dónde estar y cuándo.

## ¿Cómo Usar las Hojas de Llamado?

Comienza planificando los días de rodaje e ingresa los detalles pertinentes:

- Hora de llamado para cada miembro del equipo
- Información de locación
- Requisitos especiales del día

Puedes distribuir las hojas de llamado por correo electrónico directamente desde la plataforma.

La aplicación permite rastrear la disponibilidad del equipo y gestionar los cambios. Las actualizaciones en tiempo real y las notificaciones instantáneas están disponibles.`,
    relatedSlugs: ["stripboard", "department", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-9",
    slug: "department",
    title: "Sección de Producción",
    category: "tools-and-features",
    content: `## Sección de Producción

### Gestiona todos los aspectos de tu proceso de producción en un hub centralizado.

La sección de Producción de la aplicación proporciona herramientas para rastrear todo lo que necesitas para que tu producción funcione sin problemas.

## ¿Qué Contiene esta Sección?

La sección de Producción comprende: **Casting, Equipo, Locaciones, Elementos y Equipamiento**.

## ¿Cómo Puede Ayudarme la Sección de Producción?

Desde la coordinación de tareas entre equipos hasta el seguimiento del estado de los elementos de producción — la función de Producción proporciona todas las herramientas para mantener todo sincronizado.

Puedes agregar toda la información relevante:

- Detalles financieros
- Detalles de la compañía o agencia
- Detalles y direcciones de recogida
- Comentarios ilimitados`,
    relatedSlugs: ["call-sheets", "script-breakdown", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-10",
    slug: "moodboard",
    title: "Moodboard",
    category: "tools-and-features",
    content: `## Moodboard

### Registra tus ideas para el tono y estilo de tu proyecto

La función **Moodboard** permite a los cineastas conceptualizar visualmente y comunicar la estética y el tono de sus proyectos — una herramienta creativa para compilar imágenes, paletas de colores y elementos de diseño.

## ¿Qué Puedes Hacer?

- **Compilación Visual** — Reúne y organiza elementos para crear una representación visual cohesiva
- **Diferentes Tipos de Elementos** — Agrega imágenes, colores específicos (formato RGBA) y fuentes (formato TTF)
- **Edición Colaborativa** — Comparte los moodboards con los miembros del equipo para una dirección visual unificada`,
    relatedSlugs: ["scenes", "storyboard", "documents-section"],
  },
  {
    id: "tf-11",
    slug: "team-chats",
    title: "Chats de Equipo",
    category: "tools-and-features",
    content: `## Chats de Equipo

### Mejora la comunicación de tu proyecto con los Chats de Equipo

La comunicación efectiva es vital en la producción cinematográfica y de video. La función de mensajería ofrece capacidades de mensajería en tiempo real, permitiendo una colaboración fluida entre los miembros del equipo.

## ¿Qué Ofrece la Función de Chat de Equipo?

- **Mensajería en Tiempo Real** — Conversaciones instantáneas para resolver problemas rápidamente
- **Versatilidad** — Mensajes de voz, emojis y adjuntos de archivos
- **Chats de Grupo** — Discusiones entre múltiples miembros, departamentos o grupos de proyecto
- **Integración con Otras Herramientas** — Hub de comunicación centralizado complementario a la gestión de tareas`,
    relatedSlugs: ["file-sharing-media-storage", "add-and-remove-team-members-filmspace", "your-filmspace"],
  },
  {
    id: "tf-12",
    slug: "file-sharing-media-storage",
    title: "Compartir Archivos y Almacenamiento de Medios",
    category: "tools-and-features",
    content: `## Compartir Archivos y Almacenamiento de Medios

### Simplifica la gestión y el intercambio de tus archivos y medios

Nuestra función **Drive** proporciona un repositorio centralizado para todos los documentos y medios relacionados con la producción.

## Funcionalidades Detalladas

- **Almacenamiento Centralizado** — Almacena guiones, storyboards, cronogramas y documentos esenciales en un solo lugar seguro
- **Integraciones Fluidas** — La aplicación se integra con Google Drive, Slack y Adobe Suite
- **Control de Versiones** — Rastrea cambios y mantén el historial de versiones`,
    relatedSlugs: ["team-chats", "documents-section", "your-filmspace"],
  },
  {
    id: "tf-13",
    slug: "budgeting",
    title: "Presupuesto",
    category: "tools-and-features",
    content: `## Presupuesto

**¿Cómo Funciona el Presupuesto en la Aplicación?**

Nuestra aplicación ofrece una herramienta de presupuesto automatizada diseñada para simplificar la planificación financiera de producciones cinematográficas y de video. Al integrar el presupuesto directamente con la escritura de guiones, los desgloses y la planificación.

## ¿Qué Significa 'Por Encima' y 'Por Debajo' de la Línea?

- **Costos Por Encima de la Línea (ATL)** — Costos fijos e iniciales asociados con roles creativos y de toma de decisiones (guionistas, directores, productores)
- **Costos Por Debajo de la Línea (BTL)** — Gastos variables de producción (salarios del equipo, alquiler de equipos, tarifas de locación)

La aplicación te permite ver los costos ATL o BTL por separado o combinados.

## Funciones Clave de la Herramienta de Presupuesto

- **Menú Izquierdo** — Categorías: Por Encima de la Línea, Por Debajo de la Línea y Vista de Presupuesto Combinada
- **Panel Derecho** — Todas las partidas presupuestarias, con selección de moneda flexible (Euros, Libras, Dólares)
- **Monto total** mostrado en la esquina superior derecha

## Agregar y Gestionar Partidas Presupuestarias

Haz clic en el botón morado, selecciona el tipo, ingresa el nombre y presiona Enter.

## Exportar Tu Presupuesto

Exporta en **PDF** o **Excel (.xls)**.`,
    relatedSlugs: ["department", "script-breakdown", "your-filmspace"],
  },
  {
    id: "tf-14",
    slug: "board-views",
    title: "Vistas de Tablero",
    category: "tools-and-features",
    content: `## Vistas de Tablero

### ¿Qué son los Tableros?

Los tableros de workflow ofrecen una vista híbrida — una lista de elementos a la izquierda y una vista en columnas a la derecha. Puedes mover fácilmente los Todos y Tarjetas entre estas dos secciones.

## Gestión Flexible de Workflows

La vista en columnas se organiza en columnas verticales representando las etapas del workflow. Las tarjetas pueden moverse entre columnas a medida que avanzan. Puedes agregar, eliminar y renombrar estas columnas fácilmente.

Por ejemplo, podrías nombrar las columnas "Preproducción" o "Revisión" — o simplemente "Por hacer", "Haciendo" y "Hecho".`,
    relatedSlugs: ["manage-section", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-15",
    slug: "add-and-remove-team-members-filmspace",
    title: "Agregar y Eliminar Miembros del Equipo – Filmspace",
    category: "tools-and-features",
    content: `## Agregar y Eliminar Miembros del Equipo – Filmspace

Invita a personas a unirse a tu equipo o agrega colaboradores a tu Filmspace para colaborar en tus proyectos creativos.

## Agregar Miembros del Equipo

Navega a **Perfil y Configuración** y haz clic en **Invitar Miembros**. Ingresa el nombre y dirección de correo electrónico, opcionalmente agrega una nota personal, y haz clic en **Enviar Invitación**. Una vez aceptada, la persona accederá a tu Filmspace.

## Eliminar Miembros del Equipo

Abre **Configuración**. Haz clic en el **icono de Más Opciones (tres puntos)** junto al miembro y confirma.

## #BuenoSaberlo

Solo los **Propietarios de Filmspace** pueden agregar o eliminar miembros del equipo.`,
    relatedSlugs: ["roles-permissions-in-pzaz", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-16",
    slug: "roles-permissions-in-pzaz",
    title: "Roles y Permisos en Pzaz",
    category: "tools-and-features",
    content: `## Roles y Permisos en Pzaz

### Roles y Permisos Actualizados

Cada miembro de Filmspace tiene un rol con permisos específicos. Hay cinco roles principales:

1. **Propietario del Filmspace** — Control total sobre el Filmspace, facturación y todas las configuraciones
2. **Administrador del Filmspace** — Puede compartir tareas administrativas
3. **Líder Creativo** — Enfocado en la dirección creativa y decisiones editoriales
4. **Miembro del Equipo** — Acceso de trabajo completo; puede crear su propio Filmspace
5. **Colaborador** — Acceso mínimo, específico para tareas asignadas, sin puesto de pago

## Personalizar Roles

Puedes personalizar los permisos de todos los roles excepto el Propietario del Filmspace.

Los Colaboradores son únicos — sus permisos siempre son mínimos y específicos.

## Puestos y Acceso

Los primeros cuatro roles tienen **puestos de pago**. Los Colaboradores no ocupan puestos de pago.

## #BuenoSaberlo

Los roles y permisos están diseñados para fomentar la colaboración manteniendo límites claros.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-17",
    slug: "personal-to-dos",
    title: "Todos Personales",
    category: "tools-and-features",
    content: `## Todos Personales

### ¿Cuál es la Diferencia entre una Tarjeta y un Todo?

Un **todo** solo es visible para el usuario que lo creó. En cambio, una **tarjeta** es visible para todos los miembros del tablero.

## ¿Qué son los Todos Personales?

Mantén el control de tus prioridades con los Todos Personales. Son elementos privados, visibles solo para ti, accesibles a través de la Bandeja de entrada.

## La Bandeja de Entrada — Tu Herramienta Poderosa

Sin importar cuántos proyectos de cine estés gestionando — todo está consolidado en tu Bandeja de entrada.

Muestra una vista híbrida — una lista a la izquierda y tantas columnas como desees a la derecha. Los elementos archivados se almacenan en una sección de Archivo dedicada.

## Gestionar Todos Personales

- Agrega notas, fechas de vencimiento o adjuntos a cada tarea
- Prioriza marcándolos o moviéndolos entre etapas
- Convierte los Todos en tarjetas compartidas

## #BuenoSaberlo

Tus Todos son más que recordatorios — son parte de un conjunto de herramientas optimizado para apoyar tu proceso creativo.`,
    relatedSlugs: ["manage-section", "board-views", "card-blocks"],
  },
  {
    id: "tf-18",
    slug: "card-blocks",
    title: "Bloques de Tarjeta",
    category: "tools-and-features",
    content: `## Bloques de Tarjeta

### ¿Qué son los Bloques?

Los bloques son componentes modulares que puedes agregar o eliminar de las tarjetas para adaptarlas a tus necesidades. Cada bloque proporciona una funcionalidad única — haciendo las tarjetas adaptables a diferentes tareas y workflows.

Por ejemplo, el bloque de descripción permite agregar información detallada, mientras que otros como las checklists o fechas de vencimiento permiten el seguimiento de tareas y la gestión de plazos.

## Por Qué los Bloques son Importantes

Los bloques ayudan a personalizar las tarjetas según las necesidades de tu proyecto:

- Flexibilidad para adaptar las tarjetas a las diferentes etapas de producción
- Mejora de la colaboración con comentarios y adjuntos
- Herramientas e información fácilmente accesibles

Agregar o eliminar bloques es simple a través del panel **'Agregar/Eliminar Bloques'** en el encabezado de la tarjeta.

## #BuenoSaberlo

Algunos bloques se cargan por defecto, otros son opcionales. Excepto el **bloque de Descripción**, todos los bloques pueden ser eliminados — las tarjetas son completamente personalizables.`,
    relatedSlugs: ["card-anatomy", "add-or-remove-blocks", "personal-to-dos"],
  },
  {
    id: "tf-19",
    slug: "your-filmspace",
    title: "Tu Filmspace",
    category: "tools-and-features",
    content: `## Tu Filmspace

### ¿Qué es un Filmspace?

El Filmspace es tu espacio de trabajo todo en uno, diseñado específicamente para cineastas, creadores de video y equipos de producción. Es donde puedes desarrollar y refinar tus ideas, priorizar proyectos, planificar y ejecutar workflows de producción, y fomentar una colaboración fluida dentro de tu equipo.

## Tu Hub Creativo

A diferencia de las herramientas de gestión de proyectos estándar, un Filmspace está construido específicamente para la industria del cine y el video — combinando herramientas de workflow poderosas para agilizar cada etapa del proceso de producción.

- **Un Filmspace** es ideal para proyectos pequeños y medianos
- **Múltiples Filmspaces** son adecuados para equipos grandes que gestionan diferentes proyectos, clientes o visiones creativas

## #BuenoSaberlo

No solo estás rastreando tareas — estás gestionando todo el viaje creativo, desde la preproducción hasta la entrega final.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "roles-permissions-in-pzaz", "manage-section"],
  },
];

export const kbCategoriesEs = [
  {
    id: "getting-started",
    title: "Primeros Pasos",
    description: "Todo lo que necesitas saber para empezar a usar Pzaz.",
    icon: "🚀",
  },
  {
    id: "functions",
    title: "Funciones",
    description: "Aprende sobre las funciones IA de Pzaz y cómo usarlas.",
    icon: "⚡",
  },
  {
    id: "tools-and-features",
    title: "Herramientas y Funcionalidades",
    description: "Guías detalladas de cada herramienta de producción disponible en tu espacio de trabajo.",
    icon: "🛠️",
  },
] as const;

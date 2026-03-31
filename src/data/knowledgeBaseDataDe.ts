import { KBArticle } from "./knowledgeBaseData";

export const kbArticlesDe: KBArticle[] = [
  // Erste Schritte
  {
    id: "gs-1",
    slug: "book-a-personalised-product-demonstration",
    title: "Persönliche Produktdemo buchen",
    category: "getting-started",
    content: `## Persönliche Produktdemo buchen

### Wir helfen dir, das Beste aus unserem Tool herauszuholen.

Wir sind ein Team von Filmliebhabern und kreativen Produktionsprofis. Wenn es etwas gibt, das wir mehr lieben als Filme, dann ist es, anderen Filmemachern beim Erfolg zu helfen und ihre kreativen Ambitionen zu verwirklichen!

Deshalb sind wir jeden Tag für Videogespräche verfügbar, wenn du uns deine Bedürfnisse erläutern oder mehr darüber erfahren möchtest, was die App zu bieten hat.

## Kontaktiere uns noch heute!

Um eine persönliche und ausführliche Demo mit uns zu vereinbaren, klicke einfach auf den folgenden Calendly-Link und folge den Anweisungen: [GESPRÄCH BUCHEN](https://calendly.com/filmmaking-app/30min)`,
    relatedSlugs: ["writing-your-script-with-pzaz", "getting-started-with-workflows", "pzaz-101"],
  },
  {
    id: "gs-2",
    slug: "writing-your-script-with-pzaz",
    title: "Dein Drehbuch mit Pzaz schreiben",
    category: "getting-started",
    content: `## Dein Drehbuch mit Pzaz schreiben

### Einführung

Mit dem Drehbuch-Tool kannst du deine Ideen in ein vollständig strukturiertes Drehbuch verwandeln — egal ob du bei Null anfängst oder ein bestehendes Projekt importierst. Das Tool vereinfacht jeden Schritt und ermöglicht es dir, deine Titelseite anzupassen, Akte, Szenen, Figuren, Dialoge und Übergänge hinzuzufügen und einen fließenden Erzählfluss aufzubauen.

## Loslegen

Beginne dein Drehbuch, indem du es importierst oder ein neues von Grund auf erstellst. Das erste Drehbuch, das du erstellst, wird als **„Hauptdrehbuch"** markiert — das bedeutet, dass nur dieses Drehbuch für die Drehbuchanalyse, Storyboarding, Dispositionslisten-Organisation und die automatische Erstellung von Elementen, Ausrüstung, Team und Besetzung sowie Drehort-Objekten im Produktionsbereich des Hauptmenüs verwendet werden kann. Alle anderen importierten, erstellten oder duplizierten Drehbücher werden als Entwürfe gezählt.

Wenn du mehrere Drehbücher in deinem Projekt hast, wird das erste in der Liste standardmäßig als „Hauptdrehbuch" markiert.

## Drehbuch importieren/exportieren

Wenn du den Button **„Neues Drehbuch"** drückst, hast du 2 Optionen — „Neues Drehbuch beginnen" oder „Bestehendes importieren". Die App unterstützt den Import von .PDF und Final Draft Dateien (.FDX).

Um dein Drehbuch zu exportieren, klicke auf das 3-Punkte-Menü in der oberen rechten Ecke des Tools und drücke die Option **„Drehbuch exportieren"**. Hier kannst du das Format wählen — .FDX oder .PDF — und die Titelseite ein- oder ausschließen.

> Beachte, dass du bei großen Dateien möglicherweise einige Sekunden warten musst, bis das Dokument druckbereit ist.

## Navigation

Die Navigation ist dank der Seitenleiste intuitiv und ermöglicht es dir, Szenen schnell umzuordnen, Dialoge zu bearbeiten oder mit der Suchfunktion zu bestimmten Abschnitten zu springen. Jede Aktualisierung erfolgt in Echtzeit.

## Der KI-Assistent

Brauchst du kreative Unterstützung? Der integrierte KI-Assistent liefert intelligente Vorschläge und Ideen, um dein Drehbuch zu verfeinern und den Schreibprozess schneller und intuitiver zu gestalten.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "ai-security-and-privacy-at-pzaz", "getting-started-with-workflows"],
  },
  {
    id: "gs-3",
    slug: "ai-security-and-privacy-at-pzaz",
    title: "KI, Sicherheit und Datenschutz",
    category: "getting-started",
    content: `## KI, Sicherheit und Datenschutz

Wir nehmen Sicherheit und Datenschutz ernst und stellen sicher, dass deine kreative Arbeit geschützt bleibt.

**Wir verwenden deine Drehbücher, Notizen oder Daten niemals für das KI-Training. Deine Arbeit ist privat und nur für dich und die von dir gewählten Mitarbeiter zugänglich.**

## Datensicherheit

Um deine Daten sicher zu halten, verwendet die App Ende-zu-Ende-Verschlüsselung mit **TLS** für Daten während der Übertragung und **AES-256**-Verschlüsselung für gespeicherte Dateien. Unsere Infrastruktur folgt den höchsten Sicherheitsstandards der Branche.

## Zugriffskontrollen

Wir bieten strenge Zugriffskontrollen, damit du verwalten kannst, wer deine Inhalte sehen und bearbeiten darf. Deine Projekte bleiben in einem privaten Workspace.

## Ausblick

Wir erweitern unsere Sicherheitsmaßnahmen um:

- **Zwei-Faktor-Authentifizierung (2FA)** — eine zusätzliche Schutzebene beim Login
- **Erweiterte Dateiberechtigungen** — feinere Kontrolle darüber, wer auf was zugreifen kann
- **Sicheres Link-Teilen** — verbesserte Kontrolle über geteilte Inhalte

Mit unserer App kannst du dich auf deine kreative Arbeit konzentrieren, ohne dir Sorgen um die Sicherheit machen zu müssen. Fragen? Kontaktiere uns über den Live-Chat im Bereich **HILFE ERHALTEN**.`,
    relatedSlugs: ["book-a-personalised-product-demonstration", "writing-your-script-with-pzaz", "pzaz-101"],
  },
  {
    id: "gs-4",
    slug: "getting-started-with-workflows",
    title: "Erste Schritte mit Workflows",
    category: "getting-started",
    content: `## Erste Schritte mit Workflows

### Was sind Workflows?

Workflows stellen interne Prozesse dar — eine Reihe wiederholbarer Schritte, die nötig sind, um ein Ergebnis zu erzielen. Ein Workflow kann so einfach sein wie „Zu erledigen > In Bearbeitung > Erledigt" oder komplexer, wie die Schritte eines Vertriebszyklus.

Workflows werden auf Boards visualisiert. Du kannst so viele Boards erstellen, wie du benötigst, wobei jedes einen anderen Prozess darstellt (z. B. Entwicklung, Marketing, Besetzung). Du erstellst einen Workflow, indem du einem Board Spalten hinzufügst. Karten werden von einer Spalte zur nächsten gezogen, wenn sie fortschreiten. Dieses Format ist als **Kanban-Board** bekannt.

## Deinen ersten Workflow erstellen

Beim Start wird ein Kanban-Board mit einer einzelnen Spalte geladen, die den Beginn deines Workflows darstellt — sie kann weder gelöscht noch umbenannt werden. Um Spalten hinzuzufügen, klicke auf die drei vertikalen Punkte und wähle **Überschrift hinzufügen**.

Beispielsweise könnte ein Content-Marketing-Workflow umfassen: Nicht zugewiesen, Priorisiert, Entwurf, Bearbeitung und Veröffentlicht.

## Einen zusätzlichen Workflow hinzufügen

Nur der Filmspace-Eigentümer kann einen neuen Workspace hinzufügen. Wähle den Bereich **‚Verwalten'** im Seitenmenü, dann **‚+ Neuer Workflow'**.

## Arbeitselemente hinzufügen

Um Karten zu erstellen, klicke auf die drei vertikalen Punkte einer beliebigen Spalte und wähle **Karte hinzufügen**. Jede Karte sollte einen klaren, beschreibenden Titel haben. Du kannst die Karten dokumentieren mit:

- Beschreibungen
- Fälligkeitsdaten
- Anhängen (Dokumente oder Links)
- Aufgaben und Unteraufgaben
- Zuweisung von Teammitgliedern`,
    relatedSlugs: ["pzaz-101", "writing-your-script-with-pzaz", "book-a-personalised-product-demonstration"],
  },
  {
    id: "gs-5",
    slug: "pzaz-101",
    title: "Das Prinzip",
    category: "getting-started",
    content: `## Das Prinzip

## Einführung in „Das Prinzip"

Willkommen auf unserer Plattform, wo Einfachheit auf Leistung trifft. Wir glauben, dass Werkzeuge sich an dich anpassen sollten — nicht umgekehrt. Deshalb haben wir unsere Plattform auf dem **Prinzip** aufgebaut, einer UX-Philosophie, die es jedem ermöglicht, einfach zu starten, Fähigkeiten zu entwickeln, zusammenzuarbeiten und leistungsstarke Funktionen in eigenem Tempo freizuschalten.

### Was ist das Prinzip?

Das Prinzip basiert auf drei Grundideen:

1. **Die Plattform wächst mit dir:** Sie ist wie eine leere Leinwand, bereit für jede Aufgabe oder jedes Projekt. Die Grundlagen kommen natürlich und die Beherrschung wird intuitiv erlangt.
2. **Lego-Flexibilität:** Jede Funktionalität besteht aus einfachen, modularen Bausteinen. Wie Lego-Steine lassen sie sich leicht zusammensetzen und ermöglichen dir, alles zu bauen.
3. **Unterstützung, wo es zählt:** KI ist nicht dazu da, deine Kreativität zu ersetzen, sondern sie zu inspirieren, anzuregen und zu unterstützen.

## Deine Leinwand: Objekte und Karten

Beginne mit einer leeren Leinwand, auf der du **Objekte** erstellen kannst, um Aufgaben, Projekte, Drehbücher, Dateien, Budgets und mehr zu verfolgen.

Jedes Objekt zeigt wichtige Details an (wie Fristen und Prioritäten). Öffne es, um auf eine **Karte** zuzugreifen — einen anpassbaren Raum zur Verwaltung aller Details.

## Blöcke: Deinen Workflow aufbauen

Karten bestehen aus Blöcken, die logische Informations- oder Funktionssegmente darstellen.

## Deine Arbeit organisieren

Jedes Objekt wird in einer **Kategorie** gruppiert, beginnend mit dem **Posteingang** als Standard. Du kannst so viele Kategorien erstellen, wie du benötigst.

Verwalte deine Arbeit mit:

- **Listenansicht** — Ideal zum Sortieren nach Themen
- **Board-Ansicht** — Fortschritt nach Phasen verfolgen`,
    relatedSlugs: ["getting-started-with-workflows", "writing-your-script-with-pzaz", "ai-security-and-privacy-at-pzaz"],
  },

  // Funktionen
  {
    id: "fn-1",
    slug: "pzaz-security-features",
    title: "Unsere Sicherheitsfunktionen: Schutz deiner Daten",
    category: "functions",
    content: `## Unsere Sicherheitsfunktionen: Schutz deiner Daten

Wir wissen, dass Sicherheit für unsere Nutzer höchste Priorität hat. Ob du an einem Drehbuch zusammenarbeitest, Produktionspläne teilst oder sensible Projektdetails speicherst — deine Daten verdienen das höchste Schutzniveau.

## Verschlüsselung: Schutz deiner Daten überall

Jedes Mal, wenn du eine Datei hochlädst oder darauf zugreifst, ist sie durch Verschlüsselung geschützt. Während der Übertragung sind deine Dateien mit **TLS** gesichert. Einmal auf unseren Servern gespeichert, sind deine Daten mit **AES-256**-Verschlüsselung geschützt.

## Zugriffskontrollen: Einfach verwaltet

Wir ermöglichen Administratoren, den Zugang zum Speicher zu gewähren oder einzuschränken und sicherzustellen, dass nur autorisierte Benutzer diese Funktionalität nutzen können. Wir arbeiten daran, noch feinere Kontrolle zu bieten.

## Ausblick: Zukünftige Verbesserungen

- **Zwei-Faktor-Authentifizierung (2FA)** — zusätzliche Schutzebene beim Login
- **Erweiterte Zugriffskontrollen** — Berechtigungen auf Dateiebene
- **Erweiterte Link-Sharing-Optionen** — Passwortschutz und Ablaufeinstellungen

Wir sind nicht nur ein Tool für Filmemacher — wir sind ein vertrauenswürdiger Partner auf deiner kreativen Reise.`,
    relatedSlugs: ["card-anatomy", "delete-your-account", "get-support"],
  },
  {
    id: "fn-2",
    slug: "card-anatomy",
    title: "Aufbau einer Karte",
    category: "functions",
    content: `## Aufbau einer Karte

### Woraus bestehen Karten?

Mit den Karten im Tool kannst du Workflows erstellen, die den einzigartigen Anforderungen der Filmproduktion angepasst sind. Karten sind das Fundament dieser Plattform — sie erfassen Ideen, dokumentieren Aufgaben und setzen Initiativen um.

## Karten verwalten

Der Karten-Container zeigt übergeordnete Informationen an: Titel, Fälligkeitsdatum, zugewiesene Teammitglieder, Workflow-Status, Aufgabengröße und Anhänge. Ein Klick auf eine Karte öffnet ihre Details.

Du kannst mehrere Karten verwalten, indem du die Kontrollkästchen markierst. Halte **STRG** gedrückt und klicke auf eine Karte, um das Kontrollkästchen zu aktivieren — einmal ausgewählt, kannst du über die Board-Toolbar filtern, verschieben, ablehnen oder löschen.

## #GutZuWissen

Kartenblöcke bieten Flexibilität, indem sie dir ermöglichen, Karten für spezifische Bedürfnisse anzupassen. Einige Blöcke werden standardmäßig geladen und der Beschreibungsblock kann nicht entfernt werden.`,
    relatedSlugs: ["add-or-remove-blocks", "pzaz-security-features", "your-pzaz-profile"],
  },
  {
    id: "fn-3",
    slug: "delete-your-account",
    title: "Dein Konto löschen",
    category: "functions",
    content: `## Dein Konto löschen

Um dein Konto dauerhaft zu löschen, kontaktiere unser Team über die **Live-Chat**-Seite der App im Bereich **Hilfe erhalten**. Unser Team wird deine Anfrage bearbeiten und dein Konto sicher aus unserer Datenbank entfernen.

Bitte beachte, dass wir gesetzlich verpflichtet sind, Finanzinformationen aufzubewahren, aber alle anderen Daten werden dauerhaft gelöscht — diese Aktion ist unwiderruflich.

Bevor du fortfährst, ermutigen wir dich, deine Bedenken oder dein Feedback mit uns zu teilen. Wir sind hier, um sicherzustellen, dass deine Erfahrung deinen Erwartungen entspricht.

> **Warnung:** Die Kontolöschung ist dauerhaft und unwiderruflich. Alle deine Projekte und Daten werden gelöscht.`,
    relatedSlugs: ["cancelling-or-closing-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-4",
    slug: "cancelling-or-closing-your-account",
    title: "Dein Konto kündigen oder schließen",
    category: "functions",
    content: `## Dein Konto kündigen oder schließen

Wenn du dein Konto schließen möchtest, kontaktiere unser Team über die **Live-Chat**-Seite der App im Bereich **Hilfe erhalten**. Wir unterstützen dich bei dem Prozess.

## Bevor du gehst

Wir würden gerne deine Erfahrung verstehen und erfahren, wie wir uns verbessern können. Wenn etwas für dich nicht funktioniert, ist unser Support-Team bereit zu helfen — zögere nicht, uns zu kontaktieren, bevor du diese Entscheidung triffst.

> **Hinweis:** Wenn du nur ein Abonnement kündigen und nicht dein gesamtes Konto löschen möchtest, kann unser Team dich über denselben Live-Chat-Kanal unterstützen.`,
    relatedSlugs: ["delete-your-account", "get-support", "leave-feedback"],
  },
  {
    id: "fn-5",
    slug: "your-pzaz-profile",
    title: "Dein Pzaz-Profil",
    category: "functions",
    content: `## Dein Pzaz-Profil

Dein Profil ist deine Identität — nimm dir einen Moment, um es zu personalisieren. Das Aktualisieren deiner Daten oder das Hinzufügen eines kreativen Avatars stellt sicher, dass dein Konto deinen Stil widerspiegelt.

## Dein Profil bearbeiten

Um dein Profil zu bearbeiten, klicke auf das Menüsymbol in der unteren linken Ecke. Von dort aus kannst du:

- **Deinen Benutzernamen ändern** — Wie dein Name für Mitarbeiter angezeigt wird
- **Deine E-Mail-Adresse aktualisieren** — Halte deine Kontaktdaten auf dem neuesten Stand
- **Dein Passwort zurücksetzen** — Sorge für die Sicherheit deines Kontos
- **Ein neues Profilbild hochladen** — Füge einen Avatar hinzu, der dich repräsentiert`,
    relatedSlugs: ["card-anatomy", "pzaz-security-features", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-6",
    slug: "add-or-remove-blocks",
    title: "Blöcke hinzufügen oder entfernen",
    category: "functions",
    content: `## Blöcke hinzufügen oder entfernen

**Karten für maximale Flexibilität anpassen**

Du kannst Karten anpassen, um deinen Produktions-Workflow zu bereichern, indem du Funktionalitäten hinzufügst oder entfernst.

## So funktioniert es

Nicht alle Blöcke sind mit jedem Kartentyp kompatibel. Einige werden standardmäßig geladen, andere müssen manuell hinzugefügt werden. Titel und Beschreibung sind keine Blöcke und können daher nicht entfernt werden.

Klicke auf das **‚Blöcke'-Symbol** im Kartenkopf, um einen Block hinzuzufügen oder zu entfernen.

## Wichtige Punkte

- **Standardblöcke** werden beim Erstellen einer Karte automatisch geladen
- **Optionale Blöcke** können manuell hinzugefügt werden
- **Titel und Beschreibung** sind dauerhaft und können nicht entfernt werden
- Die Verfügbarkeit von Blöcken variiert je nach Kartentyp`,
    relatedSlugs: ["card-anatomy", "your-pzaz-profile", "pzaz-security-features"],
  },
  {
    id: "fn-7",
    slug: "leave-feedback",
    title: "Feedback geben",
    category: "functions",
    content: `## Feedback geben

**Hilf mit, die Zukunft zu gestalten**

Wir freuen uns auf dein Feedback! Teile deine Eindrücke — was dir gefällt, was verbessert werden könnte und welche neuen Funktionen du dir wünschst.

## So gibst du Feedback

Deine Ideen spielen eine entscheidende Rolle, um uns bei der Priorisierung von Funktionen zu helfen und die Plattform besser auf die Film- und Kreativ-Community auszurichten.

Teile deine Meinung über die **Live-Chat**-Seite der App im Bereich **Hilfe erhalten**.

Danke, dass du uns beim Wachsen hilfst!`,
    relatedSlugs: ["get-support", "reporting-a-bug", "cancelling-or-closing-your-account"],
  },
  {
    id: "fn-8",
    slug: "helpful-tools-for-capturing-screenshots-and-videos",
    title: "Nützliche Tools für Screenshots und Videos",
    category: "functions",
    content: `## Nützliche Tools für Screenshots und Videos

Wenn du Google Chrome verwendest, empfehlen wir die Erweiterung **Nimbus Screen Shot and Video Recorder**. Dieses Tool ermöglicht dir:

- Vollständige oder teilweise Screenshots aufnehmen
- Deinen Bildschirm aufzeichnen, um das Problem zu zeigen
- Deine Aufnahmen bearbeiten, kommentieren und speichern

Du kannst diese Dateien an deine Support-Nachricht anhängen für eine präzisere Kommunikation und schnellere Lösung.

## Warum das hilfreich ist

Visuellen Kontext zu liefern — Screenshots oder Bildschirmaufnahmen — beschleunigt unsere Fähigkeit, Probleme zu diagnostizieren und zu lösen, erheblich.

Unser Team ist bestrebt, dir die bestmögliche Erfahrung zu bieten.`,
    relatedSlugs: ["reporting-a-bug", "get-support", "leave-feedback"],
  },
  {
    id: "fn-9",
    slug: "reporting-a-bug",
    title: "Einen Fehler melden",
    category: "functions",
    content: `## Einen Fehler melden

Wenn du einen Fehler findest, liefere so viele Details wie möglich, um uns bei der effizienten Diagnose und Behebung zu helfen.

## Was du einschließen solltest

- **Eine detaillierte Beschreibung** des Fehlers
- **Erwartetes vs. tatsächliches Verhalten** — was du erwartet hast vs. was passiert ist
- **Schritte zur Reproduktion** — die spezifischen Schritte, die den Fehler ausgelöst haben
- **Deine Umgebung** — Gerät, Betriebssystem und Browser
- **Screenshots oder Videos** — alle relevanten Aufnahmen

## So meldest du einen Fehler

Kontaktiere unser Team über die **Live-Chat**-Seite der App im Bereich **Hilfe erhalten**.

> Tipp: Nutze die Chrome-Erweiterung Nimbus Screen Shot & Video Recorder zum einfachen Aufnehmen und Kommentieren.`,
    relatedSlugs: ["helpful-tools-for-capturing-screenshots-and-videos", "get-support", "leave-feedback"],
  },
  {
    id: "fn-10",
    slug: "get-support",
    title: "Support erhalten",
    category: "functions",
    content: `## Support erhalten

### Wir sind für dich da!

Hast du ein Problem oder brauchst du Orientierung? Unser Team steht bereit, dir zu helfen.

## So kontaktierst du uns

Kontaktiere unser Team über die **Live-Chat**-Seite der App im Bereich **Hilfe erhalten**. Ein Teammitglied wird schnell antworten.

## Wie wir dir helfen können

- Technische Probleme und Fehler
- Konto- und Rechnungsfragen
- Funktionsanleitung
- Feedback und Feature-Wünsche
- Allgemeine Produktfragen`,
    relatedSlugs: ["reporting-a-bug", "leave-feedback", "helpful-tools-for-capturing-screenshots-and-videos"],
  },

  // Werkzeuge und Funktionen
  {
    id: "tf-1",
    slug: "script-breakdown",
    title: "Drehbuchanalyse",
    category: "tools-and-features",
    content: `## Drehbuchanalyse

## Einführung

Wir freuen uns, die **Drehbuchanalyse**-Funktion vorzustellen — ein leistungsstarkes Werkzeug, das dir hilft, deine Film- oder TV-Produktion detaillierter als je zuvor vorzubereiten und zu planen.

Diese Funktion ermöglicht es dir, dein Drehbuch als Grundlage zu nutzen, um alles zu organisieren, was du für die Produktion benötigst — von Requisiten und Kostümen bis hin zu Drehorten und Besetzung.

## Loslegen

Erstelle oder lade zuerst dein Drehbuch hoch. Einmal hochgeladen, wird dein Drehbuch als **Hauptdrehbuch** behandelt — nur dieses wird für die Analyse herangezogen.

Die App generiert automatisch eine Liste aller Szenen. Wähle **Analyse** im Navigationsmenü.

## Funktionen

- **Automatisch eine Szenenliste generieren** aus dem Hauptdrehbuch
- **Szenen-Metadaten anzeigen** — Figurenpräsenz und Abdeckung
- **Wesentliche Elemente markieren** — Besetzung, Requisiten, Fahrzeuge, Kostüme, Stunts, Spezialeffekte usw.
- **Mit farblicher Hervorhebung** nach Kategorie organisieren
- **Markierte Elemente suchen und filtern**
- **Benutzerdefinierte Kategorien erstellen oder löschen**

## Elemente in deinem Drehbuch markieren

1. Navigiere zum Bereich **Analyse** und wähle die Szene
2. Markiere in der fokussierten Ansicht das Wort oder den Satz
3. Ein Popup erscheint — wähle den Bereich und die Kategorie
4. Klicke auf **Markieren** — das Element wird farblich hervorgehoben

## Was kommt als Nächstes?

Nach dem Markieren erscheinen alle relevanten Elemente automatisch in ihren jeweiligen App-Bereichen.`,
    relatedSlugs: ["scenes", "storyboard", "stripboard"],
  },
  {
    id: "tf-2",
    slug: "documents-section",
    title: "Dokumenten-Bereich",
    category: "tools-and-features",
    content: `## Dokumenten-Bereich

### Einführung

Wir haben den Dokumenten-Bereich dank des Feedbacks unserer Nutzer wieder eingeführt!

## Loslegen

Der Dokumenten-Bereich ermöglicht es dir, eine unbegrenzte Anzahl von Büchern und Seiten zu erstellen. Jede Seite muss in einem Buch enthalten sein. Klicke auf das Textfeld oben auf dem Bildschirm, gib einen Titel ein und drücke Enter.

## Funktionen

- Erstelle eine unbegrenzte Anzahl von Seiten in unbegrenzt vielen Büchern
- Formatiere mit Überschriften (H1–H6), Aufzählungszeichen, nummerierten Listen und Hyperlinks
- Organisiere alle Projektdokumente an einem Ort
- Erstelle jede Art von Dokument — von Treatments bis hin zu Set-Verfahren

Für Unterstützung kontaktiere das Support-Team über den Live-Chat.`,
    relatedSlugs: ["your-filmspace", "manage-section", "card-blocks"],
  },
  {
    id: "tf-3",
    slug: "manage-section",
    title: "Verwalten-Bereich",
    category: "tools-and-features",
    content: `## Verwalten-Bereich

### Dein persönliches Dashboard

Das persönliche Dashboard ist dein Bereich, um Arbeit und Aufgaben zu sehen, die nur dich betreffen. Du siehst zwei Arten von Elementen:

1. **Alle** — Aufgaben, die nur für dich sichtbar sind.
2. **Workflow-Karten** — wenn du Eigentümer einer Workflow-Karte bist oder ihr hinzugefügt wurdest, erscheint sie auch hier.

Das Dashboard ist in zwei Bereiche unterteilt — den Posteingang (Liste links) und die Board-Spalten (rechts). Du kannst Todos oder Karten per Drag-and-Drop von der Liste in die Spalten ziehen.

Um zusätzliche Spalten hinzuzufügen, klicke auf das **„+"**-Symbol oben in einer beliebigen Spalte.

## Workflow-Board

Der Filmspace-Eigentümer kann beliebig viele Workflow-Boards mit dem Button **„+ Neuer Workflow"** erstellen.

Nur Karten sind in einem Workflow-Board sichtbar, nicht die persönlichen Todos.`,
    relatedSlugs: ["board-views", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-4",
    slug: "shots",
    title: "Einstellungen",
    category: "tools-and-features",
    content: `## Einstellungen

### Plane und verfolge alle einzelnen Einstellungen deines Films.

Die Einstellungen-Funktion ermöglicht es dir, jede Szene in spezifische Kameraeinstellungen aufzugliedern und sie nach deinem Drehplan zu organisieren.

## Wie kann die Einstellungen-Funktion mir helfen?

Als Produzent, Regisseur oder andere beteiligte Person einer Produktion kannst du sicher sein, dass die Einstellungen-Funktion es dir ermöglicht, alle relevanten Informationen zu erfassen — Kamerawinkel, erforderliche Bewegungen, spezifische Objektive usw.

Zusätzlich enthält das Tool einen integrierten **KI-Assistenten**, der automatisch Vorschaubilder für jede deiner Einstellungen generieren kann, basierend auf den von dir bereitgestellten Beschreibungen.

Du kannst ‚positive' und ‚negative' Beschreibungen eingeben. Die KI kann deine Bilder in verschiedenen Stilen generieren — fotografisch, futuristisch, Anime und mehr!`,
    relatedSlugs: ["scenes", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-5",
    slug: "scenes",
    title: "Szenen",
    category: "tools-and-features",
    content: `## Szenen

### Organisiere und verwalte die Erzählstruktur deines Films; gliedere dein Drehbuch in Szenen und verfolge ihren Fortschritt während der Produktion.

Die Szenen-Funktion ermöglicht es dir, dein Drehbuch in handhabbare Einheiten aufzuteilen und den Status jeder Szene im gesamten Produktionsprozess zu verfolgen.

## Wie funktioniert es?

- Beim ersten Betreten des Szenen-Bereichs wähle ein Drehbuch aus dem linken Menü
- Sobald das Drehbuch ausgewählt ist, wird für jede Szene ein Panel generiert
- Unser Tool ermöglicht es dir, den **KI-Assistenten** zu verwenden, um ein Vorschaubild für jede Szene zu generieren
- Du hast große Flexibilität — du kannst Bilder in vielen Stilen generieren und sehr unterschiedliche Beschreibungen bereitstellen. Du kannst auch eigene Bilder hochladen!`,
    relatedSlugs: ["shots", "storyboard", "script-breakdown"],
  },
  {
    id: "tf-6",
    slug: "storyboard",
    title: "Storyboard",
    category: "tools-and-features",
    content: `## Storyboard

### Organisiere und visualisiere die Schlüsselmomente und Einstellungen deines Films

Die Storyboard-Funktion hilft dir, die Schlüsselszenen deines Films visuell zu planen und zu organisieren — gliedere jede Szene in einzelne Einstellungen und stelle sie mit Bildern, Zeichnungen oder Notizen dar.

## Wo du es findest

Du findest das **Storyboard** im Abschnitt **„Vorproduktion"** des linken Navigationsmenüs.

## Zwei Wege, dein Storyboard zu erstellen

### 1. Automatische Generierung aus dem Hauptdrehbuch

Lade dein Drehbuch hoch und die App extrahiert automatisch deine Szenen. Jede Szene wird zu ihrem eigenen Storyboard — bereit zum Hinzufügen von Einstellungen, Kamerawinkeln und Details.

### 2. Von Grund auf erstellen

Erstelle ein benutzerdefiniertes Storyboard und füge Szenen manuell hinzu — ideal für experimentelle oder dokumentarische Projekte.

## Detaillierte Einstellungen zu jeder Szene hinzufügen

- Schauplatz und Zeitpunkt der Szene
- Figurendialoge
- Einstellungsdetails (Winkel, Bewegung, Größe)
- Kamerainformationen
- Timing
- Kommentare und Notizen`,
    relatedSlugs: ["scenes", "shots", "stripboard"],
  },
  {
    id: "tf-7",
    slug: "stripboard",
    title: "Stripboard",
    category: "tools-and-features",
    content: `## Stripboard

### Organisiere und optimiere deinen Produktionszeitplan

Die Stripboard-Funktion ist dafür konzipiert, dir bei der Verwaltung deines Drehplans zu helfen. Sie ermöglicht es dir, dein Drehbuch in Szenen aufzugliedern und sie visuell zu organisieren, um jeden Drehtag zu planen.

## Wie nutzt du das Stripboard effizient?

Erstelle zuerst ein Drehbuch. Öffne den Stripboard-Bereich und wähle ein bestehendes Drehbuch aus dem linken Menü — du siehst eine klare Aufgliederung jeder Szene. Weise dann Drehtage und Ressourcen zu.

Du kannst:

- Szenen verschieben, wenn sich der Zeitplan ändert
- Die Verfügbarkeit von Crew und Drehorten überwachen
- Verfolgen, welche Szenen fertig, in Bearbeitung oder abgeschlossen sind
- Den gesamten Produktionsablauf von Anfang bis Ende visualisieren`,
    relatedSlugs: ["call-sheets", "scenes", "storyboard"],
  },
  {
    id: "tf-8",
    slug: "call-sheets",
    title: "Dispositionslisten",
    category: "tools-and-features",
    content: `## Dispositionslisten

### Koordiniere und kommuniziere die Logistik deines Drehs

Die Dispositionslisten-Funktion ermöglicht es dir, die Tagespläne für dein Team zu organisieren und zu verteilen — jeder weiß, wo er wann sein muss.

## Wie nutzt du die Dispositionslisten?

Beginne mit der Planung der Drehtage und gib die relevanten Details ein:

- Startzeit für jedes Teammitglied
- Drehort-Informationen
- Besondere Anforderungen des Tages

Du kannst die Dispositionslisten per E-Mail direkt von der Plattform aus verteilen.

Die App ermöglicht es, die Crew-Verfügbarkeit zu verfolgen und Änderungen zu verwalten. Echtzeit-Updates und sofortige Benachrichtigungen sind verfügbar.`,
    relatedSlugs: ["stripboard", "department", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-9",
    slug: "department",
    title: "Produktions-Bereich",
    category: "tools-and-features",
    content: `## Produktions-Bereich

### Verwalte alle Aspekte deines Produktionsprozesses in einem zentralen Hub.

Der Produktions-Bereich der App bietet Werkzeuge, um alles zu verfolgen, was du für einen reibungslosen Produktionsablauf benötigst.

## Was enthält dieser Bereich?

Der Produktions-Bereich umfasst: **Besetzung, Crew, Drehorte, Elemente und Ausrüstung**.

## Wie kann der Produktions-Bereich mir helfen?

Von der Koordination von Aufgaben zwischen Teams bis zur Statusverfolgung von Produktionselementen — die Produktionsfunktion bietet alle Werkzeuge, um alles synchron zu halten.

Du kannst alle relevanten Informationen hinzufügen:

- Finanzdaten
- Firma oder Agentur-Details
- Abhol-Details und Adressen
- Unbegrenzte Kommentare`,
    relatedSlugs: ["call-sheets", "script-breakdown", "roles-permissions-in-pzaz"],
  },
  {
    id: "tf-10",
    slug: "moodboard",
    title: "Moodboard",
    category: "tools-and-features",
    content: `## Moodboard

### Halte deine Ideen für Ton und Stil deines Projekts fest

Die **Moodboard**-Funktion ermöglicht es Filmemachern, die Ästhetik und den Ton ihrer Projekte visuell zu konzipieren und zu kommunizieren — ein kreatives Werkzeug zum Zusammenstellen von Bildern, Farbpaletten und Designelementen.

## Was kannst du tun?

- **Visuelle Zusammenstellung** — Sammle und organisiere Elemente, um eine stimmige visuelle Darstellung zu erstellen
- **Verschiedene Element-Typen** — Füge Bilder, spezifische Farben (RGBA-Format) und Schriftarten (TTF-Format) hinzu
- **Kollaborative Bearbeitung** — Teile Moodboards mit Teammitgliedern für eine einheitliche visuelle Ausrichtung`,
    relatedSlugs: ["scenes", "storyboard", "documents-section"],
  },
  {
    id: "tf-11",
    slug: "team-chats",
    title: "Team-Chats",
    category: "tools-and-features",
    content: `## Team-Chats

### Verbessere die Projektkommunikation mit Team-Chats

Effektive Kommunikation ist in der Film- und Videoproduktion unerlässlich. Die Messaging-Funktion bietet Echtzeit-Nachrichtenfähigkeiten für eine nahtlose Zusammenarbeit zwischen Teammitgliedern.

## Was bietet die Team-Chat-Funktion?

- **Echtzeit-Nachrichten** — Sofortige Gespräche zur schnellen Problemlösung
- **Vielseitigkeit** — Sprachnachrichten, Emojis und Dateianhänge
- **Gruppenchats** — Diskussionen zwischen mehreren Mitgliedern, Abteilungen oder Projektgruppen
- **Integration mit anderen Tools** — Zentraler Kommunikations-Hub als Ergänzung zum Aufgabenmanagement`,
    relatedSlugs: ["file-sharing-media-storage", "add-and-remove-team-members-filmspace", "your-filmspace"],
  },
  {
    id: "tf-12",
    slug: "file-sharing-media-storage",
    title: "Dateifreigabe und Medienspeicher",
    category: "tools-and-features",
    content: `## Dateifreigabe und Medienspeicher

### Vereinfache die Verwaltung und den Austausch deiner Dateien und Medien

Unsere **Drive**-Funktion bietet ein zentrales Repository für alle produktionsbezogenen Dokumente und Medien.

## Detaillierte Funktionen

- **Zentraler Speicher** — Speichere Drehbücher, Storyboards, Zeitpläne und wichtige Dokumente an einem sicheren Ort
- **Nahtlose Integrationen** — Die App integriert sich mit Google Drive, Slack und Adobe Suite
- **Versionskontrolle** — Verfolge Änderungen und behalte den Versionsverlauf`,
    relatedSlugs: ["team-chats", "documents-section", "your-filmspace"],
  },
  {
    id: "tf-13",
    slug: "budgeting",
    title: "Budgetierung",
    category: "tools-and-features",
    content: `## Budgetierung

**Wie funktioniert die Budgetierung in der App?**

Unsere App bietet ein automatisiertes Budgetierungs-Tool, das die Finanzplanung für Film- und Videoproduktionen vereinfacht. Durch die direkte Integration der Budgetierung mit Drehbuchschreiben, Analysen und Planung.

## Was bedeutet ‚Above' und ‚Below the Line'?

- **Kosten Above the Line (ATL)** — Fixe und anfängliche Kosten für kreative und Entscheidungsrollen (Drehbuchautoren, Regisseure, Produzenten)
- **Kosten Below the Line (BTL)** — Variable Produktionskosten (Crew-Gehälter, Ausrüstungsmiete, Drehort-Gebühren)

Die App ermöglicht es dir, ATL- oder BTL-Kosten separat oder kombiniert anzuzeigen.

## Schlüsselfunktionen des Budgetierungs-Tools

- **Linkes Menü** — Kategorien: Above the Line, Below the Line und Kombinierte Budgetansicht
- **Rechtes Panel** — Alle Budgetposten mit flexibler Währungsauswahl (Euro, Pfund, Dollar)
- **Gesamtbetrag** in der oberen rechten Ecke angezeigt

## Budgetposten hinzufügen und verwalten

Klicke auf den lila Button, wähle den Typ, gib den Namen ein und drücke Enter.

## Dein Budget exportieren

Exportiere als **PDF** oder **Excel (.xls)**.`,
    relatedSlugs: ["department", "script-breakdown", "your-filmspace"],
  },
  {
    id: "tf-14",
    slug: "board-views",
    title: "Board-Ansichten",
    category: "tools-and-features",
    content: `## Board-Ansichten

### Was sind Boards?

Workflow-Boards bieten eine hybride Ansicht — eine Elementliste links und eine Spaltenansicht rechts. Du kannst Todos und Karten einfach zwischen diesen beiden Bereichen verschieben.

## Flexible Workflow-Verwaltung

Die Spaltenansicht ist in vertikale Spalten organisiert, die die Workflow-Phasen darstellen. Karten können zwischen Spalten verschoben werden, wenn sie fortschreiten. Du kannst diese Spalten einfach hinzufügen, entfernen und umbenennen.

Beispielsweise könntest du die Spalten „Vorproduktion" oder „Review" nennen — oder einfach „Zu erledigen", „In Bearbeitung" und „Erledigt".`,
    relatedSlugs: ["manage-section", "personal-to-dos", "getting-started-with-workflows"],
  },
  {
    id: "tf-15",
    slug: "add-and-remove-team-members-filmspace",
    title: "Teammitglieder hinzufügen und entfernen – Filmspace",
    category: "tools-and-features",
    content: `## Teammitglieder hinzufügen und entfernen – Filmspace

Lade Personen ein, deinem Team beizutreten, oder füge Mitarbeiter zu deinem Filmspace hinzu, um an deinen kreativen Projekten zusammenzuarbeiten.

## Teammitglieder hinzufügen

Navigiere zu **Profil und Einstellungen** und klicke auf **Mitglieder einladen**. Gib Name und E-Mail-Adresse ein, füge optional eine persönliche Notiz hinzu und klicke auf **Einladung senden**. Nach Annahme hat die Person Zugang zu deinem Filmspace.

## Teammitglieder entfernen

Öffne **Einstellungen**. Klicke auf das **Weitere-Optionen-Symbol (drei Punkte)** neben dem Mitglied und bestätige.

## #GutZuWissen

Nur **Filmspace-Eigentümer** können Teammitglieder hinzufügen oder entfernen.`,
    relatedSlugs: ["roles-permissions-in-pzaz", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-16",
    slug: "roles-permissions-in-pzaz",
    title: "Rollen und Berechtigungen in Pzaz",
    category: "tools-and-features",
    content: `## Rollen und Berechtigungen in Pzaz

### Aktualisierte Rollen und Berechtigungen

Jedes Filmspace-Mitglied hat eine Rolle mit spezifischen Berechtigungen. Es gibt fünf Hauptrollen:

1. **Filmspace-Eigentümer** — Volle Kontrolle über den Filmspace, Abrechnung und alle Einstellungen
2. **Filmspace-Administrator** — Kann administrative Aufgaben teilen
3. **Kreativleitung** — Fokussiert auf kreative Richtung und redaktionelle Entscheidungen
4. **Teammitglied** — Vollständiger Arbeitszugang; kann eigenen Filmspace erstellen
5. **Mitarbeiter** — Minimaler Zugang, spezifisch für zugewiesene Aufgaben, kein bezahlter Platz

## Rollen anpassen

Du kannst die Berechtigungen aller Rollen außer dem Filmspace-Eigentümer anpassen.

Mitarbeiter sind einzigartig — ihre Berechtigungen sind immer minimal und spezifisch.

## Plätze und Zugang

Die ersten vier Rollen haben **bezahlte Plätze**. Mitarbeiter belegen keine bezahlten Plätze.

## #GutZuWissen

Rollen und Berechtigungen sind so gestaltet, dass sie Zusammenarbeit fördern und gleichzeitig klare Grenzen einhalten.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "your-filmspace", "team-chats"],
  },
  {
    id: "tf-17",
    slug: "personal-to-dos",
    title: "Persönliche Todos",
    category: "tools-and-features",
    content: `## Persönliche Todos

### Was ist der Unterschied zwischen einer Karte und einem Todo?

Ein **Todo** ist nur für den Benutzer sichtbar, der es erstellt hat. Eine **Karte** hingegen ist für alle Board-Mitglieder sichtbar.

## Was sind persönliche Todos?

Behalte die Kontrolle über deine Prioritäten mit persönlichen Todos. Sie sind private Elemente, die nur für dich sichtbar und über den Posteingang zugänglich sind.

## Der Posteingang — Dein leistungsstarkes Werkzeug

Egal wie viele Filmprojekte du verwaltest — alles ist in deinem Posteingang konsolidiert.

Er zeigt eine hybride Ansicht — eine Liste links und beliebig viele Spalten rechts. Archivierte Elemente werden in einem dedizierten Archivbereich gespeichert.

## Persönliche Todos verwalten

- Füge Notizen, Fälligkeitsdaten oder Anhänge zu jeder Aufgabe hinzu
- Priorisiere durch Markierung oder Verschieben zwischen Phasen
- Wandle Todos in geteilte Karten um

## #GutZuWissen

Deine Todos sind mehr als Erinnerungen — sie sind Teil eines optimierten Toolsets zur Unterstützung deines kreativen Prozesses.`,
    relatedSlugs: ["manage-section", "board-views", "card-blocks"],
  },
  {
    id: "tf-18",
    slug: "card-blocks",
    title: "Kartenblöcke",
    category: "tools-and-features",
    content: `## Kartenblöcke

### Was sind Blöcke?

Blöcke sind modulare Komponenten, die du zu Karten hinzufügen oder von ihnen entfernen kannst, um sie an deine Bedürfnisse anzupassen. Jeder Block bietet eine einzigartige Funktionalität — dadurch werden Karten an verschiedene Aufgaben und Workflows anpassbar.

Zum Beispiel erlaubt der Beschreibungsblock das Hinzufügen detaillierter Informationen, während andere wie Checklisten oder Fälligkeitsdaten die Aufgabenverfolgung und Fristenverwaltung ermöglichen.

## Warum Blöcke wichtig sind

Blöcke bieten Flexibilität für den gesamten Lebenszyklus eines Filmprojekts. Von der Ideenfindung bis zur Endabnahme behältst du die Kontrolle über genau die Informationen, die du brauchst — ohne unnötige Komplexität.`,
    relatedSlugs: ["card-anatomy", "add-or-remove-blocks", "personal-to-dos"],
  },
  {
    id: "tf-19",
    slug: "your-filmspace",
    title: "Dein Filmspace",
    category: "tools-and-features",
    content: `## Dein Filmspace

### Was ist ein Filmspace?

Ein Filmspace ist dein zentraler Workspace. Er hält alles zusammen — Team, Projekte, Kommunikation und Produktionswerkzeuge. Jeder Filmspace wird von seinem Eigentümer erstellt und verwaltet.

## Filmspace erstellen

Registriere dich und erstelle deinen ersten Filmspace. Du wirst als **Eigentümer** dieses Filmspace eingestuft und hast volle Kontrolle über Einstellungen und Mitgliederverwaltung.

## Teammitglieder einladen

Lade Mitglieder ein und weise ihnen Rollen zu — vom Administrator bis zum Mitarbeiter. Jedes Mitglied sieht nur die Bereiche, die für seine Rolle relevant sind.`,
    relatedSlugs: ["add-and-remove-team-members-filmspace", "roles-permissions-in-pzaz", "manage-section"],
  },
];

import Contact from "./components/Contact/Contact.vue";

export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  defaultlocale: 'en',
  detectBrowserlanguage: true,
  messages: {
    en: {
      softwareDeveloper: 'Software Developer',
      landingPage: {
        subTitle: 'Software Developer',
        article: `As a software developer, I would like to depict my work on my portfolio
              website, which also serves as a platform for my business. While I am passionate about creating innovative
              solutions. My portfolio website features a diverse range of projects that demonstrate my skills and
              expertise. I understand that software development is a rapidly evolving field, and I am committed to
              staying up-to-date with the latest technologies and best practices. Whether you're looking for a reliable
              software developer or a trusted business partner, I invite you to explore my portfolio website and see how
              I can contribute to your success. I am grateful for the opportunities I have had and look forward to
              continuing to grow and deliver high-quality software solutions`,
        downloadCV: `Download CV`
      },
      slide: {
        language: 'Language',
      },
      features: {
        offer1: {
          title: 'Component',
          item1: 'I will create or modify components',
          item2: 'Time of delivery largery depends on the complexity of the task and amount of components',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: '30',
          priceInfo: "per component"
        },
        offer2: {
          title: 'Website',
          item1: 'I will create or modify a website, including design',
          item2: 'Time of delivery largery depends on the complexity of the task',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: 'From 100',
        },
        offer3: {
          title: 'Store',
          item1: 'I will create store, including design',
          item2: 'Time of delivery largery depends on the complexity of the task',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: 'From 500',
        },
        currency: 'zł',
      },
      projects: {
        title: 'Projects',
        article: `Here are some of my projects. I have been working on a variety of
          projects to enhance my skills and contribute to the tech community. Each project has allowed me to explore
          different technologies, improve my problem-solving abilities, and collaborate with other developers. I will
          continue expanding my project list with innovative ideas and impactful solutions.`,
        button: 'Details',
        project1: {
          title: 'Clonebook',
          description: `Implementation of Social Network inspired by Facebook. Users' passwords are encrypted. Accounts are authorized by tokens. Current functionalities are: creating accounts, writing and liking posts and comments, searching other user profiles, adding, accepting, and removing friends from the friends list, and using chat.`,
        },
        project2: {
          title: 'Chat App',
          description: 'An application that enables users to chat chatrooms. Upon creating a new account, users can create a new chatroom or join an existing one. If the chatroom is owned by the user, it is possible also to edit it or delete it.',
        },
        project3: {
          title: 'Lights out',
          description: 'An implementation of the electronic game in which player must toggle adjacent lights until all of them switched off',
        },
        project4: {
          title: 'HealthBlockchain',
          description: 'Implementation for supporting healthcare by enhancing the protection of personal and sensitive patient data. Application supports daily doctor visits by providing functionality of adding new physical examinations and prescriptions, and checking them. Data is stored by using blockchain framework Hyperledger Fabric.',
        },
        project5: {
          title: `Statistician's Blog`,
          description: `An application that enables users to chat chatrooms. Upon creating a new account, users can create a new chatroom or join an existing one. If the chatroom is owned by the user, it is possible also to edit it or delete it.`,
        },
        project6: {
          title: `Blog template`,
          description: 'A template for a dietician featuring ability to add posts and showcasing available visits.',
        }
      },
      skills: {
        title: 'Skills',
        article: `As a programmer, I have developed a wide range of skills in software
        development. From problem-solving to collaboration, I have honed my abilities in various programming languages
        and frameworks. I am proficient in languages such as JavaScript, Python, and C#, and have experience with
        popular frontend frameworks like React and Vue.js. My programming skills include writing clean, efficient
        code, working effectively with version control systems, and collaborating with team members to deliver
        high-quality software solutions. While I take pride in my technical expertise, I also recognize the importance
        of continuous learning and staying up-to-date with the latest trends and best practices in the field. I am
        committed to staying adaptable and continuously improving my skills to meet the evolving needs of technology.`
      },
      contact: {
        title: 'Contact',
        contentEmail: 'Enter your email',
        contentPlaceholder: 'Enter your message',
        errorMessages: {
          tooShort: "Too short",
          tooLong: "Too long",
          required: "Required",
          invalidEmail: "Invalid email",
        },
        templates: {
          template1: "Hello, my name is XYZ and I would like to hire you. I am interested in working with you. I am looking for an entry level position. Thank you in advance.",
          template2: "Hello, my name is XYZ2 and I would like to hire you. I am interested in working with you. I am looking for an entry level position. Thank you in advance.",
          template3: "Hello, my name is XYZ3 and I would like to hire you. I am interested in working with you. I am looking for an entry level position. Thank you in advance."
        },
        submitButton: {
          send: 'Send',
          sent: "Sent",
        } 
      }
    },
    pl: {
      softwareDeveloper: 'Programista',
      landingPage: {
        subTitle: 'Programista',
        article: `Jako programista, chciałbym przedstawić swoją pracę na mojej stronie portfolio.
              która służy również jako platforma dla mojej firmy. Jestem pasjonatem tworzenia innowacyjnych
              rozwiązań. Moje portfolio zawiera różnorodne projekty, które demonstrują moje umiejętności i wiedzę.
              umiejętności i wiedzę. Rozumiem, że tworzenie oprogramowania to szybko rozwijająca się dziedzina i jestem zaangażowany w bycie na bieżąco z najnowszymi technologiami i najlepszymi praktykami.
              być na bieżąco z najnowszymi technologiami i najlepszymi praktykami. Niezależnie od tego, czy szukasz niezawodnego
              programisty lub zaufanego partnera biznesowego, zapraszam do zapoznania się z moim portfolio i sprawdzenia, w jaki sposób mogę przyczynić się do Twojego sukcesu.
              mogę przyczynić się do Twojego sukcesu. Jestem wdzięczny za możliwości, które miałem i nie mogę się doczekać
              dalszego rozwoju i dostarczania wysokiej jakości rozwiązań programistycznych.`,
        downloadCV: `Pobierz CV`
      },
      slide: {
        language: 'Język',
      },
      features: {
        offer1: {
          title: 'Komponent',
          item1: 'Stworze lub zmodyfikuję dla Ciebie komponenty Twojej strony',
          item2: 'Czas pracy jest zależny od zlożoności zadania i liczby komponentów',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: '120',
          priceInfo: "za komponent"
        },
        offer2: {
          title: 'Strona',
          item1: 'Stworzę lub zmodyfikuję stronę, wraz z projektem strony',
          item2: 'Time of delivery largery depends on the complexity of the task',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: 'od 400',
        },
        offer3: {
          title: 'Sklep',
          item1: 'Stworzę sklep od zera, wraz z projektem sklepu',
          item2: 'Time of delivery largery depends on the complexity of the task',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: 'od 1500',
        },
        currency: 'zł',
      },
      projects: {
        title: 'Projekty',
        article: `Oto niektóre z moich projektów. Pracowałem nad różnymi projektami, aby zwiększyć swoje umiejętności. Każdy projekt pozwolił mi poznać różne technologie oraz poprawić moje umiejętności rozwiązywania problemów programistycznych. Będę nadal poszerzać listę moich projektów.`,
        button: 'Details',
        project1: {
          title: 'Clonebook',
          description: `Wdrożenie sieci społecznościowej inspirowanej Facebookiem. Hasła użytkowników są szyfrowane. Autoryzacja kont odbywa się za pomocą tokenów. Obecne funkcje to: tworzenie kont, pisanie i polubienie postów i komentarzy, wyszukiwanie profili innych użytkowników, dodawanie, akceptowanie i usuwanie znajomych z listy znajomych oraz korzystanie z czatu.`,
        },
        project2: {
          title: 'Chat App',
          description: 'Aplikacja umożliwiająca użytkownikom czatowanie w pokojach rozmów. Po utworzeniu nowego konta użytkownicy mogą utworzyć nowy pokój rozmów lub dołączyć do już istniejącego. Jeśli chatroom jest własnością użytkownika, możliwa jest również jego edycja lub usunięcie.',
        },
        project3: {
          title: 'Lights out',
          description: 'Implementacja gry elektronicznej, w której gracz musi przełączać sąsiednie światła, aż wszystkie zgasną.',
        },
        project4: {
          title: 'HealthBlockchain',
          description: 'Wdrożenie wspierające opiekę zdrowotną poprzez zwiększenie ochrony osobistych i wrażliwych danych pacjentów. Aplikacja obsługuje codzienne wizyty lekarskie, zapewniając funkcjonalność dodawania nowych badań fizycznych i recept oraz ich sprawdzania. Dane są przechowywane przy użyciu frameworka blockchain Hyperledger Fabric.',
        },
        project5: {
          title: `Blog statystyka`,
          description: `Aplikacja umożliwiająca użytkownikom czatowanie w pokojach rozmów. Po utworzeniu nowego konta użytkownicy mogą utworzyć nowy pokój rozmów lub dołączyć do już istniejącego. Jeśli chatroom jest własnością użytkownika, możliwa jest również jego edycja lub usunięcie.`,
        },
        project6: {
          title: `Szablon bloga`,
          description: 'Szablon dla dietetyka z możliwością dodawania postów i prezentowania dostępnych wizyt.',
        }
      },
      skills: {
        title: 'Umiejętności',
        article: `Jako programista rozwinąłem szeroki zakres umiejętności w tworzeniu oprogramowania.
        rozwoju oprogramowania. Od rozwiązywania problemów po współpracę, doskonaliłem swoje umiejętności w różnych językach programowania i frameworkach.
        i frameworkach. Jestem biegły w językach takich jak JavaScript, Python i C#, a także mam doświadczenie z
        popularnych frameworkach frontendowych, takich jak React i Vue.js. Moje umiejętności programistyczne obejmują pisanie czystego, wydajnego
        kodu, efektywną pracę z systemami kontroli wersji i współpracę z członkami zespołu w celu dostarczenia
        wysokiej jakości rozwiązań programistycznych. Chociaż jestem dumny ze swojej wiedzy technicznej, zdaję sobie również sprawę ze znaczenia
        ciągłego uczenia się i bycia na bieżąco z najnowszymi trendami i najlepszymi praktykami w tej dziedzinie. Jestem
        Zobowiązuję się do pozostania elastycznym i ciągłego doskonalenia swoich umiejętności, aby sprostać zmieniającym się potrzebom technologii.`
      },
      contact: {
        title: 'Kontakt',
        emailPlaceholder: 'Podaj swój e-mail',
        contentPlaceholder: 'Wpisz swoją wiadomość',
        errorMessages: {
          tooShort: "Zbyt krótki",
          tooLong: "Za długi",
          required: "Wymagane",
          invalidEmail: "Invalid email",
        },
        templates: {
          template1: "Witam, nazywam się XYZ i chciałbym Cię zatrudnić. Jestem zainteresowany współpracą. Szukam stanowiska na poziomie podstawowym. Z góry dziękuję.",
          template2: "Witam, nazywam się XYZ2 i chciałbym Pana/Panią zatrudnić. Jestem zainteresowany współpracą. Szukam stanowiska na poziomie podstawowym. Z góry dziękuję.",
          template3: "Witam, nazywam się XYZ3 i chciałbym Pana/Panią zatrudnić. Jestem zainteresowany współpracą. Szukam stanowiska na poziomie podstawowym. Z góry dziękuję."
        },
        submitButton: {
          send: 'Wyślij',
          sent: "Wysłane",
        } 
      },
    },
    it: {
      softwareDeveloper: 'Programmatore',
      landingPage: {
        subTitle: 'Programmatore',
        article: `In qualità di sviluppatore di software, desidero presentare il mio lavoro sul mio sito web
              che funge anche da piattaforma per la mia attività. Sono appassionato di creazione di soluzioni innovative.
              soluzioni innovative. Il mio sito web presenta una serie di progetti che dimostrano le mie capacità e competenze.
              competenze. So che lo sviluppo di software è un campo in rapida evoluzione e mi impegno a rimanere aggiornato con le ultime tecnologie e le migliori pratiche.
              a rimanere aggiornato sulle ultime tecnologie e sulle migliori pratiche. Se siete alla ricerca di uno sviluppatore
              sviluppatore di software affidabile o di un partner commerciale fidato, vi invito a esplorare il mio sito web e a vedere come posso contribuire al vostro successo.
              come posso contribuire al vostro successo. Sono grato per le opportunità che ho avuto e non vedo l'ora di
              continuare a crescere e a fornire soluzioni software di alta qualità`,
        downloadCV: `Scarica CV`
      },
      slide: {
        language: 'Lingua',
      },
      features: {
        offer1: {
          title: 'Componento',
          item1: 'Creerò o modificherò i componenti.',
          item2: 'Il tempo di consegna dipende in larga misura dalla complessità del compito e dalla quantità di componenti.',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: '30',
          priceInfo: "per component"
        },
        offer2: {
          title: 'Website',
          item1: 'Creerò il sito web, incluso il design.',
          item2: 'Il tempo di consegna dipende in larga misura dalla complessità del compito e dalla quantità di componenti.',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: 'Da 100',
        },
        offer3: {
          title: 'Negozio',
          item1: 'Creerò il negozio, incluso il design.',
          item2: 'Il tempo di consegna dipende in larga misura dalla complessità del compito e dalla quantità di componenti.',
          item3: 'item3',
          item4: 'item4',
          item5: 'item5',
          price: 'Da 500',
        },
        currency: 'EUR',
      },
      projects: {
        title: 'Progetti',
        article: `Ecco alcuni dei miei progetti. Ho lavorato a una serie di
          progetti per migliorare le mie competenze e contribuire alla comunità tecnologica. Ogni progetto mi ha permesso di esplorare
          tecnologie diverse, migliorare le mie capacità di risoluzione dei problemi e collaborare con altri sviluppatori. Continuerò a continuerò ad ampliare la mia lista di progetti con idee innovative e soluzioni d'impatto.`,
        button: 'Details',
        project1: {
          title: 'Clonebook',
          description: `Implementazione di una rete sociale ispirata a Facebook. Le password degli utenti sono criptate. Gli account sono autorizzati da token. Le funzionalità attuali sono: creazione di account, scrittura e apprezzamento di post e commenti, ricerca di altri profili utente, aggiunta, accettazione e rimozione di amici dalla lista degli amici e utilizzo della chat.`,
        },
        project2: {
          title: 'Chat App',
          description: `Un'applicazione che consente agli utenti di chattare in chat. Dopo aver creato un nuovo account, gli utenti possono creare una nuova chatroom o unirsi a una esistente. Se la chatroom è di proprietà dell'utente, è possibile anche modificarla o eliminarla.`,
        },
        project3: {
          title: 'Lights out',
          description: `Un'implementazione del gioco elettronico in cui il giocatore deve attivare le luci adiacenti finché non si spengono tutte.`,
        },
        project4: {
          title: 'HealthBlockchain',
          description: 'Implementation for supporting healthcare by enhancing the protection of personal and sensitive patient data. Application supports daily doctor visits by providing functionality of adding new physical examinations and prescriptions, and checking them. Data is stored by using blockchain framework Hyperledger Fabric.',
        },
        project5: {
          title: `Blog dello statistico`,
          description: `Implementazione per supportare l'assistenza sanitaria migliorando la protezione dei dati personali e sensibili dei pazienti. L'applicazione supporta le visite mediche quotidiane fornendo la funzionalità di aggiungere nuovi esami fisici e prescrizioni e di controllarli. I dati sono memorizzati utilizzando il framework blockchain Hyperledger Fabric.`,
        },
        project6: {
          title: `Modello dell blog`,
          description: 'Un modello per un dietologo con la possibilità di aggiungere post e di mostrare le visite disponibili.',
        }
      },
      skills: {
        title: 'Competenze',
        article: `Come programmatore, ho sviluppato un'ampia gamma di competenze nello sviluppo di software.
        sviluppo di software. Dalla risoluzione dei problemi alla collaborazione, ho affinato le mie capacità in diversi linguaggi di programmazione e framework.
        e framework. Sono esperto in linguaggi come JavaScript, Python e C# e ho esperienza con i più diffusi framework di frontend come React e V#.
        con i più diffusi framework di frontend come React e Vue.js. Le mie competenze di programmazione includono la scrittura di codice
        codice, lavorare efficacemente con i sistemi di controllo delle versioni e collaborare con i membri del team per fornire soluzioni software di alta qualità.
        soluzioni software di alta qualità. Se da un lato sono orgoglioso delle mie competenze tecniche, dall'altro riconosco l'importanza
        dell'apprendimento continuo e di rimanere aggiornato sulle ultime tendenze e sulle migliori pratiche del settore. Sono
        sono impegnata a rimanere adattabile e a migliorare continuamente le mie competenze per soddisfare le esigenze in evoluzione della tecnologia.`
      },
      contact: {
        title: 'Contatto',
        emailPlaceholder: `Inserire l'e-mail`,
        contentPlaceholder: 'Scrivere i contenuti',
         errorMessages: {
          tooShort: "Troppo corto",
          tooLong: "Troppo lungo",
          required: "Richiesto",
          invalidEmail: "Email non valida",
        },
        templates: {
          template1: "Salve, mi chiamo XYZ e vorrei assumerla. Sono interessato a lavorare con lei. Sto cercando una posizione entry level. Grazie in anticipo",
          template2: "Salve, mi chiamo XYZ2 e vorrei assumerla. Sono interessato a lavorare con lei. Sono alla ricerca di una posizione entry level. Grazie in anticipo",
          template3: "Salve, mi chiamo XYZ3 e vorrei assumerla. Sono interessato a lavorare con lei. Sto cercando una posizione entry level. Grazie in anticipo",
        },
        submitButton: {
          send: 'Invia',
          inviato: "Inviato",
        } 
      },
    }
  }
}))
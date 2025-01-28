const texts = [
    {
        type:'hero',
        title:'Paweł Worzała',
        content: [
            {
                type:'text',
                text: 'Jestem doświadczonym programistą specjalizującym się w PHP i JavaScript, z ponad 5-letnim doświadczeniem w tworzeniu złożonych aplikacji i skryptów. Moja wiedza obejmuje głębokie zrozumienie programowania obiektowego, co pozwala mi na projektowanie i implementację skalowalnych oraz wydajnych rozwiązań. Posiadam zaawansowane umiejętności w zakresie projektowania i zarządzania bazami danych, co umożliwia efektywne przechowywanie, przetwarzanie i analizę danych.'
            },
            {
                type:'text',
                text: 'Aktywnie korzystam z nowoczesnych narzędzi AI, które wspomagają mnie w codziennej pracy programistycznej. Wykorzystuję AI do optymalizacji fragmentów kodu, przetwarzania danych oraz konwersji tekstu na tabelki i odwrotnie. Ponadto, AI wspiera mnie w realizacji złożonych zadań w aplikacjach, co znacząco podnosi efektywność mojej pracy i jakość dostarczanych rozwiązań'
            }
        ]
    },
    {
        type:'heading',
        title:'Moje umiejętności',
        subtitle:'Znajomość języków i środowisk',
    },
    {
        type:'block',
        title:'JavaScript',
        content: [
            {
                type:'text',
                text: 'Posiadam zaawansowane umiejętności programowania w JavaScript zarówno na froncie, jak i na backendzie. Na froncie pracuję z bibliotekami takimi jak jQuery oraz frameworkami AngularJS i React, tworząc dynamiczne, interaktywne i responsywne interfejsy użytkownika, stosując zasady programowania obiektowego dla modularności i łatwości utrzymania kodu. Na backendzie mam doświadczenie z Node.js, używając standardowych bibliotek i popularnych rozszerzeń jak Express do tworzenia RESTful API oraz bibliotek http i https do obsługi protokołów sieciowych. Wykorzystuję wyrażenia regularne (RegExp) do przetwarzania i manipulacji tekstem, a także biegłość przetwarzania danych w formacie JSON, co umożliwia efektywne zarządzanie strukturami danych w aplikacjach webowych. Te umiejętności pozwalają mi na tworzenie kompleksowych rozwiązań programistycznych, które spełniają wysokie standardy jakości i efektywności.'
            }
        ]
    },
    {
        type:'block',
        title:'PHP',
        content: [
            {
                type:'text',
                text: 'Posiadam solidne umiejętności programowania w PHP, w tym zaawansowaną znajomość wzorca architektury MVC oraz implementacji endpointów REST. Przez ponad trzy lata zdobywałem doświadczenie w tworzeniu aplikacji webowych, zarówno kompleksowych, jak i ich poszczególnych modułów. Potrafię od podstaw zaprojektować i zaimplementować całą strukturę aplikacji webowej, dbając o jej skalowalność, wydajność i czytelność kodu. Moje projekty są zawsze dobrze udokumentowane, co ułatwia ich dalszy rozwój i utrzymanie.'
            },
            {
                type:'text',
                text:'W mojej pracy regularnie korzystam z bazy danych MariaDB, integrując ją z aplikacjami PHP. Mam doświadczenie w zarządzaniu bazami danych, optymalizacji zapytań SQL oraz zapewnianiu bezpieczeństwa danych. Dzięki temu moje aplikacje są nie tylko funkcjonalne, ale również niezawodne i zabezpieczone przed potencjalnymi zagrożeniami.'
            }
        ]
    },
    {
        type:'block',
        title:'AI',
        content: [
            {
                type:'text',
                text: 'Posiadam umiejętność wykorzystania technologii AI przy tworzeniu oprogramowania i stron internetowych, zwłaszcza w zakresie obróbki tekstu i przetwarzania danych. Potrafię przekształcać tekst na tabele i odwrotnie, a także dalej przetwarzać te tabele w celach analitycznych lub prezentacyjnych. AI wykorzystuję do generowania opisów produktów dla sklepów internetowych oraz do zbierania i przetwarzania danych z internetu, co umożliwia ich dalsze wykorzystanie w różnorodnych aplikacjach. Moje umiejętności w zakresie AI przyczyniają się do automatyzacji procesów, podnoszenia efektywności pracy i poprawy jakości dostarczanych rozwiązań.'
            }
        ]
    },
    {
        type:'heading',
        title:'Moje projekty',
        subtitle:'Przykładowe projekty które kodowałem dla siebie',
    },
    {
        type:'block',
        title:'RED',
        content: [
            {
                type:'text',
                text: 'RED jest autorskim frameworkiem do tworzenia stron w JS. Posiada on modułową  budowę i pozwala na połączenie widoków HTML z obiektami w JavaScript. Dodatkowo router przechwytuje kliknięcia w linki i odpowiednio modyfikuje stronę. Cały kod na koniec jest scalany i minifikowany. RED jest moim frameworkiem do tworzenia stron od podstaw z wykorzystamiem REST API tworzonego w PHP lub NodeJS.'
            }
        ]
    },
    {
        type:'block',
        title:'BlackThung',
        content: [
            {
                type:'text',
                text: 'Jest to moje autoskie rozwiązanie które przetwarza kod w TS do kodu w ASM. Pozwala to na łatwe programowanie aplikacji desktopowych dla systemu Windows. Zaimplementowane mam część składni TypeScript – ale jest już na tyle dużo że z łatwością można kodować. Posiadam zaimplementowane importy i eksporty jak i obiekty – poza standardową składnia kodu.'
            }
        ]
    },
]

module.exports = texts
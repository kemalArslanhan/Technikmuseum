const europeCountries = [
    { 
      name: "Germany", 
      museums: [
        { name: "Deutsches Museum", url: "https://www.deutsches-museum.de/en/" },
        { name: "German Museum of Technology (Berlin)", url: "https://technikmuseum.berlin/" },
        { name: "Hermann Oberth Space Travel Museum", url: "http://www.oberth-museum.org/" },
        { name: "Mathematikum", url: "https://www.mathematikum.de/" },
        { name: "Museum für Kommunikation", url: "https://www.mfk-frankfurt.de/" },
        { name: "Phaeno Science Center", url: "https://www.phaeno.de/" },
        { name: "Technikmuseum Speyer", url: "https://speyer.technik-museum.de/en" },
        { name: "TECHNOSEUM", url: "https://www.technoseum.de/en/" },
        { name: "Spectrum – German Museum of Technology (Berlin)", url: "https://sdtb.de/spectrum/home/" },
        { name: "Universum Science Center", url: "https://universum-bremen.de/en/" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "France", 
      museums: [
        { name: "Cité de l'espace", url: "https://www.cite-espace.com/" },
        { name: "Cité des Sciences et de l'Industrie", url: "http://www.cite-sciences.fr/en/home/" },
        { name: "Musée des Arts et Métiers", url: "http://www.arts-et-metiers.net/" },
        { name: "Palais de la Découverte", url: "http://www.palais-decouverte.fr/index.php?id=0" },
        { name: "Vulcania", url: "https://www.vulcania.com/" },
        { name: "Exploradôme", url: "https://www.exploradome.fr/" }
        // Diğer müzeler...
      ]
    },
    {
      name: "United Kingdom",
      museums: [
        { name: "Armagh Planetarium", url: "https://www.armagh.space/" },
        { name: "At-Bristol (We The Curious)", url: "https://www.wethecurious.org/" },
        { name: "Bletchley Park", url: "https://bletchleypark.org.uk/" },
        { name: "Catalyst", url: "https://www.catalyst.org.uk/" },
        { name: "Centre for Life", url: "https://www.life.org.uk/" },
        { name: "Discovery Museum", url: "https://discoverymuseum.org.uk/" },
        { name: "Dundee Science Centre", url: "https://www.dundeesciencecentre.org.uk/" },
        { name: "Enginuity", url: "https://www.ironbridge.org.uk/explore/enginuity/" },
        { name: "Glasgow Science Centre", url: "https://www.glasgowsciencecentre.org/" },
        { name: "Museum of Science and Industry in Manchester", url: "https://www.scienceandindustrymuseum.org.uk/" },
        { name: "National Space Centre", url: "https://spacecentre.co.uk/" },
        { name: "Royal Institution: Faraday Museum", url: "https://www.rigb.org/" },
        { name: "Science Museum, London", url: "https://www.sciencemuseum.org.uk/" },
        { name: "Science Oxford", url: "https://scienceoxford.com/" },
        { name: "Shildon Locomotion Museum", url: "https://www.locomotion.org.uk/" },
        { name: "Snibston Discovery Park", url: "https://www.snibston.com/" },
        { name: "Techniquest", url: "https://www.techniquest.org/" },
        { name: "Thinktank, Birmingham", url: "https://www.birminghammuseums.org.uk/thinktank" },
        { name: "Whipple Museum of the History of Science", url: "https://www.sites.hps.cam.ac.uk/whipple/" }
        // Diğer müzeler...
      ]
    },

    {
      name: "Italy",
      museums: [
        { name: "Città della Scienza", url: "https://www.cittadellascienza.it/" },
        { name: "Museo Nazionale Scienza e Tecnologia Leonardo da Vinci", url: "http://www.museoscienza.org/" },
        { name: "Museo Galileo", url: "http://www.museogalileo.it/" }
      ]
    },
    {
      name: "Spain",
      museums: [
        { name: "Ciutat de les Arts i les Ciències", url: "https://www.cac.es/" },
        { name: "CosmoCaixa Barcelona", url: "https://cosmocaixa.es/" },
        { name: "Museo Nacional de Ciencias Naturales", url: "http://www.mncn.csic.es/" },
        { name: "Parque de las Ciencias (Granada)", url: "http://www.parquedelasciencias.es/" }
      ]
    },
    { 
      name: "Austria", 
      museums: [
        { name: "Technisches Museum Wien", url: "https://www.technischesmuseum.at/" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "Belgium", 
      museums: [
        { name: "Euro Space Center", url: "https://www.eurospacecenter.be/" },
        { name: "Technopolis", url: "https://www.technopolis.be/" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "Bulgaria", 
      museums: [
        { name: "National Polytechnical Museum", url: "http://www.polytechnicmuseum.org/" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "Croatia", 
      museums: [
        { name: "Nikola Tesla Memorial Center", url: "http://www.mcnikolatesla.hr/" },
        { name: "Technical Museum", url: "http://www.tmnt.hr/" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "Czech Republic", 
      museums: [
        { name: "National Technical Museum", url: "http://www.ntm.cz/en" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "Denmark", 
      museums: [
        { name: "Tycho Brahe Planetarium", url: "https://www.planetarium.dk/" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "Estonia", 
      museums: [
        { name: "AHHAA", url: "https://www.ahhaa.ee/" }
        // Diğer müzeler...
      ]
    },
    { 
      name: "Finland", 
      museums: [
        { name: "Heureka", url: "https://www.heureka.fi/" }
        // Diğer müzeler...
      ]
    },
    {
      name: "Greece",
      museums: [
        { name: "OTE Museum of Telecommunications", url: "https://www.ote.gr/" },
        { name: "Thessaloniki Science Center and Technology Museum", url: "http://www.noesis.edu.gr/" }
      ]
    },
    
    {
      name: "Iran",
      museums: [
        { name: "Iran National museum of science and technology", url: "https://www.iranreview.org/" }
      ]
    },
    {
      name: "Netherlands",
      museums: [
        { name: "Discovery Center Continium", url: "https://www.continium.nl/" },
        { name: "Museon", url: "https://www.museon.nl/" },
        { name: "Museum Boerhaave", url: "https://www.rijksmuseumboerhaave.nl/" },
        { name: "Science Center NEMO", url: "https://www.nemosciencemuseum.nl/" },
        { name: "Teyler's Museum", url: "https://www.teylersmuseum.nl/" }
      ]
    },
    {
      name: "Norway",
      museums: [
        { name: "Norwegian Museum of Science and Technology", url: "https://www.tekniskmuseum.no/" }
      ]
    },
    {
      name: "Poland",
      museums: [
        { name: "Copernicus Science Centre", url: "https://kopernik.org.pl/" },
        { name: "EC1 Science and Technology Center", url: "http://www.ec1lodz.pl/" }
      ]
    },
    {
      name: "Portugal",
      museums: [
        { name: "Visionarium", url: "https://www.visionarium.pt/" }
      ]
    },
    {
      name: "Romania",
      museums: [
        { name: "Ştefan Procopiu Science and Technology Museum", url: "https://muzeultehnic.go.ro/" },
        { name: "Prof.eng. Dimitrie Leonida National Technical Museum", url: "http://muzeultehnic.go.ro/" }
      ]
    },
    {
      name: "Russia",
      museums: [
        { name: "Polytechnical Museum", url: "https://polymus.ru/" },
        { name: "Memorial Museum of Cosmonautics", url: "http://www.cosmosmuseum.ru/" }
      ]
    },
    {
      name: "Serbia",
      museums: [
        { name: "Nikola Tesla Museum", url: "http://www.tesla museum.rs/" }
     ]
    },
    {
      name: "Sweden",
      museums: [
        { name: "Universeum", url: "https://www.universeum.se/" },
        { name: "Swedish National Museum of Science and Technology", url: "https://www.tekniskamuseet.se/" }
      ]
    },
    {
      name: "Switzerland",
      museums: [
        { name: "Technorama", url: "https://www.technorama.ch/" },
        { name: "Verkehrshaus der Schweiz (Swiss Museum of Transport)", url: "https://www.verkehrshaus.ch/" }
      ]
    },
    {
      name: "Turkey",
      museums: [
        { name: "Rahmi M. Koç Museum", url: "https://www.rmk-museum.org.tr/" },
        { name: "Istanbul Museum of the History of Science and Technology in Islam", url: "http://www.ibttm.org/" }
      ]
    },
    {
      name: "Ukraine",
      museums: [
        { name: "Science City New Energy", url: "https://www.sciencecitynewenergy.com/" }
      ]
    },
    // Diğer ülkeler ve müzeler...
  ];
  
  export default europeCountries;
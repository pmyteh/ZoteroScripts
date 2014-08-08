var GOODLIST = ["unread", "no full text", "bibliographic data incomplete", "my publications", "to add to lit review", "re-read?", "adoption", "agent-based modelling", "article structure", "automated content analysis", "automation", "Best Value", "Better Connected", "bibliometrics", "big data", "book review", "BPR", "bureaucracy", "BVPI", "case study", "censorship", "central-local", "children", "civil service", "civil society", "classification", "cluster analysis", "collective action", "command paper", "complexity", "Comprehensive Performance Assessment", "confidential", "conflict of laws", "co-production", "copyright", "core", "corpus linguistics", "crawler", "CRM", "crowdsourcing", "cryptography", "cyberlaw", "data", "database right", "democracy", "digital-era governance", "disintermediation", "DNS", "DNS economics", "domain parking", "e-democracy", "editorial", "efficiency", "e-government", "EGRL additions", "election campaigning", "elites", "empirical analysis", "empiricism", "ethics", "experiments", "federal government", "filtering", "first amendment", "free software", "Google", "governance", "government information", ".gov.uk", "gTLDs", "Habermas", "heritrix", "hierarchical linear model", "history", "HOWTO", "ICANN", "implementation research", "indices of deprivation", "infomap", "intercoder reliability", "internet exceptionalism", "Internet governance", "Internet policy", "Internet surveys", "investigate journal", "irrelevant", "jeremiad", "journal not available", "Journal ranking", "law", "Law and economics", "lecture notes", "lecturing", "link analysis", "Linux", "literature review", "local government", "management", "maturity models", "media", "meta-analysis", "methods", "minutes", "mixed methods", "mysociety recommended", "n=1 case study", "natural experiment", "net neutrality", "network analysis", "New Public Management", "news", "nodality", "OIIGovtandPolitics", "OIILaw", "OIIMethods", "OIISocialDynamics", "OIIStatistics", "OIITech&Reg", "OIIThesis", "open access", "overview article", "OxfordDLT", "OxIS", "panel-data models", "PDLGM", "peer production", "performance measurement", "polyarchy", "power law", "procurement", "public administration", "public choice", "public sector management reform", "Qualitative network analysis", "R", "randomised controlled trial", "regression analysis", "research methods", "search", "semantic network analysis", "sentiment analysis", "social network analysis", "statistics", "summary-mine", "support vector machine", "template", "term extension", "textbook", "theoretical contribution", "time-series analysis", "total factor productivity", "WARC files", "web crawling", "webometrics", "Website Performance Survey", "WHOIS", "won't read", "zombie NPM"] 

var idks = Object.keys(Zotero.Tags.getAll());


for (var i in idks) {
    var id = idks[i];
    var name = Zotero.Tags.getName(id);
    if (name === false) {
        alert("false");
        continue;
    }
    var pres = GOODLIST.indexOf(name);
    if (pres <= 0) {
        Zotero.Tags.get(id).erase();
    }
}
Zotero.Tags.purge();


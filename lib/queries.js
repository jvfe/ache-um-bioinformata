const researcherInfoQuery = (researcherQID) => {
  const query = `
  SELECT DISTINCT ?authorLabel ?lattes ?orcid ?picture ?affiliationQID ?affiliationLabel WHERE {
    BIND(IRI(CONCAT(STR(<http://www.wikidata.org/entity/>), "${researcherQID}")) AS ?author)
    ?author wdt:P1416 ?affiliation.
    BIND(REPLACE(STR(?affiliation), "http://www.wikidata.org/entity/", "") AS ?affiliationQID)
    OPTIONAL { ?author wdt:P1007 ?lattes. }
    OPTIONAL { ?author wdt:P496 ?orcid. }
    OPTIONAL { ?author wdt:P18 ?picture. }
    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }
  }
    `

  return query
}

const searchResearcherQuery = (researcherName) => {
  const query = `
  SELECT 
  DISTINCT 
  ?qid
  ?itemLabel
  WHERE {
  
    {  
      SERVICE wikibase:mwapi {
        bd:serviceParam wikibase:api "Search";
                        wikibase:endpoint "www.wikidata.org";
                        mwapi:srsearch "${researcherName} haswbstatement:P31=Q5 haswbstatement:P1416".
        ?qid wikibase:apiOutput mwapi:title.
      }
    }
  
    BIND(IRI(CONCAT(STR(wd:), ?qid)) AS ?item)
    ?item wdt:P1416 ?part_of.
    ?part_of wdt:P17 wd:Q155.
    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }
  }
    `
  return query
}

const programsQuery = `
SELECT (REPLACE(STR(?institution), ".*Q", "Q") AS ?qid) ?institutionLabel ?partOfLabel ?officialWebsite WHERE {
  ?institution wdt:P17 wd:Q155;
    wdt:P101 wd:Q128570;
    wdt:P749 ?partOf.
  OPTIONAL { ?institution wdt:P856 ?officialWebsite. }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }
}
`

export { researcherInfoQuery, searchResearcherQuery, programsQuery }

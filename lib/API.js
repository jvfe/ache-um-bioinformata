import axios from 'axios'
import {
  researcherInfoQuery,
  searchResearcherQuery,
  programsQuery,
} from '@/lib/queries'

const getWDTQuery = async (query) => {
  const encodedQuery = encodeURIComponent(query)
  const url = `https://query.wikidata.org/sparql?query=${encodedQuery}`
  const response = await axios.get(url, {
    mode: 'cors',
    headers: { Accept: 'application/sparql-results+json' },
  })
  const { data } = response

  return data.results.bindings
}

const getResearcherInfo = (QID) => {
  const query = researcherInfoQuery(QID)

  const results = getWDTQuery(query).then((res) => {
    const resultado = res.length > 1 ? res[0] : res
    const formatted = {
      id: QID,
      name: resultado.authorLabel?.value,
      lattes: resultado.lattes?.value,
      orcid: resultado.orcid?.value,
      picture: resultado.picture?.value,
      affiliation: resultado.affiliationQID.value,
      affiliationLabel: resultado.affiliationLabel.value,
      affiliationRole: 'professor',
    }
    return formatted
  })

  return results
}

const searchResearcher = async (QID) => {
  const query = searchResearcherQuery(QID)

  const results = await getWDTQuery(query)

  return results
}

const getPrograms = () => {
  const results = getWDTQuery(programsQuery).then((res) => {
    const formatted = res.map((prog) => {
      return {
        id: prog.qid.value,
        institution: prog.institutionLabel.value,
        parentOrg: prog.partOfLabel.value,
        officialWebsite: prog.officialWebsite?.value,
      }
    })
    return formatted
  })

  return results
}

export { getResearcherInfo, searchResearcher, getPrograms }

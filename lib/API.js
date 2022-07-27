import axios from 'axios'
import {
  researcherInfoQuery,
  searchResearcherQuery,
  programsQuery,
  programResearchersQuery,
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
    const resultado = res[0]
    const affiliationQIDs = res.map((el) => el.affiliationQID.value)
    const affiliationLabels = res.map((el) => el.affiliationLabel.value)

    const formatted = {
      id: QID,
      name: resultado.authorLabel?.value,
      lattes: resultado.lattes?.value,
      orcid: resultado.orcid?.value,
      picture: resultado.picture?.value,
      affiliation: affiliationQIDs,
      affiliationLabel: affiliationLabels,
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

const getProgramValues = (programObj) => {
  return {
    id: programObj.qid.value,
    institution: programObj.institutionLabel.value,
    parentOrg: programObj.partOfLabel.value,
    officialWebsite: programObj.officialWebsite?.value,
  }
}

const getPrograms = (programQID = null) => {
  const results = getWDTQuery(programsQuery(programQID)).then((res) => {
    const formatted = res.map((prog) => {
      return getProgramValues(prog)
    })

    return formatted
  })

  return results
}

const getProgramsResearchers = (QID) => {
  const query = programResearchersQuery(QID)

  const results = getWDTQuery(query).then((res) => {
    const formatted = res.map((research) => {
      return {
        id: research.qid.value,
        name: research.researcherLabel.value,
        affiliation: [QID],
        affiliationLabel: [research.institutionLabel.value],
        affiliationRole: research.roleLabel?.value,
        lattes: research.lattes?.value,
        orcid: research.orcid?.value,
        picture: research.picture?.value,
      }
    })
    return formatted
  })

  return results
}

export {
  getResearcherInfo,
  searchResearcher,
  getPrograms,
  getProgramsResearchers,
}

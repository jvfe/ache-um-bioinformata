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

const getResearcherInfo = async (QID) => {
  const query = researcherInfoQuery(QID)

  const results = await getWDTQuery(query)

  return results
}

const searchResearcher = async (QID) => {
  const query = searchResearcherQuery(QID)

  const results = await getWDTQuery(query)

  return results
}

const getPrograms = async () => {
  const results = await getWDTQuery(programsQuery)

  return results
}

export { getResearcherInfo, searchResearcher, getPrograms }

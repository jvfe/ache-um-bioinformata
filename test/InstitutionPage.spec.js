import { shallowMount } from '@vue/test-utils'
import InstitutionPage from '@/components/InstitutionPage.vue'

describe('InstitutionPage', () => {
  const wrapper = shallowMount(InstitutionPage, {
    propsData: {
      institutionId: 'Q105465464',
    },
    mocks: {
      $fetchState: {
        pending: true,
        error: false,
      },
    },
  })

  test('Institution info is retrieved', async () => {
    await InstitutionPage.fetch.call(wrapper.vm)
    expect(wrapper.vm.institution).toMatchObject({
      id: 'Q105465464',
      institution: 'Centro Multiusuário de Bioinformática',
      parentOrg: 'Universidade Federal do Rio Grande do Norte',
      officialWebsite: 'https://bioinfo.imd.ufrn.br/',
    })
    expect(wrapper.vm.researchers.length).toBeGreaterThan(6)
  })
})

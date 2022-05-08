import { shallowMount } from '@vue/test-utils'
import InstitutionListPage from '@/components/InstitutionListPage.vue'

describe('InstitutionListPage', () => {
  const wrapper = shallowMount(InstitutionListPage, {
    mocks: {
      $fetchState: {
        pending: true,
        error: false,
      },
    },
  })

  test('Gets data', async () => {
    await InstitutionListPage.fetch.call(wrapper.vm)
    expect(wrapper.vm.institutions.length).toBeGreaterThan(6)
  })
})

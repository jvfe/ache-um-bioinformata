import { shallowMount } from '@vue/test-utils'
import ResearcherPage from '@/components/ResearcherPage.vue'

describe('ResearcherPage', () => {
  const wrapper = shallowMount(ResearcherPage, {
    propsData: {
      bioinformata: 'Q59166361',
    },
    mocks: {
      $fetchState: {
        pending: true,
        error: false,
      },
    },
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('Gets data', async () => {
    await ResearcherPage.fetch.call(wrapper.vm)
    expect(wrapper.vm.authorData.name).toBe('Rodrigo Juliani Siqueira Dalmolin')
  })
})

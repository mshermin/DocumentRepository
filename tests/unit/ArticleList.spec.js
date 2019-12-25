import { shallowMount } from '@vue/test-utils'
import ArticleList from '@/components/ArticleList.vue'


const factory = (values = {}) => {
    return shallowMount(ArticleList, {
        data() {
            return {
                ...values
            }
        }
    })
}


let wrapper = null;

// beforeEach(() => {
//     wrapper = factory();
// })

afterEach(() => {
    wrapper.destroy()
})

describe('ArticleList', () => {
    it('renders a welcome message', () => {
        wrapper = factory()       
        expect(wrapper.findAll('.nav-item').length).toEqual(3)
    })

})
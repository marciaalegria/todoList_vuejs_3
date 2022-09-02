import { mount } from '@vue/test-utils'
import { test, vi, describe, expect } from 'vitest'
import HomeView from '../views/HomeView.vue'
import * as todosSetup from '../todosSetup'
import { computed } from 'vue'

const setupmock = {
    todosIncompleted: computed(()=>[]),
    todosCompleted: computed(()=> {}),
    toggle: vi.fn(),
    deleteTodo: vi.fn(),
    add: vi.fn(),
    update: vi.fn()
}
describe('mis pirmeros test', () => {

    test('testeando componente', ()=>{
        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain('Todo List')
    })

    test('List is empty', ()=> {
        const spy = vi.spyOn(todosSetup, 'todosFactory').mockReturnValue({
            ...setupmock
        })

    })
})
import {setPosts, getPostDetailAction, setPostIdSelected} from '../actions/posts';
import posts from './posts'

describe('Testando o post reducer', () => {
    test('testa se o setPost lista todos os posts', () =>{
        // preparação
        const currentState = {
            allPosts:[],
        }

        const action = setPosts('post teste')

        // execução
        const newState = posts(currentState,action)

        //verificação
        expect(newState.allPosts).toHaveLength(10)
        expect(newState.allPosts).toEqual('post teste')
    })

    test('testa se o postDetails lista todos os destalhes dos posts', () =>{
        // preparação
        const currentState = {
            postDetails: {},
        }

        const action = getPostDetailAction('post teste')

        // execução
        const newState = posts(currentState,action)

        //verificação
        expect(newState.postDetails).toHaveLength(10)
        expect(newState.postDetails).toEqual('post teste')
    })

    test('testa se o postSelected captura o id de um post', () =>{
        // preparação
        const currentState = {
            postIdSelected: "",
        }

        const action = setPostIdSelected('1')

        // execução
        const newState = posts(currentState,action)

        //verificação
        expect(newState.postIdSelected).toEqual('1')
    })
})

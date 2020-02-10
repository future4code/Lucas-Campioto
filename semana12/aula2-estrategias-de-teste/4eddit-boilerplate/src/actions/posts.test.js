import {setPosts, getPostDetailAction, setPostIdSelected} from './posts';

describe("Testando actions de posts", () =>{
    test('testando setPost action', () =>{
        // preparação
        const allPostsTest = []
        
        // execucao
        const action = setPosts(allPostsTest)

        //verificação
        expect(action.type).toEqual('SET_POSTS')
        expect(action.payload).toEqual({ allPosts: [] })
    })

    test('testando getPostDetail action', () =>{
        // preparação
        const postTest = 'texto do teste'
        
        // execucao
        const action = getPostDetailAction(postTest)

        //verificação
        expect(action.type).toEqual('SET_POST_DETAIL')
        expect(action.payload).toEqual({ post: 'texto do teste' })
    })

    test('testando setPostIdSelected action', () =>{
        // preparação
        const postIdSelectedTest = '1'
        
        // execucao
        const action = setPostIdSelected(postIdSelectedTest)

        //verificação
        expect(action.type).toEqual('SET_POST_ID')
        expect(action.payload).toEqual({ postIdSelected: '1' })
    })
})
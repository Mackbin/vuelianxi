import test from '@/components/test'
import HelloWorld from '@/components/HelloWorld'

export default ({
    mode: 'history',
    routes: [
        { path: '/', component: HelloWorld },
        {
            path: '/test/:testId',
            name: 'HelloWorld',
            component: test
        }
    ]

})
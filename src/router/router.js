import test from '@/components/test'

export default ({
    mode: 'history',
    routes: [
        {
            path: '/test/:testId',
            component: test
        }
    ]

})
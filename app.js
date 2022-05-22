Vue.createApp({
    data() {
        return {
            posts: [
                {id: 1, title: 'Пост о JavaScript 1', body: 'Информация о JavaScript 1'},
            ],
            title: '',
            body: '',
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            }
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
        },
    }
}).mount('#app');
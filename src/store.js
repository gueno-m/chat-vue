import Vue from 'vue'
import io from 'socket.io-client'
import router from './router/index'

const socket = io('https://bddi-2019-chat.herokuapp.com/');

const AVATARS = ['https://zupimages.net/up/20/38/4wwr.png', 'https://zupimages.net/up/20/38/cq6y.png', 'https://zupimages.net/up/20/38/fi7l.png', 'https://zupimages.net/up/20/38/8t3m.png', 'https://zupimages.net/up/20/38/s8fr.png', 'https://zupimages.net/up/20/38/pmn6.png', 'https://zupimages.net/up/20/38/lv78.png', 'https://zupimages.net/up/20/38/frtf.png', 'https://zupimages.net/up/20/38/fgve.png', 'https://zupimages.net/up/20/38/ua22.png', 'https://zupimages.net/up/20/38/wr1q.png', 'https://zupimages.net/up/20/38/6vbh.png', 'https://zupimages.net/up/20/38/ki2w.png', 'https://zupimages.net/up/20/38/0m21.png', 'https://zupimages.net/up/20/38/ft6j.png', 'https://zupimages.net/up/20/38/lde1.png', 'https://zupimages.net/up/20/38/wbfm.png', 'https://zupimages.net/up/20/38/usi6.png', 'https://zupimages.net/up/20/38/o9kf.png', 'https://zupimages.net/up/20/38/7tjo.png', 'https://zupimages.net/up/20/38/gcqc.png', 'https://zupimages.net/up/20/38/neik.png', 'https://zupimages.net/up/20/38/853z.png', 'https://zupimages.net/up/20/38/iez2.png']

const store = new Vue({
    data: {
        isRegistered: false,
        user: {},
        users: [],
        messages: [],
        avatars: {}
    },
    methods: {

        generateRandomAvatar() {
            return AVATARS[Math.floor(Math.random() * AVATARS.length)]
        },

        registerListeners() {
            socket.on('connect', () => {
                const sessionUser = sessionStorage.getItem('user');

                if (sessionUser) {
                    store.userRegister(JSON.parse(sessionUser).username)
                }
            });

            socket.on('users update', ({ users, user, type }) => {
                if (this.users.length > 0) {
                    if (type === 'join') {
                        this.avatars[user.username] = this.generateRandomAvatar()
                    } else {
                        delete this.avatars[user.username]
                    }
                } else {
                    users.forEach((user) => {
                        this.avatars[user.username] = this.generateRandomAvatar()
                    })
                }

                this.users = users
            })

            socket.on('user registered', (user) => {
                this.isRegistered = true;
                this.user = user
                sessionStorage.setItem('user', JSON.stringify(user))
            });

            socket.on('disconnect', () => {
                this.isRegistered = false;
                this.user = {};
            });

            socket.on('messages update', ({ messages }) => {
                this.messages = messages;
            });

            socket.on('message new', ({ message }) => {
                this.messages.push(message);
            });

            socket.on('chat error', (infos) => {
                console.log('chat error', infos);
            });
        },

        logout() {
            sessionStorage.clear();
            this.isRegistered = false;
            router.push('/login');
        },

        // API calls

        userRegister(username) {
            const avatar = 'https://toppng.com/uploads/preview/monkey-d-monkey-d-luffy-11563215336goels8qhmv.png'
            socket.emit('user register', { username, avatar })
        },

        userTyping() {

        },

        messageNew(message) {
            socket.emit('message new', message)
        },
    },

    created() {
        this.registerListeners();
    },
    watch: {
        isRegistered(registered) {
            if (registered) {
                router.push('/');
            } else {
                router.push('/login');
            }
        }
    }
});

export default store;
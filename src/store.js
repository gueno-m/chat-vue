import Vue from 'vue'
import io from 'socket.io-client'
import router from './router/index'

const socket = io('https://bddi-2019-chat.herokuapp.com/');

const store = new Vue({
    data: {
        isRegistered: false,
        user: {},
        users: [],
        messages: [],
    },
    methods: {

        registerListeners() {
            socket.on('connect', () => {
                const sessionUser = sessionStorage.getItem('user');

                if (sessionUser) {
                    store.userRegister(JSON.parse(sessionUser).username)
                }
                // console.log('connected')
            });

            socket.on('users update', ({ users }) => {
                this.users = users;
            });

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
            socket.emit('user register', { username })
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
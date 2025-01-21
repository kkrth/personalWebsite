import { defineStore } from "pinia";

let store = defineStore("UserStore", {
    state: () => {
        return {
            account: ''
        }
    },
    getters: {
        getAccount: function (state) {
            return state.account;
        }
    },
    actions: {
        saveAccount: function (account: string) {
            this.account = account;
        },
        clearAccount: function () {
            this.account = '';
        }
    },
    persist: {
        storage: sessionStorage
    }
})

export default store;
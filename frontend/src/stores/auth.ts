import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
    loading: false,
    error: null
  }),
  actions: {
    async login(username: string, password: string) {
      const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
      // update pinia state
      this.user = user;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/dashboard');
    },

    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      this.loading = true;
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential!.idToken;
          this.user = result.user;
          localStorage.setItem('user', JSON.stringify(result.user));
          localStorage.setItem('token', token!);
          router.push(this.returnUrl || '/');
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.messages;
          this.loading = false;
        }).finally(()=>{
          this.loading = false;
        });
    },

    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }
});

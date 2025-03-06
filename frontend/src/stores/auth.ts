import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
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
          
          this.user = result.user;
          this.token = credential!.idToken!;
          localStorage.setItem('user', JSON.stringify(result.user));
          localStorage.setItem('token', this.token!);
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

    async logout() {
      await signOut(auth);
      this.user = null;
      this.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      router.push('/login');
    }
  }
});

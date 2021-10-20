export const uiConfig = firebase => {
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/patients',
        signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        }]
    }
}
export default async ({ app, store }) => {
    app.router.afterEach((to, from) => {
        // console.log(to, from);
        if (to.path == '/works' && from.path == '/') {
            setTimeout(() => {
                store.dispatch('flgLogo', {
                    flgLogo: true,
                });
            }, 2000);
        } else if (to.path == '/profile' && from.path == '/') {
            setTimeout(() => {
                store.dispatch('flgLogo', {
                    flgLogo: true,
                });
            }, 2000);
        } else if (to.path == '/' && from.path == '/profile') {
            setTimeout(() => {
                store.dispatch('flgLogo', {
                    flgLogo: true,
                });
            }, 2000);
        } else if (to.path == '/' && from.path == '/works') {
            setTimeout(() => {
                store.dispatch('flgLogo', {
                    flgLogo: true,
                });
            }, 2000);
        }
    });
};

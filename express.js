app.use((req, res, next) => {
    console.log('Request received');
    next(); // Move to the next middleware or route handler
});

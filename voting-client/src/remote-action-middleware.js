export default store => next => action => {
    socket.emite( 'action', action );
    return next( action );
}

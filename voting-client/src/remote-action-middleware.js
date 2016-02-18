export default store => next => action => {
    if ( action.meta && action.meta.route ) {
        socket.emite( 'action', action );
    }
    return next( action );
}

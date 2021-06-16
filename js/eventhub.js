/**
 * event bus from tiny-emitter
 *
 * see https://v3.vuejs.org/guide/migration/events-api.html#_3-x-update
 *
 */

const emitter = new TinyEmitter();

export default {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args),
}
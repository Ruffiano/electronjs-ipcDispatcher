const {ipcRenderer} = require('electron');
const events = require('events');
const listener = new events.EventEmitter();
let map = new Map();

//await resp
const handler = {
    set: (target, channel, value) => {
        target[channel] = value;
        ipcRenderer.send(channel, value);
        return true;
    },

    get: async (target, channel) => {
        return new Promise (
            resolve => {
                ipcRenderer.on(channel, (e, value) => {
                    target[channel] = value;
                    resolve(target[channel]);
                })
            }
        )
    }
};

const eventHunter = new Proxy(map, handler);

async function EventSubscriber( awaited, callback) {
    callback(await awaited);
}

const dispatchEvent = {
    init: function(channel) {
        ipcRenderer.on(channel,(e, args) => {
            console.log('initDispatcher: ', args);
            listener.emit(args.event, args.value);
        });
    },

    listener,

    send:() => {

    }
};

module.exports = {
    eventHunter, EventSubscriber, dispatchEvent
};
const electron = require('electron');
const ipcMain = electron.ipcMain;
const webContents = electron.webContents;

const events = require('events');
const listener = new events.EventEmitter();

let map = new Map();

//await resp
const handler = {
    set: (target, channel, value) => {
        target[channel] = value;
        const allWebContents = webContents.getAllWebContents();

        allWebContents.forEach((contents) => {
            contents.send(channel, value);
        });
        return true;
    },

    get: async (target, channel) => {
        return new Promise (
            resolve => {
                ipcMain.on(channel, (e, value) => {
                    target[channel] = value;
                    resolve(target[channel]);
                })
            }
        )
    }
};

const eventHunter = new Proxy(map, handler);

async function EventSubscriber(awaited, callback) {
    callback(await awaited);
}

const dispatchEvent = {
    init: function(channel) {
        ipcMain.on(channel,(e, args) => {
            console.log(`dispatchEvent ${channel} : ${args}`)
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







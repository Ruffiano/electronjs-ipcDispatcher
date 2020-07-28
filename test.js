// const { eventHunter, EventSubscriber, dispatchEvent } = require('../modules/ipc-dispatcher/middleware/main.event.hunter');

//main process

// dispatchEvent.listener.on('GET_ACCOUNT_ADDR', async function (value) {
//     console.log('GET_ACCOUNT_ADDR: ', value);
//     const db_resp = await DbHelper.checkNodeId(value.id);
//     console.log('resp_node: ', db_resp);
//     eventHunter.DATABASE_CHANNEL_RES = {
//         event: 'SET_ACCOUNT_ADDR',
//         value:  db_resp.dataValues,
//     }
// });



// dispatchEvent.init('DATABASE_CHANNEL_REQ')
// dispatchEvent.init('P2P_CHANNEL_REQ')

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-

//renderer process


// async function accountService () {
//     eventHunter.DATABASE_CHANNEL_REQ = {
//         event: 'GET_ACCOUNT_ADDR',
//         value: {
//             id: 1
//         }
//     }
//     return eventHunter.DATABASE_CHANNEL_RES;
// }

// dispatchEvent.init('DATABASE_CHANNEL_RES')
// dispatchEvent.init('P2P_CHANNEL_RES')
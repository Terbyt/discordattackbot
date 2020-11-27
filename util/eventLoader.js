//This code belong to Terbyt. github.com/Terbyt | www.terbyt.rf.gd
const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};
//This code belong to Terbyt. github.com/Terbyt | www.terbyt.rf.gd

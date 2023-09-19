import { connected, dashboard, disconnect } from "./dashboard.embed";
import { help } from "./help.embed";
import { blacklist } from "./msg.embed";
import { ping } from "./ping.embed";
import { addTrack, addPlaylist, queue } from "./queue.embed";
import { removeList, removeTrack } from "./remove.embed";
import { save } from "./save.embed";
import { server } from "./server.embed";
import { nodesStatus, botStatus } from "./status.embed";


const embeds = {
    addTrack,
    addPlaylist,
    botStatus,
    blacklist,
    connected,
    dashboard,
    disconnect,
    help,
    nodesStatus,
    ping,
    queue,
    removeList,
    removeTrack,
    save,
    server,
};

export { embeds };
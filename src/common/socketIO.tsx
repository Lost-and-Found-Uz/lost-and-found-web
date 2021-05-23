import io from "socket.io-client";

const socket_url = "http://localhost:3000";

export const socketIO = io(socket_url);

const controllerConfig = require("./controller.config.js");
const registerMethods = require("./register.methods");
const axios = require("axios");
// create an empty modbus client
var ModbusRTU = require("modbus-serial");

const fuelControllers = ["1.2, 2.2", "3.2", "4.2", "6.2", "7.2"];

let {
  controllerId,
  registers,
  controllerPort,
  headerHost,
  headerPort,
  interval,
  modbusOptions,
  clientId,
} = controllerConfig;
console.log({
  controllerId,
  registers,
  controllerPort,
  headerHost,
  headerPort,
  interval,
  modbusOptions,
  clientId,
});
var client = new ModbusRTU();

const socketio = require("socket.io-client");
const socket = socketio.connect(`http://${headerHost}:${headerPort}`);

socket.on("connect", (socket) => {
  console.log("socket connected");
});

socket.emit("private message", { user: "me", msg: "whazzzup?" });

// open connection to a serial port
client.connectRTUBuffered(controllerPort, modbusOptions).catch(console.error);
client.setID(clientId);
//..........................................
setInterval(() => {
  console.log("setInterval");
  (async function loop() {
    for (let i = 0; i < registers.length; ++i) {
      console.log(
        " registers[i].address = ",
        "0x" + registers[i].address.toString(16)
      );
      // let value = 1000.123456;
      // if (registers[i].name === "revs") {
      //   value = Number(value).toFixed(0);
      // } else {
      //   value = Number(value).toFixed(3);
      // }
      // console.log({ value });
      // ///////////////////////////////////////////5.2
      // await axios({
      //   method: "put",
      //   url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
      //   data: {
      //     controllerModbusId: controllerId.toString(),
      //     registerAddress: "0x" + registers[i].address.toString(16),
      //     // registerAddress: registerAddress,
      //     value: value,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data) console.log(res.data);
      //     else console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "error response ",
      //       error.message
      //       // error.response.data
      //     );
      //   });
      // ////////////////////////////// 1.2
      // await axios({
      //   method: "put",
      //   url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
      //   data: {
      //     controllerModbusId: "1.2",
      //     registerAddress: "0x" + registers[i].address.toString(16),
      //     // registerAddress: registerAddress,
      //     value: value,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data) console.log(res.data);
      //     else console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "error response ",
      //       error.message
      //       // error.response.data
      //     );
      //   });
      // //////////////////////////////////////////////2.2
      // await axios({
      //   method: "put",
      //   url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
      //   data: {
      //     controllerModbusId: "2.2",
      //     registerAddress: "0x" + registers[i].address.toString(16),
      //     // registerAddress: registerAddress,
      //     value: value,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data) console.log(res.data);
      //     else console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "error response ",
      //       error.message
      //       // error.response.data
      //     );
      //   });
      // //////////////////////////////////////////////3.1
      // await axios({
      //   method: "put",
      //   url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
      //   data: {
      //     controllerModbusId: "3.2",
      //     registerAddress: "0x" + registers[i].address.toString(16),
      //     // registerAddress: registerAddress,
      //     value: value,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data) console.log(res.data);
      //     else console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "error response ",
      //       error.message
      //       // error.response.data
      //     );
      //   });
      // //////////////////////////////////////////////4.1
      // await axios({
      //   method: "put",
      //   url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
      //   data: {
      //     controllerModbusId: "4.2",
      //     registerAddress: "0x" + registers[i].address.toString(16),
      //     // registerAddress: registerAddress,
      //     value: value,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data) console.log(res.data);
      //     else console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "error response ",
      //       error.message
      //       // error.response.data
      //     );
      //   });
      // //////////////////////////////////////////////6.2
      // await axios({
      //   method: "put",
      //   url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
      //   data: {
      //     controllerModbusId: "6.2",
      //     registerAddress: "0x" + registers[i].address.toString(16),
      //     // registerAddress: registerAddress,
      //     value: value,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data) console.log(res.data);
      //     else console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "error response ",
      //       error.message
      //       // error.response.data
      //     );
      //   });
      // //////////////////////////////////////////////7.2
      // await axios({
      //   method: "put",
      //   url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
      //   data: {
      //     controllerModbusId: "7.2",
      //     registerAddress: "0x" + registers[i].address.toString(16),
      //     // registerAddress: registerAddress,
      //     value: value,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data) console.log(res.data);
      //     else console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "error response ",
      //       error.message
      //       // error.response.data
      //     );
      //   });
      // //////////////////////////////////////
      await registerMethods
        ._readHoldingRegisters(
          (addr = registers[i].address.toString()),
          (reg_len = registers[i].leng),
          // (device_id = clientId),
          client
        )
        .then((readResponse) => {
          console.log(
            "readResponse = ",
            readResponse,
            "\n",
            "value",
            readResponse.data[0],
            "registerAddress",
            "controllerModbusId=",
            controllerId.toString()
          );
          let value = null;
          if (registers[i].type === "Float") {
            value = readResponse.buffer.readFloatBE();
          }
          if (registers[i].type === "Double") {
            value = readResponse.buffer.readDoubleBE();
          }
          if (registers[i].name === "revs") {
            value = Number(value).toFixed(0);
          } else {
            value = Number(value).toFixed(3);
          }
          console.log({ value });

          ///////////////////////////////////////////5.2
          axios({
            method: "put",
            url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
            data: {
              controllerModbusId: controllerId.toString(),
              registerAddress: "0x" + registers[i].address.toString(16),
              // registerAddress: registerAddress,
              value: value,
            },
          })
            .then((res) => {
              if (res.data) console.log(res.data);
              else console.log(res);
            })
            .catch((error) => {
              console.error(
                "error response ",
                error.message
                // error.response.data
              );
            });
          ////////////////////////////// 1.2
          axios({
            method: "put",
            url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
            data: {
              controllerModbusId: "1.2",
              registerAddress: "0x" + registers[i].address.toString(16),
              // registerAddress: registerAddress,
              value: value,
            },
          })
            .then((res) => {
              if (res.data) console.log(res.data);
              else console.log(res);
            })
            .catch((error) => {
              console.error(
                "error response ",
                error.message
                // error.response.data
              );
            });
          //////////////////////////////////////////////2.2
          axios({
            method: "put",
            url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
            data: {
              controllerModbusId: "2.2",
              registerAddress: "0x" + registers[i].address.toString(16),
              // registerAddress: registerAddress,
              value: value,
            },
          })
            .then((res) => {
              if (res.data) console.log(res.data);
              else console.log(res);
            })
            .catch((error) => {
              console.error(
                "error response ",
                error.message
                // error.response.data
              );
            });
          //////////////////////////////////////////////3.1
          axios({
            method: "put",
            url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
            data: {
              controllerModbusId: "3.2",
              registerAddress: "0x" + registers[i].address.toString(16),
              // registerAddress: registerAddress,
              value: value,
            },
          })
            .then((res) => {
              if (res.data) console.log(res.data);
              else console.log(res);
            })
            .catch((error) => {
              console.error(
                "error response ",
                error.message
                // error.response.data
              );
            });
          //////////////////////////////////////////////4.1
          axios({
            method: "put",
            url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
            data: {
              controllerModbusId: "4.2",
              registerAddress: "0x" + registers[i].address.toString(16),
              // registerAddress: registerAddress,
              value: value,
            },
          })
            .then((res) => {
              if (res.data) console.log(res.data);
              else console.log(res);
            })
            .catch((error) => {
              console.error(
                "error response ",
                error.message
                // error.response.data
              );
            });
          //////////////////////////////////////////////6.2
          axios({
            method: "put",
            url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
            data: {
              controllerModbusId: "6.2",
              registerAddress: "0x" + registers[i].address.toString(16),
              // registerAddress: registerAddress,
              value: value,
            },
          })
            .then((res) => {
              if (res.data) console.log(res.data);
              else console.log(res);
            })
            .catch((error) => {
              console.error(
                "error response ",
                error.message
                // error.response.data
              );
            });
          //////////////////////////////////////////////7.2
          axios({
            method: "put",
            url: `http://${headerHost}:${headerPort}/api/v1/registers_Controllers_values/`,
            data: {
              controllerModbusId: "7.2",
              registerAddress: "0x" + registers[i].address.toString(16),
              // registerAddress: registerAddress,
              value: value,
            },
          })
            .then((res) => {
              if (res.data) console.log(res.data);
              else console.log(res);
            })
            .catch((error) => {
              console.error(
                "error response ",
                error.message
                // error.response.data
              );
            });
        })
        .catch(console.error);
    }
  })();
}, interval);

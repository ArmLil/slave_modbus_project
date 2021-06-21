module.exports = {
  clientId: 247,
  // headerHost: "127.0.0.1",
  headerHost: "172.28.1.88",
  headerPort: "3002",
  controllerId: 1,
  // controllerPort: "/dev/tnt1",
  controllerPort: "/dev/ttyS0",
  modbusOptions: {
    baudRate: 9600,
    parity: "odd",
    dataBits: 8,
    stopBits: 1,
  },
  interval: 5000, // 5 sec

  registers: [
    //test registers
    // {
    //   address: 5,
    //   leng: 1,
    // },
    // {
    //   address: 6,
    //   leng: 1,
    // },

    /////////////////
    {
      address: 0x1312,
      leng: 2,
      type: "Float",
    },
    {
      address: 0x1316,
      leng: 2,
      type: "Float",
    },
    {
      address: 0x1374,
      leng: 4,
      type: "Double",
    },
    {
      address: 0x13fb,
      leng: 4,
      type: "Double",
    },
    {
      address: 0x136c,
      leng: 4,
      type: "Double",
    },
    {
      address: 0x1358,
      leng: 4,
      type: "Double",
    },
  ],
};

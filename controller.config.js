module.exports = {
  clientId: 247,
  // headerHost: "127.0.0.1",
  headerHost: "172.28.1.88",
  headerPort: "3002",
  controllerId: "5.2",
  // controllerPort: "/dev/tnt1",
  controllerPort: "/dev/ttyS0",
  modbusOptions: {
    baudRate: 9600,
    parity: "odd",
    dataBits: 8,
    stopBits: 1,
  },
  interval: 3000, // 3 sec

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
      name: "temperature",
      address: 0x1312,
      leng: 2,
      type: "Float",
    },
    {
      name: "density",
      address: 0x1316,
      leng: 2,
      type: "Float",
    },
    {
      name: "current_volume",
      address: 0x1374,
      leng: 4,
      type: "Double",
    },
    {
      name: "current_mass",
      address: 0x13fb,
      leng: 4,
      type: "Double",
    },
    {
      name: "total_volume",
      address: 0x136c,
      leng: 4,
      type: "Double",
    },
    {
      name: "total_mass",
      address: 0x1358,
      leng: 4,
      type: "Double",
    },
  ],
};

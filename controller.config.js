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
  interval: 5000, // 3 sec
  // registers: [
  //   {
  //     address: 5,
  //     leng: 1,
  //   },
  //   {
  //     address: 6,
  //     leng: 1,
  //   },
  // ],
  registers: [
    //Управление, настройка и состояния контроллера
    // {
    // address: 0,
    // address: 0x0000,
    // leng: 1,
    // },
    // {
    //   address: 17,
    //   address: "0x0011",
    //   leng: 1,
    // },
    // {
    //   address: 26,
    //   address: "0x001A",
    //   leng: 1,
    // },
    // //Информация о журналах
    // {
    //   address: 32,
    //   address: "0x0020",
    //   leng: 1,
    // },
    // {
    //   address: 33,
    //   address: "0x0021",
    //   leng: 1,
    // },
    // {
    //   address: 34,
    //   address: "0x0022",
    //   leng: 1,
    // },
    // {
    //   address: 35,
    //   address: "0x0023",
    //   leng: 1,
    // },
    // {
    //   address: 37,
    //   address: "0x0025",
    //   leng: 1,
    // },
    // {
    //   address: 39,
    //   address: "0x0027",
    //   leng: 1,
    // },
    // //Значения АЦП
    // {
    //   address: 48,
    //   address: "0x0030",
    //   leng: 1,
    // },
    // {
    //   address: 48,
    //   address: "0x0032",
    //   leng: 1,
    // },
    // //Чтение\запись даты и времени
    // {
    //   address: "0x0040",
    //   leng: 1,
    // },
    // {
    //   address: "0x0041",
    //   leng: 1,
    // },
    // {
    //   address: "0x0042",
    //   leng: 1,
    // },
    // //Информация о журналах
    // {
    //   address: "0x0060",
    //   leng: 1,
    // },
    // {
    //   address: "0x0062",
    //   leng: 1,
    // },
    // {
    //   address: "0x0064",
    //   leng: 1,
    // },
    // {
    //   address: "0x0068",
    //   leng: 1,
    // },
    // //Учет нефтепродукта
    // {
    //   address: "0x1310",
    //   leng: 1,
    // },
    // {
    //   address: "0x1311",
    //   leng: 1,
    // },
    {
      address: "1312",
      leng: 2,
    },
    {
      address: "1316",
      leng: 2,
    },
    {
      address: "1374",
      leng: 4,
    },
    {
      address: "13FB",
      leng: 4,
    },
    {
      address: "1399",
      leng: 4,
    },
    {
      address: "139D",
      leng: 4,
    },
  ],
};

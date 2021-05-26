module.exports = {
  headerHost: "127.0.0.1",
  headerPort: "3002",
  controllerId: 1,
  controllerPort: "/dev/tnt1",
  baudRate: 9600,
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
    {
      address: "0x0000",
      leng: 1,
    },
    // {
    //   address: "0x0011",
    //   leng: 1,
    // },
    // {
    //   address: "0x001A",
    //   leng: 1,
    // },
    // //Информация о журналах
    // {
    //   address: "0x0020",
    //   leng: 1,
    // },
    // {
    //   address: "0x0021",
    //   leng: 1,
    // },
    // {
    //   address: "0x0022",
    //   leng: 1,
    // },
    // {
    //   address: "0x0023",
    //   leng: 1,
    // },
    // {
    //   address: "0x0025",
    //   leng: 1,
    // },
    // {
    //   address: "0x0027",
    //   leng: 1,
    // },
    // //Значения АЦП
    // {
    //   address: "0x0030",
    //   leng: 1,
    // },
    // {
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
    // {
    //   address: "0x1312",
    //   leng: 1,
    // },
    // {
    //   address: "0x1316",
    //   leng: 1,
    // },
    // {
    //   address: "0x1374",
    //   leng: 1,
    // },
    // {
    //   address: "0x13FB",
    //   leng: 1,
    // },
    // {
    //   address: "0x1399",
    //   leng: 1,
    // },
    // {
    //   address: "0x139D",
    //   leng: 1,
    // },
  ],
};

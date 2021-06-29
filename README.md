Дополнительная инфо про modbus
https://habr.com/ru/post/409111/

https://github.com/maisvendoo/qslave

https://github.com/maisvendoo/qmaster

https://www.npmjs.com/package/modbus-serial

git clone https://github.com/freemed/tty0tty
cd tty0tty/module
make
sudo cp tty0tty.ko /lib/modules/\$(uname -r)/kernel/drivers/misc/
sudo depmod
sudo modprobe tty0tty
sudo chmod 666 /dev/tnt\*

выполнить это в директории где лежит проект qslave с Modbus клонированный

потом снова запустить свой qslave-gui

это от сюда https://askubuntu.com/questions/588800/how-can-i-set-up-virtual-serial-ports-linux-null-modem-emulator-using-tty0tty

Функции для buffer
https://js-node.ru/site/article?id=10#buf.readUInt16BE(offset[_noAssert])

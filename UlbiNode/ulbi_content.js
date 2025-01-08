/*4:31 npm modules
npm init (создание package.json)
or 
npm init -y (aвто режим)

npm i express установит dependencies
*/



/*
    Intro theory about node.js
    Intro to event loop.
    Multiplexer
    Watch screenshots
    Blocking and unblocking event loop code

    (По сути повтор того, что было у Богдана. 
    У Богдана примеры блокирующего и неблок кода)
    Практика импорта и экспорта

    Можно купить курс от Богдана

    33:21 (я решил продолжить с Ulbi)
    В ноде js большое количество стандартных модулей:
*/


/*1 Глобальный модуль: process
Глобально доступный обзкт: process.pid */
    // console.log(process.pid)

    //     while(true){

    //     }
/*
    to check process run htop in Linux
*/

//process.env - по сути это переменные окружения
console.log(process.env) 
/*
Output:
VSCODE_CWD: '/home/areggie/Desktop/node_js',
  LANGUAGE: 'en_US:',
  LC_TIME: 'de_DE.UTF-8',
  USER: 'areggie',
  VSCODE_NLS_CONFIG: '{"locale":"en-us","osLocale":"en-us","availableLanguages":{},"_languagePackSupport":true}',
  VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
  XDG_SESSION_TYPE: 'x11',
  SHLVL: '1',
  XDG_CACHE_HOME: '/home/areggie/goinfre/.cache',
  CHROME_DESKTOP: 'codium-url-handler.desktop',
  HOME: '/home/areggie',
  OLDPWD: '/home/areggie/Desktop',
  DESKTOP_SESSION: 'ubuntu',
  VSCODE_IPC_HOOK: '/run/user/103124/vscode-2f6cc93e-1.90-main.sock',
  GTK_MODULES: 'gail:atk-bridge',
  XDG_SEAT_PATH: '/org/freedesktop/DisplayManager/Seat0',
  LC_MONETARY: 'de_DE.UTF-8',
  DBUS_SESSION_BUS_ADDRESS: 'unix:path=/run/user/103124/bus',
  SYSTEMD_EXEC_PID: '1168041',
  COLORTERM: 'truecolor',
  LIBVIRT_DEFAULT_URI: 'qemu:///system',
  VSCODE_CRASH_REPORTER_PROCESS_TYPE: 'extensionHost',
  IM_CONFIG_PHASE: '1',
  GTK_IM_MODULE: 'ibus',
  LOGNAME: 'areggie'
  ...
*/
console.log(process.env.PORT)//undefined, not initilized
console.log(process.env.NODE_ENV)
// 35:22

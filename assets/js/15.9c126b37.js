(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{384:function(e,t,n){"use strict";n.r(t);var o=n(26),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),n("h2",{attrs:{id:"quick-start"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),n("p",[e._v("Please go to the [CPU Architecture] folder and click NSudo.exe. Follow the\nprompts. For example, if you want to use 64-bit NSudo on your Intel or AMD\ndevice, you need to go to the x64 folder and click NSudoG.exe")]),e._v(" "),n("h2",{attrs:{id:"command-line"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command Line")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Format: NSudo [ Options and parameters ] Command line or ShortCut Command\n\nOptions:\n\n-U:[ Option ] Create a process with specified user option.\nAvailable options:\n    T TrustedInstaller\n    S System\n    C Current User\n    P Current Process\n    D Current Process (Drop right)\nPS: This is a mandatory parameter.\n\n-P:[ Option ] Create a process with specified privilege option. \nAvailable options:\n    E Enable All Privileges\n    D Disable All Privileges\nPS: If you want to use the default privileges to create a process, please do \nnot include the "-P" parameter.\n\n-M:[ Option ] Create a process with specified Integrity Level option.\nAvailable options:\n    S System\n    H High\n    M Medium\n    L Low\nPS: If you want to use the default Integrity Level to create a process, please \ndo not include the "-M" parameter.\n\n-Priority:[ Option ] Create a process with specified [rocess priority option.\nAvailable options:\n    Idle\n    BelowNormal\n    Normal\n    AboveNormal\n    High\n    RealTime\nPS: If you want to use the default Process Priority to create a process, please\ndo not include the "-Priority" parameter.\n\n-ShowWindowMode:[ Option ] Create a process with specified window mode option.\nAvailable options:\n    Show\n    Hide\n    Maximize\n    Minimize\nPS: If you want to use the default window mode to create a process, please do \nnot include the "-ShowWindowMode" parameter.\n\n-Wait Make NSudo wait for the created process to end before exiting.\nPS: If you don\'t want to wait, please do not include the "-Wait" parameter.\n\n-CurrentDirectory:[ DirectoryPath ] Set the current directory for the process.\nPS: If you want to use the NSudo\'s current directory, please do not include the\n"-CurrentDirectory" parameter.\n\n-UseCurrentConsole Create a process with the current console window.\nPS: If you want to create a process with the new console window, please do not \ninclude the "-UseCurrentConsole" parameter.\n\n-Version Show version information of NSudo.\n\n-? Show this content.\n-H Show this content.\n-Help Show this content.\n\nPlease use https://github.com/Thdub/NSudo_Installer for context menu management.\n\nPS:\n    1. All NSudo command arguments is case-insensitive.\n    2. You can use the "/" or "--" override "-" and use the "=" override ":" in\n       the command line parameters.  For example, "/U:T" and "-U=T" are \n       equivalent.\n    3. To ensure the best experience, NSudoC does not support context menu.\n\nExample:\n    If you want to run Command Prompt with TrustedInstaller, enable all \n    privileges and the default Integrity Level.\n        NSudo -U:T -P:E cmd\n')])])]),n("p",[e._v("Example：If you want to run Command Prompt with TrustedInstaller, enable all\nprivileges and the default Integrity Level:")]),e._v(" "),n("blockquote",[n("p",[e._v("NSudo -U:T -P:E cmd")])]),e._v(" "),n("p",[e._v("Starting from NSudo 5.0.1708.16, the command line nested quotes is supported.\nFor example:")]),e._v(" "),n("blockquote",[n("p",[e._v('NSudo -U:T cmd /c "dir "C:\\Program Files" & pause"')])]),e._v(" "),n("h2",{attrs:{id:"shortcut-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shortcut-list"}},[e._v("#")]),e._v(" Shortcut List")]),e._v(" "),n("p",[e._v("You can edit NSudo.json to custom the Shortcut list, here are the demo\n(NSudo.json in the NSudo.exe's folder):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "ShortCutList_V2": {\n\n    "Command Prompt": "cmd",\n    "PowerShell": "powershell",\n    "PowerShell ISE": "powershell_ise",\n    "Edit Hosts": "notepad %windir%\\\\System32\\\\Drivers\\\\etc\\\\hosts"\n  }\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
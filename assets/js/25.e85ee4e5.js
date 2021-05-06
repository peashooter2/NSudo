(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{396:function(n,e,t){"use strict";t.r(e);var r=t(26),s=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[n._v("#")]),n._v(" 使用方法")]),n._v(" "),t("h2",{attrs:{id:"快速入門"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速入門"}},[n._v("#")]),n._v(" 快速入門")]),n._v(" "),t("p",[n._v("請開啟【CPU 架構】目錄，然後按兩下 NSudo.exe. 根據提示操作即可。例如，如果你想\n在你的 Intel 或 AMD 設備上使用 64 位 NSudo，你首先需要開啟的是 x64 目錄，然後按兩\n下 NSudoG.exe。")]),n._v(" "),t("h2",{attrs:{id:"命令列選項"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令列選項"}},[n._v("#")]),n._v(" 命令列選項")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('格式: NSudo [ 選項與參數 ] 命令列執行或常用任務名\n\n選項:\n\n-U:[ 選項 ] 以指定使用者選項建立處理程序。\n可用選項：\n    T TrustedInstaller\n    S System\n    C 當前使用者\n    P 當前處理程序\n    D 當前處理程序 (降權)\nPS：這是一個必須被包含的參數。\n\n-P:[ 選項 ] 以指定特殊權限選項建立處理程序。\n可用選項：\n    E 啓用全部特殊權限\n    D 禁用所有特殊權限\nPS：如果想以默認特殊權限選項建立處理程序，請不要包含「-P」參數。\n\n-M:[ 選項 ] 以指定完整性選項建立處理程序。\n可用選項：\n    S 系統\n    H 高\n    M 中\n    L 低\nPS：如果想以默認完整性選項建立處理程序的話，請不要包含「-M」參數。\n\n-Priority:[ 選項 ] 以指定處理程序優先級選項建立處理程序。\n可用選項：\n    Idle 低\n    BelowNormal 低於正常\n    Normal 正常\n    AboveNormal 高於正常\n    High 高\n    RealTime 實時\nPS：如果想以默認處理序優先權選項建立處理程序，請不要包含「-Priority」參數。\n\n-ShowWindowMode:[ 選項 ] 以指定視窗模式選項建立處理程序。\n可用選項：\n    Show 顯示視窗\n    Hide 隱藏視窗\n    Maximize 最大化\n    Minimize 最小化\nPS：如果想以默認視窗模式選項建立處理程序的話，請不要包含「-ShowWindowMode」參\n數。\n\n-Wait 令 NSudo 等待建立的處理程序結束後再退出。\nPS：如果不想等待，請不要包含「-Wait」參數。\n\n-CurrentDirectory:[ 目錄路徑 ] 設置處理程序的的當前目錄。\nPS：如果你想用 NSudo 的當前目錄，請不要包含「-CurrentDirectory」參數。\n\n-UseCurrentConsole 使用當前控制台視窗建立處理程序。\nPS：如果你想在新控制台視窗建立處理程序，請不要包含「-UseCurrentConsole」參數。\n\n-Version 顯示 NSudo 版本資訊。\n\n-? 顯示該內容。\n-H 顯示該內容。\n-Help 顯示該內容。\n\n上下文清單管理請使用 https://github.com/Thdub/NSudo_Installer。\n\nPS：\n    1. 所有的NSudo命令列參數不區分大小寫。\n    1. 可以在命令行參數中使用 "/" 或 "--" 代替 "-" 和使用 "=" 代替 ":"。例如\n       "/U:T" 和 "-U=T" 是等價的。\n    1. 為了保證最佳體驗，NSudoC不支持上下文清單。\n\n例子：\n    以TrustedInstaller權限，啓用所有特殊權限，完整性默認執行命令提示字元\n        NSudo -U:T -P:E cmd\n')])])]),t("p",[n._v("例子：以 TrustedInstaller 權限，啓用所有特殊權限，完整性默認執行命令提示字元：")]),n._v(" "),t("blockquote",[t("p",[n._v("NSudo -U:T -P:E cmd")])]),n._v(" "),t("p",[n._v("從 NSudo 5.0.1708.16 開始命令列支持嵌套引號，例如：")]),n._v(" "),t("blockquote",[t("p",[n._v('NSudo -U:T cmd /c "dir "C:\\Program Files" & pause"')])]),n._v(" "),t("h2",{attrs:{id:"常用列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用列表"}},[n._v("#")]),n._v(" 常用列表")]),n._v(" "),t("p",[n._v("關於常用列表的自訂,可以使用記事本等工具編輯 NSudo.json。你可以照著示例的做法添\n加你的自訂項目：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n  "ShortCutList_V2": {\n    "命令提示字元": "cmd",\n    "PowerShell": "powershell",\n    "PowerShell ISE": "powershell_ise",\n    "Hosts編輯": "notepad %windir%\\\\System32\\\\Drivers\\\\etc\\\\hosts"\n  }\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);